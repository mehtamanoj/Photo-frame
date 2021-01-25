let imgChoosen = false;

let imgSrc = 'img/upload.png';

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
});

// ------------------------------//


// common var (boxes)
let middleBox, leftBox, rightBox, topBox, bottomBox;
middleBox = document.querySelector('.middleBox')
leftBox = document.querySelector('.leftBox')
rightBox = document.querySelector('.rightBox')
topBox = document.querySelector('.topBox')
bottomBox = document.querySelector('.bottomBox');

let mainImg, leftBoxImg, rightBoxImg, topBoxImg, bottomBoxImg;

mainImg = document.getElementById('middlePic');
leftBoxImg = document.getElementById('leftBoxImg');
rightBoxImg = document.getElementById('rightBoxImg');
topBoxImg = document.getElementById('topBoxImg');
bottomBoxImg = document.getElementById('bottomBoxImg');


let height, width;
heightOriginal = 380;
widthOriginal = 380;

let windowResize = () => {

    if (window.matchMedia("(max-width: 550px)").matches) {
        heightOriginal = 230;
        widthOriginal = 230;
    } else if (window.matchMedia("(max-width: 780px)").matches) {
        heightOriginal = 380;
        widthOriginal = 380;
    } else if (window.matchMedia("(max-width: 969px)").matches) {
        heightOriginal = 330;
        widthOriginal = 330;
    } else if (window.matchMedia("(max-width: 1020px)").matches) {
        heightOriginal = 380;
        widthOriginal = 380;
    } else if (window.matchMedia("(max-width: 1140px)").matches) {
        heightOriginal = 380;
        widthOriginal = 380;
    }
    middleBox.style.height = `${heightOriginal}px`;
    middleBox.style.width = `${widthOriginal}px`;
    leftBox.style.height = `${heightOriginal}px`;
    rightBox.style.height = `${heightOriginal}px`;
    topBox.style.width = `${widthOriginal}px`;
    bottomBox.style.width = `${widthOriginal}px`;
    document.querySelector('.verticalWidthScale').style.height = `${heightOriginal}px`;

}
windowResize();

window.addEventListener("resize", windowResize);


// adding src to mainimg
mainImg.src = imgSrc;

let gw1, gw2, rc, me, we, ce;
gw1 = document.getElementById('gw1');
gw2 = document.getElementById('gw2');
rc = document.getElementById('rc');
me = document.getElementById('me');
we = document.getElementById('we');
ce = document.getElementById('ce');

let selectedCwHandler = (element) => {
    let items = [gw1, gw2, rc];
    let i = items;
    let index = i.indexOf(element)
    i.splice(index, 1);

    element.classList.add('selected');
    element.children[0].classList.add('selectedImg');

    i.map(e => {
        e.classList.remove('selected')
        e.children[0].classList.remove('selectedImg')
    })

    let allBoxArr = [topBox, rightBox, bottomBox, leftBox];

    allBoxArr.map(e => {
        e.style.display = "block";
    })
    // displaying canavas edging section due to rolled canavas
    document.getElementById('canavasEdgingContainer').style.display = "block";
    // console.log(imgSrc)
}

let selectedCeHandler = (element) => {
    let items = [me, we, ce];
    let i = items;
    let index = i.indexOf(element)
    i.splice(index, 1);

    let boxImgArr = [topBoxImg, rightBoxImg, bottomBoxImg, leftBoxImg, mainImg];

    boxImgArr.map(e => {
        e.style.display = "block"
    })

    element.classList.add('selected');
    element.children[0].classList.add('selectedImg');

    document.getElementById('colorPdiv').style.display = 'none';
    document.getElementById('colorP').value = "#FFFFFF";
    // coloredEdgeHandler();
    i.map(e => {
        e.classList.remove('selected')
        e.children[0].classList.remove('selectedImg')
    })

    let boxArr = [leftBox, rightBox, topBox, bottomBox];

    boxArr.map(e => {
        e.style.backgroundColor = `transparent`;
    });

    backWrapperImg.style.backgroundSize = "0%"

}


let color = (ele) => {
    selectedCeHandler(ele);
    document.getElementById('colorPdiv').style.display = 'block'
}

