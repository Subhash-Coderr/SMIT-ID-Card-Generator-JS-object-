let data = JSON.parse(localStorage.getItem("cardData"));

document.getElementById("cardImage").src = data.image;
document.getElementById("cName").innerText = data.name;
document.getElementById("cEmail").innerText = data.email;
document.getElementById("cCnic").innerText = data.cnic;
document.getElementById("cBatch").innerText = data.batch;
document.getElementById("cRoll").innerText = data.roll;
document.getElementById("cCourse").innerText = data.course;

function goBack() {
  window.location.href = data.backUrl;
}