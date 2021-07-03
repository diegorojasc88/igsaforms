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
import * as k from '../constants';
import logo1 from "../img/fc01img1-402px.png";
import logo2 from "../img/fc01img2-402px.png";
import logo3 from "../img/fc01img3-193px.png";

import FormContext from '../contexts/FormContext';
import { useHistory } from "react-router-dom";


function FC01(props) {

    const { form } = useContext(FormContext);
    let history = useHistory();

    const formType = "FC01";
    const initialState = {
        idObs: '',
        f01i01: '',
        f01i02: '',
        f01i03: '',
        f01i04: '',
    };

    const randomNumberGenerator = () => {
        return ((Math.floor(Math.random() * 998 + 1)) / 1000);
    }

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
            <FormContainer formname="I-07-I-14-R-01 Muestreo" accordionContent={<>
                <CollapseCard1 title="General"
                    accordContent={<>
                        <LabelInput id="f01i01" label="Número de Muestra" onChange={handleInputChange} />
                        <LabelInput id="f01i02" label="Cantidad" onChange={handleInputChange} />
                        <LabelInput id="f01i03" label="Recibido Por" onChange={handleInputChange} />
                        <LabelInput id="f01i04" label="Fecha" onChange={handleInputChange} />
                        <LabelInput id="f01i05" label="Hora" onChange={handleInputChange} />
                        <LabelInput id="f01i06" label="Lugar de muestreo" onChange={handleInputChange} />
                        <LabelInput id="f01i07" label="Nombre del proyecto" onChange={handleInputChange} />
                        <LabelInput id="f01i08" label="Descripción del material" onChange={handleInputChange} />
                        <LabelInput id="f01i09" label="Encargado del muestreo" onChange={handleInputChange} />
                        <LabelInput id="f01i10" label="Responsable de entrega de muestra" onChange={handleInputChange} />

                        <CheckBoxInput title="Ingreso de la muestra"
                            i1="f01i11" o1="Muestreada por laboratorio"
                            i2="f01i12" o2="Aportada"
                            i3="f01i13" o3="Traslado"
                            i4="" o4=""
                            i5="" o5=""
                            i6="" o6=""
                        />
                        <CheckBoxInput title="Condiciones Ambientales"
                            i1="f01i14" o1="Soleado"
                            i2="f01i15" o2="Nublado"
                            i3="f01i16" o3="Lluvioso"
                            i4="f01i17" o4="Noche"
                            i5="f01i18" o5="No indica"
                            i6="" o6=""
                        />
                        <CheckBoxInput title="Condicion de la muestra"
                            i1="f01i19" o1="Contaminada"
                            i2="f01i20" o2="Natural"
                            i3="f01i21" o3="Insuficiente"
                            i4="f01i22" o4="No apto"
                            i5="f01i23" o5="Muy húmeda"
                            i6="" o6=""
                        />
                        <CheckBoxInput title="Equipos y materiales utilizados"
                            i1="f01i24" o1="Pala manual"
                            i2="f01i25" o2="Extractora"
                            i3="f01i26" o3="Equipo pesado"
                            i4="f01i27" o4="Equipo concreto"
                            i5="f01i28" o5="Densímetro"
                            i6="f01i29" o6="Otro"
                        />
                    </>}
                />
                <CollapseCard2 title="Muestreo de Agregados"
                    accordContent={<>
                        <CheckBoxInput title="Muestreo de Agregados"
                            i1="f01i30" o1="Flujo continuo de agregado"
                            i2="f01i31" o2="Banda transportadora"
                            i3="f01i32" o3="Apilamiento"
                            i4="f01i33" o4="Unidades de transporte"
                        />
                        <LabelInput id="f01i34" label="Carreteras Tipo de material" onChange={handleInputChange} />
                        <LabelInput id="f01i35" label="Otros" onChange={handleInputChange} />
                    </>}
                />
                <CollapseCard3 title="Concreto fresco o endurecido"
                    accordContent={<>
                        <LabelInput id="f01i36" label="Mezcladora estacionaria: Cantidad " onChange={handleInputChange} />
                        <LabelInput id="f01i37" label="Pavimentadora: Cantidad" onChange={handleInputChange} />
                        <LabelInput id="f01i38" label="Camión mezclador: Cantidad" onChange={handleInputChange} />
                        <LabelInput id="f01i39" label="Núcleos concreto: Cantidad" onChange={handleInputChange} />
                        <LabelInput id="f01i40" label="Varillas de refuerzo (indicar número y cantidad en observaciones)" onChange={handleInputChange} />
                        <LabelInput id="f01i41" label="Agua para producción de concreto" onChange={handleInputChange} />
                        <LabelInput id="f01i42" label="Moldeo de Cilindros: Cantidad" onChange={handleInputChange} />
                        <LabelInput id="f01i43" label="Resistencia a los 28 d(kg/cm2):" onChange={handleInputChange} />
                        <LabelInput id="f01i44" label="Moldeo de Vigas: Cantidad" onChange={handleInputChange} />
                        <LabelInput id="f01i45" label="Resistencia a los 28 d(kg/cm2):" onChange={handleInputChange} />
                        <LabelInput id="f01i46" label="Moldeo de Cubos: Cantidad" onChange={handleInputChange} />
                        <LabelInput id="f01i47" label="Resistencia a los 28 d(kg/cm2):" onChange={handleInputChange} />
                        <LabelInput id="f01i48" label="Otros" onChange={handleInputChange} />
                    </>}
                />
                <CollapseCard4 title="Mezcla asfáltica"
                    accordContent={<>
                        <CheckBoxInput title="Mezcla asfáltica"
                            i1="f01i49" o1="Unidad de transporte ubicado en planta"
                            i2="f01i50" o2="Unidad de Transporte ubicado en sitio de colocación"
                            i3="f01i51" o3="Carretera"
                            i4="f01i52" o4="Con Polímero"
                            i5="f01i53" o5="Sin Polímero"
                            i6="" o6=""
                        />
                        <LabelInput id="f01i54" label="Ubicación de la planta" onChange={handleInputChange} />
                        <LabelInput id="f01i55" label="Núcleos MAC: Cantidad" onChange={handleInputChange} />
                        <LabelInput id="f01i56" label="Otros" onChange={handleInputChange} />

                    </>}
                />
                <CollapseCard4 title="Asfalto"
                    accordContent={<CheckBoxInput title="Asfalto"
                        i1="f01i57" o1="Camión"
                        i2="f01i58" o2="En tanques de almacenaje"
                        i3="" o3=""
                        i4="" o4=""
                        i5="" o5=""
                        i6="" o6=""
                    />}
                />
                <CollapseCard4 title="Emulsión"
                    accordContent={<>
                        <CheckBoxInput title="Emulsión"
                            i1="f01i59" o1="Puntos de riego"
                            i2="f01i60" o2="En tanques de almacenaje"

                        />
                        <LabelInput id="f01i61" label="Otros" onChange={handleInputChange} />
                    </>}
                />
                <CollapseCard4 title="Suelo"
                    accordContent={<>
                        <CheckBoxInput title="Suelo"
                            i1="f01i62" o1="In situ"
                            i2="f01i63" o2="DCP"
                            i3="f01i64" o3="SPT"
                        />
                        <LabelInput id="f01i65" label="Otros" onChange={handleInputChange} />
                    </>}
                />
                <CollapseCard4 title="Chequeos de compactación"
                    accordContent={<>
                        <LabelInput id="f01i66" label="Mezcla Asfáltica: Fuente" onChange={handleInputChange} />
                        <LabelInput id="f01i67" label="Base: Fuente" onChange={handleInputChange} />
                        <LabelInput id="f01i68" label="Subbase: Fuente" onChange={handleInputChange} />
                        <LabelInput id="f01i69" label="Base Estabilizada: Fuente" onChange={handleInputChange} />
                        <LabelInput id="f01i70" label="Préstamo: Fuente" onChange={handleInputChange} />
                        <LabelInput id="f01i71" label="Subrasante: Fuente" onChange={handleInputChange} />
                        <LabelInput id="f01i72" label="Otros" onChange={handleInputChange} />

                    </>}
                />
                <CollapseCard4 title="Detalles"
                    accordContent={<>
                        <LabelInput id="f01i73" label="Tipo de Muestra" onChange={handleInputChange} />
                        <LabelInput id="f01i74" label="Número de muestras" onChange={handleInputChange} />
                        <LabelInput id="f01i75" label="Resultado" onChange={handleInputChange} />

                    </>}
                />
                <div style={{ display: "flex", flexDirection: "column", margin: "10px 30px" }}>
                    <label>Observaciones</label>
                    <textarea id="idObs" name="observaciones" placeholder="" style={{ height: "90px" }}></textarea>

                </div>

                <h3>Número Aleatorio: {randomNumberGenerator()}</h3>
                <div style={styles.imageContainer} >
                    <img src={logo1} className="img-fluid" width='100%' style={styles.img} alt="logo" />
                </div>
                <div style={styles.imageContainer} >
                    <img src={logo2} className="img-fluid" width='100%' style={styles.img} alt="logo" />
                </div>
                <div style={styles.imageContainer} >
                    <img src={logo3} className="img-fluid" width='100%' style={styles.img3} alt="logo" />
                </div>

            </>} />
            <button style={styles.btn} className="btn btn-block">Enviar</button>
        </form>
    )
}

const styles = {
    btn: {
        color: k.blancoOscuro,
        backgroundColor: k.naranjaClaro,
        fontWeight: "bold",
        fontSize: "25px",
    },
    sectionTitleContainer: {
        display: "flex",
        backgroundColor: k.blancoOscuro,
        padding: "5px 35px",
    },
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
    img3: {
        display: "flex",
        maxWidth: "110px",
        alignSelf: 'center​',
    },
};

export default FC01;
