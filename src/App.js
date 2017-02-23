import React, {Component} from 'react';
import './App.css';

class StarsFrame extends Component {
    constructor (props, context) {
        super(props, context);
    }

    render () {
        var numberOfStarts = Math.floor(Math.random() * 9) + 1,
            stars = [];
        for (var i = 0; i < numberOfStarts; i++) {
            stars.push(
                <span className="glyphicon glyphicon-star"></span>
            )
        }

        return (
            <div id="stars-frame">
                <div className="well">
                    {stars}
                </div>

            </div>
        )
    }
}
;

class ButtonFrame extends Component {
    render () {
        return (
            <div id="button-frame">
                <button className="btn btn-primary btn-lg">=</button>
            </div>
        )
    }
}
;

class NumbersFrame extends Component {

    clickNumber (number, oNumber) {
        if (this.state.selectedNumbers.indexOf(number) !== -1) {
            return;
        };
        oNumber.target.className = "number clicked";
        this.setState(
            {
                selectedNumbers: this.state.selectedNumbers.concat(number)
            }
        );
        this.addNumber(number);
        debugger;

    }
    constructor (props) {
        super(props);
        this.state = {
            selectedNumbers: this.props.selectedNumbers
        }
        debugger;
        this.addNumber  = this.props.addNumber ;
        this.clickNumber = this.clickNumber.bind(this);
    }

    render () {
        var numbers = [];

        for (var i = 1; i <= 9; i++) {
            numbers.push(
                <div className="number" onClick={this.clickNumber.bind(null, i)}>{i}</div>
            )
        }
        return (
            <div id="numbers-frame">
                <div className="well">
                    {numbers}
                </div>
            </div>
        )
    }
}
;

class AnswerFrame extends Component {
    constructor (props) {
        super(props);

        this.state = {
            selectedNumbers: this.props.selectedNumbers
        }
        console.log(this.state.selectedNumbers);
    }
    render() {
        var selectedNumbers = this.state.selectedNumbers.map(function (i) {
            return (<span className="number">{i}</span>)
        });
        return (
            <div id="answer-frame">
                <div className="well">
                    {selectedNumbers}
                </div>
            </div>
        )
    }
};

class Game extends Component {

    constructor (props, context) {

    super(props, context);
        this.state = {
            selectedNumbers: [1,2]
        };
    }

    addSelectedNumber(number){
      console.log(this.state.selectedNumbers);
      this.state.selectedNumbers.push(number);
      this.setState(this.state);
    }
    render () {
        return (
            <div id="game">
                <h2>Play Nine</h2>
                <hr />
                <div className="clearfix">
                    <StarsFrame  selectedNumbers={this.state.selectedNumbers} />
                    <ButtonFrame selectedNumbers={this.state.selectedNumbers}  />
                    <AnswerFrame selectedNumbers={this.state.selectedNumbers}/>
                </div>
                <NumbersFrame selectedNumbers={this.state.selectedNumbers} addNumber={this.addSelectedNumber} />
                <div>{this.state.selectedNumbers} </div>
            </div>
        );
    }
}

export default Game;
