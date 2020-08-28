
/**
 * This function brings me to the bottom of the page that shows informations about me.
 */
function GoDownToAboutMe(){
    document.getElementById('about-me').scrollIntoView({behavior: 'smooth'});
}

/**
 * This function brings me to the bottom of the page to show how to contact me.
 */
function GoDowntoContactMe(){
    document.getElementById('contact-me').scrollIntoView({behavior: 'smooth',block: 'end'});
}