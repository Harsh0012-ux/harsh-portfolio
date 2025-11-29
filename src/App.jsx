import React from 'react';
import styles from './App.module.css';
import { motion } from 'framer-motion';
import profile from './assets/profile.jpg'; // put your image here

// thumbnails - add these files to src/assets/projects/
import sensorThumb from './assets/projects/sensor-thumb.jpg';
import arThumb from './assets/projects/ar-thumb.jpg';
import portfolioThumb from './assets/projects/portfolio-thumb.jpg';
import classifierThumb from './assets/projects/classifier-thumb.jpg';

const SKILLS = {
  Languages: ['Python','Java','Kotlin','C/C++','SQL'],
  Frameworks: ['PyTorch','TensorFlow','scikit-learn','Transformers','Android SDK'],
  Tools: ['Git','OpenCV','Unreal Engine 5','Blender','After Effects','Docker (basic)'],
  Soft: ['Problem Solving','Clean Coding','Analytical Thinking','Team Collaboration','Adaptability']
}

const PROJECTS = [
  {
    id:1,
    title:'Smartphone Sensor Diagnostics App',
    desc:'An Android app to test smartphone sensors in real-time and visualize sensor outputs. Detects faulty/hysteresis behavior.',
    stack:['Kotlin','Android SDK','MVVM'],
    thumb: sensorThumb,
    repo: 'https://github.com/Harsh0012-ux/SenseSyncApplication' // <- replace with your repo
  },
  {
    id:2,
    title:'Augmented Reality Experience (AR)',
    desc:'AR/3D interactive demos created using Unreal Engine 5 and Blender with cinematic rendering.',
    stack:['Unreal Engine 5','Blender','After Effects'],
    thumb: arThumb,
    repo: 'https://github.com/your-username/ar-experience' // <- replace with your repo
  },
  {
    id:3,
    title:'MCA Portfolio Website',
    desc:'This portfolio built with React, CSS Modules, and Framer Motion. Responsive design and clean UI/UX.',
    stack:['React','CSS Modules','Framer Motion'],
    thumb: portfolioThumb,
    repo: 'https://github.com/your-username/mca-portfolio' // <- replace with your repo
  },
  {
    id:4,
    title:'AI-Based Image Classifier',
    desc:'Image classification pipeline using CNNs with TensorFlow/Keras, data augmentation and evaluation.',
    stack:['Python','TensorFlow','Keras'],
    thumb: classifierThumb,
    repo: 'https://github.com/your-username/ai-image-classifier' // <- replace with your repo
  }
]

