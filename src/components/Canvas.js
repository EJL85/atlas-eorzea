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
            ctx.fillText(this.props.text, 50, 50);
            ctx.fillText("Level: " + this.props.levels, 50, 100);

            let x = this.props.x;
            let y = this.props.y;
            console.log("x: " + x);
            console.log("y: " + y);

            ctx.globalAlpha = 0.25;
            ctx.beginPath();
            ctx.arc(x + 585, y + 565, 25, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'red';
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#003300';
            ctx.stroke();


        }
    }

    render() {

        console.log(this.props);

        return(
            <div>
                <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight}/>
                <img ref="image" src={this.props.map} alt="Map" width={this.props.map.width} height={this.props.map.height} className="hidden" />
            </div>
        )
    }
}
export default Canvas;