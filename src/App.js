import React, {Component} from 'react';
import './App.css';

var StarsFrame = React.createClass({
    render: function () {
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

});

var ButtonFrame = React.createClass({
    render: function () {
        return (
            <div id="button-frame">

                <button className="btn btn-primary btn-lg">=</button>

            </div>
        )
    }
});

var NumbersFrame = React.createClass({

    clickNumber(clickedNumber, oNumber) {
        oNumber.target.className = "number clicked";

        if (this.state.selectedNumbers.indexOf(clickedNumber) !== -1) {
            return;
        }

        this.setState(
            {
                selectedNumbers: this.state.selectedNumbers.concat(clickedNumber)
            }
        );
        debugger;

    },
    getInitialState: function () {
        return {
            selectedNumbers: []
        }
    },
    render: function () {
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
});

var AnswerFrame = React.createClass({
    getInitialState: function () {
        return {
            selectedNumbers: []
        }
    },
    render: function () {
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
});

class Game extends Component {

    constructor (props, context) {
        super(props, context);
        this.state = {
            selectedNumbers: []
        };
    }

    render () {
        return (
            <div id="game">
                <h2>Play Nine</h2>
                <hr />
                <div className="clearfix">
                    <StarsFrame />
                    <ButtonFrame selectedNumbers={this.selectedNumbers}/>
                    <AnswerFrame selectedNumbers={this.selectedNumbers}/>
                </div>
                <NumbersFrame />
            </div>
        );
    }
}

export default Game;
