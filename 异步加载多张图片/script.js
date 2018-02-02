let count = 1;
let start = 0;
let end = 0;
let loadImage = (url)=> {
    return new Promise((resolve, reject)=> {
        let image = new Image();
        image.onload = () => {
            resolve(image);
        }
        image.onerror = () => {
            reject(new Error("can't find images at" + url));
        }
        image.src = url;
    })
}
async function loadImageAsync(flag) {
    if (flag == true) {
        if (count == imageArray.length) {
            // count = 4;
            return;
        }
        loadImage(imageArray[count]).then((image) => {
            document.body.appendChild(image);
        });
    } else {
        await imageArray.forEach((item, index)=> {
            if (index < count) {
                loadImage(item).then((image)=> {
                    document.body.appendChild(image);
                });
            }
        })
    }
}
document.body.addEventListener("touchstart", (event) => {
    start = event.touches[0].clientY;
})
document.body.addEventListener("touchmove", (event) => {
    end = event.touches[0].clientY;
    let absHeight = Math.abs(start - end);
    if (absHeight > document.documentElement.clientHeight / 2) {
        count++;
        loadImageAsync(true)
    }
})