import React from 'react'
import InputRadio from './InputRadio'
import Headline from './Headline'
import { useSearchParams } from 'react-router-dom';

export default function FilterByGender() {
    
    const [search, setSearch] = useSearchParams();

    const sortFunc = (value) => {
        if(value.length === 0) {
            search.delete("gender");
            setSearch(search, { replace: true });
        }
        if(value) {
            search.set('gender', value);
            setSearch(search, { replace: true });
        }
    }
    return (
        <form className="filter-by-gender">
            <Headline title="Gender"/>
            <div className="control-group">
                <InputRadio title="Men" name="radio-2" value="men" sortFunc={sortFunc}/>
                <InputRadio title="Women" name="radio-2" value="women" sortFunc={sortFunc}/>
            </div>
        </form>
    )
}
