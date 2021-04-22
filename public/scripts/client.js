function renderTweets(tweets) {
  $container = $('#tweets-container');
  tweets.forEach(tweet => {
    let $tweet = createTweetElement(tweet);
    $container.prepend($tweet);
  });
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
  const $tweet = $(`<article class="tweet">
  <header>
    <div>
      <h3><img alt="avatar" src="${avatars}">${name}</h3>
      <h3>${handle}</h3>
    </div>
    <div>
      <p>${text}</p>
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
};

const errors = {
  emptyStr: "⚠️ WARNING: This tweet is empty",
  overLimit: "⚠️ WARNING: This tweet exceeds the character limit"
};
const errorMsg = (type) => {
  const msg = errors[type];
  $('.error-msg').text(msg).slideDown(500, complete => {
    setTimeout(() => $('.error-msg').slideUp(), 3000);
  });
};
$(document).ready(function () {

  $('.new-tweet form').submit((event) => {
    event.preventDefault();
    if ($('.textbox').val().length > 140) {
      return errorMsg('overLimit');
    } else if ($('.textbox').val().trim().length === 0) {
      return errorMsg('emptyStr');
    }
    $.ajax({
      type: 'POST',
      url: '/tweets',
      data: $(event.target).serialize(),
    }).then(() => {
      getTweets();
      loadTweets();
    });
  });

  const loadTweets = function () {
    $.ajax('/tweets', { method: 'GET', data: $(this).serialize() })
      .then(() => {
        $('#tweet-text').val("");
        $('#tweet-text').parent('form').find('.counter').text("140");
      });
  };

  const getTweetsonLoad = function () {
    $.get("/tweets", function (tweets) {
      renderTweets(tweets);
    });
  };

  const getTweets = function () {
    $.get("/tweets", function (tweets) {
      renderTweets([tweets[tweets.length - 1]])
    });
  };

  getTweetsonLoad();
});