let dimensionChangeHandler = () => {
    let height, width, selectHeight, selectWidth;
    selectHeight = parseInt(document.getElementById('height').value)
    selectWidth = parseInt(document.getElementById('width').value)
    let ratio = 1;

    let verticalScale, horizontalScale;
    verticalScale = document.getElementById('inchHeightScale')
    horizontalScale = document.getElementById('inchWidthScale')

    horizontalScale.textContent = `${selectWidth}Inch`
    verticalScale.textContent = `${selectHeight}Inch`

    // const getStyle = getComputedStyle(element);

    height = heightOriginal;
    width = widthOriginal;

    let heiArr = [middleBox, leftBox, rightBox];
    let widArr = [middleBox, topBox, bottomBox];

    if (selectWidth >= selectHeight) {
        let selectWidth = document.getElementById('width').value
        ratio = selectHeight / selectWidth;
        heightN = eval(height * ratio)

        heiArr.map(e => {
            e.style.height = `${heightN}px`;
        })

        widArr.map(e => {
            e.style.width = `${width}px`;
        })
        document.querySelector('.verticalWidthScale').style.height = `${heightN}px`;
        // console.log(selectWidth)

    } else if (selectHeight >= selectWidth) {
        ratio = selectWidth / selectHeight;
        widthN = eval(width * ratio);

        widArr.map(e => {
            e.style.width = `${widthN}px`;
        })

        heiArr.map(e => {
            e.style.height = `${height}px`;
        })
        document.querySelector('.verticalWidthScale').style.height = `${heightN}px`;
    }
}

// zoom function

var zoomer = document.getElementById('zoomer');
var hubblepic = document.getElementById('middlePic');
let backWrapperImg = document.querySelector('.img_box');
let zoomL = 1;
let zoomLeve = 1;
function deepdive() {
    if (imgChoosen) {
        let zoomlevelM = (zoomer.valueAsNumber);
        let zoomlevel = (zoomlevelM + 40) / 41;
        zoomLeve = zoomlevel;
        // console.log(zoomlevel)
        zoomL = zoomlevel;
        topBoxImg.style.transform = `scaleX(-1) scale(${zoomlevel})`;
        bottomBoxImg.style.transform = `scaleY(-1) scale( ${zoomlevel})`;
        leftBoxImg.style.transform = `scaleX(-1) scale(${zoomlevel})`;
        rightBoxImg.style.transform = `scaleX(-1) scale(${zoomlevel})`;
        mainImg.style.transform = `scale(${zoomlevel})`;

        // hubblepic.style.webkitTransform = "scale(" + zoomlevel + ")";
        // hubblepic.style.transform = "scale(" + zoomlevel + ")";
        backWrapperImg.style.backgroundSize = `${100 + (zoomlevel * 40)}%`;
        const el = document.querySelector('.img_box');
        el.style.setProperty('--x', 50 + "%");
        el.style.setProperty('--y', 50 + "%");
        if (zoomlevel == 1 && zoomlevel < 30) {
            backWrapperImg.style.backgroundSize = "cover";
            const el = document.querySelector('.img_box');
            el.style.setProperty('--x', 50 + "%");
            el.style.setProperty('--y', 50 + "%");
        }

    }

}

// wrapper functions 

let galleryWrapDimensionHandler = (dimension) => {
    let sideBoxArr = [rightBox, leftBox];
    let upDownBoxArr = [topBox, bottomBox];
    let span = document.getElementsByClassName('boxCornerWrapSpan');

    for (i = 0; i <= 3; i++) {
        span[i].style.width = `${dimension}px`;
        span[i].style.height = `${dimension}px`;
    }

    sideBoxArr.map(e => {
        e.style.width = `${dimension}px`;
    });

    upDownBoxArr.map(e => {
        e.style.height = `${dimension}px`
    })

}


let wrappedEdgeHandler = (ele) => {
    console.log('Wrapped Edge')
    selectedCeHandler(ele);
    backWrapperImg.style.backgroundSize = "cover";
    // backWrapperImg.style.backgroundPosition = '0 0';
    zoomer.valueAsNumber = 1;

    const el = document.querySelector('.img_box');
    el.style.setProperty('--x', 0 + "px");
    el.style.setProperty('--y', 0 + "px");

    let imgBox = document.querySelector('.img_box');
    let boxImgArr = [topBoxImg, rightBoxImg, bottomBoxImg, leftBoxImg, mainImg];

    boxImgArr.map(e => {
        e.style.display = "none";
        console.log(e)
    })
    imgBox.style.backgroundImage = `url(${imgSrc})`;
    console.log('Wrapped Edge')

}

