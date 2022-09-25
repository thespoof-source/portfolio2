import me from '../img/About-me-img.jpg'

function About() {
  return (
    <section className="aboutMe" id="about">
      <main>
        <figure>
          <img src={me} alt="charles kasasira" width={350} />
        </figure>
        <div>
          <h2>ABOUT ME</h2>
          <h1 id="who-am-i">WHO AM I</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia temporibus itaque ut pariatur architecto quo at nobis quia illum inventore placeat cum harum, distinctio odio fugit unde praesentium repellendus dolor laudantium voluptate. Architecto a nesciunt fuga laboriosam provident, recusandae ut quae, earum, vero assumenda aut nihil ex fugiat vel.</p>
          <div>
            <button className="cta black-filled">Hire Me</button>
            <button className="cta-outline black">See My Resume</button>
          </div>
        </div>

      </main>
    </section>
  )
}

export default About