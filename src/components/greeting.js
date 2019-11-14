import React from 'react';

function Greeting(props) {
    console.log(props)
    return (
        <div>
            <h1>hallo {props.name}</h1>
        </div>
    )
}
export default Greeting;