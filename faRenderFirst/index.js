import React, { Component} from 'react';
import ReactDOM from 'react-dom';

 var ButtonComment = React.createClass({
        getInitialState: function () {
            return {count:0};
        },

        sendSword: function () {

            var newCount = this.state.count + 1;
            this.setState({count:this.state.count + 1}, () => {
            	 console.log('son的setSatate');
            });
           
            this.props.getSwordCount();
        },

       render: function () {
       		console.log('son的render');
           return (
                <button onClick={this.sendSword}>{this.props.buttonName}</button>
           );
       }
    });

    var ImDaddyComponent = React.createClass({
        getInitialState: function () {
            return {sendCount:0};
        },
        sendSword: function () {
            this.refs.getSwordButton.sendSword();
        },
        getSwordCount: function () {
        	
            this.setState({sendCount:this.refs.getSwordButton.state.count + 1}, () => {
            	console.log('fa的setSatate');
            });
            
        },
        render: function () {
        	console.log('fa的render');
            return (
                <div>
                    <ButtonComment ref="getSwordButton" getSwordCount={this.getSwordCount} buttonName="儿子送宝刀"/>
                    <button onClick={this.sendSword}>通过老爸送宝刀</button>
                    <p style={{fontSize: '20px'}}>
                        父子俩共送{this.state.sendCount}把宝刀！！！
                    </p>
                </div>
            );
        }
    });

    ReactDOM.render(
            <ImDaddyComponent />,
            document.getElementById('app')
    );

	
	