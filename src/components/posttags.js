import React from "react"

const PostTags = ({ tags }) => {
  return (
  <div>  
    <div className="flex flex-wrap text-sm text-gray-500 uppercase justify-start md:justify-end">
      <div className="pt-1">
      </div>
      {tags.map((tag,index) => (
        <div className="pl-2" key={index}>&nbsp;#{tag}</div>
      ))}
    </div>
  </div>
)}

export default PostTags