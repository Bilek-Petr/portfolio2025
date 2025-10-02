export default function PortfolioContent() {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-8 md:px-16 lg:px-24"
      >
        <div className="max-w-4xl">
          <h1 className="mb-6 text-6xl font-bold md:text-7xl lg:text-8xl">
            MY NAME
            <br />
            IS <span className="text-orange-500">PETR</span>
            <br />
            BÍLEK...
          </h1>
          <p className="mb-8 text-2xl md:text-3xl">
            <span className="font-bold">Frontend Developer</span> | Mountaineer
          </p>
          <button className="inline-flex items-center gap-2 rounded bg-black px-8 py-4 text-white transition-colors hover:bg-gray-800">
            Let's talk with me
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex min-h-screen items-center px-8 py-20 md:px-16 lg:px-24"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-5xl font-bold md:text-6xl">About Me</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                I'm a passionate frontend developer with a love for creating
                beautiful, functional web experiences. When I'm not coding,
                you'll find me in the mountains, seeking new peaks to conquer.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                My approach combines technical expertise with creative
                problem-solving, ensuring every project is both visually
                stunning and technically sound.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                    React
                  </span>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                    Next.js
                  </span>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                    TypeScript
                  </span>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                    Tailwind CSS
                  </span>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                    SCSS
                  </span>
                </div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">Location</h3>
                <p className="text-gray-700">Vítkov, Czech Republic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="flex min-h-screen items-center bg-white px-8 py-20 md:px-16 lg:px-24"
      >
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="mb-12 text-5xl font-bold md:text-6xl">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 py-4 pl-6">
              <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-2xl font-bold">
                  Senior Frontend Developer
                </h3>
                <span className="text-gray-600">2022 - Present</span>
              </div>
              <p className="mb-2 text-gray-700">Tech Company Inc.</p>
              <p className="text-gray-600">
                Leading frontend development for enterprise applications,
                mentoring junior developers, and implementing modern React
                architectures.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 py-4 pl-6">
              <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-2xl font-bold">Frontend Developer</h3>
                <span className="text-gray-600">2020 - 2022</span>
              </div>
              <p className="mb-2 text-gray-700">Digital Agency Ltd.</p>
              <p className="text-gray-600">
                Developed responsive web applications for various clients,
                focusing on performance optimization and user experience.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 py-4 pl-6">
              <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-2xl font-bold">
                  Junior Frontend Developer
                </h3>
                <span className="text-gray-600">2018 - 2020</span>
              </div>
              <p className="mb-2 text-gray-700">Startup Innovations</p>
              <p className="text-gray-600">
                Started my career building modern web interfaces and learning
                best practices in React development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="flex min-h-screen items-center px-8 py-20 md:px-16 lg:px-24"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-12 text-5xl font-bold md:text-6xl">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div
                key={project}
                className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="h-48 bg-gradient-to-br from-orange-400 to-pink-500"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Project {project}</h3>
                  <p className="mb-4 text-gray-600">
                    A brief description of this amazing project and the
                    technologies used to build it.
                  </p>
                  <div className="flex gap-2">
                    <span className="rounded bg-gray-100 px-2 py-1 text-sm">
                      React
                    </span>
                    <span className="rounded bg-gray-100 px-2 py-1 text-sm">
                      Next.js
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="flex min-h-screen items-center bg-white px-8 py-20 md:px-16 lg:px-24"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="mb-12 text-5xl font-bold md:text-6xl">Get In Touch</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-8 text-lg text-gray-700">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <svg
                      className="h-6 w-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">petr.bilek@example.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <svg
                      className="h-6 w-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Vítkov, Czech Republic</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-8">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full rounded bg-orange-500 py-3 text-white transition-colors hover:bg-orange-600"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
