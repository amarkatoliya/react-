import { useEffect, useState } from "react";

export function useSpecialChai() {
  const [chai, setChai] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/special-chai")
      .then((res) => {
        if (!res.ok) {
          throw new Error("failed to fetch api request");
        }
        return res.json();
      })
      .then((data) => {
        setChai(data);
        setLoading(false);
      })
      .finally((err) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { chai, loading, error };
}
