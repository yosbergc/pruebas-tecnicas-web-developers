import HeroImage from '../../assets/Hero.png'
function Hero() {
    return (
        <section className="heroSection">
            <section className="firstPart">
                <h1>Pruebas técnicas para <span className="color">programadores web</span></h1>
                <p>Practica tus habilidades de programación con estas pruebas técnicas que van desde <b>frontend, backend a full-stack</b>. Puedes usar el stack que desees para completar las pruebas técnicas.</p>
                <section className="buttons-container">
                    <button className="primaryButton">Ver Pruebas</button>
                    <button className="secondaryButton">Apoyar Proyecto</button>
                </section>
                <p className="made">Hecho con ❤️ por <b>Bytdev</b></p>
            </section>
            <section className="secondPart">
                <img src={HeroImage} alt="Hero Image" />
            </section>
        </section>
    )
}
export { Hero }