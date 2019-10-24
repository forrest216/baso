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
        <h2>Coming 11/2019.</h2>
        <img className="baso-hello" src="https://scontent-sjc3-1.cdninstagram.com/vp/8b002932f532f9479d5d9e7323624953/5E09DE63/t51.2885-15/sh0.08/e35/p640x640/43185355_253891741954293_5760188203550113792_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=109" alt="baso."></img>
        <Footer/>
      </div>
    );
  }
}

export default App;
