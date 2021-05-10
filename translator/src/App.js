import { useEffect, useState} from "react";
import axios from "axios";
import './App.css';
import { baseURL, config } from "./services";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import Form from "./components/Form";
import Verb from "./components/Verb";




function App() {
  const [verbs, setVerbs] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    const fetchVerbs = async () => {
      const resp = await axios.get(baseURL, config);
      setVerbs(resp.data.records);
    }
    fetchVerbs();
  }, [toggleFetch]);
  
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
      <main>
          {verbs.map((verb) => (
            <Verb verb={verb} setToggleFetch={setToggleFetch} />
          ))}
        </main>
      </Route>
      <Route path="/culture us">
      <Form verbs={verbs}  
        setToggleFetch={setToggleFetch} />
      </Route>
    </div>

    
  );
}

export default App;
