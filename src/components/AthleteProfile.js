import React from 'react';

class AthleteProfile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {player: {}};
    }

    componentDidMount(){
        console.log(this.props.location.state.player);
        this.setState({player: this.props.location.state.player});
    }

    render(){
        return(
            <div className="player-details">
                <p>name: {this.state.player.strPlayer}</p>
                <p> birthplace: {this.state.player.strBirthLocation}</p>
                <p>description: {this.state.player.strDescriptionEN}</p>
            </div>
        );
    }
}

export default AthleteProfile;
