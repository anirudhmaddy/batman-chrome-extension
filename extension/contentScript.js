(() => {

  
  chrome.runtime.onMessage.addListener(async (obj, sender, response) => {
    

    if (obj.type === "addSymbol") {
        
      let data = await modifyDOM();

      chrome.runtime.sendMessage(
        { type: "addedSymbol", data: data },
        (response) => {}
      );
      }
    
    if (obj.type === "closeModal") {

      document.querySelector("dialog").close();
       
    }
    

    response({ status: "ok" });
  });

 
  

const modifyDOM = async () => {
        
    const composeDivs = document.getElementsByClassName("T-I T-I-KE L3");

   // Check if the symbol has already been added to prevent multiple img tags 
   const batmanSymbol = document.getElementById("batmanid");
  
    if (!batmanSymbol) 
    {
      for (const iterator of composeDivs) {
        if (iterator.innerText == "Compose") {
          const img = document.createElement("img");
          img.src = "https://www.svgrepo.com/show/303233/batman-5-logo.svg";
          img.width = "36";
          img.height = "36";
          img.id = "batmanid";
          img.style.marginLeft = "20px";
          img.style.cursor = "pointer";

          img.addEventListener("click", function (e) {
             
               console.log("Click Fired>>>>>");
               showModal();
            
           });
          
          iterator.parentElement.parentElement.appendChild(img);

          
          
        }
      }
    }
   
};
  
  
  const showModal = () => {
     
     
     const modal = document.createElement("dialog");
     modal.setAttribute(
       "style",
       `
        margin: auto;
        padding: 0px;
        height:70%;
        border: none;
        width:60%;
        border-radius:20px;
        background-color:white;
        position: fixed; box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
        `
     );
     modal.innerHTML = `<iframe id="popup-content"; style="height:100%;width:100%"></iframe>
      <div style="position:absolute; top:0px;">
      </div>`;
     document.body.appendChild(modal);
     const dialog = document.querySelector("dialog");
     dialog.showModal();
     
     const iframe = document.getElementById("popup-content");
     iframe.src = chrome.runtime.getURL("popup.html");
     iframe.frameBorder = 0;

   };
    
})();
