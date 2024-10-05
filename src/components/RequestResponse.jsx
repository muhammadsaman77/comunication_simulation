import { useState } from "react";
import Client from "./Client";
import Internet from "./Internet";
import Server from "./Server";
import ConnectionLine from "./ConnectionLine";

const RequestResponse = () => {
  const [responseTime, setResponseTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseSent, setResponseSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRequest = () => {
    setLoading(true);
    setErrorMessage("");
    setResponseTime(null);

    const simulatedRequestTime = Math.floor(Math.random() * 3000) + 1000;
    setTimeout(() => {
      setResponseSent(true);
      setLoading(false);
    }, simulatedRequestTime / 2);
    setTimeout(() => {
      const isError = Math.random() < 0.2; // 20% kemungkinan error

      if (isError) {
        setErrorMessage("Server Error: Unable to fetch data");
      } else {
        setResponseTime(simulatedRequestTime);
      }
      setResponseSent(false);
    }, simulatedRequestTime);
  };

  return (
    <div className="request-response" style={{ width: 750 }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Client loading={loading} duration={(responseTime * 4) / 10} />
        <ConnectionLine />
        <Internet />
        <ConnectionLine />
        <Server loading={responseSent} duration={(responseTime * 5) / 10} />
      </div>
      <button onClick={handleRequest} disabled={loading}>
        Send Request
      </button>
      {responseTime && <p>Response Time: {responseTime} ms</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default RequestResponse;
