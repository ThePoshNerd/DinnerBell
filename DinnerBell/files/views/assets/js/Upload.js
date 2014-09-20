var file;
function fileSelectHandler(e) {
    var files = e.target.files || e.dataTransfer.files;
    file = files[0];
    previewFile();
}
function upload() {
    var serverUrl = 'https://api.appery.io/rest/1/db/files/' + file.name,
        data = new FormData();

    data.append('file', file);

    $.ajax({
        type: "POST",
        beforeSend: function(request) {
            request.setRequestHeader("X-Appery-Database-Id", FileDB_settings['database_id']),             
            request.setRequestHeader("X-Appery-Session-Token", localStorage.getItem('token'));
        },
        url: serverUrl,
        data: data,
        processData: false,
        contentType: false,
        success: function(data) {
			console.log("Successfully loaded");
            // OPTIONAL, this is the file name under which the image was stored in database....
            localStorage.setItem('db_file_name', data.filename);

         },
        error: function(xhr) {
            console.log("Load error: " + xhr.status + " " + xhr.responseText);
            // do something in case of an error...
        }
    });
}

function previewFile() {

    var previewContainer = $('table[dsid=preview]');
    var fileName = $('[name=fileName]');
    // make the preview container visible once a file was selected
    previewContainer.toggle();

    // set the file name
    fileName.text(file.name);

    // display image in preview container
    if (file.type.indexOf("image") == 0) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var image = $('[name=image]');
            image.attr('src', e.target.result);
            $('[class=mobileimage1_div]').show();
        }
        reader.readAsDataURL(file);
    }

}