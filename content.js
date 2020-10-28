
!function() {
	chrome.runtime.sendMessage({op: "formatBody"}, function(response) {
		console.log("response", response)
	})
}()

