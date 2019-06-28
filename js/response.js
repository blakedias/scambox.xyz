$(document).ready(function() {
    if ($('#boxForm').length > 0 ) {
        contactScript('forcontact');
    }
});
function contactScript(value) {
    var a = { 
            apiKey: "AIzaSyAtnRNgvJcFRPifabd-4jTFicNHpNUQrqU",
            authDomain: "scambox-xyz.firebaseapp.com",
            databaseURL: "https://scambox-xyz.firebaseio.com",
            projectId: "scambox-xyz",
            appId: "1:1072586235510:web:9a06ef77c725aa2a" };
        firebase.initializeApp(a);
        var b = firebase.database().ref("guides");
            $("#form-example").submit(function(a) { $(this), console.log("Submit to Firebase");
            var c = $("#number").val(),
                d = $("#descr").val(),
                e = $("#date").val(),
                f = $("#time").val(),
                g = { number: c, descr: d, date: e, time: f};
            return b.push(g).then(function(a) { 
                $(".form").css("display", "block"), 
                $(".form-example").css("display", "none") }), !1 })   
}