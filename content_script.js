(function() {
    console.log("Hello from teams_chat_download chrome extension by emanuele.paolini@gmail.com");
    var content = "";
    let chat = document.getElementsByClassName("message-body");
    for (let i=0; i<chat.length; ++i) {
        const msg = chat[i];
        const name = msg.getElementsByClassName("ts-msg-name")[0];
        const date = msg.getElementsByClassName("message-datetime")[0];
        const text = msg.getElementsByClassName("message-body-content")[0];
        var line = "";
        if (date) {
            line += "["+date.getAttribute("title")+"] ";
        }
        if (name) {
            line += name.innerText.trim();
        }
        if (text) {
            line += ": " + text.innerText.trim();
        }
        if (line) {
            content += line + "\n";
        }
    }

    chrome.runtime.sendMessage({
        action: 'download',
        message: content
    },

    function(response) {
        if (chrome.runtime.lastError) {
            console.log('ERROR: ' + chrome.runtime.lastError.message);
        } else {
            if (response.status != 'completed') {
                console.log('Download failed');
            }
        }
    }
);

})();