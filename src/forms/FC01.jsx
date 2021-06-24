import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import CheckBoxInput from '../components/CheckBoxInput';
import CollapseCard1 from '../components/CollapseCard1';
import CollapseCard2 from '../components/CollapseCard2';
import CollapseCard3 from '../components/CollapseCard3';
import CollapseCard4 from '../components/CollapseCard4';
import FormContainer from '../components/FormContainer';
import LabelInput from '../components/LabelInput';
import { db } from '../Firebase';

import FormContext from '../contexts/FormContext';
import { useHistory } from "react-router-dom";


function FC01(props) {

    const { form } = useContext(FormContext);
    let history = useHistory();

    const formType = "FC01";
    const initialState = {
        f01i1: '',
        f01i2: '',
        i3: '',
        i4: ''
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        props.setForm({ ...form, [name]: value, 'formType': formType })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(form);
        await writeOnFB(form);
        props.setForm({ ...initialState });
        history.push("/");
    }

    const writeOnFB = async (form) => {
        await db.collection('IGSAForms').doc().set(form)
        toast('Formulario agregado', {
            type: 'success'
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormContainer formname="I-07-I-14-R-01 Muestreo" accordionContent={
                <>
                    <CollapseCard1 title="Nuevo2 sirve"
                        accordContent={<>
                            <LabelInput id="f01i1" label="Fecha" onChange={handleInputChange} />
                            <LabelInput id="f01i2" label="Hora" onChange={handleInputChange} />
                            <CheckBoxInput title="Clima"
                                i1="f01i3" o1="Soleado"
                                i2="f01i4" o2="Nublado"
                                i3="f01i5" o3="Lluvioso"
                            />
                        </>}
                    />
                    <CollapseCard2 title="Nuevo2 sirve"
                        accordContent={<LabelInput id="v2" label="Fecha" />}
                    />
                    <CollapseCard3 title="Nuevo2 sirve"
                        accordContent="Contenido Props"
                    />
                    <CollapseCard4 title="Nuevo2 sirve"
                        accordContent="Contenido Props"
                    />
                </>
            } />
            <button className="btn btn-block">Enviar</button>

        </form>
    )
}
export default FC01;
