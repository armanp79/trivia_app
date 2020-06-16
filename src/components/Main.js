import React, { Component } from 'react';

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading : true
        };
    }
    
    async componentDidMount() {
        const url = 'http://localhost:3000/api/getQuestion';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    displayQuestion () {
        return (
            data.description
        )
    }

    displayOptions () {
        return (
            data.options
        )
    }

    render() {
        return <>
            <div>
                <displayQuestion />
                <displayOptions />
            </div>
        </>
    }
}

export default Main;