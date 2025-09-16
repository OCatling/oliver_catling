import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import styles from '@/styles/Layout.module.css'

export default function HomePage() {
    return (
        <div className={styles.container}>
            {/* Left column */}
            <aside className={styles.left}>
                <h1>Oliver Catling</h1>
                <p>Software Engineer</p>
                <nav>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><a href="https://github.com/yourusername">GitHub</a></li>
                        <li><a href="https://linkedin.com/in/yourusername">LinkedIn</a></li>
                        <li><a href="mailto:oliver@olivercatling.com">Email</a></li>
                    </ul>
                </nav>
            </aside>

            {/* Right column */}
            <main className={styles.right}>
                <About />
                <Projects />
                <Contact />
            </main>
        </div>
    )
}
