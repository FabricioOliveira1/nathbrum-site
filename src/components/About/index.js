import './About.css'
import aboutImage from '../../assets/about-image.png'

const About = () => {
    return (
        <section className='about'>
            <h2>Sobre Mim</h2>
            <p>Conheça Nathalia Brum</p>
            <p className='about-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            <img src={aboutImage} alt='imagem da Social Media Nathalia Brum com um notebook' />
        </section>
    )
}

export default About;