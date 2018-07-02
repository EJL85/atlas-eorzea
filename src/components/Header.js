import React from 'react';
import SearchBar from './SearchBar'


class Header extends React.Component {

    render() {

        console.log(this.props);

        return(
            <div className="Header">
                <h1>Atlas Eorzea</h1>
                <div className="ui search">
                    <SearchBar testFunc={this.props.testFunc}/>


                </div>
            </div>
        );
    }
}

export default Header;