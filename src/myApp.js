import { LitElement, html } from 'lit-element';
import "./helloWorld"

class MyAPp extends LitElement {

    render() {
        return html`<hello-world></hello-world>`;
    }
}
customElements.define('myApp', MyAPp);