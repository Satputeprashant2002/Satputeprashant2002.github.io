import React from 'react'; 

 const Projects = () => { 
    const projects = [ { 

        

        title: 'Financial service website',
        description:'About This project is a comprehensive financial website for Authorized owner of AS Financial Services. I created this website under cortica solution. The website offers a user-friendly interface having EMI Calculator, And loan services. Accessible on desktop, tablet, and mobile devices.', 
        techStack: 'HTML, CSS, React, Node.js, Email.js,Whatsapp connectivity', 
        link: 'https://github.com/Satputeprashant2002/asfinance' 
         }, 
         { 
            title: 'Hospital Management System',
            description: 'This Hospital Management System is a web-based application designed to streamline the process of booking and managing appointments between patients and doctors. It is built using Spring Boot and Thymeleaf for server-side rendering, and uses a relational database for persistent storage.', 
            techStack: 'Thymeleaf, HTML, CSS, JPA with Hibernate, Spring Boot', 
            link: 'https://github.com/Satputeprashant2002/Hospital-Management-System/tree/main/HospitalManagement'
             } 
            ]; 
            return (
                 
            <section id="projects">
                <h2>Projects</h2> 
        <div> {projects.map((project, index) => ( 
                <div key={index}> 
                <h3>{project.title}</h3> 
                <p>{project.description}</p> 
                <p>Tech Stack: {project.techStack}</p> 
                <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a> 
                </div> 
            )
            )
            } 
                </div>
            
             </section> ); 
                }; 
                
export default Projects; 


