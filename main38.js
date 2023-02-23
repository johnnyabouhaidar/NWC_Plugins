import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component



export class HelloWorld extends LitElement {
  
  
  static properties = {
    sentid: {type: String},
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Test SP LIST',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: {
        sentid: {
          type: 'string',
          title: 'sentid',
          description: ''
        }
      }
    };
  }
  



  constructor() {
    super();
    this.sentid = 'World';
  }
  



  render() {

    let bearertoken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaWNjbGViLnNoYXJlcG9pbnQuY29tQGIxMzQ4ZjUwLTAzMGUtNGVhMS04ZDQ0LTQ5M2VlMTlmODhkOCIsImlzcyI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEBiMTM0OGY1MC0wMzBlLTRlYTEtOGQ0NC00OTNlZTE5Zjg4ZDgiLCJpYXQiOjE2NzcxNDAxMTksIm5iZiI6MTY3NzE0MDExOSwiZXhwIjoxNjc3MjI2ODE5LCJpZGVudGl0eXByb3ZpZGVyIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQGIxMzQ4ZjUwLTAzMGUtNGVhMS04ZDQ0LTQ5M2VlMTlmODhkOCIsIm5hbWVpZCI6ImM4YTc2ZjkzLThjNmItNDExYy04ZDQ0LTU4OWE5MmNhMWM5MEBiMTM0OGY1MC0wMzBlLTRlYTEtOGQ0NC00OTNlZTE5Zjg4ZDgiLCJvaWQiOiJiMzAwYzlmZC02ZDA0LTQxMzctOGYyYS0yMGM4MTUyNWViNGYiLCJzdWIiOiJiMzAwYzlmZC02ZDA0LTQxMzctOGYyYS0yMGM4MTUyNWViNGYiLCJ0cnVzdGVkZm9yZGVsZWdhdGlvbiI6ImZhbHNlIn0.A8lHdLJKEDVAqb-yhHQIxHtOIcyjVWVzlPFPJ9QCeewk-X8b64eZ6KGB26GGUhmQRiMEYNhjSjKmQBiehEDQG3KxIEuyoShQEQK21-sgxfar6s13AsQQ4I2OQ0z6wzZ0U2G7wC584cqIw6L5EDh7FL1jVg6D7tItnWHhGMJ_ooa5qkZbDTeq7kaB0bQJvo9vx8YdV1s17-wdvLHWaMO8NYudk-5PWlD1SUKnAqta1w60zLWDrEQRTJrvnj88j-9_XRu04urUPpO1h9UJGasmod_7Cw8UR7Z72-wou1aM4YfqVBQpTk36TjDK9FQRb5Se4e1P_-GmQVDGAimRo2S-vg"
    let siteurl="https://iccleb.sharepoint.com/sites/NintexTrainee/JohnnyAbouHaidar";
    let listname="Employees Training Information";
    
    let col_items=[
              "Title",
              "EmployeeName",
              "EmployeeID",
              "EmployeeEmail",
              "EmployeeDepartment",
              "EmployeeDivision",
              "EmployeeGrade",
              "TrainingType",
              "TechnicalTrainingName",
              "TechnicalTrainingProviderName",
              "TechnicalTrainingObjective",
              "NonTechnicalTrainingCategory",
              "NonTechnicalTrainingCompetency",             
              "NonTechnicalTrainingCourse",
              "NonTechnicalTrainingCategory1",
              "NonTechnicalTrainingCompetency1",
              "NonTechnicalTrainingCourse1",
              "NonTechnicalTrainingPreferredLea",
              "NonTechnicalTrainingPreferredLea0"
    ]
    
    
    async function addnewFunc() ////////////////////////////////////////ADD NEW ITEM
    {
   //alert(document.getElementById("new1").value)

   const addurl = `${siteurl}/_api/web/lists/GetByTitle('${listname}')/items`;

  
   // Defining async function
   
       
       // Storing response
       let bodyy=`{  "__metadata": {
       "type": "SP.ListItem"
     },`
     col_items.forEach(function (field, i)
     
     {
       if (col_items.length!=i+1)
       {bodyy+=`"${field}": "${document.getElementById("new"+(i+1)).value}",`}
   else
   {bodyy+=`"${field}": "${document.getElementById("new"+(i+1)).value}"`}
   }
   );
     
             bodyy+="}"
   
         //console.log(bodyy)
       const response = await fetch(addurl, {
     method: "POST",
   
   
   
   
     headers: {
      // "Content-Type": "application/json"    --> option 1 (not working)
       "Authorization": `Bearer ${bearertoken}` ,
       "Accept":"application/json;odata=verbose",
       "Content-Type": "application/json;odata=verbose",
   
   
      // "Content-Type": "multipart/form-data"  
      // "Content-Type": "text/plain"    --> option 4
     },
   
    body:bodyy
   
   
   });
       
   location.reload();
    }

    
    
    
    
    
    
    
    
    async function updateitem(idd)////////////////////////UPDATE ITEM
    {
      const addurl = `${siteurl}/_api/web/lists/GetByTitle('${listname}')/items(${idd})`;
  
      // Defining async function
      
          
          // Storing response
      
              // Storing response
             let bodyy=`{  "__metadata": {
          "type": "SP.ListItem"
        },`
        col_items.forEach(function (field, i)
        
        {
          if (col_items.length!=i+1)
          {bodyy+=`"${field}": "${document.getElementById("curr"+idd+(i+1)).value}",`}
      else
      {bodyy+=`"${field}": "${document.getElementById("curr"+idd+(i+1)).value}"`}
      }
      );
        
                bodyy+="}"
          const response = await fetch(addurl, {
        method: "POST",
      
        headers: {
         // "Content-Type": "application/json"    --> option 1 (not working)
          "Authorization": `Bearer ${bearertoken}` ,
          "Accept":"application/json;odata=verbose",
          "Content-Type": "application/json;odata=verbose",
          "If-Match": "*",
          "X-HTTP-Method": "MERGE"
      
      
         // "Content-Type": "multipart/form-data"  
         // "Content-Type": "text/plain"    --> option 4
        },
      
       body:bodyy
      
      
      });
          
      location.reload();

    }
    
    
    
    
    
    
    
    async function deleteitem(idd)//////////////////DELETE ITEM
    {
      const delurl = `${siteurl}/_api/web/lists/GetByTitle('${listname}')/items(${idd})`;
      
    // Defining async function
    
        
        // Storing response
        const response = await fetch(delurl, {
      method: "POST",
    
      headers: {
       // "Content-Type": "application/json"    --> option 1 (not working)
        "Authorization": `Bearer ${bearertoken}`  ,
        "Accept":"application/json;odata=verbose",
        "Content-Type": "application/json",
        "If-Match": "*",
        "X-HTTP-Method": "DELETE"
       // "Content-Type": "multipart/form-data"  
       // "Content-Type": "text/plain"    --> option 4
      },
    
     
    
    });
        
    location.reload();
    }
    
    
  

    const api_url = 
    `${siteurl}/_api/web/lists/GetByTitle('${listname}')/items`;

// Defining async function
async function getapi(url) {
  
  // Storing response
  const response = await fetch(url, {
method: "GET",

headers: {
 // "Content-Type": "application/json"    --> option 1 (not working)
  "Authorization": `Bearer ${bearertoken}`,
  "Accept":"application/json"
 // "Content-Type": "multipart/form-data"  
 // "Content-Type": "text/plain"    --> option 4
},



});
  
  // Storing data in form of JSON
  var data = await response.json();
  console.log(data.value);

  let tab = 
  `<table><tr>`
         for (let col of col_items){
          tab+=`<th>${col}</th>`
         } 

   tab+=`</tr>`;


// Loop to access all rows 
for (let r of data.value) {
  let datevar=null
  try{
    datevar=r.expirydate.split('T')[0]
  }catch{
    datevar=null
  }
    tab += `<tr>` 
      col_items.forEach(function (field, i)
      {

        tab+=`<td><input id=curr${r["Id"]}${i+1} value="${r[field]}"> </td>`
      });

tab+=`<td><button id = "currdel${r.Id}"">DELETE</a></td>
<td><button id = "currupdate${r.Id}" ">UPDATE</a></td>          
</tr>`;
}
// Setting innerHTML as tab variable
    // Setting innerHTML as tab variable
    tab += `<tr> `
      col_items.forEach(function (field, i)
          {

            tab+=`<td><input  id ="new${i+1}"  value=""></td>`
          });
    tab+=`<td><button id="newbtn">+</a></td>    </tr>`

  // Setting innerHTML as tab variable



  var htmlObject = document.createElement('table');
  htmlObject.innerHTML=tab
  document.getElementById("actionpanel1-group-control").appendChild(htmlObject); 

  document.getElementById ("newbtn").addEventListener ("click", addnewFunc, false);
  for (let r of data.value) {
  document.getElementById (`currdel${r.Id}`).addEventListener ("click", function(){ deleteitem(r.Id); });
  }

  for (let r of data.value) {
  document.getElementById (`currupdate${r.Id}`).addEventListener ("click", function(){ updateitem(r.Id); });
  }

    return htmlObject;
  }
  let res=getapi(api_url)
  return( "")
}

}
// registering the web component
const elementName = 'hello-world';
customElements.define(elementName, HelloWorld);



