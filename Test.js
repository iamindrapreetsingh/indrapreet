
let d=new Date();
let day;
let hours;
function test()
{
    setTimeout(change,3000);

}

function change()
{
    hour=d.getHours();
    minute=d.getMinutes();

    if(hour>=09 && hour<=15)
    document.getElementById("dp").src="myself3.jpg";

    if(hour>=16 && hour<=21)
    document.getElementById("dp").src="myself.jpg";

}

let content;

function demo()
{
  var oReq = new XMLHttpRequest();
  oReq.onload=perform;
  oReq.open("GET", "https://api.github.com/users/iamindrapreetsingh/repos");
  oReq.send();
}

function perform()
{
   var data=JSON.parse(this.responseText);
   content=document.getElementById("repo");

   for(let i=0;i<data.length;i++)
   content.innerHTML=content.innerHTML+"<br>/"+data[i]["name"];
   
   
}
