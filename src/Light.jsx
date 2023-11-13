import './light.css'


export function Light({color, opacity}) {

    return (
      <>
  
     <div style={{backgroundColor: color, opacity: opacity}} className="light">
     </div>
  
      </>
    )
  }