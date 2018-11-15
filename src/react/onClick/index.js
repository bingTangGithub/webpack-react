const React = require('react');
const ReactDOM = require('react-dom');
// const $ = require('jquery');

// let HelloMessage = React.createClass({
//  	getInitialState: function() {
//  		return { value: 'Hello Runoob' };
//  	},
//  	handleChange: function(event) {
//  		this.setState({ value: '菜鸟教程' })
//  	},
//  	render: function() {
//  		let value = this.state.value;
//  		return (
//  			<div>
//  				<button onClick={this.handleChange}>点我</button>
//  				<h4>{value}</h4>
//  			</div>
//  		);
//  	}
// });

// // 通过 onClick 事件来修改数据

// ReactDOM.render(
//     <HelloMessage />,
//     document.getElementById('example')
// );


// class Dialog extends React.Component {
//     constructor(...props){
//         super(...props);

//         [
//             'onDocumentClick',
//             'onClickHandler',

//         ].forEach(func=>{
//             this[func] = this[func].bind(this);
//         });
//         this.state = {
//           myStyle: {
//             fontSize: 100,
//             color: '#FF0000',
//             border: '1px solid red',
//           }
//         };
//     }

//     onDocumentClick(e){
//       console.log('原生绑定eeeee::::::', e);
//         // this.props.onBlur && this.props.onBlur(e);
//         this.setState({
//           myStyle: {
//             ...this.state,
//             display: 'none',
//           }
//         });
//     }

//     onClickHandler(e){
//         console.log('合成事件eeeee::::::', e);
//         console.log('合成事件eeeee::::::', e.nativeEvent);
//         // e.nativeEvent.stopPropagation();
//         e.preventDefault();
//         // e.nativeEvent.stopImmediatePropagation();
//     }

//     componentDidMount(){
//         document.addEventListener('click', this.onDocumentClick, false);

//     }

//     componentWillUnmount(){
//         document.removeEventListener('click', this.onDocumentClick, false);
//     }


//     render(){
//         return (
//            <div 
//               onClick={this.onClickHandler}
//               style={this.state.myStyle}
//             >
//               {this.props.children}
//               1123
//            </div>
//         );
//     }
// }


// Dialog.propTypes = {
//     onBlur: React.PropTypes.func
// };

// // 通过 onClick 事件来修改数据

// ReactDOM.render(
//     <Dialog />,
//     document.getElementById('example')
// );

class ExampleApplication extends React.Component {
    componentDidMount() {
        document.addEventListener('click', () => {
            console.log('document click');
        })
    }

    outClick(e) {
        // console.log(e.currentTarget);
        console.log('outClick');
    }
    
    onClick(e) {
        // console.log(e.currentTarget);
        console.log('onClick');
        // e.stopPropagation();
    }
    render() {
        return <div onClick={this.outClick}>
            <button onClick={this.onClick}> 测试click事件 </button>
        </div>
    }
}


ReactDOM.render(
    <ExampleApplication />,
    document.getElementById('example')
);
