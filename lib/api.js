export const sendContactForm = async (data) =>
  fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: data,
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to send message");
    } else {
      return res.json();
    }
  });
