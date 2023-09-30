import React from 'react'
import InputRadio from './InputRadio'
import Headline from './Headline'
import { useSearchParams } from 'react-router-dom';

export default function SortBox() {

    const [search, setSearch] = useSearchParams();

    const sortFunc = (value) => {
      if(value.length === 0) {
        search.delete("_sort");
        setSearch(search, { replace: true });
      }else {
        if(value === "A-Z") {
            search.delete("_sort");
            search.set('_sort', 'name');
            setSearch(search, { replace: true });
        }
        if(value === "Z-A") {
            search.delete("_sort");
            search.set('_sort','name');
            search.set('_order', 'desc');
            setSearch(search, { replace: true });
        }
        if(value === "low") {
            search.delete("_sort");
            search.delete('_order');
            search.set('_sort','newPrice');
            setSearch(search, { replace: true });
        }
        if(value === "high") {
            search.delete("_sort");
            search.delete('_order');
            search.set('_sort','newPrice');
            search.set('_order', 'desc');
            setSearch(search, { replace: true });
        }
      }
        
    }

    return (
        <form className="Sort-box">
            <Headline title="Sort by"/>
            <div className="control-group">
                <InputRadio title="Name A-Z" name="radio" value="A-Z" sortFunc={sortFunc} />
                <InputRadio title="Name Z-A" name="radio" value="Z-A" sortFunc={sortFunc} />
                <InputRadio title="Price (low to high)" name="radio" value="low" sortFunc={sortFunc}/>
                <InputRadio title="Price (high to low)" name="radio" value="high" sortFunc={sortFunc}/>
            </div>
        </form>
    )
}
