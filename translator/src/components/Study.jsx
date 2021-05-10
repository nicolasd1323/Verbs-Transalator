import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";


function Study(props) {

  const params = useParams();
  const verb = props.verbs.find((verb) => verb.english === params.english)
  // console.log(birds)
  if (!verb) {
    return (
      <h2>
        Nothing here
      </h2>
    )
  }
  
  return (
    <div className="oneVerb">
    <Link to="/">Romantic Verbs</Link>
      <table border={4} cellPadding={8}>
      <img src={verb.image} />
      <h2>English: {verb.english}</h2>
      <h3>Spanish: {verb.spanish}</h3>
      <h3>Italian: {verb.italian}</h3>
      <h3>Portuguese: {verb.portuguese}</h3>
    </table>
  </div>

)

}
export default Study;