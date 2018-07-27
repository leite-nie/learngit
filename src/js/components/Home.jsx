import { connect } from 'react-redux';

import React from 'react';


class Home extends React.Component{
    render(){
        const { number, setIncrease, setDecrease } = this.props;
        return(
            <div>welcome my home! this.props.number : {this.props.number}</div>
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
)(Home)
