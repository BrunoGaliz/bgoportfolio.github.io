$(document).ready(function() {
    const w = window.matchMedia("(max-width: 800px)");
    if(w.matches){
        $('#front-end').lightSlider({
            autoWidth:true,
            loop:true,
            onSliderLoad: function() {
                $('#front-end').removeClass('cS-hidden');
            }
        });
        $('#back-end').lightSlider({
            autoWidth:true,
            loop:true,
            onSliderLoad: function() {
                $('#back-end').removeClass('cS-hidden');
            } 
        });
        $('#database').lightSlider({
            autoWidth:true,
            loop:true,
            onSliderLoad: function() {
                $('#database').removeClass('cS-hidden');
            } 
        });
        $('#knowlage').lightSlider({
            autoWidth:true,
            loop:true,
            onSliderLoad: function() {
                $('#knowlage').removeClass('cS-hidden');
            } 
        });
    }
});