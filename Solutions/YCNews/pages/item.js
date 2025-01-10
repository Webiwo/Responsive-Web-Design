import view from '../utils/view.js'
import baseUrl from '../utils/baseUrl.js';
import Story from '../components/Story.js';
import Comment from '../components/Comment.js';

export default async function Item() {
    let item = null;
    let hasComments = false;
    let hasErrors = false;

    try {
        item = await getStory();
        hasComments = item.comments.length > 0;
    } catch (error) {
        hasErrors = true;
    }

    if (hasErrors) {
        view.innerHTML = `<div class="error"><i class="fa-solid fa-bomb"></i><span>Error fetching story</span></div>`;
    }

    view.innerHTML = `
                <ul>
                    ${Story(item)}
                </ul>
                ${hasComments ? item.comments.map(comment => Comment(comment)).join("") : "No comments"}
            `;
}


async function getStory() {
    const storyId = window.location.hash.split("?id=")[1];
    const response = await fetch(`${baseUrl}/item/${storyId}`);
    const story = await response.json();
    return story;
}