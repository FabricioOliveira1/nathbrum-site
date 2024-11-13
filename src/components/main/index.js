import './Main.css'
import mainImage from '../../assets/main-image.png'
import gestaoDeRedesIcon from '../../assets/gestao-de-redes.svg'
import criacaoDeConteudoIcon from '../../assets/criacao-de-conteudo.svg'
import analiseERelatorios from '../../assets/analisa-e-relatorios.svg'

const Main = () => {
    return (
        <section className='main'>
            <p className='main-title'>
                Transforme sua <strong>Presença Online</strong> de forma autêntica!
            </p>
            <p className='main-text'>
                Aumente seu alcance, engajamento e resultados com estratégias personalizadas
            </p>
            <a href='https://www.google.com'>
                Solicitar uma Consultoria Gratuita
            </a>
            <img className='main-imgage' src={mainImage} />
            <div className='main-cardsContainer'>
                <div className='main-cardsContainer card'>
                    <img src={gestaoDeRedesIcon} alt='Icone de Gestão de Redes' />
                    <h3>Gestão de Redes Sociais</h3>
                    <p>Organização, curadoria e planejamento de calendário assegurando que o conteúdo seja relevante.</p>
                </div>
                <div className='main-cardsContainer card'>
                    <img src={criacaoDeConteudoIcon} alt='Icone de Criação de Conteudos' />
                    <h3>Criação de Conteúdo</h3>
                    <p>Gestão de conteúdo para redes sociais, envolvendo textos, imagens e vídeos que engajam e atraem o público-alvo.</p>
                </div>
                <div className='main-cardsContainer card'>
                    <img src={analiseERelatorios} alt='Icone de Analise e Relatorios' />
                    <h3>Análise e Relatórios </h3>
                    <p>Monitoramento das interações e do desempenho das publicações, analisando métricas como alcance, engajamento e crescimento de seguidores.</p>
                </div>
                
                
                
            </div>
        </section>
    )
}

export default Main;