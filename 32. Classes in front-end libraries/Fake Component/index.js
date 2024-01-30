import FakeComponent from "./fake-component.js";

// TODO: define the class
class Home extends FakeComponent {
    render() {
        return `<h1>Welcome home!</h1>`
    }

    afterFirstRender() {
        console.log("abcde")
    }
}

// TODO: instantiate the class
const home1 = new Home()
