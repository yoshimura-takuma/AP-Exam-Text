function header(){
    $.ajax({
        url: "/AP-Exam-Text/html/header.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}

function localNavigation(){
    $.ajax({
        url: "/AP-Exam-Text/html/localNavigation.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}
