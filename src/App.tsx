import Navbar from './components/Navbar'
import HomeHero from './components/HomeHero'
import About from './components/About'
import CircularGallery from './components/CircularGallery'
import Background from './components/Background'
import UKLifeWork from './components/UKLifeWork'
import WhyStanding from './components/WhyStanding'
import Priorities from './components/Priorities'
import FinalWord from './components/FinalWord'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-(--sand) pt-16 text-(--ink) sm:pt-20 md:pt-24">
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-(--leaf)/20 blur-3xl" />
        <div className="pointer-events-none absolute top-40 left-12 h-72 w-72 rounded-full bg-(--leaf-dark)/10 blur-3xl" />
        <HomeHero />
      </div>

      <main className="mx-auto w-full max-w-6xl space-y-24 px-6 pb-24">
        <About />
        <section className="rounded-4xl border border-white/70 bg-(--leaf)/10 p-6 shadow-xl shadow-black/5 backdrop-blur">
          <div className="flex flex-wrap items-end justify-center gap-4 text-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-(--leaf-dark)/80">
                Photo Gallery
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                In Service, In Community
              </h2>
            </div>
          </div>
          <div className="relative mt-3 h-[440px] w-full">
            <CircularGallery
              items={[
                {
                  image:
                    'https://res.cloudinary.com/duaysox2a/image/upload/v1770488793/amin_1_hgprro.jpg',
                  text: '',
                },
                {
                  image:
                    'https://res.cloudinary.com/duaysox2a/image/upload/v1770494672/amin_2_a06tk6.jpg',
                  text: '',
                },
                {
                  image:
                    'https://res.cloudinary.com/duaysox2a/image/upload/v1770496555/amon_4_vdxwbt.jpg',
                  text: '',
                },
                {
                  image:
                    'https://res.cloudinary.com/duaysox2a/image/upload/v1770537558/amin_6_yhe5cx.jpg',
                  text: '',
                },
                {
                  image:
                    'https://res.cloudinary.com/duaysox2a/image/upload/v1770537558/amin5_bvhqca.jpg',
                  text: '',
                },
                {
                  image:
                    'https://res.cloudinary.com/duaysox2a/image/upload/v1770537558/amin_7_c6nzsy.jpg',
                  text: '',
                },
                {
                  image:
                    'https://res.cloudinary.com/duaysox2a/image/upload/v1770537803/amin4_i7nq6a.jpg',
                  text: '',
                },
                {
                  image:
                    'https://res.cloudinary.com/duaysox2a/image/upload/v1770537558/amin_3_tqudv3.jpg',
                  text: '',
                },
                {
                  image:
                    'https://res.cloudinary.com/duaysox2a/image/upload/v1770564687/WhatsApp_Image_2026-02-08_at_20.26.26_tuip4v.jpg',
                  text: '',
                },
                {
                  image:
                    'https://res.cloudinary.com/duaysox2a/image/upload/v1770564687/WhatsApp_Image_2026-02-08_at_20.26.25_1_snfeaw.jpg',
                  text: '',
                },
                {
                  image:
                    'https://res.cloudinary.com/duaysox2a/image/upload/v1770564688/WhatsApp_Image_2026-02-08_at_20.26.25_uep4rg.jpg',
                  text: '',
                },
              ]}
            />
          </div>
          <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--leaf-dark)]/70">
            Swipe left or right to explore more
          </p>
        </section>
        <Background />
        <UKLifeWork />
        <WhyStanding />
        <Priorities />
        <FinalWord />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
