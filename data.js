const PROJECTS = {
    makeyourgame: {
        name: 'Make Your Game',
        repo: 'https://github.com/nater6/make-your-game-score-handling',
        lang: 'GoLang Javascript',
        images: ['make-your-game/myg_one.png', 'make-your-game/myg_two.png', 'make-your-game/myg_three.png'],
        description: `The objective of this project was to remake the classic donkey kong game. The game runs at 60 FPS and uses RequestAnimationFrame. When the player finishes they can 
        input their results into the leaderboard and see how their results compare. The game doesn't use canvas or any frameworks, so I could get used to manipulating DOM with vanilla JavaScript.`,
        skills: ['DOM', 'Event Loop', 'Dev Tools', 'HTML', 'CSS'],
    },
    lemin: {
        name: 'Lemin',
        repo: 'https://github.com/nater6/lem-in',
        lang: 'GoLang',
        images: ['', '', ''],
        description: `The aim of this project is to traverse through a graph in the most efficient way. Simple right? I forgot to mention, traversing multiple times, simultaneously, without being in the same node at the same time. Imagine ants moving through an ant farm, from a starting room to an end. No ants can be in the same room at once.`,
        skills: ['Shortest Path Algorithm', 'Recieving & Outputting Data'],
    },
    misterquiz: {
        name: 'Mister Quiz',
        repo: 'https://github.com/nater6/mister-quiz',
        lang: 'PHP',
        images: ['', '', ''],
        description: `A classic quiz game. Mister quiz is an online web game in which users can make an account, play and see their results. The aim of this project was to develop with PHP and XAMPP. `,
        skills: ['PHP', 'Laravel', 'XAMPP', 'SQL', 'PHP Authentication', 'HTML', 'CSS'],
    },
    forum: {
        name: 'Forum',
        repo: 'https://github.com/codecplyre/real-time-forum',
        lang: 'GoLang Javascript',
        images: ['real-time-forum/rtf_one.png', 'real-time-forum/rtf_two.png', 'real-time-forum/rtf_three.png'],
        description: `This project was to make a forum for coding students. Users can make posts, comment and message other users. As well as that, users can filter through
        posts, by category, and select favourites. Messages are sent in real time. Users are notified when the chat recipient is
        typing and when they recieve a message.`,
        skills: [
            'Websockets',
            'Go Routines',
            'Go Channels',
            'Docker',
            'APIs',
            'Sessions',
            'Cookies',
            'encryption',
            'SQL Database',
            'UI',
            'DOM',
            'HTTP',
            'HTML',
            'CSS'
        ],
    },
    groupietracker: {
        name: 'Groupie Tracker',
        lang: 'GoLang',
        repo: 'https://github.com/nater6/groupie-tracker-visualisations',
        images: ['', '', ''],
        description: `Groupie Tracker shows information about the best musicians in the world. By getting data from an endpoint, the visuals and information can be displayed in the UI.`,
        skills: ['JSON files and format', 'RESTful APIs'],
    },
    asciiartweb: {
        name: 'Ascii Art Web',
        lang: 'GoLang',
        repo: 'https://github.com/nater6/ascii-art-web',
        images: ['', '', ''],
        description: `Ascii Art Web allows users to enter text and select a font type. This text is then converted to the ascii art font type and displayed to the user.`,
        skills: ['Forms', 'Docker', 'HTTP Status Codes', 'Data Manipulation', 'HTML', 'CSS'],
    },
    graphQL: {
        name: 'GraphQL',
        repo:'https://github.com/nater6/graphql',
        lang: 'Javascript',
        images: ['graphql/graphql_one.png', 'graphql/graphql_two.png', 'graphql/graphql_three.png'],
        description:`In  this project a graphQL endpoint is queried and the data recieved is displayed in a user interface, created with React. This project can be viewed at<a target='_blank' href='https://sage-raindrop-943a69.netlify.app'>this Website .</a>`,
        skills: ['GraphQL', 'GraphIQL', 'Hosting', 'React', 'Apollo', 'SVG', 'CSS' ],
    }
};
