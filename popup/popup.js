
function getCurrentWindowTabs(){
    return chrome.tabs.query({
        currentWindow:true
    });
}

function listTabs(){
    getCurrentWindowTabs().then((tabs=> {
        tabsList = document.getElementById("link-list");
        var currentTabs = document.createDocumentFragment();

        
    
        for(let tab of tabs){
            let tabContainer = document.createElement("div");
            tabContainer.classList.add("tab-container");
            let tabfav = document.createElement("image");
            tabfav.classList.add("tab-fav");
            let tabLink = document.createElement('a');
            tabLink.classList.add("tab-link");
            let moveButton = document.createElement("button");
            moveButton.classList.add("btn");

            tabfav.setAttribute("src", tab.favIconUrl);
            tabLink.textContent = tab.title || tab.id;
            tabLink.setAttribute("href", tab.id);


            tabContainer.appendChild(tabfav);
            tabContainer.appendChild(tabLink);
            tabContainer.appendChild(moveButton);

            currentTabs.appendChild(tabContainer);
        }

        tabsList.appendChild(currentTabs);
    }));
}

document.addEventListener("DOMContentLoaded", listTabs);