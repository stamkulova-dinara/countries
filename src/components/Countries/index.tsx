import {useQuery} from "@apollo/client"
import { ALL_COUNTRIES } from "../../apollo/countries"

export const Countries = () => {
    const { loading, error, data} = useQuery(ALL_COUNTRIES)
    
    
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}