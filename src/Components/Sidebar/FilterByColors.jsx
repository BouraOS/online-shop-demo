import React from 'react'
import Headline from './Headline'
import { useSearchParams } from 'react-router-dom';

export default function FilterByColors() {


    const [search, setSearch] = useSearchParams();

    const sortFunc = (event) => {
        let value = event.target.value;

        if(value.length === 0) {
            search.delete("color");
            setSearch(search, { replace: true });
        }
        if(value) {
            search.delete("color");
            search.set('color', value);
            setSearch(search, { replace: true });
        }
    }

    return (
        <form className="filter-by-Colors">
            <Headline title="Colors"/>
            <div className="shop-filter__color">
                <input type="text" id="color" value="" onClick={sortFunc}/>
                <label htmlFor="color"
                style={{ background: "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)" }}></label>
            </div>
            <div className="shop-filter__color">
                <input type="text" id="color_1" value="black" onClick={sortFunc}/>
                <label htmlFor="color_1" style={{ backgroundColor: "black" }}></label>
            </div>
            <div className="shop-filter__color">
                <input type="text" id="color_2" value="gray" onClick={sortFunc}/>
                <label htmlFor="color_2" style={{ backgroundColor: "gray" }}></label>
            </div>
            <div className="shop-filter__color">
                <input type="text" id="color_3" value="red" onClick={sortFunc} />
                <label htmlFor="color_3" style={{ backgroundColor: "red" }}></label>
            </div>
            <div className="shop-filter__color">
                <input type="text" id="color_4" value="blue" onClick={sortFunc}/>
                <label htmlFor="color_4" style={{ backgroundColor: "blue" }}></label>
            </div>
            <div className="shop-filter__color">
                <input type="text" id="color_5" value="white" onClick={sortFunc} />
                <label htmlFor="color_5" style={{ backgroundColor: "white" }}></label>
            </div>
            <div className="shop-filter__color">
                <input type="text" id="color_6" value="yellow" onClick={sortFunc} />
                <label htmlFor="color_6" style={{ backgroundColor: "#F4BF20" }}></label>
            </div>

        </form>
    )
}
