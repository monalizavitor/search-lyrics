const findLyrics = (artist, song) => fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
// Simplificando a função 

const form = document.querySelector('#lyrics-form')

form.addEventListener('submit', el => {
    el.preventDefault()
    doSubmit()
})

async function doSubmit() {
    const lyrics = document.querySelector('#lyrics')
    const artist = document.querySelector('#artist').value
    const song = document.querySelector('#song').value

    if (artist == '' || song == '') return alert('Informe o artista e a musica!')

    try {
        const lyricsResponse = await findLyrics(artist, song)
        const data = await lyricsResponse.json()

        if (data.lyrics == undefined) throw 'Deculpe. Houve um erro!'
        if (data.lyrics == '') throw 'Musica não encontrada!'
        // Se entrar no if ele pula pro catch e o código que esta embaixo nem roda 

        lyrics.innerText = data.lyrics
    }
    catch (error) {
        alert(error)
    }
}
