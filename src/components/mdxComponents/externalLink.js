import React from "react"

const externalLink = (props) => {
  // for use with internal links
  // comment out for now
  // if (props.href.includes("adamgoth.com") || props.href[0] === "/") {
  //   return <a href={props.href}>{props.children}</a>
  // }
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>
      {props.children}
    </a>
  )
}

export default externalLink; 