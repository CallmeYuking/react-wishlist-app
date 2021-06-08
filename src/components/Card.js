import React, {useState} from 'react'

const Card = ({companyObj, index, deleteTask}) => {
    const colors = [
        {
            primaryColor : "#5D93E1",
        },
        {
            primaryColor : "#F9D288",
        },
        {
            primaryColor : "#5DC250",
        },
        {
            primaryColor : "#F48687",
        },
        {
            primaryColor : "#B964F7",
        }
    ]

    const handleDelete = () => {
        deleteTask(index)
    }
    return (
        <div class = "card-wrapper mr-5 mb-2" style={{"backgroundColor":colors[index%5].primaryColor}}>
            <div class = "card-top" style={{}}></div>
            <div class = "task-holder" >
                <span class = "card-header">{companyObj.company}</span>
                <p className = "mt-3">{companyObj.job}</p>
                
                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class="fas fa-trash-alt mr-3" style = {{"color" : "grey", "cursor" : "pointer"}} onClick={handleDelete}></i>
                   
                </div>
            </div>
            
        </div>
    )
}

export default Card
