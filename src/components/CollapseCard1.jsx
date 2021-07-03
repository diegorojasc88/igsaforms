import React from 'react';
import * as k from '../constants'

function CollapseCard(props) {
    return (
        <div>
            <div className="card">
                <div style={styles.sectionTitleContainer} className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button style={styles.sectionTitle} className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {props.title}
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
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

export default CollapseCard
