
$(function(){

if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 )
	CKEDITOR.tools.enableHtml5Elements( document );


	initCKEDitor();


	//init the ckeditor
	function initCKEDitor(){
		
		CKEDITOR.replace( 'editor' );
		CKEDITOR.editorConfig = function(config ) {
			config.language = 'es';
			config.uiColor = '#F7B42C';
			config.height = 300;
			config.toolbarCanCollapse = true;
		};
	}
 	

});

