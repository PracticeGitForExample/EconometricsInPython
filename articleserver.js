//content.innerHTML='<object type="text/html" data="ClassLibraries.html" ></object>';
///content.fetch("js\ClassLibraries.html")).text();

//document.querySelector("iframe").addEventListener( "load", function(e) {
  //  alert(this.nodeName);

   // console.log(e.target);

//} );

const URL = 'https://github.com/PracticeGitForExample/EconometricsInPython/blob/main/blogpostex.html';
function getData(pageId) {
  console.log(pageId);
  var myRequest = new Request(pageId + '.txt');
  fetch(myRequest).then(function(response) {
    return response.text().then(function(text) {
      content.innerHTML = text;
    });
  });
};
getData(URL);

