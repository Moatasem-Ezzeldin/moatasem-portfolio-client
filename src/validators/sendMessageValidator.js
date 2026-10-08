import * as yup from "yup";

const sendMessageValidator = () => {
  return yup.object({
    fullName: yup
      .string()
      .trim()
      .required("Full name is required")
      .min(3, "Full name must be between 3 and 50 characters")
      .max(50, "Full name must be between 3 and 50 characters"),

    email: yup
      .string()
      .trim()
      .required("Email is required")
      .email("Please provide a valid email address"),

    subject: yup
      .string()
      .trim()
      .required("Subject is required")
      .min(3, "Subject must be between 3 and 100 characters")
      .max(100, "Subject must be between 3 and 100 characters"),

    message: yup
      .string()
      .trim()
      .required("Message is required")
      .min(10, "Message must be between 10 and 2000 characters")
      .max(2000, "Message must be between 10 and 2000 characters"),
  });
};

export default sendMessageValidator;