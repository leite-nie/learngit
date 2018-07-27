
import { Switch, Route,BrowserRouter } from 'react-router-dom';
import React from "react";
import Roster from "../components/Roster.jsx";
import Schedule from "../components/Schedule.jsx";
import Home from "../components/Home.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";


import { createStore} from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducer.js';


const store = createStore(reducers);




class Main extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.data)
    }


    render(){
        return(
            <Provider store={store}>
                <main>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/roster' component={Roster} />
                        {/*<Route path='/schedule'   component={Schedule} />*/}
                        <Route path='/schedule' render={() => <Schedule changeThsiData={this.props.changeThsiData} />}/>

                    </Switch>
                    <Footer />
                </main>
            </Provider>
        )
    }
}

export default Main;
