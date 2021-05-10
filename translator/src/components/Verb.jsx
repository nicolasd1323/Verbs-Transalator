import axios from "axios";
import { baseURL, config } from "../services";

function Verb(props) {


  const deleteVerb = async () => {
    const specificURL = `${baseURL}/${props.verb.id}`
    await axios.delete(specificURL, config);
    props.setToggleFetch((curr) => !curr);
  }
  const { english, spanish, italian, portuguese, image } = props.verb.fields;
  return (
    <div className="oneVerb"> 
    <table border={4} cellPadding={8}>
      <img src={image} />
      <h2>English: {english}</h2>
      <h3>Spanish: {spanish}</h3>
      <h3>Italian: {italian}</h3>
      <h3>Portuguese: {portuguese}</h3>
      <button onClick={deleteVerb}>Incorrect</button>
        </table>
    </div>
 
    
    )
    
}
export default Verb;
