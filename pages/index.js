import ProjectsCarousel from '../components/ProjectsCarousel'

const projects = [
  {
    title: 'OP Detailing (Detailing Woad)',
    subtitle: 'React, Booking, Firebase',
    image: '/img/OP.png',
    github: '#',
    demo: 'https://detailing-woad.vercel.app/'
  },
  {
    title: 'Mazda React Demo',
    subtitle: 'React SPA',
    image: '/img/MAZDASITE.png',
    github: '#',
    demo: 'https://mazda-react.vercel.app/'
  },
  {
    title: 'Kalkulator JS',
    subtitle: 'Interactive Calculator (Vanilla/React)',
    image: '/img/KALKULATOR.png',
    github: '#',
    demo: 'https://kalkulator-js-rose.vercel.app/'
  },
  {
    title: 'Backend / API (example)',
    subtitle: 'Express, REST API, Docker',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&q=80',
    github: '#',
    demo: 'https://car-rental-rest-api-production.up.railway.app/api-docs/'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen py-12">
      <div className="container">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Ivan Borzykh</h1>
            <div className="text-gray-400">Frontend developer — JavaScript, React</div>
          </div>
          <div className="text-right">
            <div>Opole, PL</div>
            <div className="text-sm text-gray-400">+48 881 398 818</div>
            <div className="text-sm text-gray-400">venomgtspeed@gmail.com</div>
            <div className="text-sm text-gray-400">
              <a href="https://linkedin.com/in/ivanborzykh" target="_blank" rel="noreferrer">LinkedIn</a> ·
              <a href="https://github.com/BorzykhIvan" target="_blank" rel="noreferrer">GitHub</a> ·
            </div>
          </div>
        </header>

        <section className="grid md:grid-cols-[1.4fr,1.2fr] gap-6 mb-8">
          <div className="card h-full">
            <h2 className="text-2xl font-semibold mb-3">About</h2>
            <p className="text-gray-300 mb-3">
              Motivated Frontend and Web Developer with hands-on experience in building interactive web applications and booking systems.
              Specialized in JavaScript and React, with practical knowledge of Node.js and Express for backend integration.
            </p>
            <p className="text-gray-300 text-sm">
              Experienced in creating responsive UIs, authentication flows, client-side data storage with LocalStorage and Firebase,
              and integrating RESTful APIs (including Google Calendar API) in Agile teams (Scrum).
            </p>
          </div>

          <div className="card h-full">
            <h2 className="text-2xl font-semibold mb-3">Profile</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Frontend developer focused on JavaScript (ES6+) and React.</li>
              <li>Comfortable across the stack: Node.js, Express, REST APIs, SQL / NoSQL.</li>
              <li>Deployment experience with Firebase, Vercel, and Dockerized services.</li>
              <li>Solid Git / GitHub workflow, CI/CD basics, and code refactoring practices.</li>
            </ul>
          </div>
        </section>

        <section className="card mb-8">
          <h2 className="text-2xl font-semibold mb-3">Skills</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-gray-200 mb-1">Frontend</h3>
              <ul className="space-y-1 text-gray-300">
                <li>React, JavaScript (ES6+)</li>
                <li>HTML5, CSS3, responsive UI</li>
                <li>SPA, component-driven design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-200 mb-1">Backend & Data</h3>
              <ul className="space-y-1 text-gray-300">
                <li>Node.js, Express</li>
                <li>RESTful API design, CRUD</li>
                <li>SQL (MySQL, PostgreSQL, Oracle)</li>
                <li>NoSQL (Redis, Firebase)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-200 mb-1">DevOps & Tools</h3>
              <ul className="space-y-1 text-gray-300">
                <li>Firebase, Vercel, GCP (basic)</li>
                <li>Docker</li>
                <li>Git, GitHub, GitLab CI/CD</li>
                <li>Agile/Scrum, issue tracking</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="card mb-8">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="space-y-6">
            <div>
              <div className="text-gray-400 text-sm mb-1">June, 2024 – August 2024</div>
              <h3 className="font-semibold text-gray-100">WordPress Developer (Internship Project)</h3>
              <div className="text-gray-400 text-sm mb-2">UKS Korona Olesno</div>
              <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                <li>Migrated the website from an older WordPress version to a new environment.</li>
                <li>Performed WordPress core and plugin updates.</li>
                <li>Redesigned website layout and improved UX/UI structure.</li>
                <li>Optimized website performance and functionality.</li>
              </ul>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">2020 – 2023</div>
              <h3 className="font-semibold text-gray-100">Graphic Designer & AR-Creator Instagram (Freelance)</h3>
              <div className="text-gray-400 text-sm mb-2">Self-employed</div>
              <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                <li>Designed posters, banners, business cards, and advertising materials for various clients.</li>
                <li>Created stand designs for a BMW service center in Kyiv.</li>
                <li>Developed Instagram AR filters for EcoTech, Strongpoint, and other brands.</li>
                <li>Worked on visual identity and marketing materials aligned with brand guidelines.</li>
              </ul>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">June, 2019 – July, 2019</div>
              <h3 className="font-semibold text-gray-100">Web Developer & Graphic Designer (Intern)</h3>
              <div className="text-gray-400 text-sm mb-2">Multiplikalia, Seville, Spain</div>
              <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                <li>Designed marketing materials including posters, banners, and advertising stands.</li>
                <li>Prepared print-ready designs and assisted in website-related tasks.</li>
                <li>Collaborated with the team on branding and visual concepts.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="card mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-6">
            <div>
              <div className="text-gray-400 text-sm mb-1">October, 2021 – February, 2025</div>
              <h3 className="font-semibold text-gray-100">The Opole University of Technology</h3>
              <div className="text-gray-400 text-sm mb-1">Opole, Poland</div>
              <div className="text-gray-300 text-sm">Bachelor&apos;s Degree</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">February, 2025 – Present</div>
              <h3 className="font-semibold text-gray-100">The Opole University of Technology</h3>
              <div className="text-gray-400 text-sm mb-1">Opole, Poland</div>
              <div className="text-gray-300 text-sm">Master&apos;s Degree</div>
            </div>
          </div>
        </section>

        <section className="card mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ProjectsCarousel projects={projects} />
          <div className="mt-4 text-sm text-gray-400">Click a card to open project link (GitHub / demo).</div>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Ivan Borzykh — Built with Next.js
        </footer>
      </div>
    </main>
  )
}

