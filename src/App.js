import React, {Component} from 'react';
import './App.css';

class StarsFrame extends Component {
    constructor (props, context) {
        super(props, context);
        this.state={
          numberOfStars: this.props.numberOfStars
        };
    }


    render () {
        var numberOfStars = this.props.numberOfStars,
            stars = [];
        for (var i = 0; i < numberOfStars; i++) {
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
      this.refresh = this.props.getNewNumber;
        return (
            <div id="button-frame">
                <button className="btn btn-primary btn-lg g glyphicon glyphicon-arrow-right"></button>
                <button className="btn btn-primary btn-lg glyphicon glyphicon-refresh" onClick={this.refresh}></button>
                <div>{this.props.numberRefreshes}</div>
            </div>
        )
    }
}
;

class NumbersFrame extends Component {

    myclickNumber (number, oNumber) {
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


    }
    constructor (props) {
        super(props);
        this.state = {
            selectedNumbers: this.props.selectedNumbers
        }


        //this.clickNumber = this.clickNumber.bind(this);
    //    this.clickNumber = this.props.clickNumber;
    }

    render () {
        var numbers = [],
        clickNumber = this.props.clickNumber;
        for (var i = 1; i <= 9; i++) {
            numbers.push(
                <div className="number" onClick={clickNumber.bind(null, i)}>{i}</div>
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
        var selectedNumbers = this.props.selectedNumbers.map(function (i) {
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
            selectedNumbers: [],
            iam:'Game'
        };
        this.state.numberOfStars =   Math.floor(Math.random() * 9) + 1;
        this.state.numberRefreshes =5;
        this.state.score = 0;
        this.doneNumbers=[];
    }

    calcSum(){
      var
        n= this.state.selectedNumbers.length,
        sum =0;
      for (var i=0; i< n; i++){
        sum = sum + this.state.selectedNumbers[i];
      }
      return sum;
    }
    getNewNumber(gameRefresh){
      if (this.state.numberRefreshes ===0){
          alert('You Lost :)');
        return;
      }
      var newNumber =0;
      newNumber = Math.floor(Math.random() * 9) + 1;
      while (newNumber === this.state.numberOfStars){
        newNumber = Math.floor(Math.random() * 9) + 1;
      }
      this.doneNumbers.push(newNumber);
      var n=  gameRefresh === true? this.state.numberRefreshes:this.state.numberRefreshes-1;

      this.setState(
        {
          numberOfStars:newNumber,
          selectedNumbers:[],
          numberRefreshes : n
        })

    }
    clickNumber(number,oNumber){
      console.log(this.state.selectedNumbers);
      if (this.state.selectedNumbers.indexOf(number) !== -1){
        return;
      }
      oNumber.target.className = "number clicked";
      this.setState(
        {
          selectedNumbers:this.state.selectedNumbers.concat(number)
        },function(){
          if (this.calcSum() === this.state.numberOfStars){
            this.setState({
                score: this.state.score+1
            });
            if (this.state.selectedNumbers.length === 9){
              alert('You Won :)');
              return;
            }
            this.getNewNumber(true);
          }
        }
      );
  }
    render () {
      this.clickNumber = this.clickNumber.bind(this);
      this.getNewNumber = this.getNewNumber.bind(this);
        return (
            <div id="game">
                <h2>Play Nine</h2>
                <hr />
                <div className="clearfix">
                    <StarsFrame numberOfStars={this.state.numberOfStars}/>
                    <ButtonFrame getNewNumber={this.getNewNumber} numberRefreshes={this.state.numberRefreshes}/>
                    <AnswerFrame selectedNumbers={this.state.selectedNumbers}/>
                </div>
                <NumbersFrame selectedNumbers={this.state.selectedNumbers} clickNumber={this.clickNumber} />
                <div>Your Score: {this.state.score}</div>
            </div>
        );
    }
}

export default Game;
