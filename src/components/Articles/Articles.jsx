import React from 'react'

const Articles = ({img, title, children}) => {
  return (
    <div>
        {children}
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <button> Read Article </button>
    </div>
  )
}

export default Articles