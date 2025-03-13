import styles from './HeroStyles.module.css'
import heroImg from '../../assets/Design sem nome.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import instagramLight from '../../assets/instagramLight.svg'
import instagramDark from '../../assets/instagram-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} 
        src={heroImg} 
        alt="Profile Picture Sofia Gozzoli" 
        />
        <img className={styles.colorMode}
        src={themeIcon} 
        alt='Color Mode icon'
        onClick={toggleTheme}
        />
    </div>
    <div className={styles.info}>
        <h1 className={styles.title}>Sofia
            <br/>
            Gozzoli
            </h1>
        <h2>Full Stack Developer</h2>
        <span>
            <a href='https://instagram.com.br/sofia.gozzoli' target='_blank'>
            <img src={instagramIcon} alt='Instagram icon'/>
            </a>
            <a href='https://github.com/VannelopeXD' target='_blank'>
            <img src={githubIcon} alt='Github icon'/>
            </a>
            <a href='https://www.linkedin.com/in/sofia-gozzoli/' target='_blank'>
            <img src={linkedinIcon} alt='Linkedin icon'/>
            </a>
        </span>
        <p className={styles.description}> Buscando constantemente aprimorar meus conhecimentos em tecnologias 
          de backend e frontend.
        </p>
        <a href={CV} download>
        <button className='hover'>
          Resume
        </button>
        </a>
    </div>
    </section>
  )
}

export default Hero
