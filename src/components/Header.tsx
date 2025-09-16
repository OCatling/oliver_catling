export default function Header() {
  return (
    <header style={{ padding: '1rem 2rem', background: '#111827', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <div>Oliver Catling</div>
      <nav>
        <a href="#about" style={{ margin: '0 1rem' }}>About</a>
        <a href="#projects" style={{ margin: '0 1rem' }}>Projects</a>
        <a href="#contact" style={{ margin: '0 1rem' }}>Contact</a>
      </nav>
    </header>
  )
}
