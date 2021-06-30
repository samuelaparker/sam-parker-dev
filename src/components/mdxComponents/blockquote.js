import React from "react"

 const blockquote = ({ children }) => (
  <blockquote
    style={{
      borderLeft: "4px solid #DDD",
      padding: "0 15px",
      marginInlineStart: "auto",
      marginInlineEnd: "auto",
    }}
  >
    {children}
  </blockquote>
)

export default blockquote;