import React from 'react'
import Headline from './Headline'

export default function FilterByColors() {
    return (
        <form className="filter-by-Colors">
            <Headline title="Colors"/>
            <div className="shop-filter__color">
                <input type="text" id="color_1" data-input-color="black" />
                <label htmlFor="color_1" style={{ backgroundColor: "black" }}></label>
            </div>
            <div className="shop-filter__color">
                <input type="text" id="color_2" data-input-color="gray" />
                <label htmlFor="color_2" style={{ backgroundColor: "gray" }}></label>
            </div>
            <div className="shop-filter__color">
                <input type="text" id="color_3" data-input-color="brown" />
                <label htmlFor="color_3" style={{ backgroundColor: "brown" }}></label>
            </div>
            <div className="shop-filter__color">
                <input type="text" id="color_4" data-input-color="beige" />
                <label htmlFor="color_4" style={{ backgroundColor: "beige" }}></label>
            </div>
            <div className="shop-filter__color">
                <input type="text" id="color_5" data-input-color="white" />
                <label htmlFor="color_5" style={{ backgroundColor: "white" }}></label>
            </div>
        </form>
    )
}
