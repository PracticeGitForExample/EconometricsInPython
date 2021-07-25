//content.innerHTML='<object type="text/html" data="ClassLibraries.html" ></object>';
///content.fetch("js\ClassLibraries.html")).text();

document.querySelector("iframe").addEventListener( "load", function(e) {

    this.style.backgroundColor = "red";
    alert(this.nodeName);

    console.log(e.target);

} );
