import React from "react"

const Band = (props) => {
    return (
        <div>
            <li>
                <span>{props.band.name}</span>
                <button onClick={() => props.deleteBand(props.band.id)}>Delete</button>
            </li>
        </div>
    )
}

export default Band