function Verb(props) {
  // same as const country = props.destination.fields.country;
  const { english, spanish, italian, portuguese, image } = props.verb.fields;
  return (
    <div>
      <h2>English: {english}</h2>
      <h3>Spanish: {spanish}</h3>
      <h3>Italian: {italian}</h3>
      <h3>Portuguese: {portuguese}</h3>
      <img src={image}/>
    </div>
  )
}
export default Verb;