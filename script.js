$(document).ready(function() {

  // Make the DIV element draggable:
  dragElement(document.getElementById("mydiv"));

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  $("#EC2_TEST").click(function() {
      //var sendData = $('#EC2_TEST').val();
      var sendData = {operation: "create", table_name: "Capstone", payload: {language: "python"}};
      $.ajax({
          type: 'POST',
          url: 'https://6jodkl74u4.execute-api.us-east-1.amazonaws.com/test_1',
          data: JSON.stringify(sendData),
          crossDomain: true,
          contentType: "application/json",
          dataType: "json",
          success: function (data, status){
            alert("Data: "+ data["body"] + "\nStatus: "+ status);
            document.getElementById('windowboxCode').innerHTML = data["body"];
            console.log("it works");
          }
      });

    });

    // $("#EC2_TEST").click(function() {
    //   console.log("made it inside EC2");
    //   //var sendData = $('#EC2_TEST').val();
    //   var sendData = { operation: "create", table_name: "Capstone", payload: { key: "Sam", value: "is sexy" } };
    //   $.ajax({
    //       type: 'POST',
    //       url: 'https://n0coguumod.execute-api.us-east-1.amazonaws.com/test_1',
    //       data: JSON.stringify(sendData),
    //       crossDomain: true,
    //       contentType: "application/json",
    //       dataType: "json",
    //       success: function (data, status){
    //         alert("Data: "+ data + "\nStatus: "+ status);
    //       }
    //   });
    //
    // });
});

// var ec2Object = function(ami, instanceType, numOfInstances){
//   this.ami = ami;
//   this.instancetype = instanceType;
//   this.numOfInstances = numOfInstances;
// }
