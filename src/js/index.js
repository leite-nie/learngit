import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
require("../../src/css/base.scss")
import Main from "./components/Index.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"

require("./rem.js")


import { createStore} from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducer.js';
const store = createStore(reducers);




class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : 1
        }
    }
    changeThsiData (str){
        this.setState({
            data : str
        })
    }
    render(){
        return(
            <div>

                 {/*<Header  data = {this.state.data}/>*/}
                 <Main changeThsiData = {this.changeThsiData.bind(this)}></Main>
                 {/*<Footer />*/}
            </div>
        )
    }
}

export default Main;





ReactDom.render(
    <BrowserRouter>

        <Main></Main>

    </BrowserRouter>
    ,
    document.getElementById('app')
);


