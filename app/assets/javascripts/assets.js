$(document).ready(function(){
    var apiKey = $("body").data('filepicker-key')
    var postUrl = $('#upload-files').data('post-url') + "/assets"
   $('#upload-files').click(function(){
      filepicker.setKey(apiKey);
      getFiles(postUrl);
   }); 
});

function addNewFileToContainer(fpUrl){
    var getUrl = $("#upload-files").data('post-url');
    $.get(getUrl, function(data){
       var currentFile = "#container div[data-fpurl='"+fpUrl +"']";
       $(data).find(currentFile).appendTo("#container"); 
    });
}


function createAsset(fpUrl, fpFilename, postUrl){
    $.ajax({
        type: "POST", 
        url: postUrl,
        data: {
            asset: {
                fpurl: fpUrl,
                fp_filename: fpFilename
            }
        }, 
        dataType: 'json',
        timeout: 30000,
        success: function(){
            addNewFileToContainer(fpUrl)
        },
        error: function(x,t,m){
            if(t==="timeout"){
                alert("Process timed out");
            }
            else 
            {
                alert(t);
            }
        }
    });
}

function getFiles(postUrl){
    filepicker.pickMultiple({
        mimetypes: ['image/*'],
        container: 'modal'
      },
      function(FPFiles){
        for(var i=0; i<FPFiles.length; i++)
        {
            var fpUrl = FPFiles[i].url + "?dl=false";
            var fpFilename = FPFiles[i].filename;
            createAsset(fpUrl, fpFilename, postUrl);
        }
        console.log(JSON.stringify(FPFiles));
      },
      function(FPError){
        console.log(FPError.toString());
      }
    );
}