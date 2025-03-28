import React from 'react'
import { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log("Updating title");
        document.title = `You clicked ${count} times`;
    }, [count])
  return (
    <div>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => setCount(count + 1)}>Clicked {count} Times</button>
    </div>
  )
}

export default HookCounterOne
