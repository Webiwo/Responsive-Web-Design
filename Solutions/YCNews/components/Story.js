export default function Story(story) {
    return `
        <li> 
            <span class="upvote">▲</span>
            <a href="${story.url}"><strong>${story.title}</strong></a>
            <span>(${story.domain})</span>
            
            <div class="story-details">
                <strong>${story.points} points</strong> by ${story.user} ${story.time_ago}
                |
                <a href="#/item?id=${story.id}">
                    ${story.comments_count} comments
                </a>
                |
                <span class="favorite">
                    <i class="fa-solid fa-heart"></i>
                </span>
            </div>
        </li>    
  `
}