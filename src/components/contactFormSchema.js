import * as Yup from "yup";

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

export const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Max 50 characters ")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(50, "Max 50 characters ")
      .required("Number is required")
      .matches(phoneRegExp, "Number format is 'xxx-xx-xx'"),
  });