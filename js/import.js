function header(){
    $.ajax({
        url: "/yoshimura-takuma/AP-Exam-Text/html/header.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}

function localNavigation(){
    $.ajax({
        url: "/yoshimura-takuma/AP-Exam-Text/html/localNavigation.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}
