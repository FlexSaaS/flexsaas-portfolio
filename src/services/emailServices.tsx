import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_6180j5e";
const TEMPLATE_ID = "template_xyrgm0v";
const PUBLIC_KEY = "s_7egKYGY7tVPPmMy";

export function sendEmailForm(form: HTMLFormElement): Promise<string> {
  return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY).then(
    (result) => {
      return result.text;
    },
    (error) => {
      throw new Error(error.text);
    }
  );
}
