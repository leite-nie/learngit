import {Switch,Route,Link} from 'react-router-dom'


import React from 'react';
import PlayerAPI from '../../js/player.js';


const FullRoster = () => (
    <div>
        <ul>
            {
                PlayerAPI.all().map(p => (
                    <li key={p.id}>
                        <Link to={`/roster/${p.id}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

const Player = (props) => {
    const player = PlayerAPI.get(
        parseInt(props.match.params.number, 10)
    )
    if (!player) {
        return <div>Sorry, but the player was not found</div>
    }
    return (
        <div>
            <h1>{player.name} (#{player.id})</h1>
            <h2>{player.age}</h2>
        </div>
    )

}
class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2>This is a roster page!</h2>
                <Switch>
                    <Route exact path='/roster' component={FullRoster}/>
                    <Route  path='/roster/:number' component={Player}/>
                </Switch>
            </div>
        )
    }
}

export default Main;