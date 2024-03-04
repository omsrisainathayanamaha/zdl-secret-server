function sendToServer(ip, data)
{
    let request = new XMLHttpRequest();
    request.open("POST", ip);
    request.send(data);
    request.onload = function() {
        console.log("Data Submitted: "+request.status+" "+request.response);
        //code 200 is a success and literally everything else is a fail.
    }
    request.onerror = function() {
        console.log("Network Error");
    }
    request.onprogress = function(event)
    {
        console.log("Received "+event.loaded+" of "+event.total);

    }
}
//datatype can be '' for string, 'json' for json, 'document' for xml or html document, 'blob' for blob, 'arraybuffer' as an ArrayBuffer for binary data. 
function getFromServer(ipwithdirectory, datatype)
{
    let request = new XMLHttpRequest();
    request.open("GET", ipwithdirectory);
    request.responseType = datatype;
    request.send();
    request.onload = function() {
        return request.response;
    }

}