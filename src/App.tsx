/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  Award, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Plus,
  Minus,
  Instagram,
  Facebook,
  Linkedin,
  Smile,
  Check
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

// === CONFIGURAÇÕES DO CLIENTE (Mude aqui) ===
const CLINIC_CONFIG = {
  name: "Dra. Helena Silveira",
  cro: "CRO-SP 123.456",
  responsibility: "Diretora Técnica",
  specialty: "Odontologia Estética & Reabilitação",
  experience: "20+ anos de excelência",
  whatsapp: "5511999999999",
  whatsappMsg: "Olá! Gostaria de agendar uma avaliação na DUNO.",
  emergencyMsg: "URGÊNCIA: Preciso de atendimento odontológico agora.",
  city: "São Paulo, SP",
  address: "Av. Paulista, 1000 - Sala 1201",
  hours: "Seg - Sex: 08h às 19h",
  logo: "DUNO",
};

// --- Componentes Auxiliares ---

const SectionTitle = ({ title, subtitle, centered = true, light = false }: { title: string, subtitle?: string, centered?: boolean, light?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex items-center gap-4 mb-6 ${centered ? 'justify-center' : ''}`}
    >
      <div className={`h-[2px] w-8 ${light ? 'bg-white/30' : 'bg-accent'}`}></div>
      <span className={`${light ? 'text-white/60' : 'text-accent'} font-bold uppercase tracking-[0.4em] text-[10px]`}>{CLINIC_CONFIG.logo} ODONTOLOGIA</span>
      <div className={`h-[2px] w-8 ${light ? 'bg-white/30' : 'bg-accent'}`}></div>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={`text-4xl md:text-7xl font-display ${light ? 'text-white' : 'text-primary'} mb-6 leading-tight`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className={`${light ? 'text-white/60' : 'text-text-muted'} text-lg max-w-2xl mx-auto font-light leading-relaxed`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Seções ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INÍCIO', href: '#home' },
    { name: 'SOBRE', href: '#sobre' },
    { name: 'SERVIÇOS', href: '#servicos' },
    { name: 'PORTFÓLIO', href: '#portfolio' },
    { name: 'DEPOIMENTOS', href: '#depoimentos' },
    { name: 'LOCALIZAÇÃO', href: '#mapa' },
    { name: 'CONTATO', href: '#contato' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-lg py-4 shadow-lg' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <span className={`text-3xl font-display font-bold tracking-[0.3em] uppercase ${isScrolled ? 'text-primary' : 'text-primary'}`}>
            {CLINIC_CONFIG.logo}
          </span>
          <span className="w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-bold tracking-[0.2em] text-primary/60 hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMsg)}`}
            className="bg-primary text-white px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] hover:bg-accent transition-all shadow-xl"
          >
            AGENDAR
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button className="absolute top-8 right-8 text-primary" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-primary font-display font-bold text-3xl tracking-widest hover:text-accent transition-all"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMsg)}`}
              className="bg-accent text-white px-12 py-5 rounded-full font-bold text-xs tracking-widest mt-6 shadow-xl"
            >
              AGENDAR AGORA
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-soft">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 z-0"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-12 h-[1px] bg-accent"></span>
              <span className="text-accent font-accent font-bold uppercase tracking-[0.4em] text-[10px]">EXCELÊNCIA EM ODONTOLOGIA</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-display text-primary leading-[1] md:leading-[0.9] mb-10">
              Onde a Arte <br />
              Encontra a <br />
              <span className="italic text-accent">Precisão.</span>
            </h1>
            
            <p className="text-xl text-text-muted font-light leading-relaxed max-w-lg mb-12">
              Na <span className="font-bold text-primary">{CLINIC_CONFIG.logo}</span>, redesenhamos sorrisos com tecnologia de ponta e um olhar artístico individualizado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a 
                href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMsg)}`}
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white px-10 py-5 rounded-full font-bold text-[11px] tracking-[0.2em] uppercase shadow-2xl hover:bg-accent transition-all flex items-center justify-center gap-3 group"
              >
                Agendar Avaliação
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="#portfolio"
                whileHover={{ scale: 1.02 }}
                className="px-10 py-5 rounded-full font-bold text-[11px] tracking-[0.2em] uppercase border border-primary/10 hover:bg-white transition-all flex items-center justify-center"
              >
                Ver Resultados
              </motion.a>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-12 border-t border-primary/5 pt-12">
              {[
                { label: "Sorrisos", val: "5k+" },
                { label: "Tecnologia", val: "3D" },
                { label: "Anos", val: "20+" }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-display text-primary mb-1">{stat.val}</p>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative mt-20 lg:mt-0"
          >
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-premium relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=2070" 
                alt="Clínica DUNO" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-card p-8 rounded-[30px] z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                  <Smile size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Satisfação</p>
                  <p className="text-xl font-display text-primary">100% Real</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass-card p-8 rounded-[30px] z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Certificação</p>
                  <p className="text-xl font-display text-primary">Premium Gold</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustedBrands = () => (
  <section className="py-12 bg-white border-y border-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        {['Invisalign', 'Straumann', '3M', 'Dentsply Sirona', 'Nobel Biocare'].map((brand) => (
          <span key={brand} className="text-xl font-display font-bold text-primary tracking-widest">{brand}</span>
        ))}
      </div>
    </div>
  </section>
);

const Philosophy = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="relative">
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=1000" 
                alt={`Filosofia ${CLINIC_CONFIG.logo}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -top-12 -right-12 w-48 h-48 bg-accent rounded-full flex items-center justify-center text-white text-center p-6 shadow-2xl border-8 border-white"
            >
              <p className="text-[10px] font-bold tracking-widest uppercase leading-relaxed">Excelência em cada detalhe</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Nossa Filosofia</span>
          <h2 className="text-5xl md:text-6xl font-display text-primary mb-10 leading-[1.1]">
            Acreditamos no <br />
            <span className="italic">Sorriso</span> <br />
            como sua assinatura.
          </h2>
          <div className="space-y-8 text-text-muted font-light leading-relaxed text-lg">
            <p>
              Na {CLINIC_CONFIG.logo}, não buscamos apenas tratar dentes, mas sim desenhar sorrisos que harmonizam com sua personalidade e traços faciais. Nossa abordagem é pautada na elegância e na funcionalidade.
            </p>
            <p>
              Cada sorriso é único, e cada planejamento digital é desenvolvido para respeitar sua anatomia, utilizando a tecnologia 3D a favor da sua melhor expressão.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 mt-16">
            <div className="flex items-start gap-4">
              <div className="w-1 bg-accent h-full rounded-full"></div>
              <div>
                <h4 className="text-primary font-display text-2xl mb-2">Ética</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Compromisso Real</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1 bg-accent h-full rounded-full"></div>
              <div>
                <h4 className="text-primary font-display text-2xl mb-2">Exclusividade</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Protocolos Únicos</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const About = () => (
    <section id="sobre" className="py-24 bg-bg-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-[100px] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=2070" 
              alt={CLINIC_CONFIG.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0"></div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-12 -right-12 bg-white p-10 rounded-[40px] shadow-2xl z-20 border border-slate-100 hidden lg:block"
          >
            <p className="text-6xl font-display text-accent mb-2">20+</p>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Anos de <br />Excelência</p>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-accent"></div>
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px]">A Especialista</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display text-primary mb-10 leading-[1.1]">
            {CLINIC_CONFIG.name}
          </h2>
          
          <div className="space-y-8 text-text-muted font-light leading-relaxed text-lg">
            <p>
              Com uma trajetória de mais de duas décadas na reabilitação oral, a Dra. Helena Silveira é referência em procedimentos que unem tecnologia digital e um refinado senso estético.
            </p>
            <p>
              Sua abordagem foca na odontologia minimamente invasiva, onde cada faceta ou implante é planejado para ser imperceptível, devolvendo a confiança de sorrir com plenitude.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-16">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent shadow-lg">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm uppercase tracking-widest">Segurança</h4>
                <p className="text-xs text-slate-400">Protocolos Médicos</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent shadow-lg">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm uppercase tracking-widest">Tecnologia</h4>
                <p className="text-xs text-slate-400">Equipamentos de Ponta</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
);

