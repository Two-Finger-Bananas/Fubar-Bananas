import React from "react";


export default function GameRows({VG, setselectedGameId}){
return(
    <div id="contain-row">
    <tr 
    onClick={() =>{
        setselectedGameId(VG.id);
    }}>

    <div id = "the-Rows">
        <td>{VG.title}</td>
        <td>
            <img
             src = {VG.coverImg}
             id = "game-image"
             />
            </td>
            </div>
    </tr>
    </div>
);
}

