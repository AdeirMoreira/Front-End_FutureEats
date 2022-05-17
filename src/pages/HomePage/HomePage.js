import React, { useContext } from 'react'
import { FutureEats } from '../../globalState/Context'

export default function HomePage() {
  const propiedade2 = useContext(FutureEats)
  console.log(propiedade2)
  return (
    <div>HomePage</div>
  )
}
