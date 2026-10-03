export default function ProjectsPage() {
  return (
    <section className="projects-page" aria-labelledby="page-title">
      <div className="projects-heading">
        <h1 id="page-title">Projects</h1>
      </div>

      <article className="publication-entry project-entry">
        <div className="project-entry-logo">
          <img
            src={`${import.meta.env.BASE_URL}projects/eegproc-logo.png`}
            alt="EEGProc logo"
            width="2108"
            height="746"
          />
        </div>
        <div className="publication-entry-content">
          <p className="publication-entry-label">Open-source Python library</p>
          <h2>EEGProc</h2>
          <p className="publication-entry-detail">
            Researchers can use EEGProc to build deep-learning pipelines from EEG feature
            extraction through model building, evaluation, and explainability, with data
            visualization at every step.
          </p>
          <div className="publication-entry-links">
            <a href="https://github.com/EEGo-UNC/EEGProc" target="_blank" rel="noopener noreferrer">
              Explore EEGProc on GitHub
            </a>
          </div>
        </div>
      </article>

      <article className="publication-entry project-entry--read-faster">
        <div className="publication-entry-content">
          <p className="publication-entry-label">Forthcoming project</p>
          <h2>We Can Read Faster</h2>
          <p className="publication-entry-detail">Could humans read faster and better using EEG BCI?</p>
        </div>
        <a
          className="project-entry-visual project-entry-visual--read-faster"
          href={`${import.meta.env.BASE_URL}projects/we-can-read-faster.png`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View the We Can Read Faster illustration at full size"
        >
          <img
            src={`${import.meta.env.BASE_URL}projects/we-can-read-faster.png`}
            alt="Illustration of a person wearing an EEG headset while reading text"
            width="1448"
            height="1086"
            loading="lazy"
            decoding="async"
          />
        </a>
      </article>

      <article className="publication-entry project-entry--tetris">
        <div className="project-gallery">
          <figure>
            <a
              href={`${import.meta.env.BASE_URL}projects/neuroadaptive-tetris-game.png`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the Neuroadaptive Tetris game screenshot at full size"
            >
              <img
                src={`${import.meta.env.BASE_URL}projects/neuroadaptive-tetris-game.png`}
                alt="Neuroadaptive Tetris game screen with colored blocks, a score, and an emotion map"
                width="1610"
                height="1716"
                loading="lazy"
                decoding="async"
              />
            </a>
            <figcaption>Neuroadaptive Tetris interface</figcaption>
          </figure>
          <figure>
            <a
              href={`${import.meta.env.BASE_URL}projects/neuroadaptive-valence-arousal.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the valence and arousal model as a PDF"
            >
              <img
                src={`${import.meta.env.BASE_URL}projects/neuroadaptive-valence-arousal.png`}
                alt="Valence and arousal chart showing frustration, enjoyment, boredom, and calmness"
                width="1900"
                height="1820"
                loading="lazy"
                decoding="async"
              />
            </a>
            <figcaption>Valence–arousal model</figcaption>
          </figure>
        </div>
        <div className="publication-entry-content">
          <p className="publication-entry-label">Neuroadaptive game</p>
          <h2>Neuroadaptive Tetris</h2>
          <p className="publication-entry-detail">
            Neuroadaptive games reimagined. A new paradigm that transforms deep learning
            cognitive states into a systems dynamics control-loop. The original version uses
            an Emotiv EPOC X EEG headset.
          </p>
          <div className="publication-entry-links">
            <a href="https://github.com/EEGo-UNC/Tetris-EEG" target="_blank" rel="noopener noreferrer">
              Explore Neuroadaptive Tetris on GitHub
            </a>
          </div>
        </div>
      </article>

      <article className="publication-entry project-entry--muse">
        <div className="publication-entry-content">
          <p className="publication-entry-label">Muse EEG adaptation</p>
          <h2>Muse Tetris</h2>
          <p className="publication-entry-detail">
            Muse Tetris adapts Neuroadaptive Tetris for use with a Muse EEG headset,
            bringing the brain-responsive game to a wearable setup.
          </p>
          <div className="publication-entry-links">
            <a href="https://github.com/EEGo-UNC/MuseTetris" target="_blank" rel="noopener noreferrer">
              Explore Muse Tetris on GitHub
            </a>
          </div>
        </div>
        <a
          className="project-entry-visual"
          href={`${import.meta.env.BASE_URL}projects/muse-tetris-demo.jpeg`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View the Muse Tetris demonstration photo at full size"
        >
          <img
            src={`${import.meta.env.BASE_URL}projects/muse-tetris-demo.jpeg`}
            alt="A participant wearing a Muse EEG headset beside a researcher at a computer"
            width="5472"
            height="3648"
            loading="lazy"
            decoding="async"
          />
        </a>
      </article>

      <article className="publication-entry project-entry--mind-tune">
        <div className="project-entry-visual project-entry-visual--mind-tune">
          <img
            src={`${import.meta.env.BASE_URL}projects/mindtune-logo.png`}
            alt="MindTune logo"
            width="1217"
            height="469"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="publication-entry-content">
          <p className="publication-entry-label">Interactive EEG game</p>
          <h2>Mind Tune</h2>
          <p className="publication-entry-detail">
            Mind Tune is a small video game where you help a model fine-tune to your emotions.
            Anyone with an Emotiv EPOC X can try it, and we invite people to contribute to
            the project.
          </p>
          <div className="publication-entry-links">
            <a href="https://github.com/EEGo-UNC/MindTune" target="_blank" rel="noopener noreferrer">
              Explore Mind Tune on GitHub
            </a>
          </div>
        </div>
      </article>

      <article className="publication-entry project-entry--baas">
        <div className="publication-entry-content">
          <p className="publication-entry-label">Digital-twin simulation framework</p>
          <h2>Brain as a System (BaaS)</h2>
          <p className="publication-entry-detail">
            BaaS is intended as a framework for digital-twin simulations of Neuroadaptive
            Tetris. It will run multiple simulations with different neuroadaptive controllers
            so researchers can compare their effects.
          </p>
          <div className="publication-entry-links">
            <a href="https://github.com/EEGo-UNC/BaaS" target="_blank" rel="noopener noreferrer">
              Explore BaaS on GitHub
            </a>
          </div>
        </div>
        <a
          className="project-entry-visual"
          href={`${import.meta.env.BASE_URL}projects/baas-enjoyment-delay-chart.png`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View the BaaS enjoyment and delay chart at full size"
        >
          <img
            src={`${import.meta.env.BASE_URL}projects/baas-enjoyment-delay-chart.png`}
            alt="Three-dimensional chart of mean enjoyment across controller and user-change delay conditions"
            width="2323"
            height="2369"
            loading="lazy"
            decoding="async"
          />
        </a>
      </article>

    </section>
  );
}
