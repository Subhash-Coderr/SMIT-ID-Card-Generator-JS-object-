// let myData = {
//   name : "Subhash Rai",
//   email : "subhashpoorani928@gmail.com",
//   cnic : "CNIC",
//   batch_no : "WMA-18",
//   roll_no : "445704",
//   course : "web and app development"
// }
//  alert = ("challa");
// console.log(myData)
// console.log("CNIC = ",myData.cnic)

document.getElementById("btn").addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let cnic = document.getElementById("cnic").value;
  let batch = document.getElementById("batch").value;
  let roll = document.getElementById("roll").value;
  let course = document.getElementById("course").value;
  let imageInput = document.getElementById("image");

  let reader = new FileReader();
  reader.onload = function () {
    let cardData = {
      name,
      email,
      cnic,
      batch,
      roll,
      course,
      image: reader.result,
      backUrl: window.location.href
    };

    localStorage.setItem("cardData", JSON.stringify(cardData));
    window.open("card.html", "_blank");
  };

  reader.readAsDataURL(imageInput.files[0]);
});


