const images = [
    {url: 'fut9.png', font: 'Audiowide', textColor: 'white'},
    {url: 'fut2.png', font: 'Michroma', textColor: 'white'},
    {url: 'fut3.png', font: 'Exo', textColor: 'white'},
    {url: 'fut4.png', font: 'Syne', textColor: 'aquamarine'},
    {url: 'fut5.png', font: 'Exo', textColor: 'white'},
    {url: 'fut6.png', font: 'Orbitron', textColor:'orange'},
    {url: 'fut7.png', font: 'Audiowide', textColor:'yellow'},
    {url: 'fut8.png', font: 'Michroma', textColor: 'teal'}
  ];
  
  function setRandomBackground() {
    let randomIndex = Math.floor(Math.random() * images.length);
    let {url, font, textColor} = images[randomIndex];
    document.body.style.backgroundImage = `url(${url})`;
    document.body.style.color = textColor;
    document.body.style.fontFamily = font;
  }
  
  setRandomBackground();
  