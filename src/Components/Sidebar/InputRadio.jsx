
export default function InputRadio({title, name, value,}) {

    
    return (
        <label className="control control--radio">{title}
            <input type="radio" name={name} value={value} />
            <div className="control__indicator"></div>
        </label>
    )
}
