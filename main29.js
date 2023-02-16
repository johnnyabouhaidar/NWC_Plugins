import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component



export class HelloWorld extends LitElement {
  
  
  static properties = {
    sentid: {type: String},
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Hello World',
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

    let bearertoken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaWNjbGViLnNoYXJlcG9pbnQuY29tQGIxMzQ4ZjUwLTAzMGUtNGVhMS04ZDQ0LTQ5M2VlMTlmODhkOCIsImlzcyI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEBiMTM0OGY1MC0wMzBlLTRlYTEtOGQ0NC00OTNlZTE5Zjg4ZDgiLCJpYXQiOjE2NzY1MzA5MDQsIm5iZiI6MTY3NjUzMDkwNCwiZXhwIjoxNjc2NjE3NjA0LCJpZGVudGl0eXByb3ZpZGVyIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQGIxMzQ4ZjUwLTAzMGUtNGVhMS04ZDQ0LTQ5M2VlMTlmODhkOCIsIm5hbWVpZCI6ImM4YTc2ZjkzLThjNmItNDExYy04ZDQ0LTU4OWE5MmNhMWM5MEBiMTM0OGY1MC0wMzBlLTRlYTEtOGQ0NC00OTNlZTE5Zjg4ZDgiLCJvaWQiOiJiMzAwYzlmZC02ZDA0LTQxMzctOGYyYS0yMGM4MTUyNWViNGYiLCJzdWIiOiJiMzAwYzlmZC02ZDA0LTQxMzctOGYyYS0yMGM4MTUyNWViNGYiLCJ0cnVzdGVkZm9yZGVsZWdhdGlvbiI6ImZhbHNlIn0.ATrODyrPG7ql85UxkYZipbLxHftC_TKdfkIbVSzejaKHqZTYi_FXf-neAlloE9iqCHRC-mkZnfMTmlg0ONBTUUNpQkRl6BpIqZndzAgWAxFEuyOibyamLYSilDRz3Jm-oRHcDhfi6HGgE2TLeUeA357XRitjwa7J4tnmDjYuUyT7T6nDSah6TDA3FG7vEkXFtf9aJ_0cLNGhK-GYVwcH1iOTbvJV8KgBxks8TAdYpiJnflw4ukJ62bk_lcFbY9Ok5yCELWuz5owQiNi0oFqeAcxAV_24bwKeOjMv6HLJ2-SSg391PK360HyiNH8l5YOE1cUCuE-nSPYGXxbvBs312w"

    async function addnewFunc() ////////////////////////////////////////ADD NEW ITEM
    {
      //alert(document.getElementById("new1").value)
    
      const addurl = `https://iccleb.sharepoint.com/sites/NintexTrainee/JohnnyAbouHaidar/_api/web/lists/GetByTitle('list2read')/items`;
      
    // Defining async function
    
        
        // Storing response
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
    
     body:JSON.stringify({
      "__metadata": {
        "type": "SP.ListItem"
      },
      "Title": document.getElementById("new1").value,
      "OData__x0066_p31":document.getElementById("new2").value,
      "odmd":document.getElementById("new3").value
    })
    
    
    });
        
    location.reload();
    }
    
    
    
    
    
    
    
    
    async function updateitem(idd)////////////////////////UPDATE ITEM
    {
    
      const addurl = `https://iccleb.sharepoint.com/sites/NintexTrainee/JohnnyAbouHaidar/_api/web/lists/GetByTitle('list2read')/items(${idd})`;
      
    // Defining async function
    
        
        // Storing response
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
    
     body:JSON.stringify({
      "__metadata": {
        "type": "SP.ListItem"
      },
      "Title": document.getElementById(`curr${idd}1`).value,
      "OData__x0066_p31":document.getElementById(`curr${idd}2`).value,
      "odmd":document.getElementById(`curr${idd}3`).value
    })
    
    
    });
        
    location.reload();
    }
    
    
    
    
    
    
    
    async function deleteitem(idd)//////////////////DELETE ITEM
    {
      const delurl = `https://iccleb.sharepoint.com/sites/NintexTrainee/JohnnyAbouHaidar/_api/web/lists/GetByTitle('list2read')/items(${idd})`;
      
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
    "https://iccleb.sharepoint.com/sites/NintexTrainee/JohnnyAbouHaidar/_api/web/lists/GetByTitle('list2read')/items";

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
      `<tr>
        <th>Title</th>
        <th>col1</th>
        <th>col2</th>

       </tr>`;
  
  // Loop to access all rows 
  for (let r of data.value) {
      tab += `<tr> 
      <td><input id=curr${r.Id}1 value="${r.Title}"> </td>
      <td><input id=curr${r.Id}2 value="${r.OData__x0066_p31}"></td>
      <td><input id=curr${r.Id}3 value="${r.odmd}"></td> 
      <td><button onclick="deleteitem('${r.Id}')">DELETE</a></td>
      <td><button onclick="updateitem('${r.Id}')">UPDATE</a></td>         
</tr>`;
  }

  tab += `<tr> 
  <td><input id = "new1" value=""> </td>
  <td><input id ="new2" value=""></td>
  <td><input  id ="new3"  value=""></td> 
  <td><button id="newbtn" onclick="addnewFunc()">+</a></td>          
</tr>`

  // Setting innerHTML as tab variable



  var htmlObject = document.createElement('table');
  htmlObject.innerHTML=tab
  document.getElementById("actionpanel1-group-control").appendChild(htmlObject); 


    return htmlObject;
  }
  let res=getapi(api_url)
  return( "")
}

}
// registering the web component
const elementName = 'hello-world';
customElements.define(elementName, HelloWorld);



