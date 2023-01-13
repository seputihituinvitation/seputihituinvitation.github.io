function getAllData() {
    db.collection("confirm")
      .get()
      .then((querySnapshot) => {
        var user = [];
        querySnapshot.forEach((doc) => {
          user.push(doc.data());
        });
        dataToTable(user);
      });
  }
  function getAllDataRealTime() {
    db.collection("confirm").onSnapshot((querySnapshot) => {
      var user = [];
      querySnapshot.forEach((doc) => {
        user.push(doc.data());
      });
      dataToTable(user);
    });
  }
  var stdNo = 0;
  var tbody = document.getElementById("card-text");

  function addItemToData(name, email, confirm, message) {
    var trow = document.createElement("li");
    var tdNo = document.createElement("span");
    var tdName = document.createElement("span");
    var tdEmail = document.createElement("span");
    var tdConfirm = document.createElement("span");
    var tdMessage = document.createElement("span");

    tdNo.innerHTML = ++stdNo;
    tdName.innerHTML = name;
    tdEmail.innerHTML = email;
    tdConfirm.innerHTML = confirm;
    tdMessage.innerHTML = message;

    trow.appendChild(tdNo);
    trow.appendChild(tdName);
    trow.appendChild(tdEmail);
    trow.appendChild(tdConfirm);
    trow.appendChild(tdMessage);

    tbody.appendChild(trow);
  }

  function dataToTable(userDoctList){
    stdNo = 0;
    tbody.innerHTML=""
    userDoctList.forEach(element=>{
        addItemToData(element.name,element.email,element.confirm,element.message)
    })
  }

  window.onload = getAllData;