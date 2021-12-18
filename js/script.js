const t1 = document.querySelector(`#thumb1`)
const t2 = document.querySelector(`#thumb2`)
const t3 = document.querySelector(`#thumb3`)
const lg = document.querySelector(`#largeimg`)

const setLargeImgSrc = function(thumb){
    const url = thumb.getAttribute(`src`);
    lg.setAttribute(`src`, url);
}

t1.addEventListener(`click`, function() {
    setLargeImgSrc(t1);
    const url = t1.getAttribute(`src`);
    console.log(url);
    lg.setAttribute(`src`, url);

});

t2.addEventListener(`click`, function() {
    setLargeImgSrc(t2);
    // const url = t2.getAttribute(`src`);
    // console.log(url);
    // lg.setAttribute(`src`, url);
});

t3.addEventListener(`click`, function() {
    setLargeImgSrc(t3);
    // const url = t3.getAttribute(`src`);
    // console.log(url);
    // lg.setAttribute(`src`, url);
});