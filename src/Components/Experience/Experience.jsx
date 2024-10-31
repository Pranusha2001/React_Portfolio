import React from 'react';
import './Experience.css'
const experienceData = [
  {
    jobTitle: "Associate Software Developer",
    company: "Vinsinfo, Chennai",
    dates: "12/23 - 08/24",
    responsibilities: [
      {
        heading: "Developed React components:",
        body: "Converted page layouts from Figma into reusable, responsive React components."
      },
      {
        heading: "Cosmetic Changes:",
        body: "Implemented UI/UX improvements using HTML, CSS, JavaScript, and ReactJS to enhance visual appeal and functionality."
      },
      {
        heading: "Responsive Web Development:",
        body: "Coded responsive pages using HTML, CSS, and JavaScript, ensuring compatibility across web and mobile platforms with media queries."
      }
    ]
  },
  {
    jobTitle: "Backend Developer",
    company: "Cyces Innovation Lab LLP, Chennai",
    dates: "03/23 - 08/23",
    responsibilities: [
      {
        heading: "API Development:",
        body: "Designed and developed APIs using Django Rest Framework (DRF) for two live projects."
      },
      {
        heading: "Environment Setup:",
        body: "Configured development environments and coordinated codebase setup."
      },
      {
        heading: "Database Management:",
        body: "Integrated SQL for seamless data management."
      },
      {
        heading: "Third-party API Integration:",
        body: "Incorporated third-party APIs to enhance functionality and user experience."
      },
      {
        heading: "Filter Functionality:",
        body: "Implemented backend filter functionality and pagination."
      },
      {
        heading: "Mobile Optimization:",
        body: "Developed mobile-optimized APIs using DRF for improved performance."
      },
      {
        heading: "Version Control:",
        body: "Managed code with Git, ensuring smooth collaboration and version control."
      }
    ]
  }
];

function Experience() {
  return (
    <div className='experiencePage'>
      {experienceData.map((job, index) => (
        <div className='jobSection' key={index}>
          <div className='jobSectionHeading'>
            <div className='jobTitle'>
              {job.jobTitle}<br />
            </div>
            <div className='jobCompany'>
              {job.company} : {job.dates}
            </div>
          </div>
          <ul>
            {job.responsibilities.map((item, i) => (
              <li className='jobContent' key={i}>
                <div className='jobHeading'>
                  <strong>{item.heading}</strong>
                </div>
                <div className='jobBody'>
                  {item.body}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;



