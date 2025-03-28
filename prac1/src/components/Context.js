import React from 'react'
import ContextC from './ContextC';

export const UserContext = React.createContext();
function Context() {
  return (
    <div>
      <UserContext.Provider value={'Yogesh'}>
        <ContextC></ContextC>
      </UserContext.Provider>
    </div>
  )
}

export default Context
