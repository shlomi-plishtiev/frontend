import React from 'react'

export function MetadataCard({ meta }) {
  return (
    <div className="metadata-card">
      <img src={meta.image} alt={`Image for ${meta.title}`} />
      <h2>{meta.title}</h2>
      <p>{meta.description}</p>
    </div>
  )
}
