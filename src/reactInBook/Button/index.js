import React from 'react';
import ReactDOM from 'react-dom';

var ButtomComponent = React.createClass({
  propTypes: {
    clickHander: React.propTypes.func
  },

  render: function () {
    var tagType = this.props.tag && 'button';
    if (tagType === 'button') {
      return (
        <button className = "btn btn-default" 
          onClick={this.props.clickHandler.bind(this)} >
          {this.props.children}
        </button>
      );
    } else {
      return (
       <a className="btn btn-default" href="javascript: void(0);"
         onClick={this.props.clickHandler.bind(this)}>
         {this.props.children}
        </a>
      );
    }
  }
})

ReactDOM.render(
  <ButtomComponent />,
  document.getElementById('app')
);