export default function App(){
  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <div className={styles.brand}>Harsh Singh</div>
          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container">
        <section className={styles.hero} id="home">
          <motion.div className={styles.heroLeft} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <h1 className={styles.heroTitle}>Hi, I’m Harsh Singh.</h1>
            <p className={styles.heroSub}>MCA Student • Software Developer • AI/ML Enthusiast</p>
            <div className={styles.ctaRow}>
              <a href="#projects"><button className={styles.btnPrimary}>View Projects</button></a>
              <a href="#resume"><button className={styles.btnOutline}>Download Resume</button></a>
            </div>
          </motion.div>

          <motion.div className={styles.heroImageWrap} initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.6}}>
            <img src={profile} alt="Harsh Singh" style={{width:'100%',height:'100%',objectFit:'cover'}} />
          </motion.div>
        </section>

        <section className={styles.section} id="about">
          <motion.h2 className={styles.sectionTitle} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>About Me</motion.h2>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            I am Harsh Singh, an MCA student with a strong foundation in software development and a growing interest in Artificial Intelligence and modern application engineering. My journey began with Android development, where I gained hands-on experience building scalable, user-focused mobile features. Over time, I expanded my skill set into AI/ML, exploring deep learning, computer vision, and agentic systems through projects and academic learning.
          </motion.p>
        </section>

        <section className={styles.section} id="skills">
          <h3 className={styles.sectionTitle}>Skills</h3>
          <div className={styles.skillsGrid}>
            {Object.entries(SKILLS).map(([cat,arr])=> (
              <div className={styles.skillCard} key={cat}>
                <strong>{cat}</strong>
                <div style={{marginTop:8,display:'flex',flexWrap:'wrap',gap:8}}>
                  {arr.map(s=> <span key={s} style={{fontSize:13,opacity:0.9}}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} id="projects">
          <h3 className={styles.sectionTitle}>Projects</h3>
          <div className={styles.projectsGrid}>
            {PROJECTS.map(p=> (
              <motion.div
                className={styles.projectCard}
                key={p.id}
                whileHover={{scale:1.02}}
              >
                {/* clickable thumbnail that opens GitHub repo in a new tab */}
                <div className={styles.projectThumb} style={{position:'relative', overflow:'hidden'}}>
                  <a href={p.repo} target="_blank" rel="noreferrer" title={`Open ${p.title} on GitHub`}>
                    <img
                      src={p.thumb}
                      alt={p.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: 8,
                        display: 'block',
                        transition: 'transform .25s ease'
                      }}
                    />
                  </a>

                  <div style={{
                    position: 'absolute',
                    bottom: 8,
                    left: 8,
                    right: 8,
                    color: '#fff',
                    fontWeight: 700,
                    textShadow: '0 4px 14px rgba(0,0,0,0.6)'
                  }}>{p.title}</div>
                </div>

                <h4 style={{margin:'10px 0 6px'}}>{p.title}</h4>
                <p style={{color:'var(--muted)',margin:0}}>{p.desc}</p>
                <div style={{marginTop:10,display:'flex',gap:8,flexWrap:'wrap'}}>
                  {p.stack.map(s=> <small key={s} style={{background:'rgba(255,255,255,0.03)',padding:'6px 8px',borderRadius:6}}>{s}</small>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.section} id="education">
          <h3 className={styles.sectionTitle}>Education</h3>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <div style={{padding:12,background:'rgba(255,255,255,0.02)',borderRadius:8}}>
              <strong>Master of Computer Applications (MCA)</strong>
              <div style={{color:'var(--muted)'}}>KR Mangalam University — 2025–2027</div>
            </div>
            <div style={{padding:12,background:'rgba(255,255,255,0.02)',borderRadius:8}}>
              <strong>Bachelor of Computer Applications (BCA)</strong>
              <div style={{color:'var(--muted)'}}>Guru Gobind Singh Indraprastha University — 2021–2024</div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="experience">
          <h3 className={styles.sectionTitle}>Experience</h3>
          <div style={{padding:12,background:'rgba(255,255,255,0.02)',borderRadius:8}}>
            <strong>Senior Android Developer — AppSquads</strong>
            <div style={{color:'var(--muted)'}}>1 year</div>
            <ul style={{marginTop:8}}>
              <li>Developed scalable Android features using Kotlin and Java</li>
              <li>Integrated RESTful APIs, improved app reliability and performance</li>
              <li>Mentored junior developers and participated in CI/CD workflows</li>
            </ul>
          </div>
        </section>

        <section className={styles.section} id="resume">
          <h3 className={styles.sectionTitle}>Resume</h3>
          <div style={{display:'flex',gap:16,alignItems:'center'}}>
            <div style={{flex:1,background:'rgba(255,255,255,0.01)',padding:12,borderRadius:8}}>
              <p style={{color:'var(--muted)'}}>Download my resume (PDF)</p>
              <a href="/HarshResume.pdf" target="_blank" rel="noreferrer"><button className={styles.btnPrimary}>Download Resume</button></a>
            </div>
            <div style={{width:180}}>
              <img src={profile} alt="thumb" style={{width:180,height:180,objectFit:'cover',borderRadius:8}} />
            </div>
          </div>
        </section>

        <section className={styles.section} id="contact">
          <h3 className={styles.sectionTitle}>Contact</h3>
          <div className={styles.contactGrid}>
            <div>
              <p style={{color:'var(--muted)'}}>Email: h.singh999048@gmail.com</p>
              {/* <p style={{color:'var(--muted)'}}>GitHub: github.com/harshsingh</p> */}
              <p style={{color:'var(--muted)'}}>
  GitHub: 
  <a 
    href="https://github.com/Harsh0012-ux" 
    style={{ color: '#7db3ff', marginLeft: 6 }} 
    target="_blank"
    rel="noreferrer"
  >
    https://github.com/Harsh0012-ux
  </a>
</p>

              <p style={{color:'var(--muted)'}}>LinkedIn: </p>
            </div>
            <form action="https://formspree.io/f/yourFormId" method="POST" style={{display:'flex',flexDirection:'column',gap:8}}>
              <input name="name" placeholder="Your name" style={{padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent'}} />
              <input name="email" placeholder="Your email" style={{padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent'}} />
              <textarea name="message" placeholder="Message" rows={4} style={{padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent'}}></textarea>
              <button className={styles.btnPrimary} type="submit">Send Message</button>
            </form>
          </div>
        </section>

        <footer className={styles.footer}>
          © 2025 Harsh Singh • Built with React
        </footer>
      </main>
    </div>
  )
}
