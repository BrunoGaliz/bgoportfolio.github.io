
/**
 * This function brings me to the bottom of the page that shows informations about me.
 */
function goDownToAboutMe(){
    document.getElementById('about-me').scrollIntoView({behavior: 'smooth'});
}

/**
 * This function brings me to the bottom of the page to show how to contact me.
 */
function goDowntoContactMe(){
    document.body.scrollIntoView({behavior: 'smooth',block: 'end'});
}