export  function getAnimes(keyword) {
    const apiURL = 'https://api.jikan.moe/v3/search/anime'
    
    return fetch(`${apiURL}?q=${keyword}&limit=20`)
        .then(res => res.json())
        .then(data => {
            return data.results
        })
}