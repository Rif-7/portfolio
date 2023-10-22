const projectsData = [
  {
    title: "MyBook",
    description: `MyBook is a fully responsive full-stack web application that replicates the core functionality of Facebook. 
    Users can sign in using their Facebook credentials, create new accounts, send friend requests, create posts, like posts, comment on posts, 
    upload profile photos, and more. This project is built using JavaScript, Node.js, Express.js, MongoDB with Mongoose, and 
    React.js with Chakra UI.`,
    tags: [
      "Node JS",
      "Express JS",
      "React JS",
      "Mongo DB",
      "JSON Webtokens",
      "Chakra UI",
      "Cloudinary",
    ],
    links: {
      image: "projects/mybook.jpg",
      code: "https://github.com/Rif-7/mybook",
      preview: "https://rif-7.github.io/mybook/",
    },
  },
  {
    title: "Where's Waldo",
    description: `Where's Waldo is a frontend project inspired by the classic children's puzzle game. 
    Users are presented with an image and tasked with finding three characters. 
    Once they find all the characters, their scores are added to the leaderboard. 
    The project uses ReactJS for the frontend and Firebase as the backend.`,
    tags: ["React JS", "Firebase"],
    links: {
      image: "projects/whereswaldo1.jpg",
      code: "https://github.com/Rif-7/wheres-waldo",
      preview: "https://rif-7.github.io/wheres-waldo/",
    },
  },
  {
    title: "Members Only",
    description: `Members Only is an exclusive clubhouse where anyone can view messages, 
    but only logged-in users with activated memberships can write new messages. To access messages' 
    authors and creation timestamps, users must obtain membership by entering a SECRET code. 
    Users can check their membership status in the navigation bar. Additionally, an admin has the privilege to view all messages, 
    including the author, date, and time, and can delete messages.`,
    tags: ["Node JS", "Express JS", "Mongo DB", "Pug", "Passport JS"],
    links: {
      image: "projects/membersonly0.jpg",
      code: "https://github.com/Rif-7/members-only",
      preview: "https://members-only-teok.onrender.com/",
    },
  },
  {
    title: "Clonegram",
    description: `A social media application made using ReactJS and Firebase. Logged in users can follow other users, view,
    like and create their own posts. The main takeaway from this project was learning how to effectively maintain global application state using 
    the state management tool Redux. Firebase powers data storage, authentication, and real-time updates. 
    React-Router enhances navigation, making it easy for users to explore their feed, profiles, and new content`,
    tags: ["React JS", "Redux", "Firebase", "React-Router"],
    links: {
      image: "projects/clonegram1.jpg",
      code: "https://github.com/Rif-7/clonegram",
      preview: "https://rif-7.github.io/clonegram",
    },
  },
];

export { projectsData };
