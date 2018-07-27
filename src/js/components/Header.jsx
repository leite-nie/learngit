import {Link} from "react-router-dom";
import React from 'react';


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isChange : this.props.data
        }

    }

    render(){
        let data={name:"leete"}
        return(
            <header className="top-box">
                <ul className={ this.props.data !=1 ? "haha" : ""}>
                    <li className={location.pathname == "/" ? "active" : ""}><Link to='/'>Home</Link></li>
                    <li className={location.pathname.indexOf("/roster") > -1 ? "active" : ""}><Link to='/roster'>Roster</Link></li>
                    <li className={location.pathname == "/schedule" ? "active" : ""}><Link to='/schedule'>Schedule</Link></li>
                </ul>
            </header>
        )
    }
}

export default Main;