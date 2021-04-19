document.addEventListener("DOMContentLoaded", function(e) {
    var divContents = document.getElementsByClassName("divContent");
    setTimeout(function() {
        console.log(document.getElementsByClassName("divContent").length);
        console.log(window);
        for (let index = 0; index < document.getElementsByClassName("divContent").length; index++) {
            const divContent = divContents[index];
            divContent.addEventListener("click", function (e) {
                e.target.style.backgroundColor = "white";
            });
        }
    },500);
    

    
});


