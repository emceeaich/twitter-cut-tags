const checkTweets = () => {
    // look for all the tweets we haven't modified
    document.querySelectorAll('.tweet-text:not(.twitter-cut-tag-added)')
    .forEach(el => {
        var tmp;
        if (el.innerText.length > 140) {
            el.classList.add('twitter-cut-tag-added'); // mark as modified
            tmp = el.innerHTML; // store the tweet
            el.innerHTML = ''; // clear out the element
            el.insertAdjacentHTML('afterbegin', // add back with the long tweet behind a cut
            `<details>
                <summary>${tmp.slice(0,40) + '\u2026'}</summary>
                <div>${tmp}</div>
            </details>`);
        }
    });
}

/*
    https://gist.github.com/elgreg/50387f1e850306eaf5ca3d444538c64c
    check for new tweets
*/
window.setInterval(checkTweets, 2000);
