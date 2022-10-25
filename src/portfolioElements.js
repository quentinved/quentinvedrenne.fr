let portfolioElements = [
    {
        id: 1,
        title: "Quentinvedrenne.fr",
        type: "Personal",
        class: "slide",
        classSkils: "oddskill",
        skills: ["NextJS", "React", "Cloudflare Pages"],
        description: "The goal of this project is to create my portfolio to search for my internship at the end of my degree",
        detail: [{
            id: 1,
            title: "Understand and use Cloudflare Pages",
        },
        {
            id:2,
            title: "Create multi usage component"
        },
        {
            id:3,
            title: "Learn deeply NextJS"
        },
        ],
        img: ["./quentinvedrenne.gif"]
    },
    {
        id: 2,
        title: "Sharepassword",
        type: "Personal",
        class: "slide",
        classSkils: "evenskill",
        skills: ["React", "NextJS", "NodeJS", "ChakraUI"],
        description: "The goal of this project was to create a website and an extension that would allow you to share your password during a specific period of time",
        detail: [{
            id: 1,
            title: "Implementation of the use of chakra-ui",
        },
        {
            id: 2,
            title: "Creation of an API for the platform",
            task: ["POST: Creation of a link for get your password during a specific time", "GET: Get the passwords thank's to the link"]
        },
        {
            id: 3,
            title: "Creation of an Cron Task to clear the expired password",
        },
        {
            id:3,
            title: "Creation of an extension allow you to directly share your password and get your link without to go to the platform"
        }
        ],
        img: ["./sharepassword.gif"]
    }, {
        id: 3,
        title: "Area",
        type: "School",
        class: "slide",
        classSkils: "oddskill",
        skills: ["Software Architect", "React", "NodeJS", "ExpressJS", "Docker"],
        description: "The goal of this project was to implement a web application that works like IFTTT and/or Zapier",
        detail: [{
            id: 1,
            title: "Prerequisite Application server",
            task: ["The user registers on the application in order to obtain an account", "The registered user then confirms their enrollment on the application before begin able tu use it", "The application then ask the authenticated user to subscribe to multiples services", "Each service offer the following compenents : Activation/trigger", "The authenticated user composes AREA by interconnecting an Action to a Reaction", "The application triggers area automatically thanks to triggers"]
        },
        {
            id: 2,
            title: "Containerize frontend backend application with docker-compose"
        }
        ],
        img: ["./area.gif"]
    }, {
        id: 4,
        title: "Dashboard",
        type: "School",
        class: "slide",
        classSkils: "evenskill",
        skills: ["Software Architect", "React", "NodeJS", "ExpressJS", "Docker"],
        description: "The goal of this project was to implement a web application that works like NetVibes.",
        detail: [{
            id: 1,
            title: "Prerequisite for the Application server",
            task: ["The user registers on the application in order to obtain an account", "The registered user then confirms their enrollment on the application before being able to use it", "The application then asks the authenticated user to subscribe to Services", "Each Service offers Widgets", "he authenticated user composes his Dashboard by inserting previously configured widget instances", "A Timer allows to refresh the information displayed by the different widget instances present on the dashboard"]
        },
        {
            id: 2,
            title: "Containerize frontend backend application with docker-compose"
        },
        {
            id: 3,
            title: "Deploy the applicaiton on a vps thanks to pm2"
        }
        ],
        img: ["./dashboard.gif"]
    }, {
        id: 5,
        title: "Imgur mobile app",
        type: "School",
        class: "slide",
        classSkils: "oddskill",
        skills: ["Kotlyn", "Mobile application"],
        description: "The goal of this project is to use and implement online photo sharing API platforms. For me and my mate we decide to create a photo finder and browsing application with the Imgur API.",
        detail: [{
            id: 1,
            title: "Imgur API implementation",
        },
        {
            id: 2,
            title: "Authenticate to the imgur platform",
        },
        {
            id: 3,
            title: "Display the photos put online by the user connected",
        },
        {
            id: 4,
            title: "Search for photos on the platform",
        },
        {
            id: 5,
            title: "Upload photos to the platform",
        },
        {
            id: 6,
            title: "Manage favorites",
        },
        {
            id: 7,
            title: "Filter the displayed photos",
        },
        ],
        img: ["./imgur.gif"]
    },];

export default portfolioElements;