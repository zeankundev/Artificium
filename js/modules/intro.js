var IntroModule = {
	name: "intro",

	preferences: {
		show_intro_dialog: true
	},

	init: function()
	{
		if( this.preferences.show_intro_dialog !== false)
			this.showIntroDialog();	
	},

	showIntroDialog: function()
	{
		var dialog = new LiteGUI.Dialog("intro_dialog",{ width: 400, height: 400, closable: true });
		dialog.content.innerHTML = ""+
			"<p class='center'><img height='150' target='_blank' src='https://raw.githubusercontent.com/zeankundev/Artificium/main/imgs/webglstudio-icon.png'/></p>" + 
			"<p class='header center'>Welcome to Artificium!</p>" +
			"<p class='msg center'>This is an Open Source work-in-progress tool to bring the 3D to the web.</p>" +
			"<p class='msg center'>Artificium is a fork of <a href='https://github.com/jagenjo/webglstudio.js'>WebGLStudio</a></p>";

		dialog.on_close = function()
		{
			IntroModule.preferences.show_intro_dialog = false;
		}
	
		dialog.addButton("Close");
		dialog.show();
		dialog.center();
		dialog.fadeIn();

		var links = dialog.content.querySelectorAll("a");
		for(var i = 0; i < links.length; i++)
			links[i].addEventListener("click",prevent_this, true);
		dialog.root.addEventListener("click",close_this);

		function prevent_this(e){
			e.stopImmediatePropagation();
			e.stopPropagation();
			return false;
		}

		function close_this(){
			dialog.close();
		}
	}
}

CORE.registerModule( IntroModule );