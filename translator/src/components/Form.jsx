import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";


function Form(props) {
  const [english, setEnglish] = useState("");
  const [spanish, setSpanish] = useState("");
  const [italian, setItalian] = useState("");
  const [portuguese, setPortuguese] = useState("");
  const [image, setImage] = useState("");
  const params = useParams();
  
  useEffect(() => {

    if (params.id && props.verbs.length) {
      const verb = props.verbs.find((verb) => verb.id === params.id);
  
      if (verb) {
        // set the country to that record's country etc.
        setEnglish(verb.fields.english);
        setSpanish(verb.fields.spanish);
        setItalian(verb.fields.italian);
        setPortuguese(verb.fields.portuguese);
        setImage(verb.fields.image);
      }
    }
  }, [props.verbs, params.id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newVerb = {
      english,
      spanish,
      italian,
      portuguese,
      image,
    };
    if (params.id) {
      const specificURL = `${baseURL}/${params.id}`;
      await axios.post(specificURL, { fields: newVerb }, config);
    } 
    props.setToggleFetch((curr) => !curr);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="english">English: </label>
      <input
        type="text"
        id="english"
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
      />
      <button type="submit">Culture Me</button>
    </form>
  );
}
export default Form;