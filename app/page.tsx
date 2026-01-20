export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 py-32 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance">David Battilana</h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-balance text-gray-300">
          Head of Creative — Real-Time Experiences, Identity & Scalable Content Platforms
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl text-balance">
          I build real-time entertainment platforms that power live interactive concerts, performer identity, and
          scalable content systems.
        </p>
      </section>

      {/* Justin Bieber Case Study */}
      <section className="px-6 py-24 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/UAhGvhvcoyY"
              title="Justin Bieber Experience"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold">Justin Bieber Experience</h3>
            <div>
              <h4 className="text-xl font-semibold mb-3">What it was</h4>
              <p className="text-lg text-gray-400 leading-relaxed">
                A live interactive concert experience featuring Justin Bieber, broadcast in real-time to millions of
                fans worldwide in a fully immersive 3D environment.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Why it mattered</h4>
              <p className="text-lg text-gray-400 leading-relaxed">
                This proved that real-time interactive entertainment could scale to global audiences while maintaining
                creative quality and technical stability at unprecedented levels.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">What I built</h4>
              <p className="text-lg text-gray-400 leading-relaxed">
                Led creative direction and developed the content pipeline, performer identity system, and real-time
                interaction architecture that powered the entire experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calvin Harris Case Study */}
      <section className="px-6 py-24 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/1154463548?h=4c578d5c58"
                title="Calvin Harris Experience 1"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/1154430243?h=60f07bfe80"
                title="Calvin Harris Experience 2"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/1154414116?h=00c42bb17a"
                title="Calvin Harris Experience 3"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold">Calvin Harris Experience</h3>
            <div>
              <h4 className="text-xl font-semibold mb-3">What it was</h4>
              <p className="text-lg text-gray-400 leading-relaxed">
                An immersive live concert featuring Calvin Harris in a custom-designed virtual environment with
                real-time audience interaction and synchronized visual effects.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Why it mattered</h4>
              <p className="text-lg text-gray-400 leading-relaxed">
                Demonstrated the platform's flexibility to adapt to different artist identities and visual styles while
                maintaining the same robust technical foundation.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">What I built</h4>
              <p className="text-lg text-gray-400 leading-relaxed">
                Designed the visual language and interaction systems that translated Calvin Harris's brand into a
                real-time 3D experience, creating scalable content modules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pentakill III Case Study */}
      <section className="px-6 py-24 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://player.vimeo.com/video/1154388990?h=358cc0e3c3"
              title="Pentakill III: Lost Chapter"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold">Pentakill III: Lost Chapter</h3>
            <div>
              <h4 className="text-xl font-semibold mb-3">What it was</h4>
              <p className="text-lg text-gray-400 leading-relaxed">
                A virtual heavy metal concert for Riot Games' League of Legends band Pentakill, featuring five character
                performances with synchronized storytelling and music.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Why it mattered</h4>
              <p className="text-lg text-gray-400 leading-relaxed">
                Showcased how the platform could handle complex multi-character narratives and integrate with gaming IP
                to create new forms of entertainment.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">What I built</h4>
              <p className="text-lg text-gray-400 leading-relaxed">
                Architected the character performance system and narrative framework that enabled synchronized
                storytelling across multiple virtual performers in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Case Study */}
      <section className="px-6 py-32 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">The Wave Live Show Platform</h2>
          <p className="text-2xl md:text-3xl text-gray-400 mb-16 text-balance">
            A modular, real-time system for producing live interactive concerts at scale
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/1154393557"
                title="Platform Video 1"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/1154425555"
                title="Platform Video 2"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/1154528869?h=e27507e071"
                title="Platform Video 3"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/1154418604?h=b7abddeab3"
                title="Platform Video 4"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">What it solved</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Before The Wave, live entertainment was constrained by physical venues and geographic limitations. We
                built a platform that enables artists to reach global audiences through immersive, interactive
                experiences while maintaining creative control and production quality.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">What we built</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                A complete end-to-end system including performer identity frameworks, real-time rendering architecture,
                modular content pipelines, audience interaction systems, and scalable broadcast infrastructure. Each
                component was designed to be flexible and reusable across different artists and show formats.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Why it mattered</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                The platform proved that high-quality live entertainment could be delivered at internet scale without
                compromising on creative vision. It opened new revenue streams for artists and created a new category of
                entertainment that blends gaming, music, and social interaction.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Proof it works</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                The platform successfully powered shows for Justin Bieber, Calvin Harris, Pentakill, and numerous other
                artists, reaching millions of concurrent viewers worldwide with stable real-time performance and
                overwhelmingly positive audience reception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-24 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-800">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">David Battilana</h2>
          <div className="space-y-3 text-lg">
            <p>
              <a href="mailto:david@example.com" className="text-gray-400 hover:text-white transition-colors underline">
                david@example.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/david-battilana-5aa3b91/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex justify-center">
          <img
            src="/images/logo-layout.png"
            alt="Brands: Guitar Hero, Rock Band, The Beatles Rock Band, Fantasia Music Evolved, Dance Central, Dropmix, Fuser"
            className="w-full max-w-5xl h-auto"
          />
        </div>
      </section>
    </div>
  )
}
