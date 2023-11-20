document.getElementById('click-me-button').addEventListener('click', function() {
    alert('You clicked me!');
});

document.getElementById('hover-me-button').addEventListener('mouseover', function() {
    alert('You hovered over me!');
});

let counter = 0;
document.getElementById('counter-button').addEventListener('click', function() {
    counter++;
    console.log(counter);
    document.getElementById('counter-button').innerHTML = counter;
});


document.getElementById('remove-me-button').addEventListener('click', function() {
    document.getElementById('remove-me-button').remove();
});

document.getElementById('hide-me-button').addEventListener('click', function() {
    document.getElementById('hide-me-button').style.display = 'none';
});

document.getElementById('create-input-button').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'number';
    document.getElementById('create-input-button').after(input);
});

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white'];

document.body.style.backgroundColor = colors[0];

setTimeout(function() {
    document.body.style.backgroundColor = colors[1];
}, 3000);

let i = 0;
setInterval(() => {
    document.body.style.backgroundColor = colors[i];
    if(i < colors.length - 1){
        i++;
    } else {
        i = 0;
    }
    
}, 1000);