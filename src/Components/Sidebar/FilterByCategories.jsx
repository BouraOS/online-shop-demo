import { useSearchParams } from 'react-router-dom';
import Headline from './Headline'
import InputRadio from './InputRadio'

export default function FilterByCategories() {
  const [search, setSearch] = useSearchParams();


  const sortFunc = (value) => {
    if(value.length === 0) {
      search.delete("category")
      setSearch(search, { replace: true });
    }else {
      search.set('category', value);
      setSearch(search, { replace: true });
    }
      
  }

  return (
    <form className="filter-by-categories">
        <Headline title="Categories"/>
        <InputRadio title="All" value="" name="radio-3" sortFunc={sortFunc}/>
        <InputRadio title="Watches" value="Watches"  name="radio-3" sortFunc={sortFunc}/>
        <InputRadio title="Perfumes"  value="Perfumes" name="radio-3" sortFunc={sortFunc}/>
        <InputRadio title="Electronics" value="Electronics" name="radio-3" sortFunc={sortFunc}/>
        <InputRadio title="Jewelry" value="Jewelry" name="radio-3"sortFunc={sortFunc} />
        <InputRadio title="Accessories" value="Accessories" name="radio-3" sortFunc={sortFunc}/>
    </form>
  )
}
