import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {

    state={
        details: {}
    };


    componentDidMount() {
        fetch("https://ejl-tower-server.herokuapp.com/games")
            .then(response => response.json())
            .then(games => this.setState({details: games.game}));
    };



    render() {
        return(
            <div>
                <Header/>
                <main>
                    <img className="ui small image" src="assets/maps/middle_la_noscea.png"/>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default App;