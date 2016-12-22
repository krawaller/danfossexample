var React = require("react")

var AreYouSureButton = require("./confirmbutton")

var Form = React.createClass({
  updateField: function(e){
    this.setState({field: e.target.value});
  },
  submitName: function(){
    this.setState({
      submittedName: this.state.field,
      field: ''
    });
  },
  getInitialState: function(){
    return {
      submittedName: "John Doe",
      field: '' 
    };
  },
  render: function(){
    return <div>
      <input onChange={this.updateField} value={this.state.field}></input>
      <AreYouSureButton
        confirmedSubmit={this.submitName}
        enabled={this.state.field.length > 0}/>
      Tweedledum
      <br/>
      <p>Submitted name: {this.state.submittedName}</p>
    </div>;
  }
})

module.exports = Form