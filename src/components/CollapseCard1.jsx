import React from 'react'

function CollapseCard(props) {
    return (
        <div>
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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

export default CollapseCard
