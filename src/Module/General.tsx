import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import pass from './Assets/sponsorsLogos/1pass.png';
import ACF from './Assets/sponsorsLogos/ACF.png';
import cfc from './Assets/sponsorsLogos/cfc.png';
import echoAR from './Assets/sponsorsLogos/echoAR.png';
import egg from './Assets/sponsorsLogos/egg.png';
import glimpse from './Assets/sponsorsLogos/glimpse.png';
import interviewC from './Assets/sponsorsLogos/interview-cake.jpg';
import ll from './Assets/sponsorsLogos/ll.png';
import qoom from './Assets/sponsorsLogos/qoom.svg';
import Replit from './Assets/sponsorsLogos/replit.png';
import sublime from './Assets/sponsorsLogos/sublime.png';
import taskade from './Assets/sponsorsLogos/taskade.png';
import lyin from './Assets/teami/lyin.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';

const TOP_SECTION = {
  TITLE: 'Clash-Of-Codes',
  Typed_effect: ['24 hours of creation', 'Win awesome prizes'],
  SHORT_DESCRIPTION:
    'Join us on 20th November 2021 with over 300 students from across the nation for 24 hours of creation, innovation, & fun.',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  JUDGES_FORM_LINK:
    'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/limbohacks/',
  discord: 'https://discord.com/invite/8XJSzmtWPp',
  linkedin: 'https://www.linkedin.com/company/limbo-hacks/',
  twitter: 'https://twitter.com/HacksLimbo',
  devpost: 'https://limbo-hacks-12968.devpost.com/',
  email: 'mailto:hello@limbohacks.tech',
  mail: 'hello@limbohacks.tech'
};

const MIDDLE_SECTION = {
  TITLE: 'What is Limbo hacks?',
  LONG_DESCRIPTION:
    'Hack Limbo is 24 hour long running hackathon will be held on November 20th & 21th , We calls for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers . Throughout the weekend hackers at Limbo Hacks will have unique opportunities to learn from each other trying hands in new technologies We are determined to have an all-inclusive and diverse group of students attending.',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 12,
  year: 2021
};

