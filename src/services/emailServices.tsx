import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_6180j5e";
const TEMPLATE_ID = "template_xyrgm0v";
const PUBLIC_KEY = "s_7egKYGY7tVPPmMy";

/**
 * Sends email to customer (and Bcc to owner as configured in template)
 */
export async function sendEmailForm(form: HTMLFormElement) {
  try {
    const result = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form,
      PUBLIC_KEY
    );
    return result.text;
  } catch (error: any) {
    console.error("Email sending error:", error);
    throw new Error("❌ Failed to send email. Please try again later.");
  }
}
