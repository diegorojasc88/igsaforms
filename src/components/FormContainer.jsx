import React from 'react'
import logo from "../img/logo-header-v1.png"

function FormContainer(props) {
    return (
        <div>
            <img src={logo} width='100%' style={{ maxWidth: "455px" }} alt="" />
            <h2>{props.formName}</h2>
            <div className="accordion" id="accordionExample">
                {props.accordionContent}

            </div>

        </div>
    )
}

export default FormContainer
