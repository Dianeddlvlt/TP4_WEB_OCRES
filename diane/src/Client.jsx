import React from "react";
import'./index.css';
import id from './image/id.png';

const Client = ({details}) => (
    <div class="cadre">
        <div class="image">
            <img src={id}  alt="" />
        </div>
        <div class="prenom">
            <div>
                {details.prenom}
            </div>

            <div>
                {details.nom}
            </div>
        </div>

        <div class="born">
            {details.born}
        </div>

        <div class="style">
            <button>Change Style</button>
        </div>
        
    </div>
    )

export default Client;