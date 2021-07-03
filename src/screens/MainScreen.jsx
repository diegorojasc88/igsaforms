import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { c } from '../constants';

function MainScreen(props) {
    const [formsTitles, setFormsTitles] = useState([]);
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    const editForm = async (id, formType) => {
        console.log('Entra a funcion editForm');
        const querySnapshot = await db.collection('IGSAForms').doc(id).get();
        props.setForm(querySnapshot.data());

        let ruta = "/".concat(formType);
        history.push(ruta);
    };

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
        setLoading(true);
        db.collection('IGSAForms').onSnapshot((querySnapshot) => {
            let docs = [];
            querySnapshot.forEach(doc => {
                let temp1 = doc.data().f01i04;
                let temp2 = doc.data().f01i05;
                let temp = temp1 + " " + temp2;
                let temp3 = doc.data().formType;
                docs.push({ titulo: temp, id: doc.id, formType: temp3 });
                //docs.push({ ...doc.data(), id: doc.id }); CON ESTA INSTRUCCION AGARRA TODO EL OBJETO Y LE AGREGA EL ID
            });
            setFormsTitles(docs);
            //console.log(docs);
        })
        setLoading(false);
    }
    useEffect(() => {
        try {
            getData();
            return () => {
                setFormsTitles([]);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    if (loading) {
        return <h2>Cargando Datos...</h2>
    }

    return (
        <div className="col-md-8">
            {formsTitles.map(aForm => (
                <div className="card mb-1" key={aForm.id}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h4>{aForm.titulo}</h4>
                            <div>
                                <i className="material-icons text-danger" onClick={() => deleteForm(aForm.id)}>close</i>
                                <i className="material-icons" onClick={() => editForm(aForm.id, aForm.formType)}>create</i>
                            </div>

                        </div>
                        <p>{aForm.id}</p>
                        <h5>{c[aForm.formType]}</h5>
                        <Link to="/create">To Form</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MainScreen
