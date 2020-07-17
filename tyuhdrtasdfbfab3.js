   function check() {
       var ab1 = document.myform.rad1.value;
       var ab2 = document.myform.rad2.value;
       var ab3 = document.myform.rad3.value;
       var ab4 = document.myform.rad4.value;
       var ab5 = document.myform.rad5.value;
       var ab6 = document.myform.rad6.value;
       var ab7 = document.myform.rad7.value;
       var ab8 = document.myform.rad8.value;
       var ab9 = document.myform.rad9.value;
       var ab10 = document.myform.rad10.value;
       var ab11 = document.myform.rad11.value;
       var ab12 = document.myform.rad12.value;
       var ab13 = document.myform.rad13.value;
       var ab14 = document.myform.rad14.value;
       var ab15 = document.myform.rad15.value;
       var ab16 = document.myform.rad16.value;
       var count = 0;
       if (ab1=="b") {
        count++;
       }
       if (ab2=="c") {
        count++;
       }
       if (ab3=="a") {
        count++;
       }
       if (ab4=="d") {
        count++;
       }
       if (ab5=="a") {
        count++;
       }
       if (ab6=="b") {
        count++;
       }
       if (ab7=="b") {
        count++;
       }
       if (ab8=="d") {
        count++;
       }
       if (ab9=="a") {
        count++;
       }
       if (ab10=="c") {
        count++;
       }
       if (ab11=="b") {
        count++;
       }
       if (ab12=="a") {
        count++;
       }
       if (ab13=="d") {
        count++;
       }
       if (ab14=="c") {
        count++;
       }
       if (ab15=="b") {
        count++;
       }
       if (ab16=="a") {
        count++;
       }
       window.alert("You got " + count + " Marks..!")
       if (count < 7) {
        window.alert("Your GK is very low." + "Improve your GK");
       }
       if (count < 12 && count > 6) {
        window.alert("Your GK is moderate." + "Seek more knowledge");
       }
       if (count <= 16 && count > 11) {
        window.alert("Your GK is excellent." + "Keep It Up");
       }
   }