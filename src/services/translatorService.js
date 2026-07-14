import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/translator/text`;

export const translateText = async (text, targetLanguage) => {
  try {

    
    const response = await axios.post(
      API_URL,
      {
        from: "auto",
        to: targetLanguage,
        text: text,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
          "x-rapidapi-host": import.meta.env.VITE_RAPID_API_HOST,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Translation Error:", error);
    throw error;
  }
};