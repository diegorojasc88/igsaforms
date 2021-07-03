import React from 'react'
import * as k from '../constants'

function CollapseCard3(props) {
    return (
        <div>
            <div className="card">
                <div style={styles.sectionTitleContainer} className="card-header" id="headingThree">
                    <h5 className="mb-0">
                        <button style={styles.sectionTitle} className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            {props.title}
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
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


export default CollapseCard3
