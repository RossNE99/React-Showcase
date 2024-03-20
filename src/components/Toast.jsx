import React from 'react'
import ContactMeIcon from "../assets/images/icons/contact-me.png"

function Toast({title, message}) {
  return (
    <div style={{opacity:100, position:"absolute", bottom:25, right:10}} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <img style={{maxWidth:20}} src={ContactMeIcon} className="rounded mr-2" alt="..."/>
        <strong className="mr-auto">{title}</strong>
        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body" style={{backgroundColor:"var(--trasparent-background)"}}>
        {message}
      </div>
    </div>
  )
}

export default Toast