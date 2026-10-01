import { FormEvent, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WPP = '5544991169240'
const wppLink = (text?: string) => `https://wa.me/${WPP}${text ? `?text=${encodeURIComponent(text)}` : ''}`

function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.5L3 29l6.7-1.7A13 13 0 1 0 16 3Zm0 23.7c-2 0-4-.5-5.7-1.6l-.4-.2-4 1 1.1-3.9-.3-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.9-1-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 2 .8 2.7.9 3.7.7.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5l-.6-.4Z" /></svg>
}

const steps = [
  ['1º', 'Avaliação gratuita', 'Você traz o seu veículo até nossa loja para realizarmos uma avaliação 100% gratuita. Contamos com a melhor avaliação do mercado.'],
  ['2º', 'Proposta', 'Passando pela etapa de avaliação, você recebe uma proposta para realizar a venda do seu veículo.'],
  ['3º', 'PIX na conta', 'Com a negociação concluída e a proposta aceita, você recebe o PIX na sua conta no mesmo dia da venda.'],
]

const differentiators = [
  ['icone-marketing.webp', 'Melhor avaliação', 'Especialistas avaliam o seu veículo e fazem uma proposta justa, sem custos adicionais.'],
  ['icone-valor.webp', 'Rede de parceiros', 'Parceria com lojistas de Maringá e Região para oferecer o melhor atendimento.'],
  ['icone-veiculo.webp', 'Segurança total', 'Intermediação completa da venda, com transparência do início ao fim.'],
]

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=autonegocio&oq=autonegocio&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIJCAQQABgKGIAEMgcIBRAAGIAEMgcIBRAAGIAEMgkIBxAAGAoYgAQyBwgIEAAYgAQyDQgJEC4YrwEYxwEYgATSAQgxMzkxajBqN6gCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x94ecd72020855555:0x387b20e647a2c416,1,,,,'

