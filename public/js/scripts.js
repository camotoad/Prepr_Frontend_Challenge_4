jQuery(document).ready(()=>{
    $('#challenge-button').addClass('active');
    $('#lab-button').removeClass('active');
    $('#project-button').removeClass('active');
    $('#challenge-button').removeClass('inactive');
    $('#lab-button').addClass('inactive');
    $('#project-button').addClass('inactive');
    $('#challenges').show();
    $('#labs').hide();
    $('#projects').hide();
});

$('#challenge-button').on('click', ()=>{
    $('#challenge-button').addClass('active');
    $('#lab-button').removeClass('active');
    $('#project-button').removeClass('active');
    $('#challenge-button').removeClass('inactive');
    $('#lab-button').addClass('inactive');
    $('#project-button').addClass('inactive');
    $('#challenges').show();
    $('#labs').hide();
    $('#projects').hide();
    return false;
});

$('#lab-button').on('click', ()=>{
    $('#challenge-button').removeClass('active');
    $('#lab-button').addClass('active');
    $('#project-button').removeClass('active');
    $('#challenge-button').addClass('inactive');
    $('#lab-button').removeClass('inactive');
    $('#project-button').addClass('inactive');
    $('#challenges').hide();
    $('#labs').show();
    $('#projects').hide();
    return false;
});

$('#project-button').on('click', ()=>{
    $('#challenge-button').removeClass('active');
    $('#lab-button').removeClass('active');
    $('#project-button').addClass('active');
    $('#challenge-button').addClass('inactive');
    $('#lab-button').addClass('inactive');
    $('#project-button').removeClass('inactive');
    $('#challenges').hide();
    $('#labs').hide();
    $('#projects').show();
    return false;
});

$('#mode').on('click', ()=>{
    if($('body').hasClass('dark')){
        $('body').removeClass('dark');
        $('header').addClass('bg-white');
        $('#side').addClass('bg-white');
        $('#categories').addClass('bg-ws');
        $('#categories2').addClass('bg-ws');

    } else {
        $('body').addClass('dark');
        $('header').removeClass('bg-white');
        $('#side').removeClass('bg-white');
        $('#categories').removeClass('bg-ws');
        $('#categories2').removeClass('bg-ws');
    }

    return false;
});

$('#side-bar').on('click',()=>{
    if($('#side').hasClass('side-bar-open')){
        $('#side').removeClass('side-bar-open');
    } else {
        $('#side').addClass('side-bar-open')
    }
});

$('#profile-nav').on('click',()=>{
    if($('#right-nav').hasClass('profile-nav-open')){
        $('#right-nav').removeClass('profile-nav-open');
    } else {
        $('#right-nav').addClass('profile-nav-open')
    }
});

$('#lang-close').on('click', ()=>{
    $('#lang-select').hide();
});

$('.acsb-lang').on('click', () =>{
    $('#lang-select').show();
});

$('#move-btn').on('click', () => {
    if($('#acsb-menu').hasClass('moved') && $('#lang-select').hasClass('moved')){
        $('#acsb-menu').removeClass('moved');
        $('#lang-select').removeClass('moved');
    } else {
        $('#acsb-menu').addClass('moved');
        $('#lang-select').addClass('moved');
    }
})

$('#close-btn').on('click', () => {
    $('#acsb-menu').hide()
});

$('#reset-btn').on('click', () => {
    location.reload();
});

$('#acsb-toggle').on('click', () => {
    $('#acsb-menu').show();
    $('.overlay').addClass('active');
});

$('.overlay').on('click', () => {
    $('#acsb-menu').hide()
    $('#lang-select').hide();
    $('.overlay').removeClass('active');
});

$('#lang-select').on('click', (event) => {
    let clickedElement = event.target.id;

    switch(clickedElement){
        case 'English':
        case 'Spanish':
        case 'German':
        case 'Portugese':
        case 'French':
        case 'Italian':
        case 'Hebrew':
        case 'Chinese-SIMP':
        case 'Russian':
        case 'Arabic':
        case 'Dutch':
        case 'Chinese-TRAD':
        case 'Japanese':
                $('#language').text(clickedElement);
                $('#lang-select').hide();
                break;
        default:
            return false;
    }
});

$('#profile1').on('click', () =>{
    if($('#p1').hasClass('moved')){
        $('#p1').removeClass('moved');
        $('#p1text').hide();
    } else{
        resetSwitches();
        $('#p1').addClass('moved');
        $('#p1text').show();
    }
});

$('#profile2').on('click', () =>{
    if($('#p2').hasClass('moved')){
        $('#p2').removeClass('moved');
        $('#p2text').hide();
    } else{
        resetSwitches();
        $('#p2').addClass('moved');
        $('#p2text').show();
    }
});

$('#profile3').on('click', () =>{
    if($('#p3').hasClass('moved')){
        $('#p3').removeClass('moved');
        $('#p3text').hide();
    } else{
        resetSwitches();
        $('#p3').addClass('moved');
        $('#p3text').show();
    }
});

$('#profile4').on('click', () =>{
    if($('#p4').hasClass('moved')){
        $('#p4').removeClass('moved');
        $('#p4text').hide();
    } else{
        resetSwitches();
        $('#p4').addClass('moved');
        $('#p4text').show();
    }
});

$('#profile5').on('click', () =>{
    if($('#p6').hasClass('moved')){
        $('#p5').removeClass('moved');
        $('#p5text').hide();
        $('#p6').removeClass('moved');
        $('#p6text').hide();
    } else{
        resetSwitches();
        $('#p5').addClass('moved');
        $('#p5text').show();
        $('#p6').addClass('moved');
        $('#p6text').show();
    }
});

$('#profile6').on('click', () =>{
    if($('#p6').hasClass('moved')){
        $('#p5').removeClass('moved');
        $('#p5text').hide();
        $('#p6').removeClass('moved');
        $('#p6text').hide();
    } else{
        resetSwitches();
        $('#p5').addClass('moved');
        $('#p5text').show();
        $('#p6').addClass('moved');
        $('#p6text').show();
    }
});

function resetSwitches(){
    $('#p1').removeClass('moved');
    $('#p1text').hide();

    $('#p2').removeClass('moved');
    $('#p2text').hide();

    $('#p3').removeClass('moved');
    $('#p3text').hide();

    $('#p4').removeClass('moved');
    $('#p4text').hide();

    $('#p5').removeClass('moved');
    $('#p5text').hide();

    $('#p6').removeClass('moved');
    $('#p6text').hide();
}