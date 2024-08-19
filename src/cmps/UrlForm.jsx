export function UrlForm({ urls, handleUrlChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      {urls.map((url, index) => (
        <input
          key={index}
          type="text"
          value={url}
          placeholder={`Enter URL ${index + 1}`}
          onChange={(e) => handleUrlChange(index, e.target.value)}
          required
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}
