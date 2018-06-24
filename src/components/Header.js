import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <div className="Header">
                <h1>Atlas Eorzea</h1>
                <div className="ui search">
                    <input className="prompt" type="text" placeholder="Search"/>
                </div>
            </div>
        );
    }
}

export default Header;