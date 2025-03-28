import React, { useContext } from 'react'
import { UserContext } from './Context'
function ContextC() {
    const user = useContext(UserContext);
  return (
    <div>
      {user}
    </div>
  )
}

export default ContextC
