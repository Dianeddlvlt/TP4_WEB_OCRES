import React from "react";
import'./index.css';

const Comment = ({details}) => (
    <div class="comment">     
        <p>{details.comment}</p>
        <div>
            <button> c'est super ! </button>
        </div>
    </div>
);

export default Comment;