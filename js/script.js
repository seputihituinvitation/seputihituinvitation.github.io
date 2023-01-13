// let radiobtn = document.querySelectorAll("input[name='contact-confirm']");
// let select = () => {
//   let selected = document.querySelector(
//     "input[name='contact-confirm']:checked"
//   ).value;
//   console.log(selected);
// };
// radiobtn.forEach((rad) => {
//   rad.addEventListener("change", select);
// });

document.getElementById("submit").addEventListener("click", function () {
  event.preventDefault();
  let name = document.getElementById("contact-name");
  let email = document.getElementById("contact-email");
  // let confirm = document.querySelector("input[name='contact-confirm']:checked");
  let number = document.getElementById("contact-number");

  if (name.value == "") {
    Swal.fire("Data Harus Diisi Yaa", "Terima Kasih", "warning");
    name.value = "";
    email.value = "";
    number.value = "";
  } else {
    let newItem = db.collection("confirm").add({
      nama: name.value,
      email: email.value,
      no_telepon: number.value,
      
    });
    Swal.fire(
      "Terima kasih sudah konfirmasi",
      "Ditunggu ya kak kehadirannya :)",
      "success"
    );
  }

  name.value = "";
  email.value = "";
  number.value = "";
  
});
