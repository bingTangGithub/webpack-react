const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

 var UserGist = React.createClass({
    getInitialState: function() {
        return {
            username: '',
            lastGistUrl: ''
        };
     },
     //React组件的数据可以通过 componentDidMount方法中的ajax来获取，
     //当从服务端获取数据库可以将数据存储在state中，再用 this.setState方法重新渲染 UI.
     //当使用异步加载数据时，在组件卸载前使用 componentWillUnmount 来取消未完成的请求。
     componentDidMount: function() {
        // this.serverRequest = $.get(this.props.source, function(result) {
        this.serverRequest = $.get(this.props.sok, function(result) {
            console.log(result);
            var lastGist = result[0];
            this.setState ({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        }.bind(this));
     },
     componentWillUnmount: function() {
        this.serverRequest.abort();
     },
     render: function() {
        return (
            <div>
                {this.state.username}用户最新的Gist共享地址：
                <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
            </div>
        );
     }
 });

 

ReactDOM.render(
        // <UserGist source="https://api.github.com/users/octocat/gists" />
		<UserGist sok="https://api.github.com/users/octocat/gists" />,


    document.getElementById('example')
);



