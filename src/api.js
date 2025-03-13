const API_BASE_URL = "https://hospital-website-v1-1.onrender.com" || "http://localhost:5000"; // ✅ Local Backend URLconst API_BASE_URL = process.env.REACT_APP_API_URL || "https://hospital-website-v1-1.onrender.com";

// Function to create an appointment
export const createAppointment = async (appointmentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating appointment:", error);
    throw error;
  }
};

// Function to submit the contact form
export const submitContactForm = async (contactData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

export default API_BASE_URL;
