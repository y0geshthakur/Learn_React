import React from 'react';

// Creating a functional component

// Way 1 : Using function keyword

// function Greet(){
//     return <h1>Hello Yogesh</h1>
// }

// Way 2 : Using arrow function (Recommended)

// const Greet = () => {
//     return (
//         <>
//             <h1>Hello Yogesh</h1>
//         </>
//     );
// }

// Destructuring props in function component

// Way 1 : Destructuring in the funtion argument

// const Greet = ({ name }) => {
//     return (
//         <>
//             <h1>Hello {name}</h1>
//         </>
//     );
// }

// Way 2 : Creating an object with the same reference as props

const Greet = (props) => {
    const { name } = props;
    return (
        <>
            <h1>Hello { name }</h1>
        </>
    );
}

export default Greet;