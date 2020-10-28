

var css = '.applyCss{background:blue}'

browser.runtime.onMessage.addListener(onMsg)

function onMsg(msg, from, res) {
	console.log("onMsg", arguments)
	if (from.tab) {
		browser.tabs.insertCSS(from.tab.id, {
			code: css,
			frameId: from.frameId
		})
		browser.tabs.executeScript(from.tab.id, {
			code: "!" + init.toString() + "()",
			frameId: from.frameId
		})
	}
}


function init() {
	document.body.firstChild.className = "applyCss"
	// some load although on my slow pc not needed
	for (var i = 100000000; i--; );
}



