import React from 'react'
import InputRadio from './InputRadio'
import Headline from './Headline'

export default function FilterByGender() {
    return (
        <form className="filter-by-gender">
            <Headline title="Gender"/>
            <div className="control-group">
                <InputRadio title="Men" name="radio-2" value=""/>
                <InputRadio title="Women" name="radio-2" value=""/>
            </div>
        </form>
    )
}
