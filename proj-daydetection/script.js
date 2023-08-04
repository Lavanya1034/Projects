let day = document.getElementById("day");
let desc = document.getElementById("desc");

//array of days name and desc

let dayArr = [
    {
        day:"Sunday",
        desc:"It's a Holiday!!!"
    },
    {
        day:"Monday",
        desc:"Get ready for a fresh week!!!"
    },
    {
        day:"Tuesday",
        desc:"Warm up"
    },
    {
        day:"Wednesday",
        desc:"Middle of the week"
    },
    {
        day:"Thursday",
        desc:"Weekend is nearing!!!"
    },
    {
        day:"Friday",
        desc:"Hurray!!! It's weekend"
    },
    {
        day:"Saturday",
        desc:"Time to party!!!"
    }
]

let current = new Date();
let currentDay = current.getDay();
if(currentDay>=0 && currentDay<7){
    day.textContent=dayArr[currentDay].day;
    desc.textContent=dayArr[currentDay].desc;
}