import axios from "axios";

interface LeadData {
  full_name: string;
  email: string;
  phone?: string;
  company: string;
  services: string[];
  message: string;
}

export const sendLeadToMake = async (leadData: LeadData) => {
  const webhookUrl =
    "https://hook.us2.make.com/lgheypnv6q402ppw2f61o6u72qhbta2u";

  try {
    await axios.post(webhookUrl, {
      full_name: leadData.full_name,
      email: leadData.email,
      phone: leadData.phone || "N/A",
      company: leadData.company || "N/A",
      message: leadData.message,
      services: leadData.services || [],
    });

    console.log("Lead sent successfully!");
  } catch (error) {
    console.error("Failed to send lead:", error);
  }
};
