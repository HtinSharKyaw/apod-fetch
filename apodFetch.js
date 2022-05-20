$(document).ready(function () {
  $("#view_button ").click(fetchPic);
});

const url = "https://api.nasa.gov/planetary/apod?api_key=";

const api_key = "DEMO_KEY";

const fetchPic = async () => {
  try {
    const response = await fetch(`${url}${api_key}`);

    const data = await response.json();

    console.log("NASA APOD data", data);

    displayData(data);
  } catch (error) {
    console.log(error);
  }
};

const displayData = (data) => {
  document.getElementById("title").textContent = data.title;
  document.getElementById("pic").src = data.hdurl;
};
