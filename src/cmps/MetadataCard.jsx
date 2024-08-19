export function MetadataCard({ meta }) {
  return (
    <div className="metadata-card">
      <img src={meta.image}/>
      <h2>{meta.title}</h2>
      <p>{meta.description}</p>
    </div>
  )
}
