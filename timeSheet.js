var config = {
    apiKey: "AIzaSyB_Vt6IAo1_HILLWmbKEO_PmDW03zWrV4Q",
    authDomain: "class-project-5ebf5.firebaseapp.com",
    databaseURL: "https://class-project-5ebf5.firebaseio.com",
    projectId: "class-project-5ebf5",
    storageBucket: "",
    messagingSenderId: "877396007506"
  };
  firebase.initializeApp(config);

  let db = firebase.database();
  let employeeName;
  let role;
  let startDate;
  let monthlyRate;


$(document).ready(function(){
    $('#add-user').on('click', ()=>{
        event.preventDefault();
        employeeName = $('#name-input').val()
        role = $('#email-input').val()
        startDate = $('#startDate-input').val()
        monthlyRate = $('#comment-input').val()
        db.ref('/data').set({
            employeeName,
            role,
            startDate,
            monthlyRate
        })
      })

      db.ref().on('value', snap => {
          let data = snap.val();
          $('#employeeName').text(data.data.employeeName)
          $('#role').text(data.data.role)
          $('#startDate').text(data.data.startDate)
          $('#monthlyRate').text(data.data.monthlyRate)
      })
})
