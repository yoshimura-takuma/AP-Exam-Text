function header(){
    $.ajax({
        url: "/AP-Exam-Text/html/header.html",
        cache: false,
        success: function(html){
            $(".grovalNavigation").prepend(html);
        }
    });
}

function localNavigation(){
    $.ajax({
        url: "/AP-Exam-Text/html/localNavigation.html",
        cache: false,
        success: function(html){
            $(".localNavigation").prepend(html);
        }
    });
}
