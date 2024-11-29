//  function Result() {
//     var name = document.getElementById("Sname").value;
//     var sub1 = document.getElementById("sub1").value;
//     var sub2 = document.getElementById("sub2").value;
//      var sub3 = document.getElementById("sub3").value;
//     var sub4 = document.getElementById("sub4").value;
//     var sub5  = document.getElementById("sub5").value;
//     var sub6 = document.getElementById("sub6").value;
//      var sub7 = document.getElementById("sub7").value;
//     var sub8 = document.getElementById("sub8").value;
    

// sub1 = Number(sub1)
//  sub2 = Number(sub2)
//  sub3 = Number(sub3)
//  sub4 = Number(sub1)
//  sub5 = Number(sub2)
//  sub6 = Number(sub3)
// sub7 = Number(sub1)
// sub8 = Number(sub2)


//  var total= sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8
//  var percentage = (total/800) *100
 
//  var grade; 
//  var status;

//  if (percentage >=90) {
//      grade ="A+"
//     status="pass"
// }else if (percentage >=80) {
//     grade ="A"
//     status="pass"
// }else if (percentage >=70) {
//     grade ="B"
//     status ="pass"
// }else if (percentage >=60) {
//     grade ="C"
//     status ="pass"
// }else if (percentage >=50) {
//    grade ="D"
//    status ="pass"
//  }else {
//      grade ="F"
//      status="fail"
//  }
//   var resultDiv =document.getElementById("container");
//   resultDiv.innerHTML =
//   "<p>Student Name:" + name + "</p>" +
//   "<p>Total Marks:" + total + " / 300</p>" +
//   "<p>Percentage:" + percentage + "%</p>" + 
//   "<p>Grade:" + grade + "</p>" +
//   "<p class=' " + (status === "pass" ? "pass" :"fail") + "'>Status:" + status + "</p>"
//  }


function Result() {
    var name = document.getElementById("Sname").value;
    var sub1 = Number(document.getElementById("sub1").value);
    var sub2 = Number(document.getElementById("sub2").value);
    var sub3 = Number(document.getElementById("sub3").value);
    var sub4 = Number(document.getElementById("sub4").value);
    var sub5 = Number(document.getElementById("sub5").value);
    var sub6 = Number(document.getElementById("sub6").value);
    var sub7 = Number(document.getElementById("sub7").value);
    var sub8 = Number(document.getElementById("sub8").value);

    var total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8;
    var percentage = (total / 800) * 100;
    
    var grade;
    var status;

    // Determine grade and status based on percentage
    if (percentage >= 90) {
        grade = "A+";
        status = "pass";
    } else if (percentage >= 80) {
        grade = "A";
        status = "pass";
    } else if (percentage >= 70) {
        grade = "B";
        status = "pass";
    } else if (percentage >= 60) {
        grade = "C";
        status = "pass";
    } else if (percentage >= 50) {
        grade = "D";
        status = "pass";
    } else {
        grade = "F";
        status = "fail";
    }

    // Display results
    var resultDiv = document.getElementById("container");
    resultDiv.innerHTML =
        "<p>Student Name: " + name + "</p>" +
        "<p>Total Marks: " + total + " / 800</p>" +
        "<p>Percentage: " + percentage.toFixed(2) + "%</p>" +
        "<p>Grade: " + grade + "</p>" +
        "<p class='" + (status === "pass" ? "pass" : "fail") + "'>Status: " + status + "</p>";
}
