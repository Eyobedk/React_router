import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom"
// import SingleP from "./sinleP.componet"


function GenreImageContent(){
    return(<h1>GAME is CHOOSEN IMAGE</h1>)
}

function PlayerImageContent(){
    return(<h1>FIRST COMMING IMAGE</h1>)
}

function SinglePlayerButton(props){
    return(<button onClick={props.onClick}> single player </button>)
}

function MultiPlayerButton(props){
    return(<button onClick={props.onClick}>MultiPlayer</button>)
}

function BahlawiButton(){
    return(<button> Bahlawi </button>)
}

function ZemenawiButton(){
    return(<button >Zemenawi</button>)
}

function AboveTheButtons(props){
    if(props.playClicked){
        return (<GenreImageContent/>)
    }
    return(<PlayerImageContent/>)
}

class Genre extends Component{
    constructor(props){
        super(props);
        this.gameTypeClicked = this.gameTypeClicked.bind(this);
        this.state = {playClicked : false,genreClicked:true,multiplayer:true}
    }
    gameTypeClicked(){
        this.setState({playClicked: true})
    }


    render(){
        const btnClicked = this.state.playClicked;
        let gameButton1, gameButton2;

        if(btnClicked){
            gameButton1 = <BahlawiButton />
            gameButton2= <ZemenawiButton />
        }else{
            gameButton1 = <SinglePlayerButton onClick={this.gameTypeClicked}/>
            gameButton2 = <MultiPlayerButton onClick={this.gameTypeClicked}/>
        }
        return (
            <Fragment>
                <AboveTheButtons playClicked={btnClicked}/>
                {gameButton1}
                {gameButton2}
                <Outlet />
            </Fragment>)
    }
    
}

export default Genre;