import React from 'react'

export default function Button({ children, backgroundColor = "green" }) {
  return (
    <button style={{ backgroundColor }}>{children}</button>
  )
}
