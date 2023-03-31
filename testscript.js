async function get_token(client_id_Arg,client_secret_Arg,workflow_id_Arg)
{
  const get_token_url="https://eu.nintex.io/authentication/v1/token";
  const response = await fetch(get_token_url, {
  method: "POST",

  headers: {
    "Content-Type": "application/json" ,
    "Accept":"application/json"

  },

 body:JSON.stringify(
 {
            "client_id": `${client_id_Arg}`,
            "client_secret": `${client_secret_Arg}`,
            "grant_type": "client_credentials"
    })


});

var data = await response.json();
    console.log(data["access_token"]);
var nwc_token=data["access_token"];

  const start_instance_url=`https://eu.nintex.io/workflows/v1/designs/${workflow_id_Arg}/instances`;
  const initiateresponse = await fetch(start_instance_url, {
  method: "POST",

  headers: {
    "Content-Type": "application/json" ,
    "Accept":"application/json",
    "Authorization":`Bearer ${nwc_token}` 

  },

});


var data = await initiateresponse.json();
    console.log(data["id"]);
    var instance_id=data["id"];

  var token_available=false;
    do{
    const instance_details_url=`https://eu.nintex.io/workflows/v2/instances/${instance_id}`;
  const instance_details_response = await fetch(instance_details_url, {
  method: "GET",

  headers: {
    "Content-Type": "application/json" ,
    "Accept":"application/json",
    "Authorization":`Bearer ${nwc_token}` 

  },

});
var data = await instance_details_response.json();
console.log(instance_details_response.status)  

try{  
console.log(data["actions"][3]["logMessage"]);
token_available=true
}
catch
{token_available=false}
var statuscode = instance_details_response.status
const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date <1200);
}while(token_available==false||statuscode==404)

    

}
get_token("5e6ff929-99d8-452b-9b21-98d3b277ab70","tRsOIItTRVsJtVsIKJtRsPMtVsQQtT2JtWUsOOtUsMPtRsNJPtPSsQMMtSsRtRSsFNtS2HsFMRMOFtRsKNIFPOtVsMNLOQJtS3D","ddec146a-9cef-4d20-87c8-a48fe8deda9e")