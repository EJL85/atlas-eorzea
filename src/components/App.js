import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Canvas from './Canvas';

class App extends React.Component {

    state={
        fullDB: {},
        currentMap: {},
        currentMob: {}
    };

    componentDidMount() {
        fetch("/testData.json")
            .then(response => response.json())
            .then(fullDB => this.setState({fullDB}))
            .then(this.getMap);
    };

    testFunc = (data) => {
        console.log("I have been called!");
        console.table(data);
        console.log(data.suggestion.id);
        console.log(data.suggestion.name);
        console.log(data.suggestion.x);
        console.log(data.suggestion.y);
        console.log(data.suggestion.map);
    };

    getMap = () => {
        switch (this.state.fullDB[0].map) {
            case "northShroud":
                let mapString = "assets/atlasEorzeaAssets/atlasEorzea/Eorzea/TheBlackShroud/NorthShroud/northShroud.PNG"
                this.setState({currentMap: mapString});
                console.log(mapString);
                return mapString;
                break;
            default:
                console.log("You shouldn't be seeing this");
                break;
        }
    }

    render() {
        return(
            <div>
                <Header testData="/testData.json" testFunc={this.testFunc}/>
                <main className="main">
                    <Canvas mob={() => this.state.currentMob} map={this.state.currentMap}/>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default App;