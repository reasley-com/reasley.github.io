const images = [ "0.jpg", "1.jpg" ]
changeBackgroundImage(images[Math.floor(Math.random() * images.length)])
function changeBackgroundImage(chosenImage) { document.body.style.backgroundImage = `url("image/${chosenImage}")` }