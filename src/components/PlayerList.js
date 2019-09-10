import React from 'react';
import axios from "axios";

class PlayerList extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {players: []};
  	}

  	async componentDidUpdate(prevProps) {
  		if (prevProps.query !== this.props.query && this.props.query.length !== 0){
  			console.log(this.props.query);
        axios.get("https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=" + this.props.query)
          .then(({ data }) => {
            this.setState({
              players: data.player.slice(0,10)
            })
        console.log(this.state.players);
          });
  		}
  	}

  	render() {
    if (this.props.query) {
      return (
        <div className="PlayerList">
          {this.state.players.map(player => {
            return (
              <div className="Item" key={player.idPlayer}>
                <div>
                  <h2>{player.strPlayer}</h2>
                </div>
              </div>
            );
          })}
        </div>
      );
    } 
    else {
      return <div className="PlayerList"/>;
    }
  }
}

export default PlayerList;