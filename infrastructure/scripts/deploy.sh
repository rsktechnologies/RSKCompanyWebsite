#!/bin/bash
# Manual deployment script for RSK Technologies Group

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 Starting deployment for RSK Technologies Group${NC}"

# Configuration
BUCKET_NAME="rsk-technologies-frontend"
AWS_REGION="eu-north-1"
CLOUDFRONT_ID="${CLOUDFRONT_DISTRIBUTION_ID:-}"

# Build the project
echo -e "${BLUE}📦 Building project...${NC}"
npm run build

# Check if build succeeded
if [ ! -d "out" ]; then
    echo -e "${RED}❌ Build failed - out directory not found${NC}"
    exit 1
fi

# Sync to S3
echo -e "${BLUE}☁️  Syncing to S3...${NC}"
aws s3 sync out/ "s3://${BUCKET_NAME}/" \
    --region "${AWS_REGION}" \
    --delete \
    --cache-control "max-age=31536000,public" \
    --exclude "*.html" \
    --exclude "*.xml"

aws s3 sync out/ "s3://${BUCKET_NAME}/" \
    --region "${AWS_REGION}" \
    --delete \
    --cache-control "max-age=300,public" \
    --include "*.html" \
    --include "*.xml"

# Invalidate CloudFront if ID is provided
if [ -n "${CLOUDFRONT_ID}" ]; then
    echo -e "${BLUE}🔄 Invalidating CloudFront cache...${NC}"
    aws cloudfront create-invalidation \
        --distribution-id "${CLOUDFRONT_ID}" \
        --paths "/*" \
        --region "${AWS_REGION}"
fi

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${GREEN}🌐 Website: http://${BUCKET_NAME}.s3-website-${AWS_REGION}.amazonaws.com${NC}"