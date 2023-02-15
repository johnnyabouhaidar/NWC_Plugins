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

    const api_url = 
    "https://iccleb.sharepoint.com/sites/NintexTrainee/JohnnyAbouHaidar/_api/web/lists/GetByTitle('list2read')/items";

// Defining async function
async function getapi(url) {
  
  // Storing response
  const response = await fetch(url, {
method: "GET",

headers: {
 // "Content-Type": "application/json"    --> option 1 (not working)
  "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaWNjbGViLnNoYXJlcG9pbnQuY29tQGIxMzQ4ZjUwLTAzMGUtNGVhMS04ZDQ0LTQ5M2VlMTlmODhkOCIsImlzcyI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEBiMTM0OGY1MC0wMzBlLTRlYTEtOGQ0NC00OTNlZTE5Zjg4ZDgiLCJpYXQiOjE2NzY0NDg2ODIsIm5iZiI6MTY3NjQ0ODY4MiwiZXhwIjoxNjc2NTM1MzgyLCJpZGVudGl0eXByb3ZpZGVyIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQGIxMzQ4ZjUwLTAzMGUtNGVhMS04ZDQ0LTQ5M2VlMTlmODhkOCIsIm5hbWVpZCI6ImM4YTc2ZjkzLThjNmItNDExYy04ZDQ0LTU4OWE5MmNhMWM5MEBiMTM0OGY1MC0wMzBlLTRlYTEtOGQ0NC00OTNlZTE5Zjg4ZDgiLCJvaWQiOiJiMzAwYzlmZC02ZDA0LTQxMzctOGYyYS0yMGM4MTUyNWViNGYiLCJzdWIiOiJiMzAwYzlmZC02ZDA0LTQxMzctOGYyYS0yMGM4MTUyNWViNGYiLCJ0cnVzdGVkZm9yZGVsZWdhdGlvbiI6ImZhbHNlIn0.orUAn5V1e7Zrpi28ycf1HFYuf0IruAnQq9a4bL7osTJx48xKAfCYLx-yavc2Pyvzmv433ApvUpbD4RJm2_VAMdW5GG6GrL_PCQ5Jg0kdjUY-v3Oa5c1cvGJbLVn27ER4VWOlTanHwJhlUjc9WAGHcWXkLotdMNojsBJ0tdXKWWEJ98MZEUqWAzrpaDsvhDo0BQEzUnAJJYQezK0t0ul_LODq_BBg4EjTuO6_-zazwWlsbqL_GerulcsNIPjVKE1eEJCLRI__HItqy8pz3GiOR5vvCdAnUd_FA72Sx-MPeDQqeyS-22oOr4l5OjnI-8c_IDO_yJASLqgMxDSIckp9jA" ,
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
        <th>---</th>
       </tr>`;
  
  // Loop to access all rows 
  for (let r of data.value) {
      tab += `<tr> 
  <td><input value="${r.Title}"> </td>
  <td><input value="${r.OData__x0066_p31}"></td>
  <td><input value="${r.odmd}"></td> 
  <td><a href="">DELETE</a></td>          
</tr>`;
  }


  // Setting innerHTML as tab variable



  var htmlObject = document.createElement('table');
  htmlObject.innerHTML=tab
  document.getElementsByClassName("ng-star-inserted").appendChild(htmlObject); 


    return htmlObject;
  }
  let res=getapi(api_url)
  return( "")
}

}
// registering the web component
const elementName = 'hello-world';
customElements.define(elementName, HelloWorld);