let coloredEdgeHandler = () => {
    let inputColor = document.getElementById('colorP');
    let inputValue = inputColor.value;

    let boxArr = [leftBox, rightBox, topBox, bottomBox];

    boxArr.map(e => {
        e.style.backgroundColor = `${inputValue}`;
    });

    let boxImgArr = [topBoxImg, rightBoxImg, bottomBoxImg, leftBoxImg];

    boxImgArr.map(e => {
        e.src = "";
    })
    backWrapperImg.style.backgroundSize = "105%"

}


// image functions
let horiImgArr, verticalImgArr;

horiImgArr = [leftBoxImg, rightBoxImg];
verticalImgArr = [topBoxImg, bottomBoxImg];

let mirroredImageHandler = (ele) => {
    selectedCeHandler(ele);
    mainImg.style.transform = "scale(1)";
    document.getElementById('zoomer').value = "1";

    let mainImgCopy = imgSrc;
    horiImgArr.map(e => {
        e.src = mainImgCopy;
        e.style.transform = 'scaleX(-1)';
    });

    verticalImgArr.map(e => {
        e.src = mainImgCopy;
    })
    bottomBoxImg.style.transform = 'scaleY(-1)';
    topBoxImg.style.transform = 'scaleX(-1)';

    document.querySelector('.img_box').style.backgroundImage = 'none';
}

let rolledCanavsHandler = (ele) => {
    selectedCwHandler(ele);
    mainImg.style.display = "block";

    let allBoxArr = [topBox, rightBox, bottomBox, leftBox];

    allBoxArr.map(e => {
        e.style.display = "none";
    })

    document.querySelector('.img_box').style.backgroundImage = 'none';
    document.getElementById('canavasEdgingContainer').style.display = "none";
    mirroredImageHandler(document.getElementById('me'));
}

// preview canavas

let previewCanvasHandler = () => {
    if (imgChoosen) {

        document.getElementById('imgUploadedError').classList.add("none")
        document.getElementById('modalOnImgUploaded').classList.remove("none")

        let img = document.getElementById('previewModalImg')
        img.src = mainImg.src;

        // adjusting dimensions of preview canavas
        let height, width, selectHeight, selectWidth;
        selectHeight = parseInt(document.getElementById('height').value)
        selectWidth = parseInt(document.getElementById('width').value)
        let ratio = 1;

        // const getStyle = getComputedStyle(element);

        height = 300;
        width = 300;

        if (selectWidth >= selectHeight) {
            ratio = selectHeight / selectWidth;
            heightN = eval(height * ratio)

            // boxHeight = `${heightN}px`;
            img.style.width = '300px';
            img.style.height = `${heightN}px`;

        } else if (selectHeight >= selectWidth) {
            ratio = selectWidth / selectHeight;
            widthN = eval(width * ratio);

            img.style.width = `${widthN}px`;
            img.style.height = '300px';

        }
    }
}

// upload img

