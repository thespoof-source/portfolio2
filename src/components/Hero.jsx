import me from '../img/me.png'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="brief">
        <div>
          <h1><span
            className='im'
          >I'm</span></h1>
          <h1>Ritesh Singh</h1>
          <p>A Front-end developer aiming to design and develop experiences that make people's lives simple</p>
        </div>
        <button className="cta">See My Projects</button>
      </div>
      <figure>
        <img src={me} alt="charles kasasira" />
      </figure>
    </section>
  )
}

export default Hero