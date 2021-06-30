import React from "react"

const paragraph = ({ children }) => (
  <p style={{ lineHeight: "1.7", maxWidth: "750px", margin: "30px auto" }}>
    {children}
  </p>
)
export default paragraph;