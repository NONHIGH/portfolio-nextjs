import React from 'react'

type Props = {
    hola: string
}

const Project : React.FC<Props> = ({hola}) => {
  return (
    <div>{hola}</div>
  )
}

export default Project