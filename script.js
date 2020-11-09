const findLyrics = (artist, song) => {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)

}

const form = document.querySelector('#lyrics-form')
form.addEventListener('submit', el => {
    el.preventDefault()
    doSubmit()
})

async function doSubmit() {
    const lyrics = document.querySelector('#lyrics')
    const artist = document.querySelector('#artist').value
    const song = document.querySelector('#song').value

    try {
        const lyricsResponse = await findLyrics(artist, song)
        const data = await lyricsResponse.json()

        if (data.lyrics == undefined)
            throw 'Deculpe. Houve um erro!'
        else
            lyrics.innerHTML = data.lyrics
    } 
    catch (error) {
        alert(error) 
    }
}