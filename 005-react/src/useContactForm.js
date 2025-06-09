import { useEffect, useState } from "react";

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [successmessage, setSuccessmessage] = useState(null);
  const [errormessage, setErrormessage] = useState(null);

  const submitContact = async (FormData) => {
    setLoading(true);
    setErrormessage(null);
    setSuccessmessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "aplication/json",
        },
        body: JSON.stringify(FormData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "data is not fetched");
      setSuccessmessage(data.message || "success message is sent");
    } catch (error) {
      setErrormessage(error.message || "error in data");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    successmessage,
    errormessage,
    submitContact,
  };
}
