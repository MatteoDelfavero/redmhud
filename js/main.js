$(document).ready(function(){
    window.addEventListener("message", function (event) {
        switch(event.data.action) {
            case "hide":
                $(".row").fadeOut();
                break;
            case "show":
                $(".row").fadeIn();
                break;
            case "set":
                switch(event.data.type) {
                    case "time":
                        $("#time").html(event.data.value);
                        break;
                    case "serverstat":
                        $("#serverstat").html(event.data.value);
                        break;
                    case "nameid":
                        $("#nameid").html(event.data.value);
                        break;
                }
                break;
            default:
        }
	});

    setInterval(function(){
        document.getElementById("time").innerHTML = (new Date()).toLocaleTimeString();
    }, 1000);

})