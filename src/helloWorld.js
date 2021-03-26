import { LitElement, html } from 'lit-element';

class HelloWorld extends LitElement {

    render() {
        return html` Hello World!!`;
    }
}
customElements.define('hello-world', HelloWorld);