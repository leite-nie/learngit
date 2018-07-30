import { connect } from 'react-redux';

import React from 'react';


class Home extends React.Component{
    render(){
        const { number, setIncrease, setDecrease } = this.props;
        return(
            <div>
                <h2>welcome my home! this.props.number : {this.props.number}</h2>
                <div className="test2">
                    <div className="test2-child">我要垂直居中哦</div>
                </div>
            </div>
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
