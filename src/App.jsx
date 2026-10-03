import { useEffect, useRef, useState } from 'react';
import PeoplePage from './PeoplePage.jsx';
import ProjectsPage from './ProjectsPage.jsx';
import PublicationsPage from './PublicationsPage.jsx';

const pages = {
  home: { title: 'Home' },
  projects: { title: 'Projects' },
  research: { title: 'Research and Presentations' },
  people: { title: 'People' },
};

function getPageFromHash() {
  const page = window.location.hash.slice(1);
  const route = page === 'publications' ? 'research' : page;
  return Object.hasOwn(pages, route) ? route : 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState(getPageFromHash);
  const [menuOpen, setMenuOpen] = useState(false);
  const mainRef = useRef(null);
  const previousPage = useRef(activePage);

  useEffect(() => {
    function handleHashChange() {
      setActivePage(getPageFromHash());
      setMenuOpen(false);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.title = activePage === 'home'
      ? 'EEGo Lab'
      : `${pages[activePage].title} | EEGo Lab`;

    if (previousPage.current !== activePage) {
      mainRef.current?.focus();
      previousPage.current = activePage;
    }
  }, [activePage]);

  return (
    <div className="site-shell">
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          mainRef.current?.focus();
        }}
      >
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="banner-logo-link" href="#home" aria-label="EEGo Lab home">
            <img
              className="banner-logo"
              src={`${import.meta.env.BASE_URL}eego.png`}
              alt=""
              width="1714"
              height="918"
            />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-controls="main-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-icon" aria-hidden="true"><span /><span /><span /></span>
            Menu
          </button>

          <nav
            id="main-navigation"
            className={`banner-nav${menuOpen ? ' is-open' : ''}`}
            aria-label="Main navigation"
          >
            {Object.entries(pages).map(([id, page]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activePage === id ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {page.title}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" ref={mainRef} tabIndex={-1}>
        {activePage === 'home' ? (
          <section className="welcome" aria-labelledby="welcome-title">
            <h1 id="welcome-title">EEGo Lab</h1>
            <p className="introduction">
              Advancing Research in Wearable Brain-Computer Interfaces (BCI) and Machine Learning (ML)
            </p>
            <a
              className="welcome-github"
              href="https://github.com/EEGo-UNC"
              target="_blank"
              rel="noopener noreferrer"
            >
              EEGo Lab on GitHub ↗
            </a>
            <figure className="welcome-photo">
              <img
                src={`${import.meta.env.BASE_URL}home/science-expo-introduction.jpg`}
                alt="EEGo Lab researchers demonstrating a wearable brain-computer interface at the UNC Science Expo"
                width="5472"
                height="3648"
                fetchPriority="high"
              />
            </figure>
            <blockquote className="welcome-quote">
              “BCI is the future, but there is still so much to understand about the brain and how to connect it to software.”
            </blockquote>
            <div className="welcome-description">
              <p>
                EEGo Lab is a student-led research group that spans the University of North Carolina at Chapel Hill and Columbia University exploring wearable EEG, brain-computer interfaces, and machine learning for neuroadaptive applications.
              </p>
              <p>
                Our work focuses on using real-time brain signals to study cognitive and emotional states, improve user experimentation, and build adaptive systems for education, VR, and interactive software.
              </p>
              <p>Supported by the UNC Graduate Fund, UNC Honors Undergraduate Fund, and Emotiv Inc.</p>
            </div>
            <figure className="welcome-photo welcome-photo--portrait">
              <img
                src={`${import.meta.env.BASE_URL}home/lab-group-photo.jpg`}
                alt="Four EEGo Lab members together in an instant photograph"
                width="1200"
                height="1600"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </section>
        ) : activePage === 'projects' ? (
          <ProjectsPage />
        ) : activePage === 'people' ? (
          <PeoplePage />
        ) : activePage === 'research' ? (
          <PublicationsPage />
        ) : (
          <section className="page-content" aria-labelledby="page-title">
            <h1 id="page-title">{pages[activePage].title}</h1>
            <p className="introduction">{pages[activePage].description}</p>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-logos" aria-label="Partner logos">
          <div className="logo-card logo-card--computer-science">
            <img
              src={`${import.meta.env.BASE_URL}unc-computer-science.png`}
              alt="UNC Department of Computer Science"
              width="1287"
              height="369"
            />
          </div>
          <div className="logo-card logo-card--psychology-neuroscience">
            <img
              src={`${import.meta.env.BASE_URL}unc-psychology-neuroscience.png`}
              alt="UNC Psychology and Neuroscience"
              width="2095"
              height="751"
            />
          </div>
          <div className="logo-card logo-card--columbia">
            <img
              src={`${import.meta.env.BASE_URL}columbia-cumc.webp`}
              alt="Columbia University Medical Center"
              width="8192"
              height="1245"
            />
          </div>
          <div className="footer-emotiv">
            <p>We thank Emotiv Inc. for the support</p>
            <div className="logo-card logo-card--emotiv">
              <img
                src={`${import.meta.env.BASE_URL}emotiv.png`}
                alt="Emotiv"
                width="648"
                height="432"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
