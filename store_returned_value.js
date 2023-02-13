import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class NintexSampleTextfield extends LitElement {
  //...
  onChange(e) {
    const args = {
        bubbles: true,
        cancelable: false,
        composed: true,
        // value coming from input change event. 
        detail: e.target.value,
    };
    const event = new CustomEvent('ntx-value-change', args);
    this.dispatchEvent(event);
  }


  static getMetaConfig(){

    return {
      //...
      properties: {
        value: {
          type: 'string',
          title: 'Value',
          isValueField: true,
        },
      },
      events: ["ntx-value-change"],
    };
  }
}
// registering the web component
const elementName = 'nintex-txt-field';
customElements.define(elementName, NintexSampleTextfield);

