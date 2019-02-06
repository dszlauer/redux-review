import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateMystery} from '../../ducks/reducer';

class MysteryComponent extends Component {
    constructor(){
        super();
        this.state = {
            input: 'https://i.pinimg.com/originals/ac/c3/c2/acc3c2d54cc3878f280eb5308e10d923.jpg'
        }
    }

    addMystery = () => {
        this.props.updateMystery({img: this.state.input})
    }



render() {
    return (
    <div>
        {this.props.mysteryArray.map(mystery => {
            return <div>
                <img src={mystery.img} />
            </div>
        })}
        URL<input onChange={(e) => this.setState({input: e.target.value})}/>
        <button onClick={() => this.addMystery()}>Add Mystery Photo</button>
    </div>
    )}
}

const mapStateToProps = (state) => {
    return {
        mysteryArray: state.mysteryArray
    }
}

export default connect(mapStateToProps, {updateMystery})(MysteryComponent);