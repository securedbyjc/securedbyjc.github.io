/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
// Personal greeting and hero section
const greeting = {
  username: "Jeffrey Collins",
  title: "Hi, I'm JC 👋",
  subTitle:
    "Cybersecurity Architect | GRC Strategist | AI Security Explorer | Veteran | Founder of Eagle Defense Systems LLC",
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

// Social media links
const socialMediaLinks = {
  github: "https://github.com/securedbyjc",
  linkedin: "https://linkedin.com/in/securedbyjc",
  display: true
};

// Skills section
const skillsSection = {
  title: "Skills",
  subTitle:
    "Cybersecurity, Risk & Compliance, GRC Policy Mapping, Threat Detection, and AI Integration.",
  skills: [
    "⚡ Develop and map policies to ISO 27001 / NIST 800-53 / NIST 800-171 / CMMC 2.0",
    "⚡ Build UEBA models for insider threat detection",
    "⚡ Apply Zero Trust strategies and GRC alignment",
    "⚡ Lead project-based solutions integrating AI and cyber risk frameworks"
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "logos:python"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "logos:microsoft-azure"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fa-git"
    },
    {
      skillName: "Streamlit",
      fontAwesomeClassname: "logos:streamlit-icon"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "logos:react"
    }
  ],
  display: true
};

// Project portfolio
const projects = {
  data: [
    {
      id: "1",
      name: "SwiftEagle AI",
      url: "https://github.com/securedbyjc/SwiftEagle-AI",
      description:
        "AI-powered GRC app with UEBA and Insider Threat detection. Built using ML, ISO/NIST/CMMC mappings, and Streamlit. Includes ransomware mitigation case studies."
    }
  ]
};

// Education timeline
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "American InterContinental University - Houston",
      logo: require("./assets/images/aiu_logo.png"),
      subHeader: "Bachelor of Science in Information Technology, Cybersecurity Concentration",
      duration: "September 2023 - November 2025",
      desc: "President's Academic Excellence Award, Dean's List. Coursework in cyber risk, security architecture, and IT assurance.",
      descBullets: []
    },
    {
      schoolName: "American InterContinental University - Online",
      logo: require("./assets/images/aiu_logo.png"),
      subHeader: "Associate of Science in Criminal Justice",
      duration: "July 2013 - March 2015",
      desc: "GPA: 3.00. Took courses in Constitutional Procedures, Fraud Investigations, and Criminal Investigations.",
      descBullets: []
    }
  ]
};

// Certifications
const certifications = {
  display: true,
  list: [
    {
      title: "CompTIA Security+",
      subtitle: "Cybersecurity Fundamentals",
      logo_path: "",
      color_code: "#f3eaff"
    },
    {
      title: "Certified Scrum Master (CSM)",
      subtitle: "Agile Project Leadership",
      logo_path: "",
      color_code: "#ffeaa7"
    },
    {
      title: "ISO/IEC 27001 (In Progress)",
      subtitle: "Information Security Management Systems",
      logo_path: "",
      color_code: "#dff9fb"
    },
    {
      title: "NIST RMF (Completed)",
      subtitle: "Risk Management Framework - DCSA STEPP",
      logo_path: "",
      color_code: "#f8f1f1"
    }
  ]
};

// Career Timeline
const experience = {
  display: true,
  experience: [
    {
      role: "U.S. Army Staff Sergeant | Ranger Qualified",
      company: "82nd Airborne Division",
      date: "2000 – 2007",
      desc: "Led reconnaissance teams, developed field leadership under pressure, and cultivated discipline and operational awareness."
    },
    {
      role: "Executive Protection Consultant",
      company: "Private Sector",
      date: "2007 – 2023",
      desc: "Worked with for-profit and non-profit organizations to deliver high-level security risk assessments and strategic physical security services."
    },
    {
      role: "Staff Accountant",
      company: "Robert Half and Private Sector",
      date: "2016 – 2020",
      desc: "Performed financial reporting, ledger reconciliation, and supported audits for small businesses and non-profit entities."
    },
    {
      role: "Cybersecurity GRC Strategist",
      company: "Eagle Defense Systems LLC",
      date: "2023 – Present",
      desc: "Designing insider threat detection systems, developing GRC frameworks, and integrating AI-powered governance policies for emerging federal compliance needs."
    }
  ]
};

// Personal Video Embed (e.g., YouTube)
const videoSection = {
  display: true,
  videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual intro/project video link
};

// Export all config
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  projects,
  educationInfo,
  certifications,
  experience,
  videoSection
};


