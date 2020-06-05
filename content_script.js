(function() {
    console.log("Hello from teams_chat_download chrome extension by emanuele.paolini@gmail.com");
    let l = document.getElementsByClassName("ts-msg-name");
    
    let content = "";

    for (let i=0; i<l.length; ++i) {
        content += l[i].innerText + "\n";
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