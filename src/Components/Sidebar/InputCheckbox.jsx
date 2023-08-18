import React from 'react'

export default function InputCheckbox({title, value, name}) {
    return (
        <div className="checkbox">
            <input type="checkbox" value={value} name={name} />
            <label htmlFor={name}>{title}</label>
        </div>
    )
}
