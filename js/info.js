const info = {
    img: './images/me.jpg',
    contacts: ['Contacts','+380688067043','alona.b.panchenko@gmail.com','https://github.com/Enotishche','https://www.linkedin.com/'],
    techSkills: ['Tech skills','HTML5','CSS3','GIT', 'Saas', 'Responsive/Adaptive design','JavaScript','React Hooks & Components','Node.js','REST API','React Redux','Webpack','Parcel'],
    softSkills: ['Soft skills','Attention to detail','Hardworking','Flexible', 'Cooperative','Quick learning skills','Good communication','Punctual'],
    languageSkills: ['Language skills','Ukrainian — native','Russian — native','English — intermediate', 'Polish — pre-intermediate']
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
            textProj: 'Ice company website with responsive layout, burger menu, modal window and attractive design.<br> Role: Scrum Master',
            link: 'https://github.com/margarytak/KoRovKaTeamProject',
            linkGit: 'https://github.com/margarytak/KoRovKaTeamProject'
        },
        {
            id:2,
            nameProj: 'Filmoteka',
            skillProj: 'HTML, SASS, JS, Handlebars, REST API, Parcel',
            textProj: 'Application for choosing a movie. App component with Public and Private routes, AuthPage page logic. Deploy project on Netlify.<br> Role: Developer',
            link:'https://stig89.github.io/Filmoteka-command-project-JS-/',
            linkGit:'https://stig89.github.io/Filmoteka-command-project-JS-/'
        },
        {    
            id:3,
            nameProj: 'Image finder',
            skillProj: 'HTML, CSS, JavaScript, React.js',
              textProj: '++',
            link:'https://enotishche.github.io/goit-react-hw-04-images/',
            linkGit:'https://enotishche.github.io/goit-react-hw-04-images/'
        },
        {
            id:4,
            nameProj: 'WebSudio',
            skillProj: 'HTML, SCSS, JavaScript',
            textProj: 'A website with a responsive layout. Role: Developer.',
            link:'https://enotishche.github.io/goit-markup-hw-08/',
            linkGit:'https://enotishche.github.io/goit-markup-hw-08/'
        },
        {
            id:5,
            nameProj: 'Other',
            skillProj: 'HTML, CSS, JavaScript, React.js',
              textProj: '++',
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
        about: '...1'
        },
        {
        id:2,
        name: 'Senior personal consultant for medium and small businesses',
        Corp: 'JSC "UKRSIBBANK"',
        dataOn: 'May 2017',
        dataOff: 'October 2021',
        place: 'Kyiv',
        about: '...2'
        }
    ],
    education: [
        'inline',
        `Education`,
        {
        id:1,
        name: 'Teacher of Ukrainian language and literature',
        Corp: 'Kyiv University named after Boris Grinchenko',
        dataOn: 'September 2005',
        dataOff: 'June 2010',
        degree: 'Master',
        about: '...1'
        }
    ],
    addEducation: [
        'inline',
        `Additional Education`,
        {
        id:2,
        name: 'Junior Javascript Developer',
        Corp: 'GoIT -IT school, Kyiv',
            dataOn: 'April 2021',
            dataOff: 'April 2023',
            degree: 'Master',
            about: '...1'
            }
    ]
};

export {info, cv } 