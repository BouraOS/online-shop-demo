import './Sidebar.css'
import SearchBox from './SearchBox'
import SortBox from './SortBox'
import FilterByRange from './FilterByRange'
import FilterByCategories from './FilterByCategories'
import FilterByGender from './FilterByGender'
import FilterByColors from './FilterByColors'

export default function Sidebar({query, handleSearchInputChange}) {
  return (
    <>
        <SearchBox query={query} handleSearchInputChange={handleSearchInputChange} />
        <SortBox />
        <FilterByRange />
        <FilterByCategories />
        <FilterByGender />
        <FilterByColors />
    </>
  )
}
