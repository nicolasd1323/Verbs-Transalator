import { useParams } from "react-router-dom"



function Study(props) {

  const params = useParams();
  const verb = props.verbs.find((verb) => verb.fields.english === params.verb)
 console.log(props.verbs)
  if (!verb) {
    return (
      <h2>
        Not here
      </h2>
    )
  }
  
  
  return (
    <div className="oneVerb">
<img src={verb.fields.image} />
<h2>English: {verb.fields.english}</h2>  
<h3>Spanish: {verb.fields.spanish} </h3>
<h3>Portuguese: {verb.fields.portuguese}</h3>
<h3>Italian:{verb.fields.italian}</h3>

      
  </div>

)

}
export default Study;