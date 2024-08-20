import { UrlForm } from './UrlForm'
import { MetadataCard } from './MetadataCard'
import { ErrorList } from './ErrorList'
import { useState } from 'react'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export function UrlMetadataFetcher() {
  const [urls, setUrls] = useState(['', '', ''])
  const [metadata, setMetadata] = useState([])
  const [errors, setErrors] = useState([])


  // טיפול בשינוי כתובת האתר
  function handleUrlChange(index, value) {
    const newUrls = [...urls]
    newUrls[index] = value
    setUrls(newUrls)
  }

  // מוסיף שדה חדש
  function addUrlField() {
    setUrls([...urls, ''])
  }
    // מוחק שדה עד 3 אחרונים
  async function removeUrlField() {
    if (urls.length > 3) {
      setUrls(urls.slice(0, -1));
    } else {
      showErrorMsg('You cannot remove the URL field')
    }
  }
  
  // שולח בקשות לשרת
  async function fetchMetadata() {
    const fetchedMetadata = []
    const errorList = []

    for (const url of urls) {
      if (url.trim() === '') continue
      try {
        const response = await fetch('http://localhost:10000/fetch-metadata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ urls: [url] }),
        })

        const data = await response.json()
        if (response.ok && data) {
          fetchedMetadata.push(...data)
        } else {
          throw new Error('Invalid URL or unable to fetch metadata')
        }
      } catch (error) {
        errorList.push({ url, error: error.message })
      }
    }

    setMetadata(fetchedMetadata)
    setErrors(errorList)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetchMetadata()
    showSuccessMsg('Metadata fetched successfully!');

  }

  return (
    <div className="url-metadata-fetcher">
      <h1 className="header">URL Metadata Fetcher</h1>
      <UrlForm
        urls={urls}
        handleUrlChange={handleUrlChange}
        handleSubmit={handleSubmit}
      />

      <div className="buttons-container">
        <button className="url-button" onClick={addUrlField}>
          Add URL Field
        </button>
        <button className="url-button" onClick={removeUrlField}>
          Remove URL Field
        </button>
      </div>
      <div className="metadata-container">
        {metadata.map((meta, index) => (
          <MetadataCard key={index} meta={meta} />
        ))}
      </div>

      {errors.length > 0 && <ErrorList errors={errors} />}
    </div>
  )
}
