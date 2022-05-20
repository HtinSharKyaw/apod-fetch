$(document).ready(function () {
  $("#view_button").click(getPicture);
});

function getPicture() {
  $.ajax({
    type: "GET",
    url: "https://api.nasa.gov/planetary/apod",
    data: { api_key: "DEMO_KEY", date: $("date").val() },
    dataType: "json",
    success: showPicture,
    error: noPicture,
  });
}

function showPicture(data) {
  console.log(data);
  $("#pic").attr("src", data.url);
}

function noPicture(error) {
  alert(error.responseText);
}
