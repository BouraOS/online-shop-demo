
import { debounce } from 'lodash';
import { Link, useSearchParams } from 'react-router-dom'

export default function SearchBox() {

    const [search, setSearch] = useSearchParams();

    const onSearchInputChange = debounce((event) => {
        const query = event.target.value;
        //  Search products with json-server =>  ex= ?name_like=searchtext
        if (query.length <= 1) {
            search.delete('name_like')
            setSearch(search, { replace: true });
        } else {
            search.set('name_like', query);
            setSearch(search, { replace: true });
        }
    }, 500)

    return (
        <form className="search-box" >
            <div className="row">
                <div className="col-sm-12">
                    <div className="input-group">
                        <input
                            type='search' 
                            defaultValue={search.get('name_like')}
                            onChange={onSearchInputChange}
                            className="form-control" 
                            placeholder="Search products..." />
                        <Link to='' className="input-group-btn">
                            <button className="btn btn-danger">
                                <i className="fa fa-search"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    )
}
