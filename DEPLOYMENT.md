# Deploying RSK Company Website to rsktech.net

This site is a **static Next.js export** deployed to **AWS S3 + CloudFront**. Pushes to GitHub automatically build and publish updates.

**Domain:** [rsktech.net](https://rsktech.net) (Namecheap)  
**AWS account:** `rskssesanga` (`229378727305`)  
**IAM user:** `arthur` (use access keys for GitHub Actions, not your console password)

---

## Architecture

```
GitHub (main branch) → GitHub Actions → S3 bucket → CloudFront → rsktech.net
                              ↑
                        Namecheap DNS
```

| Resource | Value |
|----------|--------|
| Production S3 bucket | `rsk-technologies-frontend` |
| Staging S3 bucket | `rsk-technologies-staging` |
| S3 region | `eu-north-1` (Stockholm) |
| ACM certificate region | `us-east-1` (required for CloudFront) |

---

## One-time setup

### 1. Fix local build (already done in repo)

The contact form uses a client component (no Server Actions) so `npm run build` works with static export.

Add your logo before go-live:

```text
public/brand/logo.jpeg
```

### 2. AWS — S3 + CloudFront

**Option A — Terraform** (recommended if you use IaC):

```bash
cd infrastructure/terraform
terraform init
terraform apply
```

**Option B — Console**

1. **S3** → Create bucket `rsk-technologies-frontend` in `eu-north-1`
2. Enable **Static website hosting** (index: `index.html`)
3. Add bucket policy for public read on objects
4. **CloudFront** → Create distribution with S3 website endpoint as origin

### 3. AWS — HTTPS certificate (us-east-1 only)

CloudFront custom domains need a certificate in **N. Virginia (`us-east-1`)**, not Stockholm.

1. Switch region to **US East (N. Virginia)** in the console
2. **Certificate Manager** → Request public certificate
3. Domains: `rsktech.net` and `www.rsktech.net`
4. Validation: **DNS**
5. Add the CNAME records ACM shows into Namecheap (see step 5)
6. Wait until status is **Issued**

### 4. CloudFront — attach rsktech.net

1. Edit your distribution
2. **Alternate domain names:** `rsktech.net`, `www.rsktech.net`
3. **Custom SSL certificate:** select the ACM cert from `us-east-1`
4. **Default root object:** `index.html`
5. **Custom error response:** HTTP 404 → `/index.html` with response code **200** (SPA routing)
6. Save and note:
   - **Distribution domain:** e.g. `dxxxxxxxx.cloudfront.net`
   - **Distribution ID:** e.g. `E1ABC2DEF3GHI` (needed for GitHub)

### 5. IAM — deploy permissions for GitHub

Your IAM user `arthur` needs programmatic access for CI:

1. **IAM** → Users → `arthur` → **Security credentials**
2. Create **Access key** (use case: “Application running outside AWS”)
3. Attach a policy allowing S3 sync + CloudFront invalidation on your buckets (see `infrastructure/terraform` or the policy in the main deployment guide)

Store the key ID and secret securely — you will add them to GitHub, not commit them.

### 6. GitHub — connect auto-deploy

1. Push this repo to GitHub
2. **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

| Secret | Description |
|--------|-------------|
| `AWS_ACCESS_KEY_ID` | From IAM user `arthur` |
| `AWS_SECRET_ACCESS_KEY` | From IAM user `arthur` |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID |
| `AWS_SESSION_TOKEN` | Optional; required when using temporary AWS credentials |

Use a current access key pair from IAM user `arthur`. Do not paste the key ID,
secret, or session token with quotes or extra spaces. If the key was created as
temporary credentials, add all three values, including `AWS_SESSION_TOKEN`.
If the key has been revoked or expired, create a new access key and update the
GitHub Actions secrets. Repository secrets must be added under **Settings ->
Secrets and variables -> Actions**; production environment secrets can instead
be added under **Settings -> Environments -> production**.

3. Enable **Actions** on the repo
4. Push to `main` → workflow `.github/workflows/deploy.yml` builds and deploys

**Branches:**

| Branch | Deploy target |
|--------|----------------|
| `main` | Production → `rsk-technologies-frontend` |
| `staging` | Staging bucket (preview) |

### 7. Namecheap DNS for rsktech.net

**Domain List** → `rsktech.net` → **Advanced DNS**

**A. ACM validation** (while certificate is pending)

Add each CNAME record ACM provides (name + value). Wait until the certificate is **Issued**.

**B. Point site to CloudFront**

| Type | Host | Value |
|------|------|--------|
| CNAME | `www` | `dxxxxxxxx.cloudfront.net` |

**Apex (`rsktech.net`):** Namecheap cannot CNAME the bare root to CloudFront directly. Pick one:

- **Simple:** Namecheap **URL Redirect** — `rsktech.net` → `https://www.rsktech.net`
- **Advanced:** Move DNS to Route 53 or use Cloudflare (ALIAS to CloudFront)

Remove old parking/forwarding records that conflict.

DNS may take 15 minutes to a few hours.

---

## Day-to-day workflow

```bash
# Local check
npm run build
npm run test

# Publish changes
git add .
git commit -m "Your message"
git push origin main
```

Within a few minutes, GitHub Actions deploys to S3 and invalidates CloudFront. Visit `https://www.rsktech.net` (or your apex URL) to verify.

---

## Contact form (optional upgrade)

By default, submit opens the visitor’s email app (`mailto:rsktechgroup@gmail.com`).

For in-browser submission without a backend, use [Formspree](https://formspree.io) or similar:

1. Create a form → copy the POST URL
2. Add a GitHub Actions **variable** or build-time env: `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/xxxxx`
3. Rebuild and deploy

---

## Manual deploy (without GitHub)

```bash
npm run build
# Requires AWS CLI configured for user arthur
export CLOUDFRONT_DISTRIBUTION_ID=E1234567890ABC
bash infrastructure/scripts/deploy.sh
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| GitHub Action build fails | Run `npm run build` locally; check logs |
| Site shows old content | Confirm `CLOUDFRONT_DISTRIBUTION_ID` secret; invalidation runs on deploy |
| Certificate stuck | Verify ACM CNAME records in Namecheap |
| 403 / access denied on S3 | Bucket policy + public access settings |
| Logo broken | Add `public/brand/logo.jpeg` |
| `www` works, apex does not | Set up redirect or Route 53 alias |

---

## Checklist before go-live

- [ ] `npm run build` passes locally
- [ ] `public/brand/logo.jpeg` exists
- [ ] S3 + CloudFront created
- [ ] ACM cert issued in `us-east-1`
- [ ] CloudFront aliases: `rsktech.net`, `www.rsktech.net`
- [ ] GitHub secrets set (`AWS_*`, `CLOUDFRONT_DISTRIBUTION_ID`)
- [ ] Namecheap DNS points to CloudFront
- [ ] Push to `main` → Actions green → site loads on HTTPS
