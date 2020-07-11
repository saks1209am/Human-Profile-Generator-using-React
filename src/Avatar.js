import React, { Component } from 'react'
import 'tachyons'
import './Avatar.css'
import Avatarlist from './Avatarlist'

class Avatar extends Component {

    constructor() {
        super();
        this.state = {
            name: "Welcome to Avatar World"
        }
    }
    namechange() {
        this.setState({
            name: "Give a like to my repo"
        })
    }

    render() {

        const avatarlistarray = [
            {
                id: 1,
                name: "Saksham",
                work: "Software Engineer"
            },
            {
                id: 2,
                name: "prashi",
                work: "Student"
            },
            {
                id: 3,
                name: "Ravi",
                work: "App Developer"
            },
            {
                id: 4,
                name: "Narayan",
                work: "Politician"
            }
        ]

        const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {
            return <Avatarlist key={i} id={avatarlistarray[i].name} name={avatarlistarray[i].name}
                work={avatarlistarray[i].work} />
        })

        return (<div className="homepage">
            <h1>{this.state.name}</h1>
            {arrayavatarcard}
            <button onClick={() => this.namechange()}>Subscribe</button>
        </div>

        )

    }
}

export default Avatar;