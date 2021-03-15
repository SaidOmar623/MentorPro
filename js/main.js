$(function(){
    $('.rights button').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        $($(this).data('class')).addClass('active').siblings().removeClass('active');
    });

    $(".course-description li, .course-card li").prepend("<i class=\"far fa-dot-circle\"></i>");

    $('.content-bar .head-bar').click(function(){
        $(this).next('.bar-content').slideToggle(250);
    });

    // $('.jobs nav .page-item').on('click', function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    // })
    function formatState (state) {
        if (!state.id) {
          return state.text;
        }
        var baseUrl = "images/";
        var $state = $(
          '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
      };
    $('.select-country').select2({
        placeholder: 'Select an option',
        templateResult: formatState,
        minimumResultsForSearch: -1
    });   


})