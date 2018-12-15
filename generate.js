let contentCount = 0;

let setHeading = function () {
    document.getElementById('heading').innerHTML = document.getElementById('headingInput').value;
}

let createContentArea = function() {
    let areaElement = document.createElement('div');
    areaElement.setAttribute('id', 'content_' + contentCount);
    areaElement.setAttribute('class', 'content_area');
    
    let imageSpace = document.createElement('img');
    imageSpace.setAttribute('id', 'imageSpace_' + contentCount);
    imageSpace.setAttribute('class', 'image_space');
    // imageSpace.setAttribute('src', 'test_images/2.jpg');
    // imageSpace.innerHTML = 'Hello world image';
    
    let textSpace = document.createElement('textArea');
    textSpace.setAttribute('id', 'textSpace_' + contentCount);
    textSpace.setAttribute('class', 'text_space');
    textSpace.style.boxSizing = 'border-box';
    textSpace.value = 'Write your memory!';
    textSpace.addEventListener('keypress', function (e) {
        if (e.which === 13 && !e.shiftKey) {
            let text = textSpace.value;
            let newSpan = document.createElement('span');
            newSpan.setAttribute('class', 'text_space');
            newSpan.setAttribute('id', textSpace.getAttribute('id'));
            newSpan.innerHTML = text;
            newSpan.onclick = function () {
                newSpan.parentElement.replaceChild(textSpace, newSpan);
            }
            textSpace.parentElement.replaceChild(newSpan, textSpace);
        }
    });

    let removeButton = document.createElement('button');
    removeButton.innerHTML = '&times';
    removeButton.style.borderRadius = '10px';
    removeButton.style.borderColor = 'black';
    removeButton.style.borderStyle = 'solid';
    removeButton.style.borderWidth = '1px';
    removeButton.style.margin = '0.5%';
    removeButton.style.backgroundColor = 'Transparent';

    removeButton.setAttribute('id', 'remove');
    // removeButton.setAttribute('style', 'remove_button');
    removeButton.onclick = function () {
        let toRemove = this.parentNode.id.split('_')[1];
        document.getElementById('content_' + toRemove).style.display = 'none';
    }

    areaElement.appendChild(removeButton);
    areaElement.appendChild(imageSpace);
    areaElement.appendChild(textSpace);

    let rowElement = undefined;
    // if (contentCount % 3 === 0) {
    //     rowElement = document.createElement('div');
    //     rowElement.setAttribute('id', 'row_' + parseInt(contentCount / 3));
    //     rowElement.setAttribute('class', 'row');
    //     rowElement.appendChild(areaElement);
    //     if (contentCount !== 0)
    //         document.getElementById('content-container').appendChild(document.createElement('hr'));
    //     document.getElementById('content-container').appendChild(rowElement);
    // } else {
        // rowElement = document.getElementById('row_' + parseInt(contentCount / 3));
        // rowElement.appendChild(areaElement);
        document.getElementById('content-container').appendChild(areaElement);
    // }
    contentCount++;

    return (contentCount - 1);
}

let hideInputSection = function () {
    document.getElementById('inputSection').style.display = 'none';
    document.getElementById('addButton').style.display = 'none';
    
    document.querySelectorAll('#remove').forEach(e => {
        e.style.display = 'none';
    });

    document.getElementById('showMenu').style.display = 'block';
}

let renderImage = function (inputSourceFile) {
    let sourceFile = inputSourceFile;
    let reader = new FileReader();
    let resourceNumber = createContentArea();
    let target = document.getElementById('imageSpace_' + resourceNumber);

    reader.addEventListener("load", function (f) {
        target.src = reader.result;
    }, false);

    if (sourceFile)
        reader.readAsDataURL(sourceFile);
}

let showEditMenu = function () {
    document.getElementById('inputSection').style.display = 'block';
    document.getElementById('addButton').style.display = 'flex';
    
    document.querySelectorAll('#remove').forEach(e => {
        e.style.display = 'block';
    });

    document.getElementById('showMenu').style.display = 'none';
}

let createPreview = function () {
    setHeading();
    document.body.style.backgroundColor=document.getElementById('colorChoice').value;

    let inputFiles = document.getElementById('fileInput').files;

    Array.from(inputFiles).forEach(f => {
        renderImage(f);
    });

    let cardColor = document.getElementById('cardChoice').value;
    document.querySelectorAll('.content_area').forEach(e => {
        e.style.backgroundColor = cardColor;
    });
}

window.onload = function () {
    document.getElementById('showMenu').style.display = 'none';
}