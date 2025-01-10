import RouterHandler from "./router.js";
import setActiveLink from "./utils/activeLink.js";

window.onhashchange = () => setActiveLink();

class App {
    constructor() {
        new RouterHandler();
    }
}

new App()