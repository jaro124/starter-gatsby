import * as React from "react"

const Footer = ({ siteTitle }) => {
    return (
      <footer className="bg-blue-300">
 
        <div className="w-full text-center p-8 text-primary">
        © {new Date().getFullYear()}, made by {siteTitle}
        </div>  

    </footer>
    )
  }
  
  export default Footer