const Services = () => {
  const services = [
    { 
      title: "Lentes de Contato", 
      desc: "Facetas ultrafinas de porcelana que corrigem cor, formato e alinhamento para um sorriso perfeito e natural.", 
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
      icon: <Sparkles />,
      tag: "ESTÉTICA",
      size: "large"
    },
    { 
      title: "Invisalign", 
      desc: "O sistema de alinhadores transparentes mais avançado do mundo para um alinhamento discreto.", 
      image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800",
      icon: <Zap />,
      tag: "ALINHAMENTO",
      size: "small"
    },
    { 
      title: "Implantes Premium", 
      desc: "Recupere a função e a estética com tecnologia suíça de alta precisão e durabilidade.", 
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      icon: <ShieldCheck />,
      tag: "REABILITAÇÃO",
      size: "small"
    },
    { 
      title: "Harmonização", 
      desc: "Equilíbrio perfeito entre o sorriso e as linhas da face com protocolos minimamente invasivos.", 
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
      icon: <Star />,
      tag: "OROFACIAL",
      size: "small"
    },
    { 
      title: "Clareamento", 
      desc: "Tecnologia de ponta para um branqueamento seguro, indolor e com resultados imediatos.", 
      image: "https://images.unsplash.com/photo-1445510491599-c391e8046a68?auto=format&fit=crop&q=80&w=800",
      icon: <Sparkles />,
      tag: "ESTÉTICA",
      size: "small"
    },
    { 
      title: "Check-up Digital", 
      desc: "Prevenção com tecnologia de escaneamento 3D de alta precisão para diagnóstico precoce.", 
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
      icon: <CheckCircle2 />,
      tag: "PREVENÇÃO",
      size: "large"
    },
    { 
      title: "Endodontia", 
      desc: "Tratamentos de canal com precisão microscópica garantindo máximo conforto e rapidez.", 
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
      icon: <ShieldCheck />,
      tag: "ESPECIALIZADA",
      size: "small"
    },
    { 
      title: "Odontopediatria", 
      desc: "Cuidado especializado para crianças em um ambiente lúdico e totalmente acolhedor.", 
      image: "https://images.unsplash.com/photo-1601305410972-e15a1332f7a9?auto=format&fit=crop&q=80&w=800",
      icon: <Smile />,
      tag: "CUIDADO",
      size: "small"
    },
    { 
      title: "Restaurações", 
      desc: "Materiais bio-compatíveis que imitam a anatomia natural e a cor original do dente.", 
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
      icon: <CheckCircle2 />,
      tag: "ESTÉTICA",
      size: "small"
    },
    { 
      title: "Gengivoplastia", 
      desc: "Correção estética do tecido gengival para um sorriso mais harmônico e proporcional.", 
      image: "https://images.unsplash.com/photo-1593054910314-d242f3607fc8?auto=format&fit=crop&q=80&w=800",
      icon: <Star />,
      tag: "CIRURGIA",
      size: "small"
    },
    { 
      title: "Cirurgia Oral", 
      desc: "Extrações complexas e procedimentos cirúrgicos realizados com segurança e sedação.", 
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
      icon: <ShieldCheck />,
      tag: "CIRURGIA",
      size: "small"
    },
    { 
      title: "Disfunção ATM", 
      desc: "Alívio e tratamento para dores na face, estalos mandíbulas e bruxismo severo.", 
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      icon: <Zap />,
      tag: "ESPECIALIZADA",
      size: "small"
    },
    { 
      title: "Ortodontia", 
      desc: "Aparelhos fixos estéticos e convencionais para todas as idades com precisão digital.", 
      image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800",
      icon: <Zap />,
      tag: "ALINHAMENTO",
      size: "small"
    }
  ];

  return (
    <section id="servicos" className="bg-bg-soft py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Especialidades" 
          subtitle="Protocolos exclusivos que unem a precisão da odontologia moderna à sensibilidade estética."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[380px]">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className={`relative rounded-[50px] overflow-hidden group shadow-premium hover:shadow-2xl transition-all duration-700 border border-white/20 ${s.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <img 
                src={s.image} 
                alt={s.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500">
                  <span className="bg-accent text-white text-[9px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase shadow-lg shadow-accent/20">{s.tag}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-display text-white mb-4 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500">{s.title}</h3>
                <p className="text-white/70 text-xs md:text-sm font-light max-w-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 md:translate-y-6 md:group-hover:translate-y-0 leading-relaxed mb-4 md:mb-0">
                  {s.desc}
                </p>
                
                <a 
                  href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=Olá! Quero saber mais sobre ${s.title}`}
                  className="mt-4 md:mt-8 inline-flex items-center gap-3 text-accent font-bold text-[10px] tracking-widest uppercase opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 delay-100 md:translate-y-6 md:group-hover:translate-y-0"
                >
                  Agendar Consulta <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const VirtualAssessment = () => (
  <section className="py-24 bg-primary relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px]"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[60px] p-12 md:p-20 text-center">
        <SectionTitle 
          title="Avaliação Virtual" 
          subtitle="Inicie sua jornada para o sorriso perfeito sem sair de casa. Envie suas fotos e receba um pré-planejamento exclusivo."
          light
        />
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {[
            { step: "01", title: "Fotos", desc: "Siga nosso guia simples para tirar fotos do seu sorriso." },
            { step: "02", title: "Envio", desc: "Envie as imagens através do nosso canal seguro no WhatsApp." },
            { step: "03", title: "Análise", desc: "A Dra. Helena fará uma análise preliminar do seu caso." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent font-display text-2xl mb-6 border border-accent/30">
                {item.step}
              </div>
              <h4 className="text-white text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-white/60 text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <motion.a 
          href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=Olá! Gostaria de fazer uma avaliação virtual.`}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-4 bg-accent text-white px-12 py-6 rounded-full font-bold text-[12px] tracking-[0.3em] uppercase shadow-2xl shadow-accent/40"
        >
          INICIAR AGORA <ArrowRight size={18} />
        </motion.a>
      </div>
    </div>
  </section>
);

const BeforeAfter = () => null; // Consolidado no Portfolio

const Testimonials = () => (
  <section id="depoimentos" className="bg-bg-soft py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-accent font-bold uppercase tracking-widest text-[10px] mb-4 block">EXPERIÊNCIAS {CLINIC_CONFIG.logo}</span>
        <h2 className="text-5xl font-display text-primary mb-4">O que dizem nossos pacientes</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Mariana Silva", text: "A Dra. Helena é incrível! Minhas lentes de contato ficaram super naturais, exatamente como eu queria. Recomendo de olhos fechados.", role: "PACIENTE DE LENTES" },
          { name: "Ricardo Oliveira", text: "Excelente atendimento e tecnologia de ponta. Fiz o tratamento com Invisalign e os resultados foram rápidos e discretos.", role: "PACIENTE DE INVISALIGN" },
          { name: "Carla Mendes", text: "Minha experiência na DUNO foi acolhedora. O implante que fiz devolveu minha segurança para comer e sorrir.", role: "PACIENTE DE IMPLANTE" }
        ].map((t, i) => (
          <div key={i} className="bg-white p-10 rounded-2xl shadow-premium border border-slate-100 relative">
            <div className="text-accent mb-6 flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
            </div>
            <p className="text-text-muted text-sm italic mb-8 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-bg-soft rounded-full overflow-hidden">
                <img src={`https://i.pravatar.cc/100?u=${i}`} alt={t.name} referrerPolicy="no-referrer" />
              </div>
              <div>
                <h5 className="font-bold text-primary text-xs">{t.name}</h5>
                <p className="text-[8px] text-accent uppercase tracking-widest font-bold">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Journey = () => (
  <section className="section-padding">
    <SectionTitle 
      title="Sua Experiência DUNO" 
      subtitle="Um processo exclusivo, seguro e focado no seu bem-estar absoluto."
    />
    
    <div className="relative">
      {/* Connector Line */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block"></div>
      
      <div className="grid md:grid-cols-4 gap-8 relative z-10">
        {[
          { step: "01", title: "Avaliação", desc: "Análise clínica detalhada e escaneamento digital 3D." },
          { step: "02", title: "Planejamento", desc: "Desenvolvemos seu novo sorriso digitalmente para aprovação." },
          { step: "03", title: "Mock-up", desc: "Você testa o novo sorriso antes de iniciar o tratamento definitivo." },
          { step: "04", title: "Transformação", desc: "Execução precisa com as tecnologias mais avançadas." }
        ].map((item, i) => (
          <div key={i} className="text-center">
            <div className="w-16 h-16 bg-white border-4 border-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-accent font-bold text-xl relative z-10">
              {item.step}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3 font-display">{item.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    { q: "Os procedimentos são dolorosos?", a: "A maioria dos nossos tratamentos é minimamente invasiva. Utilizamos técnicas de anestesia moderna e sedação consciente para garantir total conforto." },
    { q: "Quanto tempo dura o tratamento com Invisalign?", a: "A duração varia conforme a complexidade de cada caso, mas em média os resultados são alcançados entre 6 a 18 meses." },
    { q: "As lentes de contato estragam os dentes?", a: "Não. Quando bem planejadas e executadas com técnicas minimamente invasivas, preservamos ao máximo a estrutura dental natural." },
    { q: "Qual a diferença entre implante e prótese?", a: "O implante substitui a raiz do dente perdido, enquanto a prótese substitui a coroa (parte visível). Juntos, devolvem a função completa." },
    { q: "Como é feito o planejamento digital?", a: "Realizamos fotos, vídeos e escaneamento 3D para criar um projeto personalizado que você pode visualizar antes de começar." },
    { q: "A clínica aceita convênios?", a: "Trabalhamos exclusivamente no modelo particular para garantir o tempo e a personalização necessários em cada procedimento. Emitimos notas para reembolso." },
    { q: "Quais as formas de pagamento?", a: "Oferecemos condições facilitadas em até 12x no cartão, além de descontos para pagamento à vista via PIX ou transferência." }
  ];

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold uppercase tracking-widest text-[10px] mb-4 block">DÚVIDAS FREQUENTES</span>
          <h2 className="text-5xl font-display text-primary">Perguntas Comuns</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-bg-soft rounded-xl overflow-hidden border border-slate-100">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center font-bold text-primary text-sm"
              >
                {f.q}
                <ChevronRight size={16} className={`text-accent transition-transform ${openIndex === i ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-text-muted text-xs leading-relaxed font-light"
                  >
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-primary text-white pt-32 pb-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-12 gap-16 mb-24">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-display font-bold tracking-[0.3em] uppercase">{CLINIC_CONFIG.logo}</h2>
          </div>
          <p className="text-slate-400 max-w-md mb-12 font-light leading-relaxed text-lg">
            Redefinindo os padrões da odontologia moderna através da união entre tecnologia digital e sensibilidade estética. Seu sorriso, elevado ao nível de arte.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'WhatsApp', 'Facebook'].map(social => (
              <a key={social} href="#" className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-accent transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="font-bold mb-10 uppercase tracking-[0.3em] text-[10px] text-accent">Navegação</h4>
          <ul className="space-y-6 text-slate-400 text-sm font-light">
            <li><a href="#home" className="hover:text-white transition-all">Início</a></li>
            <li><a href="#sobre" className="hover:text-white transition-all">A Especialista</a></li>
            <li><a href="#servicos" className="hover:text-white transition-all">Procedimentos</a></li>
            <li><a href="#resultados" className="hover:text-white transition-all">Resultados</a></li>
            <li><a href="#depoimentos" className="hover:text-white transition-all">Depoimentos</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-4">
          <h4 className="font-bold mb-10 uppercase tracking-[0.3em] text-[10px] text-accent">Onde Estamos</h4>
          <ul className="space-y-8 text-slate-400 text-sm font-light">
            <li className="flex items-start gap-4">
              <MapPin size={20} className="text-accent shrink-0" /> 
              <span className="leading-relaxed">{CLINIC_CONFIG.address}<br />{CLINIC_CONFIG.city}</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={20} className="text-accent shrink-0" /> 
              <span className="tracking-widest">{CLINIC_CONFIG.whatsapp}</span>
            </li>
            <li className="flex items-center gap-4">
              <Clock size={20} className="text-accent shrink-0" /> 
              <span>{CLINIC_CONFIG.hours}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-[10px] uppercase tracking-[0.2em]">
        <div className="text-center md:text-left">
          <p className="mb-2">&copy; {new Date().getFullYear()} {CLINIC_CONFIG.logo}. Todos os direitos reservados.</p>
          <p className="text-slate-600 lowercase opacity-60 italic">{CLINIC_CONFIG.name} | {CLINIC_CONFIG.cro} | {CLINIC_CONFIG.responsibility}</p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
        </div>
      </div>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a 
    href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMsg)}`}
    className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl animate-pulse-whatsapp flex items-center justify-center group"
    aria-label="Falar no WhatsApp"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.035c0 2.123.555 4.194 1.608 6.013l-1.707 6.236 6.38-1.674c1.756.957 3.738 1.461 5.753 1.462h.005c6.634 0 12.032-5.396 12.035-12.035a11.83 11.83 0 00-3.411-8.504z"/>
    </svg>
    <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
      Agende seu horário!
    </span>
  </a>
);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'results'>('results');
  
  const galleryImages = [
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1445510491599-c391e8046a68?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  ];

  const results = [
    { 
      title: "Lentes de Contato", 
      before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
      desc: "Harmonização completa do sorriso com facetas ultrafinas de porcelana."
    },
    { 
      title: "Reabilitação Oral", 
      before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1597484662317-9bd773ee19ba?auto=format&fit=crop&q=80&w=800",
      desc: "Recuperação funcional e estética de alta complexidade com fluxo digital."
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-12 bg-accent"></div>
              <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">PORTFÓLIO EXCLUSIVO</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display text-white leading-tight">
              A Excelência em <br />
              <span className="italic text-accent">Transformações</span>
            </h2>
          </div>
          
          <div className="flex bg-white/5 p-2 rounded-full backdrop-blur-sm border border-white/10">
            <button 
              onClick={() => setActiveTab('results')}
              className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-widest transition-all ${activeTab === 'results' ? 'bg-accent text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
            >
              ANTES & DEPOIS
            </button>
            <button 
              onClick={() => setActiveTab('gallery')}
              className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-widest transition-all ${activeTab === 'gallery' ? 'bg-accent text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
            >
              GALERIA
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'results' ? (
            <motion.div 
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-12"
            >
              {results.map((item, i) => (
                <div key={i} className="group relative rounded-[40px] overflow-hidden shadow-2xl bg-white/5 border border-white/10">
                  <div className="grid grid-cols-2 h-[450px]">
                    <div className="relative border-r border-white/10">
                      <img src={item.before} alt="Antes" className="w-full h-full object-cover grayscale-[0.3]" referrerPolicy="no-referrer" />
                      <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-white/10">ANTES</div>
                    </div>
                    <div className="relative">
                      <img src={item.after} alt="Depois" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-6 right-6 bg-accent text-white text-[9px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">DEPOIS</div>
                    </div>
                  </div>
                  <div className="p-8 bg-gradient-to-t from-black/80 to-transparent absolute inset-0 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-white text-2xl font-display mb-2">{item.title}</h4>
                    <p className="text-white/60 text-sm font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              <div className="flex gap-8 animate-marquee">
                {[...galleryImages, ...galleryImages].map((img, i) => (
                  <div key={i} className="min-w-[350px] md:min-w-[500px] aspect-[4/3] rounded-[50px] overflow-hidden shadow-2xl border border-white/10">
                    <img src={img} alt="Resultado" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-white/40 text-xs tracking-[0.3em] uppercase">Arraste para explorar ou aguarde a rolagem automática</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contato" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-bg-soft rounded-[60px] p-12 md:p-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 hidden lg:block"></div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">CONTATO</span>
            <h2 className="text-5xl md:text-6xl font-display text-primary mb-10">Agende sua <br /><span className="italic">Experiência</span></h2>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shadow-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Localização</p>
                  <p className="text-primary font-bold">{CLINIC_CONFIG.address}</p>
                  <p className="text-slate-500 text-sm">{CLINIC_CONFIG.city}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shadow-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Telefone / WhatsApp</p>
                  <p className="text-primary font-bold">{CLINIC_CONFIG.whatsapp}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shadow-xl">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Horário de Atendimento</p>
                  <p className="text-primary font-bold">{CLINIC_CONFIG.hours}</p>
                </div>
              </div>
            </div>
            
            <a 
              href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappMsg)}`}
              className="mt-12 inline-flex items-center gap-4 bg-primary text-white px-12 py-6 rounded-full font-bold text-[10px] tracking-[0.2em] hover:bg-accent transition-all shadow-2xl"
            >
              FALAR COM UM ESPECIALISTA <ArrowRight size={14} />
            </a>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
                alt={`Clínica ${CLINIC_CONFIG.logo}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent rounded-full flex items-center justify-center text-white text-center p-6 shadow-2xl border-8 border-white">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase">Ambiente Exclusivo & Acolhedor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MapSection = () => (
  <section id="mapa" className="h-[600px] w-full relative grayscale hover:grayscale-0 transition-all duration-1000">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974758953116!2d-46.65463742456578!3d-23.561349678800165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da173f47%3A0xad52077e60e86b46!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001311-000!5e0!3m2!1spt-BR!2sbr!4v1711296540000!5m2!1spt-BR!2sbr" 
      width="100%" 
      height="100%" 
      style={{ border: 0 }} 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Localização da Clínica"
    ></iframe>
    <div className="absolute top-12 left-12 glass-card p-10 rounded-[40px] max-w-sm hidden md:block">
      <h4 className="text-2xl font-display text-primary mb-4">Visite-nos</h4>
      <p className="text-text-muted text-sm font-light leading-relaxed mb-6">
        Estamos localizados no coração de São Paulo, prontos para oferecer uma experiência odontológica sem precedentes.
      </p>
      <a 
        href="https://maps.app.goo.gl/..." 
        target="_blank" 
        className="text-accent font-bold text-[10px] tracking-widest uppercase flex items-center gap-2"
      >
        Como Chegar <ArrowRight size={14} />
      </a>
    </div>
  </section>
);

const ClinicExperience = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <SectionTitle 
        title="Nossa Estrutura" 
        subtitle="Ambientes projetados para unir tecnologia digital ao máximo conforto e biossegurança."
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
        <div className="md:col-span-2 md:row-span-2 h-[400px] md:h-full rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl relative group">
          <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Consultório Moderno" />
          <div className="absolute inset-0 bg-primary/20"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Tecnologia</p>
            <h4 className="text-2xl md:text-3xl font-display">Fluxo 100% Digital</h4>
          </div>
        </div>
        <div className="h-[250px] md:h-full rounded-[40px] overflow-hidden shadow-xl group">
          <img src="https://images.unsplash.com/photo-1593054910314-d242f3607fc8?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Equipamentos" />
        </div>
        <div className="h-[250px] md:h-full rounded-[40px] overflow-hidden shadow-xl group">
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Biossegurança" />
        </div>
        <div className="md:col-span-2 h-[300px] md:h-full rounded-[40px] md:rounded-[50px] overflow-hidden shadow-xl group relative">
          <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Sala de Espera" />
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="absolute bottom-8 right-8 text-white text-right">
            <p className="text-xl md:text-2xl font-display">Conforto & Bem-Estar</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-primary flex flex-col items-center justify-center"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-white font-display text-6xl tracking-[0.3em] mb-8"
            >
              {CLINIC_CONFIG.logo}
            </motion.div>
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-accent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustedBrands />
      <Philosophy />
      <About />
      <Services />
      <ClinicExperience />
      <Portfolio />
      <VirtualAssessment />
      <Testimonials />
      <Journey />
      <FAQ />
      <MapSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
      <EmergencyBadge />
    </div>
  );
}

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

const EmergencyBadge = () => (
  <motion.a 
    href={`https://wa.me/${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.emergencyMsg)}`}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{ scale: 1.05 }}
    className="fixed bottom-28 right-8 z-[100] bg-red-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border-2 border-white/20 group"
  >
    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Urgências</span>
  </motion.a>
);
