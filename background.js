
redirectUrl = "https://www.google.com";
allowedDaysForRestrictedWebsites = {
	/*Days of week on which these sites are allowed. 0 corresponds to sunday*/
	"www.facebook.com" : [0],
	"www.quora.com" : [0]
}



var restrictWebsites = function(tabId, changeInfo, tabInfo) {
	tabUrl = tabInfo.url;
    var url = new URL(tabUrl)
    var domain = url.hostname
    
	if (!(domain in allowedDaysForRestrictedWebsites)) {	
        return;
	}

	currentDate = new Date();
	curentDayOfWeekIndex = currentDate.getDay();
    
	if (curentDayOfWeekIndex in allowedDaysForRestrictedWebsites) {
		return;
	} else {
		chrome.tabs.update(tabId, {url: redirectUrl});
		alert("Aaj allowed nahi hain!!");
	}
}

chrome.tabs.onUpdated.addListener(restrictWebsites);
