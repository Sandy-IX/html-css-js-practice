function roll(){
    const noroll = document.getElementById("no").value;
    const result = document.getElementById("result");
    const images = document.getElementById("images");
    const values = [];
    const img = [];

    for(let i= 0; i < noroll; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        img.push(`<img src="${value}.png" alt="Dice ${value}">`);
    }
    result.textContent = `Dice: ${values.join(', ')}`;
    images.innerHTML = img.join('');
    }