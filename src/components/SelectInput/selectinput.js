import React from 'react';
import Select from 'react-select';

import './index.css';

const SelectInputField = ({
     title = true,
     options = [],
     name = 'Input',
     keyname,
     placeholder = '',
     onChange,
     width = '100%',
     height = '90px',
     OptionSelectHeight = '40px',
     index = '',
     style,
     value,
     error = false,
     disable = false,
     important = false,
}) => {
     const optionSelectProps = {
          style: { ...style, width: width, height: height },
     };

     const _handleOnchange = (e) => {
          onChange(keyname, e, index);
     };

     const customStyles = {
          option: (provided, state) => ({
               ...provided,
               fontFamily: state.isSelected ? 'Poppins-Medium' : 'Poppins-Medium',
               fontSize: '12px',
               background: state.isFocused ? '#1167b2' : '#fff',
               color: state.isFocused ? '#fff' : '#000'
          }),
     };

     return (
        <div className="form-group">
            {name && <label htmlFor="input-field">{name}</label>}
            <div className="form-input">
               <Select
            //    name={name}
                    options={options}
                    width={width}
                    isDisabled={disable}
                    // className={'HR-option-select'}
                    placeholder={placeholder ?  <div className="select-placeholder-text">{placeholder}</div> : <div className="select-placeholder-text">Select category</div>}
                    value={value}
                    style={{ height: OptionSelectHeight }}
                    onChange={_handleOnchange}
                    styles={customStyles}
                    index={index !== '' ? index : ''}
               />
          </div>
          </div>
     );
};

export default SelectInputField;
