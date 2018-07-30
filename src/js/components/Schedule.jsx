
import React from 'react';
import { connect } from 'react-redux'

class Main extends React.Component{
    constructor(props){
        super(props);
        //console.log(this.props)
    }
    changeColor(){
        this.props.changeThsiData(2)
    }
    changeColor2(){

    }
    render(){
        const { number, setIncrease, setDecrease } = this.props;
        return(
            <div>
                <ul>
                    <li>6/5 @ Evergreens</li>
                    <li>6/8 vs Kickers</li>
                    <li>6/14 @ United</li>
                    <li onClick={this.changeColor.bind(this)}>点我改变导航颜色</li>

                </ul>
                <div  style={{ marginTop: '1.5em' }}>

                    Some state changes:
                    {this.props.number}....{this.props.obj.name}
                    <button onClick={() =>
                        setIncrease({
                            type: 'INCREASE',
                            payload: 1,
                            objName : '卡卡22222222'
                        })}>
                        Increase</button>
                    <button onClick={() =>
                        setDecrease({
                            type: 'DECREASE',
                            payload: 1,
                            objName : '卡卡111111111'
                        })}>Decrease</button>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        number: state.count.number,
        obj : state.count.obj
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
)(Main)