const testimonials = [
  { image: 'cliente-1.webp', name: 'Cliente Auto Negócio', location: 'Maringá – PR', text: 'Realmente foi a venda mais prática que realizei do meu veículo, além da qualidade e segurança. Com certeza volto a negociar com vocês, obrigado!' },
  { image: 'cliente-2.webp', name: 'Viviane Domingues', location: 'Guarapuava – PR', text: 'Auto Negócio me surpreendeu. Foi muito rápido: em 50 minutos o vendedor me ligou dizendo que iria fazer o PIX. Super indico a loja!' },
  { image: 'cliente-3.webp', name: 'Lucas Lucarelli', location: 'São Paulo – SP', text: 'Loja que inspira a atendermos melhor. Do primeiro contato até o último, a padronização de informações é incrível, todos tratam bem e são super transparentes.' },
  { image: 'cliente-4.webp', name: 'Paula Rubim', location: 'Maringá – PR', text: 'Loja impecável, cheirosa, bonita, limpa, atendimento diferenciado e tratam bem independente do nível social das pessoas. Parabéns!' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['#inicio', 'Início'], ['#como-funciona', 'Como funciona'], ['#sobre', 'Sobre'], ['#depoimentos', 'Depoimentos'], ['#duvidas', 'Dúvidas'], ['#contato', 'Contato']]
  return <header className="header">
    <div className="container">
      <a className="logo" href="#inicio" aria-label="Auto Negócio – início"><img src="/assets/logo.webp" alt="Auto Negócio" width="240" height="54" /></a>
      <button className="menu-toggle" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
      <nav className={`nav ${open ? 'aberto' : ''}`} id="nav">
        {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="btn btn-laranja" href="#negociar" onClick={() => setOpen(false)}>Negociar meu veículo</a>
      </nav>
    </div>
  </header>
}

function Hero() {
  return <>
    <section className="hero" id="inicio">
      <span className="hero-marca" aria-hidden="true">AUTO NEGÓCIO</span>
      <div className="container">
        <div className="hero-texto">
          <span className="hero-local"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" /></svg>Maringá – PR</span>
          <h1>Vender seu veículo nunca foi tão <span>fácil.</span></h1>
          <p>Na Auto Negócio negociamos os mais variados tipos de veículos, garantindo sua satisfação, praticidade e segurança.</p>
          <a className="btn btn-verde js-wpp" href={wppLink('Olá! Quero negociar meu veículo com a Auto Negócio.')} target="_blank" rel="noopener"><WhatsAppIcon />Quero negociar meu veículo</a>
          <div className="hero-selos">
            <div><CheckIcon />Avaliação 100% gratuita</div>
            <div><CheckIcon />Proposta em poucos minutos</div>
            <div><CheckIcon />PIX na conta no mesmo dia</div>
          </div>
        </div>
        <div className="hero-img"><img src="/assets/homem-apontando.webp" alt="Homem sorrindo e apontando" width="800" height="800" /></div>
      </div>
    </section>
    <div className="faixa"><div className="container"><strong>PIX na conta no mesmo dia da venda.</strong><span>O jeito mais fácil, rápido e seguro de vender o seu carro.</span></div></div>
  </>
}

function SectionHeading({ title, subtitle, light = false }: { title: string; subtitle: string; light?: boolean }) {
  return <div className="centro"><span className="marca" /><h2 className={`titulo ${light ? 'titulo-claro' : ''}`}>{title}</h2><p className="subtitulo">{subtitle}</p></div>
}

function MainSections() {
  return <>
    <section className="como" id="como-funciona"><div className="container centro"><span className="marca" /><h2 className="titulo">Como funciona?</h2><p className="subtitulo">Em três etapas o seu veículo vira dinheiro na conta, sem burocracia.</p><div className="passos">
      {steps.map(([number, title, copy]) => <div className="passo" key={number}><div className="passo-num">{number}</div><h3>{title}</h3><p>{copy}</p></div>)}
    </div><div className="acao"><a className="btn btn-laranja" href="#negociar">Quero uma avaliação</a></div></div></section>

    <section id="diferenciais"><div className="container centro"><span className="marca" /><h2 className="titulo">Por que negociar com a Auto Negócio?</h2><p className="subtitulo">Venda o seu carro sem cair em golpes de anúncios na internet e sem dor de cabeça com garantias.</p><div className="difs">
      {differentiators.map(([image, title, copy]) => <div className="dif" key={title}><img src={`/assets/${image}`} alt="" width="96" height="96" /><h3>{title}</h3><p>{copy}</p></div>)}
    </div></div></section>

    <section className="sobre" id="sobre"><div className="container sobre-grid"><div className="sobre-img"><img src="/assets/letreiro.webp" alt="Fachada da Auto Negócio em Maringá" width="900" height="600" loading="lazy" /></div><div><span className="marca" /><h2 className="titulo titulo-claro">Sobre a Auto Negócio</h2><p>Contamos com uma ampla loja e parceria de lojistas de Maringá e Região para oferecer aos nossos amigos e clientes o melhor atendimento e satisfação.</p><p>Nosso time é formado por profissionais qualificados com mais de 10 anos de experiência no segmento.</p><ul><li><CheckIcon />Proposta rápida e justa</li><li><CheckIcon />Credibilidade e confiança</li><li><CheckIcon />PIX na conta no mesmo dia da venda</li></ul><p className="chamada">Vem pra AUTO NEGÓCIO!</p><a className="btn btn-laranja" href="#negociar">Negociar meu veículo</a></div></div></section>

    <section className="indique" aria-label="Indique e ganhe"><a className="js-wpp" href={wppLink('Olá! Quero indicar um amigo para o Indique e Ganhe.')} target="_blank" rel="noopener"><picture><source media="(max-width:700px)" srcSet="/assets/indique-e-ganhe-mobile.webp" /><img src="/assets/indique-e-ganhe.webp" alt="Indique e ganhe: indique alguém para negociar o veículo na Auto Negócio e, ao fechar a venda, receba R$ 200 no PIX" width="1980" height="640" loading="lazy" /></picture></a></section>
  </>
}

function Testimonials() {
  return <section id="depoimentos"><div className="container"><SectionHeading title="Quem negociou, recomenda" subtitle="Clientes que venderam o seu veículo com a Auto Negócio." /><div className="google-resumo"><div><strong>5/5</strong><span className="estrelas" aria-label="5 estrelas">★★★★★</span><small>Depoimentos no Google</small></div><a className="btn btn-laranja" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">Ver todas no Google</a></div><div className="deps">{testimonials.map((testimonial) => <article className="dep" key={testimonial.name}><div className="dep-topo"><img src={`/assets/${testimonial.image}`} alt="" width="58" height="58" loading="lazy" /><div><strong>{testimonial.name}</strong><small>{testimonial.location}</small></div></div><div className="estrelas" aria-label="5 estrelas">★★★★★</div><p>“{testimonial.text}”</p><a className="review-fonte" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">Avaliação do Google ↗</a></article>)}</div></div></section>
}

