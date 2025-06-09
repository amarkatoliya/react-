import { useEffect, useState } from "react";
import { useSpecialChai } from "./useSpecialChai.js";
import { chaiMenu } from "./Allchai.js";

export function App() {
  const { chai, loading, error } = useSpecialChai();
  const [message, setMessage] = useState(3);

  useEffect(() => {
    fetch(`/api`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to Load Data"));
  });

  if (loading) <h4>Loading....</h4>;
  if (error) <h4>error</h4>;
  return (
    <div>
      <h1> Hi There, this is my first Code with Vite in React</h1>
      <h2>{message}</h2>
      <chaiMenu />
      <h3>{chai.name}</h3> // server file is needed in code
    </div>
  );
}
