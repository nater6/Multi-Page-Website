
function consoleText(text, textID, underscoreID) {
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = document.getElementById(textID[0]);
    let done = 0;
    let typing = window.setInterval(function () {
        
        if (letterCount === 0 && !waiting) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            window.setTimeout(function () {
                x = 1;
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (!waiting) {
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

let observer = new IntersectionObserver(
    (valChanger) => {
        valChanger.forEach((entry) => {
            if (entry.isIntersecting === true) {
                if (entry.target.classList.contains('hidden')) {
                    entry.target.classList.remove('hidden');
                    entry.target.classList.add('fade');
                }
            }
        });
    },
    { threshold: [0.5] }
);

const sections = document.querySelectorAll('section');
sections.forEach((section) => observer.observe(section));

const POP_UP_BACKGROUND = document.querySelector('.pop-up');
const PROJECT_SEC = document.querySelector('.project-overview');


//Get the elements for the pop up
const TITLE = document.querySelector('#pop-up-title'),
REPO = document.querySelector('#pop-up-repo'),
LANG = document.querySelector('#pop-up-lang'),
DESC = document.querySelector('#pop-up-desc'),
SKILLS = document.querySelector('#pop-up-skills'),
IMG_ONE = document.querySelector('#imgOne'),
IMG_TWO = document.querySelector('#imgTwo'),
IMG_THREE = document.querySelector('#imgThree')

//FillPopUp populates the pop up with the information for a specific oroject

function DisplayImgs(project){
    console.log(project)
    const SCREENSHOTS = document.querySelectorAll('.screenshot')
    if (project === 'Lemin') {
        //Hide Images
        SCREENSHOTS.forEach(elem => {
            elem.style.display='none'
        })

    } else{
        //Display Images
        SCREENSHOTS.forEach(elem => {
            elem.style.display='block'
        })

    }

}

function SetImages(arr) {
    //Loop through the array of objects
    arr.forEach((elem, i) => {

        switch (i) {
            case 0:
                IMG_ONE.setAttribute("src", `assets/images/${elem}`)
                break;
            case 1:
                IMG_TWO.setAttribute("src", `assets/images/${elem}`)
                break;
            case 2:
                IMG_THREE.setAttribute("src", `assets/images/${elem}`)
                break;
            default:
                break;
        }
    })
}