function FAQ() {
  const items = [
    ['Como funciona a Auto Negócio?', 'Somos uma empresa de intermediação de vendas de veículos, que tem por objetivo realizar a venda do seu carro de forma rápida, prática e com segurança, evitando transtornos com golpes anunciando em sites e preocupação com garantias.'],
    ['Como funciona a avaliação gratuita do meu veículo?', 'Nossos especialistas vão realizar a avaliação do seu veículo e lhe fazer uma proposta justa, sem custos adicionais, 100% gratuita.'],
    ['Em quanto tempo vou receber o pagamento do meu veículo?', 'Aqui, você recebe uma proposta para negociar o seu veículo e, se aceitar a proposta, recebe o valor no PIX, no mesmo dia da venda.'],
    ['Consigo negociar meu veículo mesmo com débitos e multas pendentes?', '[Inserir resposta original]'],
    ['Quais os modelos de veículos eu posso negociar na Auto Negócio?', '[Inserir resposta original]'],
  ]
  return <section className="faq" id="duvidas"><div className="container"><SectionHeading title="Dúvidas frequentes" subtitle="Tudo o que você precisa saber antes de negociar o seu veículo." /><div className="faq-lista">{items.map(([question, answer], index) => <details open={index === 0} key={question}><summary>{question}</summary><p className={index > 2 ? 'pendente' : ''}>{answer}</p></details>)}</div></div></section>
}

