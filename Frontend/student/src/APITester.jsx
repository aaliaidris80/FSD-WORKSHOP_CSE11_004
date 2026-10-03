import { useState } from "react";
import axios from "axios";

function APITester() {
    const [method, setMethod] = useState("GET");
    const [url, setUrl] = useState("http://localhost:7000/user");
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [status, setStatus] = useState("");

    const sendRequest = async () => {
        try {
            let result;

            if (method === "GET") {
                result = await axios.get(url);
            }

            if (method === "POST") {
                result = await axios.post(url, JSON.parse(input));
            }

            if (method === "PUT") {
                result = await axios.put(url, JSON.parse(input));
            }

            setStatus(result.status);
            setResponse(JSON.stringify(result.data, null, 2));
        } catch (error) {
            setStatus("Error");

            if (error.response) {
                setResponse(
                    JSON.stringify(error.response.data, null, 2)
                );
            } else {
                setResponse(error.message);
            }
        }
    };

    return (
        <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
            <h1 style={{ textAlign: "center" }}>API Tester</h1>

            <div style={{ display: "flex", gap: "10px" }}>
                <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                </select>

                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    style={{ flex: 1 }}
                />

                <button onClick={sendRequest}>
                    Send Request
                </button>
            </div>

            <h3>Input</h3>

            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='For POST/PUT: {"id":103,"name":"ABC","dept":"Cse","classs":"Cse11"}'
                rows="8"
                style={{ width: "100%" }}
            />

            <h3>
                Status: {status}
            </h3>

            <h3>Response</h3>

            <pre
                style={{
                    background: "#111",
                    color: "white",
                    padding: "20px",
                    minHeight: "150px",
                    overflow: "auto",
                }}
            >
                {response}
            </pre>
        </div>
    );
}

export default APITester;