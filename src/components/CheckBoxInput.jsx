import React from 'react'

function CheckBoxInput(props) {
    return (
        <div>
            <div className="row" style={{ paddingLeft: '15px' }}>
                <h4 style={{ width: '100%' }}>{props.title}</h4>
                <div className="col-sm-2"><label className="checkbox-inline"><input type="checkbox" id={props.i1} name={props.i1} />
                    {props.o1}</label></div>
                {props.i2 && <div className="col-sm-2"><label className="checkbox-inline"><input type="checkbox" id={props.i2} name={props.i2} />
                    {props.o2}</label></div>}
                {props.i3 && <div className="col-sm-2"><label className="checkbox-inline"><input type="checkbox" id={props.i3} name={props.i3} />
                    {props.o3}</label></div>}
                {props.i4 && <div className="col-sm-2"><label className="checkbox-inline"><input type="checkbox" id={props.i4} name={props.i4} />
                    {props.o4}</label></div>}
                {props.i5 && <div className="col-sm-2"><label className="checkbox-inline"><input type="checkbox" id={props.i5} name={props.i5} />
                    {props.o5}</label></div>}
                {props.i6 && <div className="col-sm-2"><label className="checkbox-inline"><input type="checkbox" id={props.i6} name={props.i6} />
                    {props.o6}</label></div>}
            </div>
        </div>
    )
}

export default CheckBoxInput
