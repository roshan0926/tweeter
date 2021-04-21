function renderTweets(tweets) {
  $container = $('#tweets-container')
  tweets.forEach(tweet => {
    let $tweet = createTweetElement(tweet)
    // console.log($tweet)
    $container.prepend($tweet)
  })
}
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function (tweet) {
  const name = tweet.user.name
  const avatars = tweet.user.avatars
  const handle = tweet.user.handle
  const text = escape(tweet.content.text);
  const created_at = timeago.format(new Date(tweet.created_at))
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
    <h6 class="tweetDate">${created_at}</h6>
    <h6>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i> 
    </h6>
  </footer>
</article>`);
  return $tweet;
}

$(document).ready(function () {

  $('.new-tweet form').submit((event) => {
    event.preventDefault();
    if ($('.textbox').val().length > 140) {
      return alert('Character count is over the limit!')
    } else if ($('.textbox').val().length === 0 || $('.textbox').val() === "") {
      return alert('Tweet is empty!')
    }
    console.log('Handler for .submit() called.');
    console.log($(event.target).serialize());
    $.ajax({
      type: 'POST',
      url: '/tweets',
      data: $(event.target).serialize(),
    }).then(() => {
      console.log('Successfully loaded');
      getTweets()
      loadTweets()
    });
  });
  const loadTweets = function () {
    $.ajax('/tweets', { method: 'GET', data: $(this).serialize() })
    .then(() => {
      $('.textbox').val("");
    })
  }
  const getTweetsonLoad = function () {
    $.get("/tweets", function (tweets) {
      renderTweets(tweets)
      console.log('these are tweets', tweets)
    })
  }
  const getTweets = function () {
    $.get("/tweets", function (tweets) {
      renderTweets([tweets[tweets.length - 1]])
      console.log('these are tweets', tweets)
    })
  }
  getTweetsonLoad()
  $("<div>").text(textFromUser);
});