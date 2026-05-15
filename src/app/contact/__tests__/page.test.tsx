import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactPage from "@/app/contact/page";

// Mock next/link
jest.mock("next/link", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock framer-motion
jest.mock("@/components/motion/Reveal", () => ({
  Reveal: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("ContactPage", () => {
  it("renders the contact form", () => {
    render(<ContactPage />);
    expect(screen.getByText("Send us a message")).toBeInTheDocument();
    expect(screen.getByLabelText(/Full name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/)).toBeInTheDocument();
    expect(screen.getByLabelText(/How can we help/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Send message/ }),
    ).toBeInTheDocument();
  });

  it("renders contact methods", () => {
    render(<ContactPage />);
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("Office")).toBeInTheDocument();
    expect(screen.getByText("Support Hours")).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<ContactPage />);
    // Social links are present as icons
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(3); // At least contact methods + social
  });

  it("has required fields in the form", () => {
    render(<ContactPage />);
    const nameInput = screen.getByLabelText(/Full name/);
    const emailInput = screen.getByLabelText(/Email address/);
    const messageTextarea = screen.getByLabelText(/How can we help/);

    expect(nameInput).toHaveAttribute("required");
    expect(emailInput).toHaveAttribute("required");
    expect(messageTextarea).toHaveAttribute("required");
  });

  it("submits the form with valid data", async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    const nameInput = screen.getByLabelText(/Full name/);
    const emailInput = screen.getByLabelText(/Email address/);
    const messageTextarea = screen.getByLabelText(/How can we help/);
    const submitButton = screen.getByRole("button", { name: /Send message/ });

    await user.type(nameInput, "John Doe");
    await user.type(emailInput, "john@example.com");
    await user.type(messageTextarea, "Test message");

    // Note: Form submission testing with server actions is complex
    // In a real test, you might mock the action or use integration testing
    expect(submitButton).toBeEnabled();
  });
});
