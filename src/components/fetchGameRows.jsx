import React from "react";


export default function gameRows({VG, setselectedGameId}){
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
             src = {VG.imageUrl}
             id = "game-image"
             />
            </td>
            </div>
    </tr>
    </div>
);
}

