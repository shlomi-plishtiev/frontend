export function ErrorList({ errors }) {
  return (
    <div className="error-container">
      <h3>Errors:</h3>
      {errors.map((error, index) => (
        <p key={index}>{`URL: ${error.url} - Error: ${error.error}`}</p>
      ))}
    </div>
  )
}
