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
    //return html`<p>Hello ${this.sentid} JOHNNY !<p/>`;
    content=tableFromJson()
    return html`${content}`;
  }
}
// registering the web component
const elementName = 'hello-world';
customElements.define(elementName, HelloWorld);



let tableFromJson = () => {
  // the json data.
  const myBooks = [
    {'Book ID': '1', 'Book Name': 'Challenging Times',
     'Category': 'Business', 'Price': '125.60'
    },
    {'Book ID': '2', 'Book Name': 'Learn JavaScript',
     'Category': 'Programming', 'Price': '56.00'
    },
    {'Book ID': '3', 'Book Name': 'Popular Science',
     'Category': 'Science', 'Price': '210.40'
    }
  ]

  // Extract value from table header. 
  // ('Book ID', 'Book Name', 'Category' and 'Price')
  let col = [];
  for (let i = 0; i < myBooks.length; i++) {
    for (let key in myBooks[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  // Create table.
  const table = document.createElement("table");

  // Create table header row using the extracted headers above.
  let tr = table.insertRow(-1);                   // table row.

  for (let i = 0; i < col.length; i++) {
    let th = document.createElement("th");      // table header.
    th.innerHTML = col[i];
    tr.appendChild(th);
  }

  // add json data to the table as rows.
  for (let i = 0; i < myBooks.length; i++) {

    tr = table.insertRow(-1);

    for (let j = 0; j < col.length; j++) {
      let tabCell = tr.insertCell(-1);
      tabCell.innerHTML = myBooks[i][col[j]];
    }
  }

  // Now, add the newly created table with json data, to a container.
  const divShowData = document.getElementById('showData');
  divShowData.innerHTML = "";
  divShowData.appendChild(table);
  return (table.outerHTML)
}