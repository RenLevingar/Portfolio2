function navBTN() {
    let mains = document.getElementsByClassName("mainDiv");
    for (i = 0; i < mains.length; i++) {
        mains[i].style.display = "none";
        console.log(mains[i]);
    }
}