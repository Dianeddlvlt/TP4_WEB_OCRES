import React from "react";
import'./index.css';

const Button = ({details, change}) => (
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type ="button" class="btn btn-outline-danger" onClick={() => change(details.id)}>{details.fullname}</button>
            </div>
        );
  
export default Button;