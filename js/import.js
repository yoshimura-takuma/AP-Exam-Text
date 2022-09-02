function header(){
    $.ajax({
        url: "https://yoshimura-takuma.github.io/AP-Exam-Text/html/header.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}

function localNavigation(){
    $.ajax({
        url: "https://yoshimura-takuma.github.io/AP-Exam-Text/html/localNavigation.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}
