import React from 'react'
import { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log("EventListener => logMousePointer");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        // Equivalent to componentDidMount (Runs once after the initial render)
        console.log("useEffect");
        window.addEventListener('mousemove', logMousePosition)

        // Equivalent to componentWillUnmount (Runs when the component is unmounted)
        return (() => {
            window.removeEventListener('mousemove', logMousePosition);
        })
    }, []) // Empty dependency array ensures it runs only on mount and unmount
  return (
    <div>
      Mouse position is X:{x} and Y:{y}
    </div>
  )
}

export default HookMouse
