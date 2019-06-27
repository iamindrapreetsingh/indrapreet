
let d=new Date();
let day;
let hours;
function test()
{
    setInterval(change,1000);
}

function change()
{
    hour=d.getHours();
    minute=d.getMinutes();

    if(hour>=10 && hour<=15)
    document.getElementById("dp").src="myself3.jpg";

    if(hour>=16 && hour<=21)
    document.getElementById("dp").src="myself2.jpg";

}