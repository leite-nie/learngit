

import React from 'react';
import { connect } from 'react-redux'

class Main2 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { number, setIncrease, setDecrease } = this.props;
        return(
            <footer>
                <p>{this.props.number > 6 ? "版权所有大于6" :　"小鱼6"}</p>
                <p>this.props.number::{this.props.number}</p>
            </footer>
        )
    }
}


function mapStateToProps(state) {
    return {
        number: state.count.number
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setIncrease: (state) => dispatch(state),
        setDecrease: (state) => dispatch(state)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main2)

