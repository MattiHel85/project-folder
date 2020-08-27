
function startScript() {
    console.log("Hello World");
    document.body.style.backgroundImage = 'url("img/bg.jpg")';

    var titleWrapperEl = document.createElement ('div');
    titleWrapperEl.id = 'title-wrap';
    titleWrapperEl.style.top = '50%';
    titleWrapperEl.style.width = '100%';
    titleWrapperEl.style.textAlign = '50%';
    titleWrapperEl.style.fontFamily = '50%';
    document.body.appendChild('titleWrapperEl');
}

document.addEventListener('DOMContentLoaded', startScript);


