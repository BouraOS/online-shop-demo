import './Sidebar.css'
import SearchBox from './SearchBox'
import SortBox from './SortBox'
import FilterByRange from './FilterByRange'
import FilterByCategories from './FilterByCategories'
import FilterByGender from './FilterByGender'
import FilterByColors from './FilterByColors'

export default function Sidebar() {
  return (
    <div className="Sidebar col-4 col-lg-3 d-none d-md-block mt-md-3">
        <SearchBox/>
        <SortBox />
        <FilterByRange />
        <FilterByCategories />
        <FilterByGender />
        <FilterByColors />
    </div>
  )
}
