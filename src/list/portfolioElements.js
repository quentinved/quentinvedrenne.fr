let portfolioElements = [
    {
        id: 1,
        title: "Kleasy",
        titleref: "https://kleasy.fr/",
        type: "School",
        class: "slide",
        classSkils: "oddskill",
        skills: ["React", "GO", "GRPC", "Kubernetes"],
        description: "Kleasy is the first SaaS platform that allows you to create a 360° switchboard in 1 click. Kleasy is perfect to orchestrate your ColdPhoning campaigns, manage company numbers for your employees or assist you with corporate support.",
        detail: [{
            id: 1,
            title: "Ability to call someone",
        },
        {
            id: 2,
            title: "Masked call"
        },
        {
            id: 3,
            title: "Telephone permanence"
        },
        {
            id: 4,
            title: "Messaging"
        },
        {
            id: 5,
            title: "Black listing"
        },
        {
            id: 6,
            title: "Shared contacts"
        },
        {
            id: 7,
            title: "Shared call log"
        },
        {
            id: 8,
            title: "Personal time routing"
        },
        {
            id: 9,
            title: "Answer in browser"
        },
        {
            id: 10,
            title: "Open API"
        },
        ],
        img: ["./kleasy.gif"]
    },
    {
        id: 2,
        title: "Introduction to kubernetes",
        type: "School",
        class: "slide",
        classSkils: "evenskill",
        skills: ["Kubernetes", "Terraform", "GCP", "CI/CD", , "Gitlab", "Helm", "Traefik", "Docker"],
        description: "The goal of this project is to wrapped a total project (Front / Back / Database) thanks to Terrraform on a kubernetes cluster (GCP), and to deploy it with a CI/CD pipeline (Gitlab).",
        detail: [{
            id: 1,
            title: "Have a kubernetes with at least 2 nodes: on GCP with GKE",
        },
        {
            id: 2,
            title: "Deployment of this application with Terraform",
            task: ["Front, connected to the back and scaled to more than 1 instance", "Back, connected to the DB, with secrets mounted", "DB, with a persistent volume"]
        },
        {
            id: 3,
            title: "Use Helm to install Traefik (Back and Front need to be accessed through traefik with HTTPS)"
        },
        {
            id: 4,
            title: "Setup a Gitlab project with this CI-CD",
            task: ["self hosted gitlab-runner with the Kubernetes executor and without the privileged mode enable", "Build image with kaniko from a Dockerfile", "Testing with a Preview accessible through https/Traefik", "Deployment update using a custom RBAC"]
        },
        {
            id: 5,
            title: "Enable Dev to access a staging environment with Role Based Access Control."
        },
        ],
        img: ["./kube.gif"]
    },
    {
        id: 3,
        title: "Quentinvedrenne.fr",
        titleref: "https://quentinvedrenne.fr/",
        type: "Personal",
        class: "slide",
        classSkils: "oddskill",
        skills: ["React", "Cloudflare Pages", "Typeform"],
        description: "The goal of this project is to create my portfolio to search for my internship at the end of my degree",
        detail: [{
            id: 1,
            title: "Understand and use Cloudflare Pages",
        },
        {
            id: 2,
            title: "Create multi usage component"
        },
        {
            id: 3,
            title: "Learn deeply NextJS"
        },
        ],
        img: ["./quentinvedrenne.gif"]
    },
    {
        id: 4,
        title: "Sharepassword",
        titleref: "https://sharepassword-quentinvedrenne.fr/",
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
            id: 3,
            title: "Creation of an extension allow you to directly share your password and get your link without to go to the platform"
        }
        ],
        img: ["./sharepassword.gif"]
    }, {
        id: 5,
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
        id: 6,
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
        id: 7,
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