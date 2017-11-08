document.querySelectorAll('.tweet-text')
    .forEach(el => {
        var tmp;
        if (el.innerText.length > 140) {
            el.classList.add('twitter-cut-tag-added');
            tmp = el.innerHTML;
            el.innerHTML = '';
            el.insertAdjacentHTML('afterbegin', 
            `<details>
                <summary>Twitter Cut Tag</summary>
                <div>${tmp}</div>
            </details>`);
        }
    });


