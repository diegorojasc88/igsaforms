import React from 'react'

function CollapseCard4(props) {
    return (
        <div>
            <div className="card">
                <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            {props.title}
                        </button>
                    </h5>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                    <div className="card-body">
                        {props.accordContent}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollapseCard4
