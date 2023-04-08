const info = {
    img: './images/my_photo.jpg',
<<<<<<< HEAD
    contacts: ['Contacts','+380688067043','alona.b.panchenko@gmail.com',['Telegram','https://t.me/Alonka1988'],['GitHub','https://github.com/Enotishche'],['LinkedIn','https://www.linkedin.com/in/alona-panchenko-17477a26b/'],['Kyiv | Ukraine','https://www.google.com/maps/place/kiev,+02000/'] ],
=======
    contacts: ['Contacts','+380688067043','alona.b.panchenko@gmail.com',['Telegram','https://t.me/Alonka1988'],['GIT','https://github.com/Enotishche'],['LinkedIn','https://www.linkedin.com/in/alona-panchenko-17477a26b/'],['Kyiv | Ukraine','https://www.google.com/maps/place/kiev,+02000/']],
>>>>>>> 3004c7e11261340b58c6421835cd615ba65174c5
    techSkills: ['Tech skills','HTML5','CSS3','GIT', 'Saas', 'Responsive/Adaptive design','JavaScript','React Hooks & Components','Node.js','REST API','React Redux','Webpack','Parcel'],
    softSkills: ['Soft skills','Attention to detail','Hardworking','Flexible', 'Cooperative','Quick learning skills','Good communication','Punctual'],
    languageSkills: ['Language','Ukrainian — native','Russian — native','English — intermediate', 'Polish — pre-intermediate']
};

const cv = {
    title: 'CV_Alona_Panchenko',
    name: 'Alona',
    surname: 'Panchenko',
    targetCV: 'Junior Frontend Developer',
    summaryCV: 'I am a Junior Front-End developer with knowledge of HTML, CSS, JavaScript and React. I am communicative, hard-working and purposeful, responsible and always up for a challenge. I am an easy and fast learner, always open to new knowledge and skills. Development, practice and work for the result are important for me. I am skillful in analyzing problems and thinking of solve technical problems.',
    additionalinfoCV: '',
    projExperience: [
        'table',
        `Project Experience`,
        {
            id:1,
            nameProj: 'Icecream project  ',
            skillProj: 'HTML, CSS, JavaScript',
            textProj: 'Ice company website with responsive layout, <br>burger menu, modal window and attractive design.<br>Role: Scrum Master, Developer',
            link: 'https://margarytak.github.io/KoRovKaTeamProject/',
            linkGit: 'https://github.com/margarytak/KoRovKaTeamProject'
        },
        {
            id:2,
            nameProj: 'Filmoteka',
            skillProj: 'HTML, SASS, JavaScript, Handlebars, Parcel',
            textProj: 'Application for choosing a movie.<br>App component with Public and Private routes, <br>AuthPage page logic. Deploy project on Netlify.<br>Role: Developer',
            link:'https://stig89.github.io/Filmoteka-command-project-JS-/',
            linkGit:'https://github.com/STIg89/Filmoteka-command-project-JS-'
        },
        {    
            id:3,
            nameProj: 'Image finder',
            skillProj: 'HTML, CSS, JavaScript, React.js',
            textProj: 'An application for searching images <br>with various themes.<br>Role: Developer',
            link:'https://enotishche.github.io/goit-react-hw-04-images/',
            linkGit:'https://github.com/Enotishche/goit-react-hw-04-images'
        },
        {
            id:4,
            nameProj: 'WebSudio',
            skillProj: 'HTML, SCSS, JavaScript',
            textProj: 'A website with a responsive layout.<br>Role: Developer.',
            link:'https://enotishche.github.io/goit-markup-hw-08/',
            linkGit:'https://github.com/Enotishche/goit-markup-hw-08'
        },
        {
            id:5,
            nameProj: 'Other',
            skillProj: 'HTML, CSS, JavaScript, React.js',
              textProj: 'My other works using various techniques.<br>Role: Developer.',
            link:'https://github.com/Enotishche?tab=repositories',
            linkGit:'https://github.com/Enotishche?tab=repositories'
        }
    ],
    workExperience: [
        'inline',
        `Work Experience`,
        {
        id:1,
        name: 'Database administrator',
        Corp: 'Kyiv Aviation Profile College',
        dataOn: 'March 2023',
        dataOff: 'now',
        place: 'Kyiv',
        about: '',
        achievements: ``,
        responsibilities: ['Database monitoring to ensure high performance, availability and security.','Data access management, assigning access rights and roles to database users.','Data backup and recovery, data loss protection.','Maintenance of technical documentation.'],
        },
        {
        id:2,
        name: 'Senior personal consultant for medium and small business',
        Corp: 'JSC "UKRSIBBANK"',
        dataOn: 'May 2017',
        dataOff: 'October 2021',
        place: 'Kyiv',
        about: '',
        achievements: 'Implementation of a personal business plan for the sale of premium packages by 100 percent or more within two years of work Involvement of the salary IT project for more than 2,000 cards, the first place for the involvement of salary and card projects in the Kyiv regional administration.',
        responsibilities: ['Support and preservation of the existing base of legal entities, search and attraction of new ones, as well as organization and sale of banking products to them.','Attracting and organizing the sale of banking products to individuals of the premium segment (including owners, managers, top managers of companies).',`Preservation and expansion of the client base: personal acquaintance with each client and regular maintenance of contacts, holding meetings and negotiations with clients, support for complex banking operations and client requests, ensuring quality client service, maintaining long-term relationships, analysis and control of client profitability.`],
        }
    ],
    education: [
        'inline',
        `Education`,
        {
        id:1,
        name: 'Fullstack Developer',
        Corp: 'IT school GoIT',
        dataOn: '2021',
        dataOff: '2023',
        degree: 'Kyiv',
        about: ''
        },
        {
        id:2,
        name: 'Teacher of Ukrainian language and literature',
        Corp: 'Kyiv University named after Boris Grinchenko',
        dataOn: '2005',
        dataOff: '2010',
        degree: 'Master`s degree',
        about: ''
        }
    ],
};

export {info, cv } 
