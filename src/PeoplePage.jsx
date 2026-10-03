const groups = [
  {
    id: 'members',
    title: 'Members',
    people: [
      {
        name: 'Vitor G. Inserra',
        image: 'people/vitor-inserra.jpg',
        imagePosition: 'center top',
        education: 'M.S. Computer Science, UNC Chapel Hill',
        details: ['Lead Researcher (Graduate)'],
      },
      {
        name: 'Amit Chalmeti',
        image: 'people/amit-chalmeti.jpg',
        imagePosition: 'center top',
        education: 'Premedical Post-baccalaureate Program, Columbia University',
        details: ['Neuroscience Lead (Graduate)'],
      },
      {
        name: 'Pranav Mucharla',
        education: 'B.S. Computer Science and Math, UNC Chapel Hill (Senior)',
        details: ['Student Researcher'],
      },
      {
        name: 'Sai Nagamalla',
        education: 'B.S. Computer Science, UNC Chapel Hill (Junior)',
        details: ['Student Researcher'],
      },
      {
        name: 'Yashasree Gadipalli',
        image: 'people/yashasree-gadipalli.jpeg',
        education: 'B.S. Data Science and Business, UNC Chapel Hill (Sophomore)',
        details: ['Student Researcher'],
      },
      {
        name: 'Gabriel Matos',
        education: 'B.S. Computer Science, UNC Chapel Hill (Sophomore)',
        details: ['Student Researcher'],
      },
      {
        name: 'Neha Panda',
        education: 'B.S. Neuroscience and Statistics, UNC Chapel Hill (Sophomore)',
        details: ['Student Researcher'],
      },
      {
        name: 'Eduarda Toledo',
        image: 'people/eduarda-toledo.jpg',
        education: 'B.S. Computer Science and Neuroscience, UNC Chapel Hill (Freshman)',
        details: ['Student Researcher'],
      },
    ],
  },
  {
    id: 'main-advisors',
    title: 'Main Advisors',
    people: [
      {
        name: 'Dr. Richard L. Marks',
        image: 'people/richard-marks.png',
        education: 'Ph.D. Avionics, Stanford University',
        details: [
          'Professor of the Practice, Data Science, UNC Chapel Hill',
          'Adjunct Professor, Computer Science',
          'Extended Reality and AI Group',
          'Previously in industry: Head of PlayStation Research at Sony and Director of Advanced Technologies and Projects at Google',
        ],
      },
      {
        name: 'Dr. Raghavendra Pradyumna Pothukuchi',
        image: 'people/raghavendra-pothukuchi.png',
        imagePosition: '95% center',
        education: 'Ph.D. Computer Science, University of Illinois Urbana-Champaign',
        details: [
          'William R. Kenan Jr. Fellow Assistant Professor, Computer Science, UNC Chapel Hill',
          'Adjunct, Lampe UNC/NCSU Joint Department of Biomedical Engineering',
          'Adjunct, UNC School of Medicine',
          'Affiliate, Neuroscience Curriculum',
          'Postdoctoral research, Yale University',
        ],
      },
      {
        name: 'Dr. Rosie K. Dutt',
        image: 'people/rosie-dutt.png',
        education: 'Ph.D. Imaging Science, Washington University in St. Louis',
        details: [
          'Professor and Director of Undergraduate Neuroscience, Computational Neuroscience, UNC Chapel Hill',
          'Adjunct, Johns Hopkins University',
          'Adjunct, Washington University in St. Louis McKelvey School of Engineering',
        ],
      },
    ],
  },
  {
    id: 'past-members',
    title: 'Past Members',
    people: [
      { name: 'Nicholas Almy', education: 'M.S. Computer Science', details: ['(currently at IBM)'] },
      { name: 'Vishwonathan Manoranjan', education: 'M.S. Computer Science' },
      { name: 'Jayasri Vaidyarman', education: 'M.S. Computer Science' },
    ],
  },
];

function PersonCard({ name, image, imagePosition, education, details = [], isAdvisor = false }) {
  const parts = name.split(' ');
  const initials = `${parts[0][0]}${parts.at(-1)[0]}`;

  return (
    <article className="person-card">
      <div className="person-portrait">
        {image ? (
          <img
            src={`${import.meta.env.BASE_URL}${image}`}
            alt={`Portrait of ${name}`}
            loading="lazy"
            decoding="async"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
          />
        ) : (
          <div className="portrait-placeholder" aria-hidden="true">
            <span className="portrait-initials">{initials}</span>
            <span className="portrait-status">Photo coming soon</span>
          </div>
        )}
      </div>
      <div className="person-info">
        <h3>{name}</h3>
        <div className={`person-details${isAdvisor ? ' person-details--advisor' : ''}`}>
          {isAdvisor ? (
            <ul>
              {details.map((detail) => <li key={detail}>{detail}</li>)}
              <li>{education}</li>
            </ul>
          ) : (
            <>
              <p className="person-education">{education}</p>
              {details.map((detail) => <p key={detail}>{detail}</p>)}
            </>
          )}
        </div>
      </div>
    </article>
  );
}

function getGridClassName(people) {
  return [
    'people-grid',
    people.length % 3 === 1 && 'people-grid--single-last-desktop',
    people.length % 2 === 1 && 'people-grid--single-last-tablet',
  ].filter(Boolean).join(' ');
}

export default function PeoplePage() {
  return (
    <div className="people-page">
      <div className="people-heading">
        <h1 id="page-title">People</h1>
      </div>

      {groups.map((group) => (
        <section className="people-section" key={group.id} aria-labelledby={group.id}>
          <h2 id={group.id}>{group.title}</h2>
          <div className={getGridClassName(group.people)}>
            {group.people.map((person) => (
              <PersonCard key={person.name} {...person} isAdvisor={group.id === 'main-advisors'} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
