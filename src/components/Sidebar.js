import React from 'react';

class Sidebar extends React.Component {
    render() {
        return(
            <div className="ui visible right sidebar vertical labeled icon menu">
                <a className="item">
                    <i className="home icon"></i>
                    Home
                </a>
                <a className="item">
                    <i className="block layout icon"></i>
                    Topics
                </a>
                <a className="item">
                    <i className="smile icon"></i>
                    Friends
                </a>
            </div>
        );
    }
}

export default Sidebar;