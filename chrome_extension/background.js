chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "open_link.js"});
 });

 chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.tabs.create({url: request.link_text}, function (tab) {
            setTimeout(function(){chrome.tabs.remove(tab.id);}, 500);
        });
        sendResponse("Extenion worked well");
    }
);

