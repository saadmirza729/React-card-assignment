import React from 'react'

const card = (props) => {
    console.log(props)
  return (
    <div className="card">
    <h1>{props.userName}</h1>
    <p>{props.description}</p>
    </div>
  )
}

export default card


// Props destructing

// import React from 'react'

// const card = ({userName, description}) => {
//   return (
//     <div className="card">
//     <h1>{userName}</h1>
//     <p>{description}</p>
//     </div>
//   )
// }

// export default card