import { useEffect, useState} from "react";
import axios from "axios";
import './App.css';
import { baseURL, config } from "./services";



function App() {
  const [verbs, setVerbs] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  
  useEffect(() => {
    const fetchVerbs = async () => {
      const resp = await axios.get(baseURL, config);
      setVerbs(resp.data.records);
    }
    fetchVerbs();
  }, [toggleFetch]);

  return (
    <div className="App">

    </div>

    
  );
}

export default App;
