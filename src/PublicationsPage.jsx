const entries = [
  {
    id: 'eeg-emotion-counterfactuals',
    image: 'publications/eeg-emotion-counterfactuals.png',
    imageAlt: 'Six EEG scalp maps comparing theta, alpha, and beta patterns of emotion',
    imageWidth: 1638,
    imageHeight: 998,
    imagePresentation: 'diagram',
    label: 'Research paper',
    title: 'Explaining Typical Subject-Invariant EEG Patterns of Emotion Through Deep Learning Counterfactuals',
    byline: 'Vitor Inserra, Amit Chalmeti, Pranav Mucharla, Yashasree Gadipalli, Neha Panda, Sai Nagamalla, Gabriel Matos, Rosie Dutt, Raghavendra Pradyumna Pothukuchi, Richard L. Marks',
    publicationStatus: 'Forthcoming',
  },
  {
    id: 'ieee-smc-2026-bmi',
    image: 'publications/smc-neurofeedback-policy.png',
    imageAlt: 'Neurofeedback policy diagram connecting an RSVP application, wearable EEG, machine learning, and comprehension-state feedback',
    imageWidth: 1430,
    imageHeight: 495,
    imagePresentation: 'diagram',
    label: 'IEEE SMC 2026 · BMI Workshop',
    title: 'EEG Cognitive State Machine: A Modular Framework for Design-Time Experimentation and Run-Time Neurofeedback in Puzzle Games',
    byline: 'Vitor Inserra and Richard Marks',
    publicationStatus: 'Forthcoming in the IEEE SMC 2026 conference proceedings on IEEE Xplore.',
    venueType: 'Conference and workshop',
    venue: '2026 IEEE International Conference on Systems, Man, and Cybernetics · 16th IEEE SMC Workshop on Brain-Machine Interface (BMI) Systems',
    links: [
      {
        label: 'Watch presentation',
        href: 'https://bci-lab.hochschule-rhein-waal.de/BMI2026/SMC2026-2600.mp4',
      },
      {
        label: 'View preprint (PDF)',
        file: 'publications/eeg-cognitive-state-machine-preprint.pdf',
      },
    ],
  },
  {
    id: 'ilrn-2026',
    image: 'publications/ilrn-2026-award.jpeg',
    imageAlt: 'An award being presented on stage at iLRN 2026',
    imageWidth: 6000,
    imageHeight: 4000,
    label: 'iLRN 2026 award',
    title: 'Outstanding Contribution to Design',
    detail: 'EEG Cognitive State Machine for User Experimentation and Closed-Loop Neurofeedback in Text-based/AI Interfaces and Puzzle Games',
    byline: 'Vitor Gasparetto Inserra and Richard Marks',
    venueType: 'Conference',
    venue: '12th International Conference of the Immersive Learning Research Network (iLRN 2026)',
    links: [
      {
        label: 'View the award announcement',
        href: 'https://www.immersivelrn.org/ilrn2026/award-winners/',
      },
    ],
  },
  {
    id: 'unc-science-day',
    image: 'publications/unc-science-day-demo-0882.jpg',
    imageAlt: 'A young visitor wearing a brain-computer interface headset at the UNC Science Expo demo',
    imageWidth: 5472,
    imageHeight: 3648,
    label: 'UNC Science Expo Demo',
    title: 'Wearable brain-computer interfaces and neuroadaptive Tetris',
    detail: 'A hands-on demonstration of wearable brain-computer interfaces and neuroadaptive Tetris.',
    venueType: 'Event',
    venue: '2026 UNC Science Expo',
  },
];

export default function PublicationsPage() {
  return (
    <section className="publications-page" aria-labelledby="page-title">
      <div className="publications-heading">
        <h1 id="page-title">Research and Presentations</h1>
      </div>

      {entries.map((entry) => (
        <article className={`publication-entry${entry.image ? '' : ' publication-entry--text'}`} key={entry.id}>
          {entry.image && (
            <div className={`publication-entry-photo${entry.imagePresentation === 'diagram' ? ' publication-entry-photo--diagram' : ''}`}>
              <img
                src={`${import.meta.env.BASE_URL}${entry.image}`}
                alt={entry.imageAlt}
                width={entry.imageWidth}
                height={entry.imageHeight}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
          <div className="publication-entry-content">
            <p className="publication-entry-label">{entry.label}</p>
            <h2>{entry.title}</h2>
            {entry.detail && <p className="publication-entry-detail">{entry.detail}</p>}
            {entry.byline && <p className="publication-entry-byline">{entry.byline}</p>}
            {entry.publicationStatus && <p className="publication-entry-status">{entry.publicationStatus}</p>}
            {entry.links && (
              <div className="publication-entry-links">
                {entry.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.file ? `${import.meta.env.BASE_URL}${link.file}` : link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
            {entry.venue && (
              <p className="publication-entry-venue">
                <strong>{entry.venueType}:</strong> {entry.venue}
              </p>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
