/* lab.js */
function parse() {
        var http_req = new XMLHttpRequest();
        http_req.open("GET", "https://messagehub.herokuapp.com/messages.json", true);
        http_req.send(null);

        http_req.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                        var obj = JSON.parse(http_req.responseText);
                        document.getElementById("messages").innerHTML =
                                obj[0].content + " (" + obj[0].username +
                                ")<br>" + obj[1].content + " (" +
                                obj[1].username + ")";
                }
        };
}
