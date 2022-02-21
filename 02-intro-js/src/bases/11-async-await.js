const getImage = async() => {

    try {
        const apiKey = 'wnU97Rp2HfBB5ljVdZMLf9Gs61UH0ivl';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
    } catch (error) {
        //Manejo del error
    }

}

getImage();