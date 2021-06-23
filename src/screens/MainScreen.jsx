import React, { useEffect } from 'react';
import { db } from '../Firebase';

function MainScreen() {
    /*CON ESTA FUNCION SE JALAN TODOS LOS DATOS UNA SOLA VEZ
    const getData = async () => {
        const querySnapshot = await db.collection('IGSAForms').get();
        querySnapshot.forEach(doc => {
            console.log(doc.data());
        })
    }*/


    const getData = async () => {
        db.collection('IGSAForms').onSnapshot((querySnapshot) => {
            querySnapshot.forEach(doc => {
                console.log(doc.data());
            });
        })
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <h2>Hola Mundooo</h2>
        </div>
    )
}

export default MainScreen
