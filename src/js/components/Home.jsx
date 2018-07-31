import { connect } from 'react-redux';

import React,{Component} from 'react';


class Home extends Component{
    render(){
        const { number, setIncrease, setDecrease } = this.props;
        return(
            <div>
                <h2>welcome my home! this.props.number : {this.props.number}</h2>
                <GoodBye></GoodBye>
                <Welcome></Welcome>
            </div>
        )
    }
}

const  wrapWithUsername = (WrappedComponent) =>{
    class NewComponent extends Component {
        constructor() {
            super();
            this.state = {
                username: ''
            }
        }

        componentWillMount() {
            let username = localStorage.getItem('username');
            this.setState({
                username: username
            })
        }

        render() {
            return <WrappedComponent username={this.state.username}/>
        }
    }

    return NewComponent
}



class Welcome  extends Component{
    /*constructor(){
        super();
        this.state = {
            userName : ""
        }
    }
    componentDidMount(){
        let _name = localStorage.getItem("username");
        this.setState({
            userName : _name
        })
    }
    render(){
        return(
            <div>welcome {this.state.userName}</div>
        )
    }*/
    render() {
        return (
            <div>welcome {this.props.username}</div>
        )
    }
}
Welcome = wrapWithUsername(Welcome);
class GoodBye  extends Component{
    /*constructor(){
        super();
        this.state = {
            userName : ""
        }
    }
    componentDidMount(){
        let _name = localStorage.getItem("username");
        this.setState({
            userName : _name
        })
    }
    render(){
        return(
            <div>GoodBye {this.state.userName}</div>
        )
    }*/
    render() {
        return (
            <div>goodbye {this.props.username}</div>
        )
    }
}
GoodBye = wrapWithUsername(GoodBye);




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
