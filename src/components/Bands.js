import React from "react";
import Band from "./Band";

const Bands = (props) => {
    const renderBands = () => {
        return props.bands.map((band) => <Band key={band.id} deleteBand={props.deleteBand} band={band} />)
    }

    return(
        <div>
            <ol>
                {renderBands()}
            </ol>
        </div>
    )
}



export default Bands