
$(function(){
    
    if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 ) {
        CKEDITOR.tools.enableHtml5Elements( document );
    }

	//init the editor
	initCKEDitor();

	//show the container
	$("#btnNewBlog").click(function () {
	    $("#editorContainer").removeClass('hide');
	    $("#posts").hide();
	    $(".btnSavePost").removeAttr("disabled");
	});

	//save the post
	$(".btnSavePost").click(function () { 
	    var self = this;
	    var postData = CKEDITOR.instances.editor.getData();
	    var postType = $("#editorContainer select").val();
	    var postSubject = $("#editorContainer input").val();
	    var data = { 'Content': postData, 'Type': postType, 'Subject': postSubject };
	    $.ajax({
	        url: '/blog/addPost',
	        type: 'POST',
	        data: JSON.stringify(data),
	        contentType: 'application/json; charset=utf-8',
	        dataType: 'json',
	        success: function (result) {
	            self.attr('disabled', 'disabled'); //avoid sec save
	            alert(result);
	        },
	        error: function (jqXHR, exception) {
	            alert('Oops! ' + exception);
	        }
	    })
	});
	


	//init the ckeditor
	function initCKEDitor(){		
		CKEDITOR.replace('editor',{
			language:'en',
			uiColor: '#cfd1cf',
			height:'700px',
			extraPlugins: 'widget,filetools,uploadwidget,uploadimage',
			uploadUrl: '/uploader/upload.php',
			toolbarCanCollapse:true
		});
	}
 	

});

