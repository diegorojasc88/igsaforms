import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import { toast } from 'react-toastify'

function MainScreen() {
    const [formsTitles, setFormsTitles] = useState([]);

    const deleteForm = async (id) => {
        if (window.confirm('Presione aceptar para elimnar este formulario')) {
            await db.collection('IGSAForms').doc(id).delete();
            toast('Formulario eliminado', {
                type: 'error',
                autoClose: 3000,
            })
        }
    };


    /*CON ESTA FUNCION SE JALAN TODOS LOS DATOS UNA SOLA VEZ
    const getData = async () => {
        const querySnapshot = await db.collection('IGSAForms').get();
        querySnapshot.forEach(doc => {
            console.log(doc.data());
        })
    }*/
    const getData = async () => {
        db.collection('IGSAForms').onSnapshot((querySnapshot) => {
            let docs = [];
            querySnapshot.forEach(doc => {
                let temp = doc.data().f01i1;
                docs.push({ titulo: temp, id: doc.id });
                //docs.push({ ...doc.data(), id: doc.id }); CON ESTA INSTRUCCION AGARRA TODO EL OBJETO Y LE AGREGA EL ID
            });
            setFormsTitles(docs);
            //console.log(docs);
        })
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <div className="col-md-8">
                {formsTitles.map(aForm => (
                    <div className="card mb-1" key={aForm.id}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h4>{aForm.titulo}</h4>
                                <div>
                                    <i className="material-icons text-danger" onClick={() => deleteForm(aForm.id)}>close</i>
                                    <i className="material-icons" onClick={() => deleteForm(aForm.id)}>create</i>
                                </div>

                            </div>
                            <p>{aForm.id}</p>
                            <a href="{/*TODO* PONER AQUI LA RUTA O METODO PARA ACCEDER A LA FORM/}">IR A FORM *TODO*</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainScreen
