import FlagsDisplayer from "./components/FlagsDisplayer";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [fetchedData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");
        if (!response.ok) {
          throw new Error("Error");
        }

        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {fetchedData && (
        <div>
          <h1>Data:</h1>
          <button onClick={() => console.log(fetchedData)}>Data</button>

          <FlagsDisplayer data={fetchedData} />
        </div>
      )}
    </div>
  );
}

export default App;
