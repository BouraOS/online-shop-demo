
import { Link } from 'react-router-dom'

export default function SearchBox() {

    return (
        <form className="search-box" >
            <div className="row">
                <div className="col-sm-12">
                    <div className="input-group">
                        <input 
                          type='search' value="" 
                          className="form-control" placeholder="Search products..." />
                        <Link to='' className="input-group-btn">
                            <button className="btn btn-danger" type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    )
}