const schedule = [
  {
    day: '8-11-2021',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '5-12-2021',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '3-12-2021',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-12-2021',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-1-2022',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {},
    
    {
      icon: <i className="first fas fa-4x fa-trophy" style={{display: "flex", justifyContent : "center", alignItems: "center"}}></i>,
      type: <div style={{display: "flex", justifyContent : "center", alignItems: "center"}}> Best Hack Built overall</div>,
      content: <div style={{display: "flex", justifyContent : "center", alignItems: "center",fontWeight: "bold"}}> Grand Prize of ₹40,000/-</div>, 
    },{}
  ]
  // [
  //   {
  //     icon: <i className=" second fas fa-4x fa-medal" style={{display: "flex", justifyContent : "center", alignItems: "center"}}></i>,
  //     type: <div style={{display: "flex", justifyContent : "center", alignItems: "center"}}>Second Best Hack built overall</div>,
  //     content:  <div style={{display: "flex", justifyContent : "center", alignItems: "center",fontWeight: "bold"}}>Grand Prize of ₹20,000/-</div>
        
  //   },{},
  //   {
  //     icon: <i className=" third fas fa-4x fa-skiing-nordic" style={{display: "flex", justifyContent : "center", alignItems: "center"}}></i>,
  //     type:  <div style={{display: "flex", justifyContent : "center", alignItems: "center"}}>Third Best Hack Built overall</div> ,
  //     content:  <div style={{display: "flex", justifyContent : "center", alignItems: "center",fontWeight: "bold"}}>Grand Prize of ₹10,000/-</div>
        
  //   }
  // ],
  
];
const Prizee = [
  [
  {
    icon: <i className=" second fas fa-4x fa-medal" style={{display: "flex", justifyContent : "center", alignItems: "center"}}></i>,
    type: <div style={{display: "flex", justifyContent : "center", alignItems: "center"}}>Second Best Hack built overall</div>,
    content:  <div style={{display: "flex", justifyContent : "center", alignItems: "center",fontWeight: "bold"}}>Grand Prize of ₹20,000/-</div>
      
  },
  {
    icon: <i className=" second fas fa-4x fa-medal" style={{display: "flex", justifyContent : "center", alignItems: "center"}}></i>,
    type:  <div style={{display: "flex", justifyContent : "center", alignItems: "center"}}>Third Best Hack Built overall</div> ,
    content:  <div style={{display: "flex", justifyContent : "center", alignItems: "center",fontWeight: "bold"}}>Grand Prize of ₹10,000/-</div>
      
  }
]
]
const Prizeee = [
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner" style={{display: "flex", justifyContent : "center", alignItems: "center"}}></i>,
      type:  <div style={{display: "flex", justifyContent : "center", alignItems: "center"}}>Best hack built in domain of Blockchain</div>,
      content:<div style={{display: "flex", justifyContent : "center", alignItems: "center",fontWeight: "bold"}}>Cash Prize of ₹10,000/-</div>,
    },
    {
      icon: <i className="first fas fa-4x fa-trophy" style={{display: "flex", justifyContent : "center", alignItems: "center"}}></i>,
      type: <div style={{display: "flex", justifyContent : "center", alignItems: "center"}}>Best hack built in domain of web/app dev</div> ,
      content:  <div style={{display: "flex", justifyContent : "center", alignItems: "center",fontWeight: "bold"}}>Cash Prize of ₹10,000/-</div>
    },
    {
      icon: <i className=" fifth fa-3x fas fa-book-open" style={{display: "flex", justifyContent : "center", alignItems: "center"}}></i>,
      type:  <div style={{display: "flex", justifyContent : "center", alignItems: "center"}}>Best hack built in domain of AI/ML</div>,
      content:  <div style={{display: "flex", justifyContent : "center", alignItems: "center" , fontWeight: "bold"}}>Cash Prize of ₹10,000/-</div> 
    }
  ]
]

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: 'https://github.com/Limbo-Hacks/Hackathon-website-template',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Erika',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Ryah Garcia',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is Clash-Of-Codes?',
        content:
        'Clash-Of-Codes is a 24 hour hackathon based on the latest technical fields that will bring together several teams to generate high-value actionable business ideas and product concepts. This hackathon covers the domains of web development, app development , blockchain , artificial intelligence and machine learning.'
      },
      {
        label: 'Who can participate?',
        content:
          'Clash-Of-Codes is open to all undergraduate students. Acceptance of applications is based on their interest in the available domains'
      },
      {
        label: 'When will the applications close?',
        content:
          'The application period will close on 25th February 2022 at 11:59 PM IST. We evaluate applications on a rolling basis and will notify acceptance via email.'
      },
      {
        label: 'Is it free of cost?',
        content:
          "Absolutely zero. Participation in ClashOfCodes is entirely free thanks to our sponsors. We will provide weekend worth of meals, drinks, snacks and a place where in you can CLASH if you need a break from coding"
      }
    ],
    [
      {
        label: 'How do you evaluate the applications?',
        content:
          'Folks who are passionate enough to work on crazy world-changing ideas.We can get to know you better from your past projects, open source contributions, GitHub/Devfolio profile, and participation in hackathons.'
      },
      {
        label: 'What could be the size of each team?',
        content:
          'A particular team can contain members from 2-4. If you are looking for team members you can join our discord, we will be having team formation at our discord'
      },
      {
        label: 'Do you provide travel reimbursement to hackers?',
        content:
          'Clash-Of-Codes is free of charge thanks to our sponsors, but the hackathon cannot cover the travel and other expenses for the attendees yet.'
      },
      {
        label: 'Did we miss something?',
        content: 'Write us at clashofcodeshackathon@gmail.com or tweet us your question @Clash_of_Codes, One of our brains will reach out to you as soon as possible.'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  Prizee,
  Prizeee,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};

