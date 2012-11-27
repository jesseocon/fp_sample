$(document).ready(function(){
    var apiKey = $("body").data('filepicker-key');
    var postUrl = $('#upload-files').data('post-url') + "/assets";
    
   $('#upload-files').click(function(){
      filepicker.setKey(apiKey);
      getFiles(postUrl);
   }); 
});


// appends the newest upload to the photos container
function addNewFileToContainer(fpUrl){
    var getUrl = $("#upload-files").data('post-url');
    $.get(getUrl, function(data){
       var currentFile = "#container div[data-fpurl='"+fpUrl +"']";
       $(data).find(currentFile).appendTo("#container"); 
    });
}

// sends request to create an Asset model
function createAsset(fpUrl, fpFilename, fpMimetype, fpIsWriteable, fpSize, postUrl){
    $.ajax({
        type: "POST", 
        url: postUrl,
        data: {
            asset: {
                fpurl: fpUrl,
                fp_filename: fpFilename,
                fp_mimetype: fpMimetype,
                fp_isWriteable: fpIsWriteable,
                fp_size: fpSize
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
            var fpMimetype = FPFiles[i].mimetype;
            var fpIsWriteable = FPFiles[i].isWriteable;
            var fpSize = FPFiles[i].size;
            createAsset(fpUrl, fpFilename, fpMimetype, fpIsWriteable, fpSize, postUrl);
        }
        console.log(FPFiles);
      },
      function(FPError){
        console.log(FPError.toString());
      }
    );
}


function removeFpurl(fpurl){
    $.ajax({
       url: fpurl,
       type: 'DELETE',
       success: function() {
           console.log('url was deleted');
       } 
    });
}







