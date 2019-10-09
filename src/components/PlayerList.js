import React from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";
import person from '../blank.jpg';

class PlayerList extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
			players: [],
			emptyResults: false
		};
  	}

  	async componentDidUpdate(prevProps) {
  		if (prevProps.query !== this.props.query && this.props.query.length !== 0){
        	axios.get("https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=" + this.props.query)
          	.then(({ data }) => {
				if (data.player === null){
					// user has entered a query that yields 0 results
					console.log("query found 0 results");
					this.setState({
	              		emptyResults: true
	            	});
				}
				else{
					console.log(data.player);
					this.setState({
	              		players: data.player.slice(0,12),
						emptyResults: false
	            	});
				}
          	});
  		}
  	}

  	render() {
    	if (this.props.query && this.state.emptyResults === false) {
      		return (
        		<div className="player-list">
          			{this.state.players.map(player => {
            			return (
              				<div className="player" key={player.idPlayer}>
			  					<div className="player-image">
									{player.strThumb === null ? <img src={person} alt="person"/> : <img src={player.strThumb} alt="player thumbnail"/> }
			  					</div>
                				<div className="player-name">
                  					{player.strPlayer === "" ? <p>N/A</p> : <p>{player.strPlayer}</p> }
                				</div>
								<Link to={{
									pathname: "/" + player.strPlayer.replace(/\s+/g, '-'),
									state: {player: player}
								}}>
									<button className="player-button">more details</button>
								</Link>
              				</div>
            			);
          			})}
        		</div>
      		);
		}
		else if (this.props.query && this.state.emptyResults === true) {
			return (
				<div className="player-list">
					<p>zero players match your search</p>
				</div>
			);
		}
    	else {
      		return <div className="player-list"/>;
    	}
	}
}

export default PlayerList;
