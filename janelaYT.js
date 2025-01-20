
// Função para arrastar o player
dragElement(document.getElementById("playerContainer"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "Header")) {
        document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
        document.getElementById(elmnt.id + "Header").ontouchstart = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
        elmnt.ontouchstart = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX || e.touches[0].clientX;
        pos4 = e.clientY || e.touches[0].clientY;
        document.onmouseup = closeDragElement;
        document.ontouchend = closeDragElement;
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - (e.clientX || e.touches[0].clientX);
        pos2 = pos4 - (e.clientY || e.touches[0].clientY);
        pos3 = e.clientX || e.touches[0].clientX;
        pos4 = e.clientY || e.touches[0].clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.ontouchmove = null;
    }
}

var ts = 0;

// Função para minimizar o player
document.getElementById("minimizeBtn").onclick = function() {
    var playerContainer = document.getElementById("playerContainer");

    if (ts === 0) {
        // Minimiza o player
        playerContainer.classList.add("minimized");
        ts = 1; // Atualiza o estado para minimizado
    } else {
        // Maximiza o player
        playerContainer.classList.remove("minimized");
        ts = 0; // Atualiza o estado para maximizado
    }
};


// Ao clicar no header, exibe o player e remove a mensagem de carregamento
document.getElementById("playerHeader").onclick = function() {
    var iframe = document.getElementById("youtubePlayer");
    var loadingMessage = document.getElementById("loadingMessage");

    // Verifica se o iframe já está visível, caso contrário, exibe e carrega o player
    if (iframe.style.display === "none") {
        iframe.style.display = "block";  // Exibe o iframe
        loadingMessage.style.display = "none";  // Oculta a mensagem de carregamento
    }
};