function NegotiationForm() {
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  function maskPhone(value: string) {
    let digits = value.replace(/\D/g, '').slice(0, 11)
    if (digits.length > 10) digits = digits.replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1) $2-$3')
    else if (digits.length > 6) digits = digits.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3')
    else if (digits.length > 2) digits = digits.replace(/^(\d{2})(\d{0,5})$/, '($1) $2')
    else if (digits.length > 0) digits = digits.replace(/^(\d{0,2})$/, '($1')
    return digits
  }

  function maskCurrency(value: string) {
    const digits = value.replace(/\D/g, '')
    return digits ? `R$ ${(Number(digits) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : ''
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const required = ['nome', 'telefone', 'fabricante', 'modelo', 'ano']
    const missing = required.find((field) => !String(data.get(field) ?? '').trim())
    if (missing) {
      setError(true)
      setMessage('Preencha os campos obrigatórios para continuar.')
      const target = form.elements.namedItem(missing)
      if (target instanceof HTMLElement) target.focus()
      return
    }
    const text = `Olá! Quero negociar meu veículo.\n\n*Nome:* ${data.get('nome')}\n*Telefone:* ${data.get('telefone')}\n*Veículo:* ${data.get('fabricante')} ${data.get('modelo')}\n*Ano:* ${data.get('ano')}${data.get('valor') ? `\n*Valor desejado:* ${data.get('valor')}` : ''}`
    setError(false)
    setMessage('Abrindo o WhatsApp…')
    window.open(wppLink(text), '_blank', 'noopener,noreferrer')
  }

  return <section id="negociar"><div className="container negociar-grid"><div className="negociar-img"><img src="/assets/negocio-fechado.webp" alt="Aperto de mãos fechando negócio" width="1024" height="576" loading="lazy" /></div><div><span className="marca" /><h2 className="titulo">Negocie o seu veículo</h2><p className="subtitulo form-intro">Preencha as informações abaixo e fale direto com a nossa equipe pelo WhatsApp.</p><form className="form" onSubmit={submit} noValidate>
    <div className="campo cheio"><label htmlFor="f-nome">Nome</label><input id="f-nome" name="nome" type="text" autoComplete="name" required /></div>
    <div className="campo cheio"><label htmlFor="f-tel">Telefone/WhatsApp</label><input id="f-tel" name="telefone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(44) 99999-9999" required onChange={(event) => { event.currentTarget.value = maskPhone(event.currentTarget.value) }} /></div>
    <div className="campo"><label htmlFor="f-fab">Fabricante</label><input id="f-fab" name="fabricante" type="text" placeholder="Ex.: Hyundai" required /></div>
    <div className="campo"><label htmlFor="f-mod">Modelo</label><input id="f-mod" name="modelo" type="text" placeholder="Ex.: Tucson" required /></div>
    <div className="campo"><label htmlFor="f-ano">Ano</label><input id="f-ano" name="ano" type="text" inputMode="numeric" maxLength={9} placeholder="Ex.: 2020/2021" required /></div>
    <div className="campo"><label htmlFor="f-valor">Valor desejado</label><input id="f-valor" name="valor" type="text" inputMode="numeric" placeholder="R$" onChange={(event) => { event.currentTarget.value = maskCurrency(event.currentTarget.value) }} /></div>
    <button className="btn btn-verde" type="submit">Enviar pelo WhatsApp</button><p className={`form-nota ${error ? 'form-erro' : ''}`} role="status">{message}</p>
  </form></div></div></section>
}

function Contact() {
  return <section className="contato" id="contato"><div className="container"><span className="marca" /><h2 className="titulo titulo-claro contato-titulo">Venha nos visitar</h2><div className="contato-grid"><div className="contato-info"><h3>Maringá – PR</h3><p>Av. Brasil, 5772 – Zona 05<br />CEP 87015-280</p><h3>Telefone Maringá</h3><p><a className="js-wpp" href={wppLink()} target="_blank" rel="noopener">(44) 99116-9240</a></p><h3>Redes sociais</h3><div className="redes"><a href="https://www.instagram.com/autonegociooficial/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg></a><a href="https://www.facebook.com/autonegociomga" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8Z" /></svg></a><a className="js-wpp" href={wppLink()} target="_blank" rel="noopener" aria-label="WhatsApp"><WhatsAppIcon /></a></div></div><div className="mapa"><iframe src="https://maps.google.com/maps?q=Av.%20Brasil%2C%205772%20-%20Zona%2005%2C%20Maring%C3%A1%20-%20PR&t=m&z=16&output=embed&iwloc=near" title="Mapa: Auto Negócio Maringá" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></div></section>
}

function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-topo"><img className="logo-c" src="/assets/logo-circulo.webp" alt="Auto Negócio" width="96" height="96" loading="lazy" /><div className="selos"><img src="/assets/selo-ssl.webp" alt="Certificado SSL" loading="lazy" /><img src="/assets/selo-google.webp" alt="Google Safe Browsing" loading="lazy" /><img src="/assets/selo-tinfoil.webp" alt="Site verificado" loading="lazy" /></div></div><div className="footer-base"><span>© {new Date().getFullYear()} Todos os direitos reservados – Auto Negócio.</span><a href="#inicio">Desenvolvido por <img src="/assets/vowdigital.webp" alt="VowDigital" width="118" height="20" /></a></div></div></footer>
}

export default function App() {
  const appRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from('.hero-texto > *', { opacity: 0, y: 24, duration: 0.7, stagger: 0.1, ease: 'power2.out' })
      gsap.from('.hero-img', { opacity: 0, x: 35, duration: 0.9, delay: 0.25, ease: 'power2.out' })
      gsap.utils.toArray<HTMLElement>('section:not(.hero) .container').forEach((element) => {
        gsap.from(element, { opacity: 0, y: 24, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 85%', once: true } })
      })
    }, appRef)
    return () => context.revert()
  }, [])

  return <div ref={appRef}><Header /><main><Hero /><MainSections /><Testimonials /><FAQ /><NegotiationForm /><Contact /></main><Footer /><a className="wpp-float js-wpp" href={wppLink('Olá! Vim pelo site e quero negociar meu veículo.')} target="_blank" rel="noopener" aria-label="Falar no WhatsApp"><WhatsAppIcon /></a></div>
}
