import {SignUpFormData} from './types/general'

export const submitSignUpForm = async (url: string, data: SignUpFormData) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to submit form");
    }
    console.log("Form submitted successfully");
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}

export default submitSignUpForm;
