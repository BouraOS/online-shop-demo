import React from 'react'
import InputRadio from './InputRadio'
import Headline from './Headline'

export default function SortBox() {
    return (
        <form className="Sort-box">
            <Headline title="Sort by"/>
            <div className="control-group">
                <InputRadio title="Name A-Z" name="radio" value=""/>
                <InputRadio title="Name Z-A" name="radio" value=""/>
                <InputRadio title="Price (low to high)" name="radio" value=""/>
                <InputRadio title="Price (high to low)" name="radio" value=""/>
            </div>
        </form>
    )
}
