import React from 'react'

function CollapseCard3(props) {
    return (
        <div>
            <div className="card">
                <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
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

export default CollapseCard3
