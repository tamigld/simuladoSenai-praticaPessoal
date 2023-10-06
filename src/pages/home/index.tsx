import './style.css'
import Header from '../../components/header'

import imgContato from "../../assets/img/homepage/img-contato.png"


export default function Homepage(){
    return(
        <>
        <section id='topSection'>
        </section>
        <section className='nextEvent'>
            <h2>Próximos eventos</h2>
            <hr />
            <div className="cards">
                <div className="cardEvent">
                    <h2>Título do Evento</h2>
                    <p>Breve descrição do evento, pode ser um paragrafo pequeno</p>
                    <a href="#">Conectar</a>
                </div>
                <div className="cardEvent">
                    <h2>Título do Evento</h2>
                    <p>Breve descrição do evento, pode ser um paragrafo pequeno</p>
                    <a href="#">Conectar</a>
                </div>
                <div className="cardEvent">
                    <h2>Título do Evento</h2>
                    <p>Breve descrição do evento, pode ser um paragrafo pequeno</p>
                    <a href="#">Conectar</a>
                </div>
                <div className="cardEvent">
                    <h2>Título do Evento</h2>
                    <p>Breve descrição do evento, pode ser um paragrafo pequeno</p>
                    <a href="#">Conectar</a>
                </div>
            </div>
        </section>
        <section className="visao">
            <div>
                <h2>Visão</h2>
                <hr/>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>
        <section className="contato">
            <div>
                <h2>Contato</h2>
                <hr/>
            </div>
            <div className='linkContatos'>
                <img src={imgContato} alt="" />
                <div>
                    <a
                    target='blank' 
                    href='https://maps.app.goo.gl/bNHYiSoL5VqgASDk6'
                    style={{
                        textDecoration: "none",
                        color: "var(--preto)"
                    }}
                    >Rua Niterói, 180 - Centro <br />
                    São Caetano do Sul - SP
                    </a>
                    <p
                    style={{
                        textDecoration: "underline"
                    }}
                    >
                    (11) 4225-2000
                    </p>
                </div>
            </div>
        </section>
        <footer>
            <span>Escola Senai de Informática - 2023</span>
        </footer>
        </>
    )
}