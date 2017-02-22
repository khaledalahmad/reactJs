import React, { Component } from 'react';
import './App.css';


var StarsFrame = React.createClass({
	render: function(){
    var numberOfStarts = Math.floor(Math.random()*9) +1,
    stars=[];
    for (var i=0; i<numberOfStarts;i++){
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
	render: function(){
return (
<div id="button-frame">

<button className="btn btn-primary btn-lg">=</button>

</div>
)
}
});

var NumbersFrame = React.createClass({
	render: function(){
    var numbers=[];
      for (var i=1; i<=9; i++){
        numbers.push(
          <div className="number">{i}</div>
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
	render: function(){
return (
<div id="answer-frame">
<div className="well">

</div>
</div>
)
}
});


class Game extends Component {
  render() {
    return (
      <div id="game">
      <h2>Play Nine</h2>
      <hr />
      <div className="clearfix">
      <StarsFrame />
      <ButtonFrame />
      <AnswerFrame />
      </div>
      <NumbersFrame />
      </div>
    );
  }
}

export default Game;
