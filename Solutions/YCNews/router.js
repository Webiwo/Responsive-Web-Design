import Stories from "./pages/stories.js";

const router = new Navigo("/", true, '#');

export default class RouterHandler {
    constructor() {
        this.createRoutes()
    }

    createRoutes() {
        const routes = [
            { path: '/', page: Stories },
            { path: '/top', page: Stories },
            { path: '/new', page: Stories },
            { path: '/ask', page: Stories },
            { path: '/show', page: Stories },
            { path: '/favorites', page: Stories }
        ];

        routes.forEach(({ path, page }) => {
            router.on(path, () => {
                page(path);
            }).resolve();
        })
    }
}