import React, { useState } from "react";
import "./index.css"

const Validation_Regex = {
    NUMBER: /^[0-9]*$/,
    STRING: /^[a-zA-Z ]*$/,
    DECIMAL: /^(100|([0-9][0-9]?(\.[0-9]+)?))$/,
    UPPERCASE: /^[a-zA-Z0-9]*$/,
    EMAIL: '/^[a-z0-9@.]*$/',
    RESTRICTED: /^[a-zA-Z0-9 ()'&.,-/]*$/gi,
    RESTRICTED2: /^[a-zA-Z0-9 ()@.,-]*$/gi,
    RESTRICTED3: /^[A-Z0-9_-]*$/gi,
};

const InputField = ({ value, label, placeholder, type, inputType, maxlength, avoidSplChar = false, onChange, icon, name, height, width, keyname, important = false, index = '' }) => {
    const [errorValue, setErrorValue] = React.useState(false);

    const _handleOnChange = (e) => {
        if (Object.keys.length > 0) {
            setErrorValue(true);
        }
        if (inputType === 'number') {

            if (Validation_Regex.NUMBER.test(Number(e.target.value))) {

                onChange(keyname, e.target.value.trim(), index);
            } else {
                e.preventDefault();
            }
        }
        if (inputType === 'decimal') {
            if (Validation_Regex.DECIMAL.test(Number(e.target.value))) {
                onChange(keyname, e.target.value.trim(), index);
            }
        }
        if (inputType === 'numberString') {
            if (Validation_Regex.R.test(e.target.value)) {
                onChange(keyname, e.target.value.trim(), index);
            }
        }
        if (inputType === 'string') {
            if (Validation_Regex.STRING.test(e.target.value)) {
                onChange(keyname, e.target.value, index);
            }
        }
        if (inputType === 'upperCase') {
            if (Validation_Regex.UPPERCASE.test(e.target.value)) {
                onChange(keyname, e.target.value.toUpperCase(), index);
            }
        }

        if (inputType === 'restrictedString') {
            if (Validation_Regex.RESTRICTED.test(e.target.value)) {

                onChange(keyname, e.target.value, index);
            }
        }
        if (inputType === 'reasonString') {
            if (Validation_Regex.RESTRICTED2.test(e.target.value)) {

                onChange(keyname, e.target.value, index);
            }
        }
        if (inputType === 'employeeCode') {
            if (Validation_Regex.RESTRICTED3.test(e.target.value)) {
                onChange(keyname, e.target.value.toUpperCase(), index);
            }
        }

        // if (inputType === "emailType") {
        //   if (Validation_Regex.EMAIL.match(e.target.value)) {
        //   onChange(keyname, e.target.value, index);
        //   }
        //   }

        if (inputType === 'mixedString') {
            let value = avoidSplChar ? e.target.value.replace(/[^\w\s]/gi, '') : e.target.value;
            if (type === 'text') {
                onChange(keyname, String(value), index);
            } else {
                onChange(keyname, value, index);
            }
        }

        if (inputType === 'emailType') {
            let value = avoidSplChar ? e.target.value.replace(/[^\w\s@.]/gi, '') : e.target.value;
            if (type === 'email') {
                onChange(keyname, String(value).toLowerCase(), index);
            } else {
                onChange(keyname, value, index);
            }
        } else {
            e.preventDefault();
        }
    };
    return (
        <>
            <div className="form-group">
                {label && <label htmlFor="input-field">{label} {important && <span className='important-field'>*</span>}{' '}</label>}
            <div className="form-input">
                <input
                    width={width}
                    name={name}
                    keyname={keyname}
                    inputType={inputType}
                    type={type}
                    value={value}
                    class={icon}
                    // className="form-control"
                    placeholder={placeholder}
                    onChange={_handleOnChange}
                    style={{ height: height }}
                    maxlength={maxlength}
                />
            </div>
        </div >
        </>
    );
};

export default InputField;