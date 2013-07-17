/**
 * Created with IntelliJ IDEA.
 * User: xangelo
 * Date: 7/16/13
 * Time: 11:47 PM
 * To change this template use File | Settings | File Templates.
 */

var FargoEvernote = {
	handleClick: function() {

		// grab the selected nodeText
		var text = getOutlineText();

		FargoEvernote.createNote(text);
	},
	createNote: function(text) {

	},
	init: function() {
		// Add the evernote icon to the sidebar
		var html = '<div class="divIcon"><a href="#" rel="tooltip" data-placement="left" data-original-title="Send to Evernote" onclick="FargoEvernote.handleClick()">';
			html += '<img src="https://dl.dropboxusercontent.com/s/mk69whgni3qntgk/evernote-black.png?m"></a></div>';
		$('#idIconChain').append(html);
	}
};

FargoEvernote.init();
