import styles from './ProjectsStyles.module.css';
import Viberr from '../../../assets/viajai.png';
import Spotify from '../../../assets/spotify.png';
import hipsster from '../../../assets/Java.png';
import fitLift from '../../../assets/fitlift.png';
import ProjectCard from '../../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Viberr}
          link="https://github.com/VannelopeXD/TCC2"
          h3="ViajAI"
          p="IA"
        />
        <ProjectCard
          src={Spotify}
          link="https://github.com/VannelopeXD/Spotify"
          h3="Spotify"
          p=" Interface Spotify"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/VannelopeXD/Java"
          h3="ScreenMatch"
          p="Java"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/VannelopeXD?tab=repositories"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
