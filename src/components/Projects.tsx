import { projects } from '@/data/projects'
import styles from '@/styles/Projects.module.css'

export default function Projects() {
    return (
        <section id="projects" style={{ padding: '5rem 2rem', textAlign: 'center' }}>
            <h2>Projects</h2>
            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                {projects.map(p => (
                    <div key={p.title} className={styles.card}>
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <a href={p.link}>View Project</a>
                    </div>
                ))}
            </div>
        </section>
    )
}
