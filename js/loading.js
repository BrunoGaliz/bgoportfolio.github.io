// this function creates the loading motion!!
function Loading(){
    const intro = document.getElementById("intro");

    //Creating div['load'] with eight span's.
    const loading = document.createElement('div');
    loading.classList.add('load');
    for(var i=0; i<8; i++){
        const span = document.createElement('span');
        span.classList.add('trace');
        loading.appendChild(span);
    }    
    intro.appendChild(loading);  

    //wait for 
    setTimeout(()=>{
        document.getElementsByTagName('body').item(0).classList.remove('loading');
    },2000);
}
