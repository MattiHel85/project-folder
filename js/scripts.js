
function startScript() {
    console.log("Hello World");
    document.body.style.backgroundImage = 'url("img/bg.jpg")';

    var titleWrapperEl = document.createElement ('div');
    titleWrapperEl.id = 'title-wrap'
    document.body.appendChild('titleWrapperEl');
}

document.addEventListener('DOMContentLoaded', startScript);


