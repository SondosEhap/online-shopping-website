setColor(localStorage.getItem("mainColor")||"blue");

setFont(localStorage.getItem("mainFont")||'"Times New Roman", Times , serif');

function getColorElement(color){
    return document.getElementById("color-" + color);
}

function getFontElement(font){
    return document.getElementById("font-" + font);
}

getColorElement("#8A2BE2").addEventListener("click", ()=>{
    localStorage.setItem("mainColor" , "#8A2BE2");
    setColor(localStorage.getItem("mainColor") || "#8A2BE2");
});

getColorElement("#20B2AA").addEventListener("click", ()=>{
    localStorage.setItem("mainColor", "#20B2AA");
    setColor(localStorage.getItem("mainColor") || "#20B2AA");
});

getColorElement("#B8860B").addEventListener("click", ()=>{
    localStorage.setItem("mainColor" , "#B8860B");
    setColor(localStorage.getItem("mainColor") || "#B8860B");
});

getColorElement("white").addEventListener("click", ()=>{
    localStorage.setItem("mainColor" , "white");
    setColor(localStorage.getItem("mainColor") || "white");
});

getColorElement("#008080").addEventListener("click", ()=>{
    localStorage.setItem("mainColor", "#008080");
    setColor(localStorage.getItem("mainColor") || "#008080");
});

getFontElement("serif").addEventListener("click", ()=>{
    localStorage.setItem("mainFont" , '"Times New Roman", Times , serif');
    setFont(localStorage.getItem("mainFont") || '"Times New Roman", Times , serif');
});

getFontElement("cursive").addEventListener("click", ()=>{
    localStorage.setItem("mainFont" ,"Brush Script MT, Lucida Handwriting, cursive");
    setFont(localStorage.getItem("mainFont") || "'Brush script M', cursive");
});

getFontElement("monospace").addEventListener("click", ()=>{
    localStorage.setItem("mainFont" , "'courier New', monospace");
    setFont(localStorage.getItem("mainFont") || '"Times New Roman", Times , monospace');
});

getFontElement("Fantasy").addEventListener("click", ()=>{
    localStorage.setItem("mainFont" , "'Copperplate',Papyrus, Fantasy");
    setFont(localStorage.getItem("mainFont") || '"Times New Roman", Times , Fantasy');
});