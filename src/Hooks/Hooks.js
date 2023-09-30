import { useSearchParams } from "react-router-dom";
import { apiClient } from "../Api/ApiCalls";
import { useQuery} from "react-query";


export function useAllProducts () {
    const [search] = useSearchParams();
    return  useQuery(['all-products', search.toString()],
    () => apiClient.get('products', {
        params: search,
    }).then(res => res.data), 
    {
        staleTime: 12000,
    })
}