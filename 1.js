var btn = document.getElementById('btn');
var content = document.getElementById("content");
var text = document.getElementById('text');
btn.addEventListener('click', function show(e) {
    text.innerHTML = `<h2>${content.value}</h2>`;
})
