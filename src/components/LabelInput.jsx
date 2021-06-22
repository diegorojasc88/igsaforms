import React, { useContext } from 'react';
import FormContext from '../contexts/FormContext';

function LabelInput(props) {
    const { form } = useContext(FormContext);
    const localid = props.id;
    return (
        <div>
            <div className="col-sm-2"><label htmlFor={localid}>{props.label}</label>
                <input type="text" onChange={props.onChange} className="form-control" value={form[localid]} name={localid} />
            </div>
        </div>
    )
}

export default LabelInput
