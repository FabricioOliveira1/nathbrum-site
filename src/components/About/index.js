import './About.css'
import aboutImage from '../../assets/about-image.png'

const About = () => {
    return (
        <section className='about'>
            <div className='about-descriptionTextContainer'>
                <h2>Sobre Mim</h2>
                <p>Conheça Nathalia Brum</p>
                <p className='about-textDescription'>Oi! Eu sou a Nathalia, mas você pode me chamar de Nath! Tenho 28 anos e desde 2020 me dedico a transformar o universo digital em um lugar mais acessível e autêntico. Minha jornada começou em meio a desafios e dúvidas, mas foi justamente aí que descobri minha verdadeira paixão: desmistificar a criação de conteúdo nas redes sociais. Minha missão é ajudar pessoas a alcançarem seus objetivos e sonhos, mostrando que o segredo para se destacar nas redes está na simplicidade e na autenticidade.

Acredito que cada projeto é uma oportunidade de criar algo único, e é isso que me motiva a continuar evoluindo e aprendendo a cada dia. Como especialista em marketing digital, meu foco é tornar o processo de criação de conteúdo o mais humanizado e descomplicado possível. Seja transformando ideias em realidade, impulsionando marcas ou guiando pessoas rumo aos seus sonhos, estou aqui para fazer a diferença e mostrar que você também pode brilhar no mundo digital.</p>
            </div>
            <img src={aboutImage} alt='imagem da Social Media Nathalia Brum com um notebook' />
            <div className='about-descriptionButtonContainer'>
                <p>O objetivo principal de um profissional de social media é ajudar marcas e indivíduos a construir, gerenciar e expandir sua presença nas redes sociais, conectando-os de forma eficaz com seu público-alvo. Isso envolve a criação de conteúdo relevante e envolvente, o desenvolvimento de estratégias de comunicação, e a construção de uma identidade de marca autêntica e coerente.</p>
                <a href='https://www.google.com'>
                Solicitar uma Consultoria Gratuita
                </a>
            </div>
        </section>
    )
}

export default About;