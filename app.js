const express = require('express');
const cors = require("cors");
const app = express();
const port = 4001;

app.use(express.json());
app.use(cors());

app.get('/courses',(req, res)=>{
    const courses = [
        {
            name: "Frontend ",
            price: 199,
            duration: "8 Weeks",
            description: "Master HTML, CSS, and JavaScript to build beautiful websites and responsive UIs.",
            image: 'https://img.freepik.com/free-vector/frontend-development-concept-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_613284-2357.jpg'
        },
        {
            name: "Backend ",
            price: 249,
            duration: "10 Weeks",
            description: "Learn server-side development with Node.js, Express, and databases for scalable apps.",
            image: 'https://img.freepik.com/free-vector/back-end-typographic-header-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-210.jpg'
        },
        {
            name: "Full Stack",
            price: 299,
            duration: "12 Weeks",
            description: "Gain skills in frontend and backend technologies to build fully functional web apps.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx37pHeJnzuPi0sFXFKHNNPdQ0CBRN6ed_Uw&s'
        },
        {
            name: "MERN",
            price: 299,
            duration: "12 Weeks",
            description: "Build full-stack applications using MongoDB, Express, React, and Node.js (MERN stack).",
            image: 'https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1'
        },
        {
            name: "Dotnet",
            price: 299,
            duration: "12 Weeks",
            description: "Become proficient in .NET framework to develop enterprise-level applications.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TBw16x0HJUQ4sWUV8RzHzK7LrYTibjU7HQ&s'
        },
        {
            name: "RDBMS",
            price: 199,
            duration: "10 Weeks",
            description: "Learn relational database management systems to effectively manage data.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKdzPg6woox3CU85IZ3RhNszv6d4s2gzLnRw&s' 
        },
       
        

    ];
    res.send({
        message: 'Couses fetched successfully',
        courses: courses
    });
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});