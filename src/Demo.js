import React, { Component } from 'react'
import ReactDOM from 'react-dom'


const Demo = ({ name }) => {
    return < div className="myClass" > {/*JSX Code*/}
        < h1 > Hello {name}</h1 > {/*this is what we call as virtual DOM name is paased as props*/}
        < p > Welcome to my app:)</p >
    </div >

}


export default Demo 