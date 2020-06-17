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

        this.submitRef = React.createRef();
        this.optionRef1 = React.createRef();
        this.optionRef2 = React.createRef();
        this.optionRef3 = React.createRef();
        this.optionRef4 = React.createRef();

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
        this.submitRef.current.setAttribute("disabled", "disabled");
        this.optionRef1.current.setAttribute("disabled", "disabled");
        this.optionRef2.current.setAttribute("disabled", "disabled");
        this.optionRef3.current.setAttribute("disabled", "disabled");
        this.optionRef4.current.setAttribute("disabled", "disabled");
        
    }

    handleNext () {
        this.setState((state) => {
            return {current_q: state.current_q + 1, user_choice_check : false,
                submit_clicked : false};
          });
          this.submitRef.current.removeAttribute("disabled");
          this.optionRef1.current.removeAttribute("disabled");
          this.optionRef2.current.removeAttribute("disabled");
          this.optionRef3.current.removeAttribute("disabled");
          this.optionRef4.current.removeAttribute("disabled");
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
                <div className = "a1">
                    <button ref = {this.optionRef1} className="choicesbtn" onClick={() => this.handleChoice(0)}>
                    {questions_array[this.state.current_q]['choices'][0]}
                    </button>
                

                    <button ref = {this.optionRef2} className="choicesbtn" onClick={() => this.handleChoice(1)}>
                    {questions_array[this.state.current_q]['choices'][1]}
                    </button>
                </div>

                <div className = "a2">
                    <button ref = {this.optionRef3} className="choicesbtn" onClick={() => this.handleChoice(2)}>
                    {questions_array[this.state.current_q]['choices'][2]}
                    </button>

                    <button ref = {this.optionRef4} className="choicesbtn" onClick={() => this.handleChoice(3)}>
                    {questions_array[this.state.current_q]['choices'][3]}
                    </button>

                </div>
            </div>
            
        )
    }



    DisplaySubmit () {
        return (
            <div>
                <button ref = {this.submitRef} className="submit" onClick={() => this.handleSubmit()}>
                Submit Answer
                </button>
            </div>
        )
    }

    DisplayNext() {
        return (
            <div>
                <button className="submit" onClick={() => this.handleNext()}>
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
                        <h4>Correct!</h4>
                        <h4>Final Score: {this.state.score}</h4>
                    </div>
                )
            }
            else
            {
                this.state.score += 1
                return (
                <div className = "answer"> 
                    <h4>Correct!</h4>
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
                        <h4>Sorry, the correct answer is {questions_array[this.state.current_q]['answer']}</h4>
                        <h4>Final Score: {this.state.score}</h4>
                    </div>)
            }
            else
            {
                return (
                    <div className = "answer">
                        <h4>Sorry, the correct answer is {questions_array[this.state.current_q]['answer']}</h4>
                        <this.DisplayNext />
                    </div>)
            }
        }
    }




    render() {
        return <>
            <div>
                <div className = 'qArea'>
                     <p>Question {this.state.current_q + 1} :</p>
                    <this.DisplayQuestion />
                </div>
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

