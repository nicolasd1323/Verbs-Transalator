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
      await axios.put(specificURL, { fields: newVerb}, config);
    } else {
      await axios.post(baseURL, { fields: newVerb }, config);
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
      <label htmlFor="spanish">Spanish: </label>
      <input
        type="text"
        id="spanish"
        value={spanish}
        onChange={(e) => setSpanish(e.target.value)}
      />
      <label htmlFor="italian">Italian: </label>
      <input
        type="text"
        id="italian"
        value={italian}
        onChange={(e) => setItalian(e.target.value)}
      />
      <label htmlFor="portuguese">Portuguese: </label>
      <input
        type="text"
        id="portuguese"
        value={portuguese}
        onChange={(e) => setPortuguese(e.target.value)}
      />
      <label htmlFor="image">Url for Image: </label>
      <input
        type="url"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Culture Me</button>
    </form>
  );
}
export default Form;