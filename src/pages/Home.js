import { useState } from "react"
import { useLocation } from 'wouter';

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [,pushLocation] = useLocation([])

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/animes/${keyword}`)
    }

    const handleSearch = evt => {
        setKeyword(evt.target.value)
    }

    return(
        <div className="home-container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Busca tu anime" value={keyword} onChange={handleSearch}/>
            </form>
            <h3> ¡Bienvenido! </h3>
        </div>
    )
}