
$(function(){
    
    if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 ) {
        CKEDITOR.tools.enableHtml5Elements( document );
    }

	//init the editor
	initCKEDitor();

	//show the container
	$("#btnNewBlog").click(function(){		
		$("#editorContainer").removeClass('hide');
	});

	//save the post
	$(".btnSavePost").click(function () {
	    debugger;
	    var postData = CKEDITOR.instances.editor.getData();
	    var postType = $("#editorContainer select").val();
	    var data = { 'Content': postData, 'Type': postType };
	    $.ajax({
	        url: '/blog/addPost',
	        type: 'POST',
	        data: JSON.stringify(data),
	        contentType: 'application/json; charset=utf-8',
	        dataType: 'json',
	        success: function (result) {
	            alert(result);
	        },
	        error: function (jqXHR, exception) {
	            alert(exception);
	        }
	    })
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

