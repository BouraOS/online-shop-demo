import Headline from './Headline'
import InputRadio from './InputRadio'

export default function FilterByCategories() {


  return (
    <form className="filter-by-categories">
        <Headline title="Categories"/>
        <InputRadio title="All" value="" name="radio-3" />
        <InputRadio title="Watches" value="" name="radio-3" />
        <InputRadio title="Perfumes" value="" name="radio-3" />
        <InputRadio title="Electronics" value="" name="radio-3" />
        <InputRadio title="Jewelry" value="" name="radio-3" />
        <InputRadio title="Accessories" value="" name="radio-3" />
    </form>
  )
}
