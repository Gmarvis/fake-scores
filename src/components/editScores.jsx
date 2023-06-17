import "./editScores.css"
import React from "react"
import { EditableElement } from "./editableElement"


export const EditScores = ()=>{
    return (
        <div className="editScores">
            <EditableElement>
                <h1>00</h1>
            </EditableElement>
            <h1>:</h1>
            <EditableElement>
                <h1>00</h1>
            </EditableElement>
        </div>
    );
};