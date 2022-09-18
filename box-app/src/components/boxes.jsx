import React, { Component } from 'react';
import Box from './box';

class Boxes extends Component {
    render() {
        return (
            <React.Fragment>
                <button
                    onClick={this.props.onReset}
                    style={{marginBottom: "15px"}}
                    className='btn btn-info'
                >Reset</button>
                {this.props.boxes.map(box => (
                    <Box
                        key={box.id}
                        box={box}
                        onClickLeft={() => this.props.onClickLeft(box)}
                        onClickRight={() => this.props.onClickRight(box)}
                        onDelete={this.props.onDelete}
                    />
                ))}
            </React.Fragment>
        );
    }
}
 
export default Boxes;