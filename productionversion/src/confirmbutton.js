var React = require("react")

var pt = React.PropTypes

var AreYouSureButton = React.createClass({
  propTypes: {
    confirmedSubmit: pt.func.isRequired,
    enabled: pt.bool.isRequired
  },
  getInitialState: function(){
    return {
        confirming: false
    };
  },
  componentWillReceiveProps: function(nextProps){
    if (!nextProps.enabled){
      this.setState({confirming: false});
    }
  },
  maybe: function(){
    this.setState({confirming: true});
  },
  noway: function(){
    this.setState({confirming: false});
  },
  yesimsure: function(){
    this.setState({confirming: false});
    this.props.confirmedSubmit();
  },
  render: function(){
    if (!this.state.confirming){
      return <button disabled={!this.props.enabled} onClick={this.maybe}>Submit</button>;
    }
    return <span>
      <button onClick={this.noway}>Cancel</button>
      <button onClick={this.yesimsure}>Confirm</button>
    </span>
  }
})

module.exports = AreYouSureButton
