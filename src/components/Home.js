import React from 'react';
import PlayerList from './PlayerList';
import { FaBasketballBall } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({query: this.player.value});
  }

  render (){
  return (
  	<div className="container">
      <div className="top">
        <h1>
            Athlete Lookup <FaBasketballBall className="basketball-icon"/>
        </h1>
      </div>
      <div className="search-container">
        <form>
            <FaSearch size={20} className="search-icon"/>
            <input
                type="text"
                placeholder="Search Athletes..."
                ref={input => this.player = input}
                onChange={this.handleChange}
            />
        </form>
      </div>
      <PlayerList query={this.state.query}/>
    </div>
  );
  }
}
export default Home;
