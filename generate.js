let contentCount = 0;

let setHeading = function (headingText) {
    document.getElementById('heading').innerHTML = headingText;
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
    
    let textSpace = document.createElement('div');
    textSpace.setAttribute('id', 'textSpace_' + contentCount);
    textSpace.setAttribute('class', 'text_space');
    // textSpace.innerHTML = 'Hello world text';

    areaElement.appendChild(imageSpace);
    areaElement.appendChild(textSpace);

    let rowElement = undefined;
    if (contentCount % 3 === 0) {
        rowElement = document.createElement('div');
        rowElement.setAttribute('id', 'row_' + parseInt(contentCount / 3));
        rowElement.setAttribute('class', 'row');
        rowElement.appendChild(areaElement);
        if (contentCount !== 0)
            document.getElementById('content-container').appendChild(document.createElement('hr'));
        document.getElementById('content-container').appendChild(rowElement);
    } else {
        rowElement = document.getElementById('row_' + parseInt(contentCount / 3));
        rowElement.appendChild(areaElement);
    }
    contentCount++;

    return 'content_' + (contentCount - 1);
}

let hideInputSection = function () {
    document.getElementById('inputSection').style.display = 'none';
}

let renderImages = function (files) {
    files.forE
}
