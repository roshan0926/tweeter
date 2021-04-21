const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

function renderTweets(tweets) {
  $container = $('#tweets-container')
  tweets.forEach(tweet => {
    let $tweet = createTweetElement(tweet)
    console.log($tweet)
    $container.append($tweet)
  })
}
// console.log(data[0].user.name)
const createTweetElement = function (tweet) {
  const name = tweet.user.name
  const avatars = tweet.user.avatars
  const handle = tweet.user.handle
  const text = tweet.content.text
  const created_at = tweet.created_at
  const $tweet = $(`<article class='tweet'>
  <header>
    <div>
      <h3><img src=${avatars}>${name}</h3>
      <h3>${handle}</h3>
    </div>
    <div>
      <h3>${text}</h3>
    </div>
  </header>
  <footer>
    <h6 class="tweetDate" datetime="${(new Date(created_at)).toISOString()}"></h6>
    <h6>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i> 
    </h6>
  </footer>
</article>`);
  return $tweet;
}


$( document ).ready(function() {
  renderTweets(data)
  timeago.render(document.querySelectorAll('.tweetDate'));
  $('#tweets-container').append($tweet);
});
; // to add it to the page so we can make sure it's got all the right elements, classes, etc.

// renderTweets(data);