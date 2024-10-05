import { useState } from "react";
import Broker from "./Broker";
import ConnectionLine from "./ConnectionLine";
import Publisher from "./Publisher";
import Subcriber from "./Subcriber";

const PublishSubcribe = () => {
  const [responseTime, setResponseTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseSent, setResponseSent] = useState(false);

  const handleRequest = () => {
    setLoading(true);
    setResponseTime(null);

    const simulatedRequestTime = Math.floor(Math.random() * 4000) + 1000;
    setTimeout(() => {
      setLoading(false);
      setResponseSent(true);
    }, simulatedRequestTime / 2);
    setTimeout(() => {
      setResponseTime(simulatedRequestTime);
      setResponseSent(false);
    }, simulatedRequestTime);
  };
  return (
    <div className="publish-subcribe">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Publisher duration={responseTime} loading={loading} />
          <ConnectionLine />
          <Broker loading={responseSent} duration={(responseTime * 5) / 10} />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <div style={{ display: "flex" }}>
              <ConnectionLine className="top" />
              <Subcriber />
            </div>
            <div style={{ display: "flex" }}>
              <ConnectionLine />
              <Subcriber />
            </div>
            <div style={{ display: "flex" }}>
              <ConnectionLine className="bottom" />
              <Subcriber />
            </div>
          </div>
        </div>
        <div style={{ width: 300 }}>
          <button onClick={handleRequest} disabled={loading}>
            Send Request
          </button>
          {responseTime && (
            <>
              <p>Subcriber 1 menerima data</p>
              <p>Subcriber 2 menerima data</p>
              <p>Subcriber 3 menerima data</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublishSubcribe;
