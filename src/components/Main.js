import React, { Component } from 'react';

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading : true,
            data : null
        };
    }
    
    async componentDidMount() {
        const url = 'http://localhost:3000/api/getQuestion';
        const response = await fetch(url);
        this.data = await response.json();
        console.log(this.data);
    }

    displayQuestion () {
        return (
            this.data.description
        )
    }

    displayOptions () {
        return (
            this.data.options
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