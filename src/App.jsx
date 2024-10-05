import { useState } from "react";
import "./App.css";
import RequestResponse from "./components/RequestResponse";
import PublishSubcribe from "./components/PublishSubcribe";

function App() {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="App">
        {activeTab === "tab1" && <h1>Request-Response</h1>}
        {activeTab === "tab2" && <h1>Publish-Subcribe</h1>}
        <div className="tabs">
          <button
            className={activeTab === "tab1" ? "active" : ""}
            onClick={() => handleTabClick("tab1")}
          >
            Request-Response
          </button>
          <button
            className={activeTab === "tab2" ? "active" : ""}
            onClick={() => handleTabClick("tab2")}
          >
            Publish-Subcribe
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "tab1" && <RequestResponse />}
          {activeTab === "tab2" && <PublishSubcribe />}
        </div>
      </div>
    </>
  );
}

export default App;
