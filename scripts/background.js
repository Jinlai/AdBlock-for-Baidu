(function($){
	chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
		if(tab.url != undefined && changeInfo.status == 'complete'){

			// Block Ads for www.baidu.com
			if(tab.url.match('http://www.baidu.com')){
				chrome.tabs.insertCSS(tabId,{code:".EC_result,.EC_mr15,div[data-rendered=true],#ec_im_container,.hint_right_bottom,.ec_bdtg {display:none;}",runAt:"document_start"});
				chrome.tabs.executeScript(tabId,{file:"/scripts/block-Ads-of-Baidu.js",runAt:"document_end"});
			}

			// Other blocker
		}
	});
})(jQuery);