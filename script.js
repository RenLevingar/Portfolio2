let clicks = 1;
function navBTN() {
    if( clicks == 1){
        clicks--;
        let mains = document.getElementsByClassName("mainDiv");
        for (i = 0; i < mains.length; i++) {
            mains[i].style.display = "none";
        }
        console.log(clicks);
    } else {
        clicks++;
        let mains = document.getElementsByClassName("mainDiv");
        for (i = 0; i < mains.length; i++) {
            mains[i].style.display = "flex";
        }
        console.log(clicks);
    }
}