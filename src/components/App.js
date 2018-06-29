import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Tabs from './Tabs';
import Menu from './Menu';

class App extends React.Component {

    state={
        details: {}
    };

    componentDidMount() {
        fetch("https://ejl-cap-proto-back.herokuapp.com/")
            .then(response => response.json())
            .then(details => this.setState({details}));
    };

    render() {
        return(
            <div>
                <Header/>
                <main className="main">
                    <Menu/>
                    {Object.keys(this.state.details).map(key => <Tabs
                        key={key}
                        test={this.state.details[key]}
                    />)}
                </main>
                <Footer/>
            </div>
        )
    }
}

export default App;