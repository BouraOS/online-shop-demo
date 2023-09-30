
export default function InputRadio({title, name, value,sortFunc}) {
    
    return (
        <label className="control control--radio">{title}
            <input type="radio" name={name} value={value} onClick={() => sortFunc(value)}/>
            <div className="control__indicator"></div>
        </label>
    )
}
