import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router,  Link } from 'react-router';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'
import { Breadcrumb, Alert } from 'antd';


let body = {
  width: '800px',
  margin: '20px auto'
}
let we = {
  border: '2px solid #800080',
  padding: '10px',
	// textAlign: 'center'
}

// const Apps = () => {
//   <ul className="app-list">
//     <li>
//       <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>               
//     </li>
//     <li>
//       <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
//     </li>
//   </ul>
// };

// const Home = ({ routes, params, children }) => {
//   <div className="demo">
//     <div className="demo-nav">
//       <Link to="/">Home</Link>
//       <Link to="/apps">Application List</Link>
//     </div>
//     {children || 'Home Page'}
//     <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
//     <Breadcrumb routes={routes} params={params} />
//   </div>
// };

class MyBread extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Apps = () => (
  <ul className='app-list'>
    <li>
      <Link to='/apps/1'>Application1</Link>：<Link to='/apps/1/detail'>Detail</Link>
    </li>
    <li>
      <Link to='/apps/2'>Application2</Link>：<Link to='/apps/2/detail'>Detail</Link>
    </li>
  </ul>
);

    const Home = ({ routes, params, children }) => (
  <div className='demo'>
    <div className='demo-nav'>
      <Link to='/'>Home</Link>
      <Link to='/apps'>Application List</Link>
    </div>
    {children || 'Home Page'}
    <Alert style={{ margin: '16px 0' }} message='Click the navigation above to switch:' />
    <Breadcrumb routes={routes} params={params} />
  </div>
);
    return (
			<div style={body}>
                <div style={we}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item><a href=''>Application Center</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href=''>Application List</a></Breadcrumb.Item>
                        <Breadcrumb.Item>An Application</Breadcrumb.Item>
                    </Breadcrumb>    
                </div>
                <br />

                <div style={we}>
                    <Router history={HashHistory}>
                        <Route name='home' breadcrumbName='Home' path='/' component={Home}>
                          <Route name='apps' breadcrumbName='Application List' path='apps' component={Apps}>
                            <Route name='app' breadcrumbName='Application:id' path=':id'>
                              <Route name='detail' breadcrumbName='Detail' path='detail' />
                            </Route>
                          </Route>
                        </Route>
                    </Router>  
                </div>
                <br />
				
			</div>
    );
  }
}


ReactDOM.render(
    <MyBread />,
    document.getElementById('app')
);

