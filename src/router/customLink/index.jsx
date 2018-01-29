import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const CustomLinkExample = () => (
  <Router>
    <div>
      <OldSchoolMenuLink activeOnlyWhenExact={true} to='/' label='Home'/>
      <OldSchoolMenuLink to='/about' label='About'/>
      {
        // <Route path='/about'  children={({ match }) => {
        //   console.log('match:::::::', match);
        //   return (
        //     <div className={match ? 'active' : ''}>
        //       {match ? '> ' : ''}<Link to='/about'>123</Link>
        //     </div>
        //   )}
        // }
        // />
      }
      <hr/>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </div>
  </Router>
)


class OldSchoolMenuLink extends React.Component {
  render() {
    const { label, to, activeOnlyWhenExact } = this.props;
    console.log('this.props:::::::', this.props);
    return (
      <Route path={to} exact={activeOnlyWhenExact} 
        children={({ match }) => {
          console.log('match:::::::', match);
          return (
            <div className={match ? 'active' : ''}>
              {match ? '> ' : ''}<Link to={to}>{`${label}`}</Link>
            </div>
          )
        }
      }
      />
    )
  }
}


// const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => {
//   console.log('label, to, activeOnlyWhenExact:::::::', label, to, activeOnlyWhenExact );
//   return (
//     <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
//       console.log('match:::::::', match);
//       return (
//         <div className={match ? 'active' : ''}>
//           {match ? '> ' : ''}<Link to={to}>{`${label}222`}</Link>
//         </div>
//       )}
//     }
//     />
//   )
// }

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)


ReactDOM.render(
  <CustomLinkExample />,
  document.getElementById('app')
);