function init() {
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(event) {
    const reader = new FileReader();

    reader.onload = handleFileLoad;
    reader.readAsDataURL(event.target.files[0]);

    document.querySelector('.dropBoxDiv').style.display = "none";
    document.querySelector('.uploadImgDiv').style.display = "block";
    document.getElementById('previewModalFooter').classList.remove('none');
    document.querySelector('.middleBox').removeAttribute('data-toggle')
    document.querySelector('.middleBox').removeAttribute('type')
    document.querySelector('.middleBox').removeAttribute('data-target')
}

function handleFileLoad(event) {
    document.getElementById('fileContent').src = event.target.result;

    imgSrc = event.target.result;
    mainImg.src = imgSrc;
    mirroredImageHandler(document.getElementById('me'));

}

let removeDataOnModalClose = () => {
    setTimeout(() => {
        document.querySelector('.dropBoxDiv').style.display = "block";
        document.querySelector('.uploadImgDiv').style.display = "none";
        document.getElementById('previewModalFooter').classList.remove('block');
        wrappedEdgeHandler(document.getElementById('we'));
        mirroredImageHandler(document.getElementById('me'));
    }, 2000)
    imgChoosen = true;
    // console.log('dgayewgfuwb')
}

init();

//   drag image handler

let image = mainImg,
    imgCntnrs = middleBox,
    dragImgMouseStart = {},
    lastDiff = { x: 0, y: 0 },
    initialPos = image.getBoundingClientRect(),
    currentPos = { x: -initialPos.width / 2, y: 0 };

let xSide = (currentPos.x + lastDiff.x)
let ySide = (currentPos.y + lastDiff.y)

function mousedownDragImg(e) {
    e.preventDefault();
    dragImgMouseStart.x = e.clientX;
    dragImgMouseStart.y = e.clientY;
    currentPos.x += lastDiff.x;
    currentPos.y += lastDiff.y;
    lastDiff = { x: xSide, y: ySide };
    window.addEventListener('mousemove', mousemoveDragImg);
    window.addEventListener('mouseup', mouseupDragImg);
}

let newPositionX = 0;
let newPositionY = 0;
let newDiffX = 0;
let newDiffY = 0;

let wrappedImgTrue = true;

function mouseUp() {
    xSide = (currentPos.x + lastDiff.x)
    ySide = (currentPos.y + lastDiff.y)
    // console.log('data')
    // console.log(xSide, ySide)
}

function mousemoveDragImg(e) {
    e.preventDefault();
    document.querySelector('.body').style.overflow = "hidden";

    lastDiff.x = e.clientX - dragImgMouseStart.x;
    lastDiff.y = e.clientY - dragImgMouseStart.y;
    // console.log(lastDiff.x, lastDiff.y)
    requestAnimationFrame(function () {
        if (true) {

            xSide = (currentPos.x + lastDiff.x)
            ySide = (currentPos.y + lastDiff.y)

            // console.log('secong', xSide, ySide)
            let fn = () => {
                if (Math.abs((xSide)) <= ((((heightOriginal * zoomL) - heightOriginal) / 2)) && Math.abs((ySide)) <= (((widthOriginal * zoomL) - widthOriginal) / 2)) {
                    image.style.transform = "translate(" + (currentPos.x + lastDiff.x) + "px," + (currentPos.y + lastDiff.y) + "px)" + "scale(" + zoomL + ")";
                    topBoxImg.style.transform = "translate(" + (-(currentPos.x + lastDiff.x)) + "px," + (currentPos.y + lastDiff.y) + "px)" + "scale(" + zoomL + ")" + "scaleX(-1)";
                    bottomBoxImg.style.transform = "translate(" + ((currentPos.x + lastDiff.x)) + "px," + (-(currentPos.y + lastDiff.y)) + "px)" + "scale(" + zoomL + ")" + "scaleY(-1)";
                    leftBoxImg.style.transform = "translate(" + (-(currentPos.x + lastDiff.x)) + "px," + (currentPos.y + lastDiff.y) + "px)" + "scale(" + zoomL + ")" + "scaleX(-1)";
                    rightBoxImg.style.transform = "translate(" + (-(currentPos.x + lastDiff.x)) + "px," + (currentPos.y + lastDiff.y) + "px)" + "scale(" + zoomL + ")" + "scaleX(-1)";;
                    // console.log(currentPos.x + lastDiff.x)
                    // if (Math.abs((currentPos.x + lastDiff.x)) <= ((((heightOriginal + (heightOriginal * (zoomLeve * 40))/100)-widthOriginal))) && Math.abs((currentPos.y + lastDiff.y)) <= ((((widthOriginal + (widthOriginal * (zoomLeve * 40))/100)-widthOriginal)))) {
                    if ((xSide) <= 10 && (ySide) <= 10) {
                        const el = document.querySelector('.img_box');
                        el.style.setProperty('--x', (currentPos.x + lastDiff.x) + "px");
                        el.style.setProperty('--y', (currentPos.y + lastDiff.y) + "px");
                    }
                    newPositionX = currentPos.x;
                    newPositionY = currentPos.y;
                    newDiffX = lastDiff.x;
                    newDiffY = lastDiff.y;
                    // }
                    // console.log('third', xSide, ySide)
                }
            }
            fn();
            

        }

    });
}

function mouseupDragImg(e) {
    e.preventDefault();
    window.removeEventListener('mousemove', mousemoveDragImg);
    window.removeEventListener('mouseup', mouseupDragImg);

    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
    currentPos.x = ((newPositionX)/1.2);
    lastDiff.x = ((newDiffX)/1.2);
    currentPos.y = ((newPositionY)/1.2);
    lastDiff.y = ((newDiffY)/1.2);

    setTimeout(() => {
        document.querySelector('.body').style.overflow = "scroll";
    }, 1000);
}

middleBox.addEventListener('mousedown', mousedownDragImg);

function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    // event.preventDefault();
}

// function init() {
//     document.addEventListener("touchstart", touchHandler, true);
//     document.addEventListener("touchmove", touchHandler, true);
//     document.addEventListener("touchend", touchHandler, true);
//     document.addEventListener("touchcancel", touchHandler, true);
// }

