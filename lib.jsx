// ============================================================
// lib.jsx — icons, data, helpers (exported to window)
// Robust, geometric line icons (24×24, currentColor stroke)
// ============================================================
(function(){
const React = window.React;

const S = (props) => ({
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
  stroke: "currentColor", strokeWidth: 1.7,
  strokeLinecap: "round", strokeLinejoin: "round", ...props,
});

// ---- generic icons ----
const Icon = {
  phone: (p) => <svg {...S(p)}><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z"/></svg>,
  whatsapp: (p) => <svg viewBox="0 0 24 24" width={p?.width||24} height={p?.height||24} fill="currentColor" style={p?.style}><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.046 22l4.978-1.375A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17Zm-3.44 4.07c-.19 0-.49.07-.745.35-.257.28-.98.96-.98 2.34s1.003 2.714 1.143 2.903c.14.187 1.963 3.143 4.8 4.277.672.29 1.196.463 1.605.592.674.215 1.287.185 1.771.112.54-.08 1.662-.68 1.897-1.336.235-.657.235-1.22.164-1.337-.07-.117-.257-.187-.538-.327-.28-.14-1.662-.82-1.918-.913-.258-.1-.445-.14-.633.14-.188.28-.724.913-.889 1.1-.164.187-.328.21-.608.07-.28-.14-1.182-.436-2.252-1.39-.832-.742-1.394-1.659-1.558-1.939-.163-.28-.017-.431.124-.57.126-.126.28-.328.42-.492.14-.164.187-.28.28-.468.093-.187.047-.35-.023-.492-.07-.14-.633-1.525-.867-2.087-.228-.546-.46-.472-.633-.48-.163-.007-.35-.01-.538-.01Z"/></svg>,
  arrowRight: (p) => <svg {...S(p)}><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  check: (p) => <svg {...S(p)}><path d="M4 12.5 9 17.5 20 6.5"/></svg>,
  checkCircle: (p) => <svg {...S(p)}><circle cx="12" cy="12" r="9"/><path d="M8 12.2l2.6 2.6L16 9.4"/></svg>,
  star: (p) => <svg {...S({...p, fill:"currentColor", strokeWidth:0})}><path d="m12 2 2.9 6.1 6.6.9-4.8 4.7 1.2 6.6L12 18.1 6.1 21.3l1.2-6.6L2.5 9.9l6.6-.9z"/></svg>,
  mapPin: (p) => <svg {...S(p)}><path d="M12 21s-6.5-5.4-6.5-10A6.5 6.5 0 0 1 18.5 11c0 4.6-6.5 10-6.5 10Z"/><circle cx="12" cy="11" r="2.4"/></svg>,
  mail: (p) => <svg {...S(p)}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>,
  clock: (p) => <svg {...S(p)}><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/></svg>,
  instagram: (p) => <svg {...S(p)}><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.8"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/></svg>,
  facebook: (p) => <svg {...S(p)}><path d="M14.5 8.5h2.5V5h-2.5A3.5 3.5 0 0 0 11 8.5V11H8.5v3.5H11V21h3.5v-6.5H17l.5-3.5h-3V8.8c0-.3.2-.3.5-.3Z"/></svg>,
  // ---- service icons ----
  install: (p) => <svg {...S(p)}><rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9h18M7 4v16M11 4v16M15 4v16M19 4v16"/></svg>,
  automate: (p) => <svg {...S(p)}><path d="M12 12a0 0 0 0 0 0 0"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M6 6a8.5 8.5 0 0 0 0 12M18 6a8.5 8.5 0 0 1 0 12"/></svg>,
  shieldCheck: (p) => <svg {...S(p)}><path d="M12 3 5 6v5.5c0 4.3 3 7.4 7 8.5 4-1.1 7-4.2 7-8.5V6Z"/><path d="m9 11.5 2 2 4-4"/></svg>,
  wrench: (p) => <svg {...S(p)}><path d="M15.5 5.5a4 4 0 0 0-5.3 5.1l-6 6a1.5 1.5 0 0 0 2.1 2.1l6-6a4 4 0 0 0 5.1-5.3l-2.2 2.2-2.1-.3-.3-2.1Z"/></svg>,
  cpu: (p) => <svg {...S(p)}><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx=".6"/><path d="M9 6V3M15 6V3M9 21v-3M15 21v-3M6 9H3M6 15H3M21 9h-3M21 15h-3"/></svg>,
  building: (p) => <svg {...S(p)}><path d="M4 21V6l7-3 7 3v15"/><path d="M4 21h16M8.5 9h0M11.5 9h0M14.5 9h0M8.5 13h0M11.5 13h0M14.5 13h0M9.5 21v-4h3v4"/></svg>,
  // ---- differentiators ----
  award: (p) => <svg {...S(p)}><circle cx="12" cy="9" r="5"/><path d="m9 13-1.5 7L12 17l4.5 3L15 13"/></svg>,
  bolt: (p) => <svg {...S(p)}><path d="M13 2 4 14h7l-1 8 9-12h-7Z"/></svg>,
  users: (p) => <svg {...S(p)}><circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17 14.5a5.5 5.5 0 0 1 3.5 5.5"/></svg>,
  layers: (p) => <svg {...S(p)}><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></svg>,
  fileCheck: (p) => <svg {...S(p)}><path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8Z"/><path d="M14 3v5h5"/><path d="m9 14 2 2 3.5-3.5"/></svg>,
  // ---- misc ----
  google: (p) => <svg viewBox="0 0 24 24" width={p?.width||24} height={p?.height||24}><path fill="#4285F4" d="M21.6 12.2c0-.6 0-1.2-.2-1.8H12v3.4h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.1Z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3.1a10 10 0 0 0 0 9z"/><path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.5l3.3 2.6C7.2 7.6 9.4 5.9 12 5.9Z"/></svg>,
};

// ---- contact constants ----
const WA_NUMBER = "5511940403153";
const PHONE_DISPLAY = "(11) 94040-3153";
const EMAIL = "contato@ultraportoes.com.br";
const ADDRESS = "Av. Nossa Sra. da Assunção, 960 — Vila Butantã, São Paulo · SP";
const ADDRESS_SHORT = "Vila Butantã · São Paulo / SP";
const INSTAGRAM = "https://instagram.com/ultraportoes";

const WA_BASE = "https://wa.me/5511940403153";

const waLink = (msg) =>
  msg ? `${WA_BASE}?text=${encodeURIComponent(msg)}` : WA_BASE;

// ---- data ----
const SERVICES = [
  { ic:"install",     t:"Instalação de Portões", d:"Projeto e instalação de portões basculantes, deslizantes e pivotantes, com acabamento e segurança de fábrica." },
  { ic:"automate",    t:"Automação de Portões",  d:"Motorização inteligente com controle remoto, interfone e integração ao seu sistema de segurança." },
  { ic:"shieldCheck", t:"Manutenção Preventiva", d:"Revisões programadas que prolongam a vida útil do equipamento e evitam paradas inesperadas." },
  { ic:"wrench",      t:"Manutenção Corretiva",  d:"Diagnóstico rápido e reparo de motores, trilhos e automatizadores com peças originais." },
  { ic:"cpu",         t:"Motores e Acessórios",  d:"Venda e troca de motores, centrais, controles e acessórios das melhores marcas do mercado." },
  { ic:"building",    t:"Atendimento p/ Condomínios", d:"Contratos de manutenção e suporte técnico dedicado para portarias e acessos coletivos." },
];

const DIFERENCIAIS = [
  { ic:"award",      t:"+5 anos de experiência", d:"Histórico sólido em instalação e automação para residências, comércios e condomínios." },
  { ic:"bolt",       t:"Atendimento rápido",     d:"Resposta ágil e agendamento sem burocracia — urgências priorizadas." },
  { ic:"users",      t:"Equipe especializada",   d:"Técnicos treinados e certificados para cada tipo de portão e automatizador." },
  { ic:"layers",     t:"Materiais de qualidade", d:"Trabalhamos apenas com peças e motores originais, homologados e duráveis." },
  { ic:"shieldCheck",t:"Garantia dos serviços",  d:"Toda instalação e reparo acompanha garantia formal por escrito." },
  { ic:"fileCheck",  t:"Orçamento sem compromisso", d:"Avaliação técnica e proposta transparente, sem taxas escondidas." },
];

const PROJ_CATS = ["Todos","Basculantes","Deslizantes","Comerciais","Instalações"];
const PROJECTS = [
  { cat:"Deslizantes",  t:"Portão deslizante branco",    img:"proj-01.jpg" },
  { cat:"Deslizantes",  t:"Deslizante residencial",       img:"proj-02.jpg" },
  { cat:"Basculantes",  t:"Basculante decorativo",        img:"proj-03.jpg" },
  { cat:"Deslizantes",  t:"Deslizante cinza moderno",     img:"proj-04.jpg" },
  { cat:"Instalações",  t:"Equipe em campo",              img:"proj-05.jpg" },
  { cat:"Comerciais",   t:"Portão comercial gradeado",    img:"proj-06.jpg" },
  { cat:"Basculantes",  t:"Basculante estilo diamante",   img:"proj-07.jpg" },
  { cat:"Basculantes",  t:"Basculante premium",           img:"proj-08.jpg" },
  { cat:"Deslizantes",  t:"Deslizante contemporâneo",     img:"proj-09.jpg" },
];

const DEPOIMENTOS = [
  {
    n:"Walquiria Morins Barreto",
    l:"4 meses atrás",
    q:"Gostaria de parabenizar a equipe pelo excelente trabalho no novo portão. É raro encontrar profissionais tão dedicados, que entregam tão bem, o resultado final superou nossas expectativas, super indico.",
    av:"https://i.pravatar.cc/80?img=47",
  },
  {
    n:"Clovis Manzalli",
    l:"11 meses atrás",
    q:"A empresa Ultra Portões realmente me surpreendeu com a postura profissional e dedicação em realizar um portão bem ajustado. Minha garagem é de uma casa antiga, fora de esquadro, mas os profissionais fizeram um ótimo trabalho no prazo combinado. Estou muito feliz. Obrigado.",
    av:"https://i.pravatar.cc/80?img=15",
  },
  {
    n:"Vanusa Rodrigues",
    l:"7 meses atrás",
    q:"Excelente trabalho, eles estão de parabéns. O portão ficou maravilhoso, amei!",
    av:"https://i.pravatar.cc/80?img=32",
  },
];

const HOODS = ["Butantã","Vila Butantã","Rio Pequeno","Jaguaré","Morumbi","Vila Sônia","Raposo Tavares","Cidade Universitária","Pinheiros","Lapa","Vila Leopoldina","Perdizes"];

const NAV_LINKS = [
  { href:"#servicos", t:"Serviços" },
  { href:"#diferenciais", t:"Diferenciais" },
  { href:"#sobre", t:"Sobre" },
  { href:"#projetos", t:"Projetos" },
  { href:"#cobertura", t:"Cobertura" },
];

Object.assign(window, {
  Icon, S,
  WA_NUMBER, WA_BASE, PHONE_DISPLAY, EMAIL, ADDRESS, ADDRESS_SHORT, INSTAGRAM, waLink,
  SERVICES, DIFERENCIAIS, PROJ_CATS, PROJECTS, DEPOIMENTOS, HOODS, NAV_LINKS,
});
})();
