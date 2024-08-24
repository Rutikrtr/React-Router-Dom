import React from 'react'
import {useParams} from 'react-router-dom'
const User = () => {
    const params = useParams();
  return (
    <div>Your Name is {params.username}</div>
  )
}

export default User