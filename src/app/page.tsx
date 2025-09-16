import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section id="hero" style={{ padding: '5rem 2rem', textAlign: 'center' }}>
          <h1>Hello, I’m Oliver</h1>
          <p>Software Engineer | Portfolio coming soon</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
