import React from 'react';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import './App.css';

class App extends React.PureComponent {
  state = {
    activeLink: 'paintings',
  }

  handleLink = (e) => {
    e.preventDefault();
    let activeLink = e.target.name;
    this.setState({ activeLink });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Baso.</h1>
          <NavBar
            handleLink={this.handleLink}
            activeLink={this.state.activeLink}
          />
        </header>
        <h2>Coming 2020.</h2>
        <img className="baso-hello" src="https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/75310187_1041520542854675_8169401056851010952_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=I1Nny5ORyisAX-pWqDM&oh=8657cd168ce8cd11b3b7cfe396986dfb&oe=5EC1501E" alt="baso."></img>
        <Footer/>
      </div>
    );
  }
}

export default App;
