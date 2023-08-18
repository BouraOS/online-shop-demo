import React from 'react'
import Headline from './Headline'

export default function FilterByRange() {
    return (
        <div className="form-group filter-by-range">
            <Headline title="Price Range"/>
            <div className="row">
                <div className="col-4">
                    <label htmlFor="filter-by-range_from" className="sr-only"></label>
                    <input id="filter-by-range_from" type="number" min="0" className="form-control" placeholder="From" />
                </div>
                <div className="col-4">
                    <label htmlFor="filter-by-range_to" className="sr-only"></label>
                    <input id="filter-by-range_to" type="number" min="0" className="form-control" placeholder="To" />
                </div>
                <div className="col-4">
                    <button type="submit" className="btn btn-outline-danger" disabled="">Go</button>
                </div>
            </div>
        </div>
    )
}
