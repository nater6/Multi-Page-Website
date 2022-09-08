function openHomePage() {
    window.location.href = 'homepage.html';
}

function consoleText(text, textID, underscoreID) {
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = document.getElementById(textID[0]);
    let done = 0;
    let typing = window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            window.setTimeout(function () {
                x = 1;
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (waiting === false) {
            done++;
            target.innerHTML = text[0].substring(0, letterCount);
            letterCount += x;
        }
        if (done === text[0].length) {
            clearInterval(typing);
            target.innerHTML = target.innerHTML.substring(
                0,
                target.innerHTML.length
            );
            console.log('underscore ID: ', underscoreID);
            const UNDERSCORE = document.getElementById(underscoreID[0]);
            UNDERSCORE.remove();
            if (text.length > 1) {
                document.querySelector('#consolePos').style.opacity = 1;
                consoleText([text[1]], [textID[1]], [underscoreID[1]]);
            }
        }
    }, 150);
}

consoleText(
    ['Nathaniel Russell', 'Full Stack Dev'],
    ['name', 'position'],
    ['consoleName', 'consolePos']
);
