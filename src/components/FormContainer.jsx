import React from 'react'
import logo from "../img/logo-header-v1.png"

function FormContainer(props) {
    return (
        <div>
            <div style={styles.imageContainer} >
                <img src={logo} className="img-fluid" width='100%' style={styles.img} alt="logo" />
            </div>

            <h2>{props.formName}</h2>
            <div className="accordion" id="accordionExample">
                {props.accordionContent}

            </div>

        </div >
    );
}

const styles = {
    imageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
    },
    img: {
        display: "flex",
        maxWidth: "400px",
        alignSelf: 'center​',
    },

    due: {
        color: "red"
    }
};



export default FormContainer
