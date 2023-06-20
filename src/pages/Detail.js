import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail(props) {
  const param = useParams()
  return (
    <div>{param.id}</div>
  )
}
