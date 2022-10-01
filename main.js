/* 
Social Share Links:

WhatsApp:
https://wa.me/?text=${postTitle} ${postUrl}

Facebook:
https://www.facebook.com/sharer.php?u=${postUrl}

Twitter:
https://twitter.com/share?url=${postUrl}&text=${postTitle}

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&is_video=[is_video]&description=${postTitle}

LinkedIn:
https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}

*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init(){
const pinterestImg = document.querySelector(".pinterest-img");

let postUrl = encodeURI(document.location.href);
let postTitle = encodeURI("Hi everyone, please check this out: ");
let postImg = encodeURI(pinterestImg.src);

facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
)
twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
)
pinterestBtn.setAttribute(
    "href",
    'https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&is_video=[is_video]&description=${postTitle}'
)
linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
)
whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
)
}

init()
