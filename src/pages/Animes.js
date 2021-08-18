import { useEffect, useState } from "react"
import { getAnimes } from "../services/getAnimes"

import Anime from '../components/Anime'

export default function Animes({params}) {
    const {keyword} = params
    const [animes, setAnimes] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getAnimes(keyword)
            .then(animes => {
                setAnimes(animes)
                setLoading(false)
            })
    }, [keyword])

    if(isLoading) {
        return(
            <div className="animes-container">
                Buscando...
            </div>            
        )
    } else {
        return(
            <div className="animes-container">  
                {animes.map(anime => Anime(anime))}
            </div>
        )
    }
    
}