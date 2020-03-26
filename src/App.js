import React from 'react';
import './App.css';
import getSeasonInfo from './helpers';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null,
      month: null,
      long: null,
      error: null,
    }
    console.log('constructor')
    // this.handleNavigationData()
  }
  componentDidMount(){
    console.log('component mounted')
    this.handleNavigationData()
  }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('component updated')
  // }
  // componentWillUnmount() {
  //   console.log('component unmounte')
  // }
handleNavigationData = () => {
  const month = new Date().getMonth();
  console.log(month)
  window.navigator.geolocation.getCurrentPosition(
    (position) => this.setState({lat: position.coords.latitude, month: month}), //success
    (err) => this.setState({error: err}) //errrorCallback
  );
}
handleBooks = (obj, key) => {
  console.log(obj)
  return key ? window.open(obj[key][3]) : null;
}
  render() {
   console.log('rendering')
   const season = getSeasonInfo(this.state.lat, this.state.month)
   const iconsAndClass = {
     winter: 
      [<i onClick={() => this.handleBooks(iconsAndClass, season)} className="fa fa-snowflake-o"></i>, 
        'winter', 
        'Brr... it`s pretty cold outside, have some tea', 
        "https://www.keepinspiring.me/10-books-to-read-in-winter/"
      ],
     summer: 
      [<i onClick={() => this.handleBooks(iconsAndClass, season)} className="fa fa-sun-o"></i>, 
        'summer', 
        'The weather is nice, it`s not a time for some job stuff',
        'https://www.penguin.co.uk/campaigns/summer-must-reads.html'
      ]
   } 
   const chooseClass = season ? iconsAndClass[season][1] : null;
   return (
      <div className={"container-flex " + chooseClass}>
      {season ? iconsAndClass[season][0] : <i className="fa fa-cog"></i>}
      {season ? <h2>{iconsAndClass[season][2]}</h2> : <h2>where you are....</h2>}
      </div>
    )
  }
}
export default App;
// {season ? (season === 'summer' ? <i className="fa fa-sun-o"></i>: <i className="fa fa-snowflake-o"></i>) : 'waiting...'} 