import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Canvas from './Canvas';

class App extends React.Component {

    state={
        fullDB: {},
        currentMap: {},
        currentMob: {},
        currentX: {},
        currentY: {},
        currentLevels: {}
    };

    componentDidMount() {
        fetch("/testData.json")
            .then(response => response.json())
            .then(fullDB => this.setState({fullDB}))
    };

    testFunc = (data) => {
        console.log("I have been called!");
        console.table(data);
        console.log(data.suggestion.id);
        let mob = data.suggestion.name;
        let levels = data.suggestion.levels;
        let x = data.suggestion.x;
        let y = data.suggestion.y;
        let map = this.getMap(data.suggestion.map);
        this.setState({currentLevels: levels});
        this.setState({currentMob: mob});
        this.setState({currentX: x});
        this.setState({currentY: y});
        return map;
    };

    getMap = (data) => {
        switch (data) {
            case "northShroud":
                let northShroud = "assets/atlasEorzeaAssets/atlasEorzea/Eorzea/TheBlackShroud/NorthShroud/northShroud.PNG";
                this.setState({currentMap: northShroud});
                break;
            case "southShroud":
                let southShroud = "assets/atlasEorzeaAssets/atlasEorzea/Eorzea/TheBlackShroud/SouthShroud/southShroud.PNG"
                this.setState({currentMap: southShroud});
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
                    <Canvas
                        levels={this.state.currentLevels}
                        text={this.state.currentMob}
                        mob={this.state.currentMob}
                        map={this.state.currentMap}
                        x={this.state.currentX}
                        y={this.state.currentY}
                    />
                </main>
                <Footer/>
            </div>
        )
    }
}

export default App;