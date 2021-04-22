let baton = document.querySelector('button');

class Options{
    constructor(height = '100px', width = '100px', bg = 'yellow', fontSize = '20px', textAlign = 'center'){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createNewDiv(text) {
        let newDiv = document.createElement("div");
        document.body.appendChild(newDiv);
        newDiv.textContent = text;
        newDiv.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
    }
}

let newObj = new Options('150px', '300px');
console.log(newObj);
// newObj.createNewDiv('hello');

baton.addEventListener('click', function(){
    newObj.createNewDiv();
});