
$(function(){

if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 )
	CKEDITOR.tools.enableHtml5Elements( document );

	//init the editor
	initCKEDitor();

	//show the container
	$("#btnNewBlog").click(function(){
		
		$("#editorContainer").removeClass('hide');
	});

	//save the post
	$("#btnSavePost").click(function(){

	});
	


	//init the ckeditor
	function initCKEDitor(){		
		CKEDITOR.replace('editor',{
			language:'en',
			uiColor: '#cfd1cf',
			height:'600px',
			extraPlugins: 'widget,filetools,uploadwidget,uploadimage',
			uploadUrl: '/uploader/upload.php',
			toolbarCanCollapse:true
		});
	}
 	

});

