import view from '../utils/view.js'
import baseUrl from '../utils/baseUrl.js';
import Story from '../components/Story.js';

export default async function Stories(path) {
    const stories = await getStories(path);
    view.innerHTML = createStoryList(stories);
}

async function getStories(path) {
    switch (path) {
        case "/":
            path = "/news";
            break;
        case "/new":
            path = "/newest";
            break;
    }

    const response = await fetch(`${baseUrl}${path}`);
    const stories = await response.json();
    return stories;
}

function createStoryList(stories) {
    const hasStories = stories.length > 0;
    if (hasStories) {
        return `
            <ol>
                ${stories.map(story => Story(story)).join("")}
            </ol>
        `;
    } else {
        return "No stories";
    }
}