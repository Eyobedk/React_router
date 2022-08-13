import React, {Component, Fragment} from "react";
import { Outlet } from "react-router-dom";

const LisoftGenres= (props)=>{
    return (<div>
        <h1>{props.type}</h1>
    </div>)
}

class SingleP extends Component{
    constructor(props){
        super(props);
        this.state = {
            genreTypes: [
                { id: 1, type: "Bahlawi Musics" },
                { id: 2, type: "Zemenawi Musics" }
            ],
            genreChoosen : false
        }

        // this.displayGenre = this.displayGenre.bind(this);
    }

    displayGenre = () => {
        this.setState({
            genreChoosen: !this.state.genreChoosen
        })
    }
    render(){
        let genres = null;
        if(this.state.genreChoosen){
            genres = (
                <div>
                    {this.state.genreTypes.map((genType, index)=>{
                        return (<LisoftGenres key={genType.id} type={genType.type}/>)
                    })}
                </div>
            )

        }
        return(<Fragment>
            <button onClick={this.displayGenre}>
                play
            </button>
            <Outlet />
            {genres}
        </Fragment>)
    }
}

export default SingleP;