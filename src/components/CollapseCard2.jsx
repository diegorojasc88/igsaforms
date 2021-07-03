import React from 'react'
import * as k from '../constants'

function CollapseCard2(props) {
    return (
        <div>
            <div className="card">
                <div style={styles.sectionTitleContainer} className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button style={styles.sectionTitle} className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            {props.title}
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                        {props.accordContent}
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    sectionTitle: {
        color: k.negroClaro,
        fontWeight: "bold",
        fontSize: "25px",

    },
    sectionTitleContainer: {
        display: "flex",
        backgroundColor: k.blancoOscuro,
        padding: "5px 35px",
    },
};


export default CollapseCard2
