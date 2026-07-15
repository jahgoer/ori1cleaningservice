exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // Basic validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" })
      };
    }

    // Zoho Mail API endpoint
    const url = "https://mail.zoho.eu/api/v1/sendmail";

    // Build email payload
    const payload = {
      from: process.env.ZOHO_SENDER_EMAIL,
      to: process.env.ZOHO_RECEIVER_EMAIL,
      subject: `New message from ${name}`,
      content: message,
    };

    // Send email via Zoho API
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Zoho error:", errorText);

      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Email configuration error" })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" })
    };
  }
};
