var AboutModule = {
	name: "about",

	init: function()
	{
		LiteGUI.menubar.add("About", { callback: function() { 
			var dialog = new LiteGUI.Dialog({ title: "About onEdit", closable: true, width: 400, height: 240} );
			dialog.content.style.fontSize = "2em";
			dialog.content.style.backgroundColor = "black";
			dialog.content.innerHTML = "<p>Artificum version "+CORE.config.version+"</p><p>Created by <a href='https://isnomozean.wixsite.com/kasiussite' target='_blank'>Kasius Inc</a></p><p>Artificum is a fork of <a href='https://github.com/jagenjo/webglstudio.js'>WebGLStudio.js</a></p>";
			dialog.show();
		}});
	}
}

CORE.registerModule( AboutModule );