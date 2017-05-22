import  React, {Component} from 'react';
import ReactDOM from 'react-dom';



export default 
class Action extends Component {   //之前  var Action = React.createClass({})
  constructor() {
    super();
    this.state = {
      listLen : 2,
      list: [],
    };
  }

  genLi () {

    let {listLen} = this.state;
    let list = [];
    for(var i = 0; i< listLen; i++) {
      list.push(<li key={i}> wowwo </li>);
    }
    this.setState({
      list,
    })
  }

  render() {  
    let {list} = this.state;
    return (
      <div>
       
        <ul onClick = {this.genLi.bind(this)} style={{width: '90px', height: '45px', backgroundColor: '#000'}}>
          {list}
        </ul>
        
      </div>
        
      )
  }
}


	ReactDOM.render(
        <Action  /> ,
        document.getElementById("app")
    );



//ES6 class创建的组件语法更加简明，也更符合javascript。内部的方法不需要使用function关键字。