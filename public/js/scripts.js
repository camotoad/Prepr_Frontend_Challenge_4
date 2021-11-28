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