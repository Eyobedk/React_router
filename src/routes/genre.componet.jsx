import { Outlet } from "react-router-dom"
import SingleP from "./sinleP.componet"
const List = (props)=>{
    const datas = props.listofGenres.map((genre, index) => {
        return (
        <ul>
            <li key={index}>{index}</li>
            <li>{genre.name}</li>
            <li>{genre.amount}</li>
        </ul>
        )
    })
    return(datas)
}

function Genre(){
    let listofGenre = [
        {
            name: "bahlawi",
            amount: 65
        },
        {
            name: "zemenawi",
            amount: 120
        }
    ];

    
    return(
    <div>
    
    <List listofGenres={listofGenre} />
    <Outlet />
    <SingleP />
    
    </div>)
}

export default Genre;