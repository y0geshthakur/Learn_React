import React, { useState } from 'react'
import HookMouse from './HookMouse';

function MouseContainer() {
    const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Mouse</button>
      {display && <HookMouse></HookMouse>}
    </div>
  )
}

export default MouseContainer
