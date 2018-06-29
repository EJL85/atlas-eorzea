import React from 'react';
import { Tab } from 'semantic-ui-react';
import Canvas from './Canvas';



class Tabs extends React.Component {
    render() {

        const panes = [
            { menuItem: 'Tab 1', render: () => <Tab.Pane><Canvas text={this.props.test.Name} details="assets/atlasEorzeaAssets/atlasEorzea/Eorzea/eorzea.PNG"/></Tab.Pane> },
            { menuItem: 'Tab 2', render: () => <Tab.Pane><Canvas text="Test Works 2" details="assets/atlasEorzeaAssets/atlasEorzea/Eorzea/Thanalan/CentralThanalan/centralThanalan.PNG"/></Tab.Pane> },
            { menuItem: 'Tab 3', render: () => <Tab.Pane><Canvas text="Test Works 3" details="assets/atlasEorzeaAssets/atlasEorzea/Eorzea/Thanalan/NorthernThanalan/northernThanalan.PNG"/></Tab.Pane> },
        ];

        console.log(this.props.test);

        return(
            <Tab panes={panes} />
        );
    }
}

export default Tabs;