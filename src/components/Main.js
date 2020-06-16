import React, { Component } from 'react';
import questions_array from '../questions'
import './Main.css'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total_q : questions_array.length,
            current_q : 0,
            score : 0,
            user_choice : null,
            user_choice_check : false,
            submit_clicked : false
        };
        this.DisplayQuestion = this.DisplayQuestion.bind(this)
        this.DisplayOptions = this.DisplayOptions.bind(this)
        this.DisplaySubmit = this.DisplaySubmit.bind(this)
        this.DisplayAnswer = this.DisplayAnswer.bind(this)
        this.DisplayNext = this.DisplayNext.bind(this)
        
        this.handleChoice = this.handleChoice.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNext = this.handleNext.bind(this)
        
    }
    
    /*
    async componentDidMount() {
        const url = 'http://localhost:3000/api/getQuestion';
        const response = await fetch(url);
        this.data = await response.json();
        console.log(this.data);
    }
    */

    handleChoice(props) {
        this.setState({user_choice_check : true})
        this.state.user_choice = props
    }



    handleSubmit () {
        this.setState({submit_clicked : true})
    }

    handleNext () {
        this.setState((state) => {
            return {current_q: state.current_q + 1, user_choice_check : false,
                submit_clicked : false};
          });
    }





    DisplayQuestion () {
        return (
            <div className = "question">
                {questions_array[this.state.current_q]['question']}
            </div>
        )
    }

    DisplayOptions () {
        return (
            <div>
                <button className="answer1" onClick={() => this.handleChoice(0)}>
                {questions_array[this.state.current_q]['choices'][0]}
                </button>

                <button className="answer2" onClick={() => this.handleChoice(1)}>
                {questions_array[this.state.current_q]['choices'][1]}
                </button>

                <button className="answer1" onClick={() => this.handleChoice(2)}>
                {questions_array[this.state.current_q]['choices'][2]}
                </button>

                <button className="answer2" onClick={() => this.handleChoice(3)}>
                {questions_array[this.state.current_q]['choices'][3]}
                </button>

            </div>
            
        )
    }



    DisplaySubmit () {
        return (
            <div>
                <button className="submit" onClick={() => this.handleSubmit()}>
                Submit Answer
                </button>
            </div>
        )
    }

    DisplayNext() {
        return (
            <div>
                <button className="next" onClick={() => this.handleNext()}>
                Next Question
                </button>
            </div>
        )
    }

    DisplayAnswer () {
        if (this.state.submit_clicked === false)
        {
            return ( <div></div> )
        }
        else if (questions_array[this.state.current_q]['choices'][this.state.user_choice] === questions_array[this.state.current_q]['answer'])
        {
            if (this.state.current_q === this.state.total_q - 1)
            {
                this.state.score += 1
                return (
                    <div className = "answer">
                        Correct!
                        Final Score: {this.state.score}
                    </div>
                )
            }
            else
            {
                this.state.score += 1
                return (
                <div className = "answer"> 
                    Correct!
                    <this.DisplayNext />
                </div>)
            }
        }
        else
        {
            if (this.state.current_q === this.state.total_q - 1)
            {
                return (
                    <div className = "answer">
                        Sorry, the correct answer is {questions_array[this.state.current_q]['answer']}
                        Final Score: {this.state.score}
                    </div>)
            }
            else
            {
                return (
                    <div className = "answer">
                        Sorry, the correct answer is {questions_array[this.state.current_q]['answer']}
                        <this.DisplayNext />
                    </div>)
            }
        }
    }




    render() {
        return <>
            <div>
                <this.DisplayQuestion />
                <this.DisplayOptions />

                {this.state.user_choice_check ? <div> <this.DisplaySubmit /></div> : <div></div> }
                <this.DisplayAnswer />
                
                <div className = "advLogo">
                        <img className = "logo" src = "http://13.57.47.139/adventure-logo.png"/>
                </div>    
            </div>
        </>
    }
}

export default Main;

