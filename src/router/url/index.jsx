import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/compamy/abcdefg'>Company</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/compamy/:username' render={(match) => { 
        console.log('match::::::', match); // location、history、match
        return (<h1>Home</h1>)} }
      />
      <Route path='/topics' component={Topics}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

// const About = (match) => {
//   console.log('match:::::', match);  // location、history、match
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   )
// }

class About extends Component {
  render () {
    // console.log('this.props:::::', this.props); // location、history、match
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}

const Topics = ({ match }) => {  // {location、history、match} 解构出来的 match
// const Topics = ( match ) => {
  // console.log('match:::::', match);
  // 点击第三个li时， {path: "/topics", url: "/topics", isExact: true, params: {}}
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Topic}/>
      <Route exact path={match.url} render={() => (
        <h3>Please select a topic.</h3>
      )}/>
    </div>
  )
}

const Topic = ({ match }) => {
  console.log('match::topic 中:::', match);
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )
}

// const Topic = ( match ) => {
//   console.log('match::topic 中:::', match);
//   return (
//     <div>
//       <h3>{match.match.params.topicId}</h3>
//     </div>
//   )
// }


// const BasicExample = () => (
//   <Router>
//     <div>
//       <h2>Accounts</h2>
//       <ul>
//         <li><Link to='/netflix'>Netflix</Link></li>
//         <li><Link to='/zillow-group'>Zillow Group</Link></li>
//         <li><Link to='/yahoo'>Yahoo</Link></li>
//         <li><Link to='/modus-create'>Modus Create</Link></li>
//       </ul>

//       <Route path='/:id' component={Child}/>
//     </div>
//   </Router>
// )

const Child = ({ match }) => {
  console.log('match:::::', match);
  // {path: "/:id", url: "/src", isExact: false, params:{id: "src"}}
  // {path: "/:id", url: "/netflix", isExact: true, params: {id: "netflix"}}
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  )
}


ReactDOM.render(
  <BasicExample />,
  document.getElementById('app')
);



