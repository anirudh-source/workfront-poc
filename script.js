var fileInput = document.getElementById("project-info");
fileInput.addEventListener("change", function (e) {
  var selectedFile = e.currentTarget.files[0];
  // console.log(selectedFile);
  var myFileReader = new FileReader();
  myFileReader.addEventListener("load", function () {
    console.log(myFileReader.result);
  });

  myFileReader.readAsText(selectedFile);
});

// WARNING: For POST requests, body is set to null by browsers.

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://teknopointapacptrsd.my.workfront.com/attask/api/v15.0/login?username=anirudh.kadam%40teknopoint.in&password=Omniking%24007");
xhr.setRequestHeader("apiKey", "dl5xtsaqnemxwhn9zwe6g911oqs347g1");
// WARNING: Cookies will be stripped away by the browser before sending the request.
xhr.setRequestHeader("Cookie", "wf-node=c8615d63-148a-4263-aad8-466ea20d0273");

xhr.send();
