let download = document.getElementById('Download Resume');
let Download = document.getElementById('Certificate');

// Download Resume

download.addEventListener("click",() => {
    let link = document.createElement("a");
    link.href = "images/Resume.jpeg";
    link.download = "Resume.jpeg";

    link.click();
});

// Download certificate

Download.addEventListener("click",() =>{
    let link = document.createElement("a");
    
    link.href = "images/Workshop.jpeg";
    link.download = "Workshop.jpeg";

    link.href = "images/ReactJS.jpeg";
    link.download = "ReactJS.jpeg";

    link.href = "images/Javascript.jpeg";
    link.download = "Javascript.jpeg";

    link.href = "images/HTML.jpeg";
    link.download = "HTML.jpeg";

    link.href = "images/Yuva Ai.jpeg";
    link.download = "Yuva Ai.jpeg";

    link.click();

})

