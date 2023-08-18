import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductsPagination({pages, currentPage , setCurrentPage}) {
    const generatedPages = []
    for(let i=1 ; i <= pages; i++) {
        generatedPages.push(i)
    }
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center mt-5">
                {
                generatedPages?.map(num => 
                    <li 
                    class={currentPage === num ? "page-item active" : "page-item"}
                    key={num} 
                    onClick={() => setCurrentPage(num)}
                    >
                        <Link class="page-link" href="#" value>{num}</Link>
                    </li>
                )
                }
            </ul>
        </nav>
    )
}
