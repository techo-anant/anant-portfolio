import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Languages from './components/Languages.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import { useRef } from 'react'

export const meta = () => ([
  { title: 'Anant | Portfolio' },
  { name: 'description', content: 'Up to date portfolio of Anant Kumar Singh' },
])

function App() {
  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const languagesRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const docxRef = useRef(null);

  const documentSearch = () => {
    if (docxRef.current) {
      docxRef.current.id = "docxSearch";
      setTimeout(() => {
        // Ensure the element exists and is available before modifying it
        if (docxRef.current) {
          docxRef.current.id = "docx"; // Set the ID after timeout
        }
      }, 1000);
    }
  };

  const scrollToAbout = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToDocument = () => {
    if (docxRef.current) {
      docxRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const scrollToEducation = () => {
    if (educationRef.current) {
      educationRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  const scrollToLanguages = () => {
    if (languagesRef.current) {
      languagesRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  const scrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }


  // const [count, setCount] = useState(0)

  return (
    <>
      <Header
        scrollToAbout={scrollToAbout}
        scrollToDocument={scrollToDocument}
        scrollToEducation={scrollToEducation}
        scrollToLanguages={scrollToLanguages}
        scrollToExperience={scrollToExperience}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
        documentSearch={documentSearch}
      />
      <About aboutRef={aboutMeRef} docxRef={docxRef} />
      <div className="side-side">
        <Education ref={educationRef} />
        <Languages ref={languagesRef} />
      </div>
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
      <Footer ref={contactRef} scrollToAbout={scrollToAbout} />
    </>
  )
}

export default App
