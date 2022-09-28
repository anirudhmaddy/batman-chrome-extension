chrome.runtime.onMessage.addListener((obj, sender, response) => {
  
    if (obj.type === "addBatmanSymbol") {
      chrome.tabs.sendMessage(obj.tabId, {
        type: "addSymbol",
      });
    }
  
    if (obj.type === "closePopup") {
      chrome.tabs.sendMessage(obj.tabId, {
        type: "closeModal",
      });
    }
  
   response({ status: "ok" });
});
