/**
 * 表示されている全てのコメントに対していいね
 */
const likeButtons = document.querySelectorAll("#like-button");
likeButtons.forEach((button) => button.click());

/**
 * 表示されている全てのハートに対していいね
 */
const heartButtons = document.querySelectorAll("#creator-heart");
heartButtons.forEach((button) => button.click());
