import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface Options {
    value:string,
    label:string,
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    options: Array<Options>
}

const Select: React.FC<SelectProps> = ({ label, name, options,...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} { ...rest }>
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option => (
                    <option key={option.value} 
                            value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export default Select;