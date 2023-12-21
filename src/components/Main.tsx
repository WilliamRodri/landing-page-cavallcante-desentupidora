import banner from "@/banner-principal.jpeg";
import styles from "@/styles/components/Main.module.css";

import caixaGordura from "@/assets/caixa-gordura.jpg";
import caixaVisita from "@/assets/caixa-visita.jpg";
import fossa from "@/assets/fossa.jpg";
import sanitarios from "@/assets/sanitarios.jpg";

import bonecoCavallcante from "@/boneco.png";

function gerarLinkWhats(servico:string){
    var linkWhats = `https://api.whatsapp.com/send?phone=5585985477461&text=Ol%C3%A1%20vim%20pelo%20site%20e%20estou%20interessado%20no%20servi%C3%A7o%20de%20%22${servico}%22`;
    return linkWhats

}

export default function Main(){

    function showCollpase(btn:string, box:string, icon:string){
        const btnClick = document.getElementById(btn);
        const boxShow = document.getElementById(box);
        const iconBox = document.getElementById(icon);
        boxShow?.classList.forEach((element) => {
            iconBox?.classList.forEach((elementIcon) => {
                if(elementIcon !== 'bi-arrow-right-short'){
                    if(element === "show"){
                        boxShow.classList.remove('show')
                        iconBox.classList.remove('bi-arrow-down-short')
                        iconBox.classList.add('bi-arrow-right-short')
                    }else{
                        boxShow.classList.add('show');
                        iconBox.classList.remove('bi-arrow-right-short')
                        iconBox.classList.add('bi-arrow-down-short')
                    }
                }
            });
        })
    }

    const servicosData:Array<any> = [
        {
            id: 0,
            text: "Caixa de gordura",
            image: caixaGordura.src,
            link: gerarLinkWhats("Caixa de Gordura")
        },
        {
            id: 1,
            text: "Ralos, Pias e Sanitários",
            image: sanitarios.src,
            link: gerarLinkWhats("Ralos, Pias e Sanitários")
        },
        {
            id: 2,
            text: "Caixa de visita",
            image: caixaVisita.src,
            link: gerarLinkWhats("Caixa de visita")
        },
        {
            id: 3,
            text: "Limpeza de fossas e caixas",
            image: fossa.src,
            link: gerarLinkWhats("Limpeza de fossas e caixas")
        },
    ]

    const duvidasData:Array<any> = [
        {
            id: 0,
            title: "Posso usar produtos químicos para desentupir canos?",
            description: "O uso de produtos químicos agressivos pode ser prejudicial às tubulações e ao meio ambiente. É recomendável evitar esses produtos e, em vez disso, contar com profissionais especializados em desentupimento, que utilizam métodos mais seguros e eficazes."
        },
        {
            id: 1,
            title: "Quanto tempo leva para desentupir um encanamento?",
            description: "O tempo necessário para desentupir um encanamento varia dependendo da gravidade do entupimento e do método utilizado. Alguns entupimentos podem ser resolvidos em questão de minutos, enquanto outros podem levar mais tempo. É melhor consultar um profissional para avaliar e estimar o tempo necessário."
        },
        {
            id: 2,
            title: "Qual é o custo médio de serviços de desentupimento?",
            description: "O custo de serviços de desentupimento pode variar amplamente de acordo com a extensão, gravidade do entupimento e o método utilizado. Solicite um orçamento sem compromisso, para obter uma estimativa precisa."
        },
    ]

    var linkWhatsApp = "https://api.whatsapp.com/send?phone=5585985477461&text=Ol%C3%A1%20vim%20pelo%20site%20e%20desejo%20fazer%20um%20or%C3%A7amento!";
    var linkInstagram = "https://www.instagram.com/desentupidoracavallcante/"

    return(
        <div className="container">
            {/* Banner */}
            <div id="carouselBannerInicio" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className={`carousel-item active`}>
                        <img src={banner.src} alt="Banner Principal" className="d-block w-100" />
                    </div>
                </div>
            </div>

            {/* Contato WhatsApp */}
            <div className={`${styles.informacaoContato}`}>
                <h2 className={styles.cimaTextInformationContato}>ENTRE EM CONTATO AGORA MESMO</h2>
                <h2>PELO NOSSO <a href={linkWhatsApp} target="_blank">WHATSAPP</a></h2>
            </div>

            <div className={styles.separator}></div>

            {/* Serviços */}
            <div className={styles.servicosBox} id="servicos">
                <h1 className={`${styles.titleBox} text-center`}>Nossos Serviços</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        servicosData.map((data) => (
                            <div className="col" key={data.id}>
                                <div className={`card ${styles.cardBox}`}>
                                    <div className="card-body">
                                        <div className={`${styles.informacoesServicos} text-center`}>
                                            <img src={data.image} alt={data.text} />
                                            <h2>{data.text}</h2>
                                            <a href={data.link} target="_blank">Desejo esse Serviço!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
         
            <div className={styles.separator}></div>
            
            {/* Duvidas */}
            <div className={styles.boxDuvidas} id="duvidas">
                <h1 className={styles.titleSectionDuvidas}>Principais Dúvidas</h1>
                {
                    duvidasData.map((data) => (
                        <>
                            <div key={data.id}>
                                <p>
                                    <button id={data.id} onClick={() => { showCollpase(data.id, `${data.id}-show`, `${data.id}-icon`); } } className={`btn ${styles.btnShowCollpse}`} type="button">
                                        <i className={`bi bi-arrow-right-short ${styles.iconsCollpase}`} id={`${data.id}-icon`}></i>
                                        <small>{data.title}</small>
                                    </button>
                                </p>
                                <div className={`collapse ${styles.boxCollpseInformation}`} id={`${data.id}-show`}>
                                    <div className="card card-body">
                                        {data.description}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>

            {/* Sobre */}
            <div className={styles.sobreSection} id="sobre">
                <div className="container d-flex align-items-center">
                    <div className={`col-md-6 ${styles.bonecoDesentupidora}`}>
                        <img src={bonecoCavallcante.src} alt="Boneco Desentupidora Cavallcante" />
                    </div>
                    <div className={`col-md-6 ${styles.textSobre}`}>
                        <h1>Estamos sempre prontos para você!</h1>
                        <h5>O nosso objetivo é executar os serviços com qualidade, garantia e agilidade, a Cavallcante tem como principal diferença a qualidade e o compromisso com seus clientes.</h5>
                    </div>
                </div>
            </div>

            {/* Contato */}
            <div className={styles.contatoSection} id="contatos">
                <h1>Entre em Contato</h1>
                <div className={styles.iconsContato}>
                    <a href={linkWhatsApp} target="_blank"><i className="bi bi-whatsapp"></i></a>
                    <a href={linkInstagram} target="_blank"><i className="bi bi-instagram"></i></a>
                </div>
            </div>                                      

        </div>
    );
}