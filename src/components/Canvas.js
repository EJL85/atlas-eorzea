import React from 'react';

class Canvas extends React.Component {
    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const img = this.refs.image;
        console.log(this.refs.canvas.width);
        img.onload = () => {
            ctx.canvas.width = img.width;
            ctx.canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            ctx.font = "40px Courier";
            ctx.fillText(this.props.text, 300, 75);
        }
    }

    render() {



        return(
            <div>
                <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight}/>
                <img ref="image" src={this.props.map} alt="Map" width={this.props.map.width} height={this.props.map.height} className="hidden" />
            </div>
        )
    }
}
export default Canvas;