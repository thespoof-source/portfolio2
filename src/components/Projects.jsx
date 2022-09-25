import ablestate from '../img/ablestate.png'
import boh from '../img/boh.png'
import whd from '../img/whd.png'
import studentsapp from '../img/studentsapp.png'
import s1 from '../img/s1.png'
import weatherapp from '../img/weathearapp.png'

function Projects() {
  return (
    <section className="projects" id="projects">
      <h3 className="workedwith">Worked with</h3>
      <div className="worked">
        <img src={ablestate} alt="ablestate" width={60} />
        <img src={whd} alt="whd technologies" width={60} />
        <img src={boh} alt="byte of hope" width={60} />
      </div>
      <h1 className="headings">Projects</h1>
      <article>
        <figure>
          <img src={studentsapp} alt="student's app" width={350} />
          <img src={s1} alt="s1 app" width={350} />
        </figure>
        <div>
          <h2>Studentsapp</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit quis odit reprehenderit eligendi eum tenetur laborum nulla, iste beatae!</p>
          <h3>Technologies</h3>
          <ul>
            <li>React</li>
            <li>Firebase</li>
            <li>Flutter</li>
          </ul>
        </div>
      </article>
      <article>
        <div>
          <h2>Weather App</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit quis odit reprehenderit eligendi eum tenetur laborum nulla, iste beatae!</p>
          <h3>Technologies</h3>
          <ul>
            <li>React</li>
            <li>Firebase</li>
            <li>Open weather api</li>
          </ul>
        </div>
        <figure>
          <img src={weatherapp} alt="weather app" width={350} />
        </figure>
      </article>
      <div className='btn-center'><button className="cta-outline black">See More Work</button></div>
    </section>
  )
}

export default Projects