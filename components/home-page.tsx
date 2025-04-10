"use client"
import ParticlesBackground from '@/components/ParticlesBackground'
import useEmblaCarousel from 'embla-carousel-react';

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  Brain,
  Cpu,
  Bot,
  BarChart3,
  Instagram,
  Calendar,
  Utensils,
  Truck,
  Stethoscope,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Script from "next/script"
import particlesConfig from "./path/to/particlesjs-config.json"; // Ajuste o caminho para o JSON
import { FaWhatsapp } from 'react-icons/fa'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


export default function HomePage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [particlesLoaded, setParticlesLoaded] = useState(false)
  const images = [
    '/images/IMG-20250408-WA0019.jpg',
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => emblaApi.scrollNext();
    const interval = setInterval(autoplay, 2000); // mais rápido

    return () => clearInterval(interval);
  }, [emblaApi]);
  // Função para abrir o WhatsApp com mensagem pré-definida
  const openWhatsApp = () => {
    const phoneNumber = "5591982330102"
    window.open(`https://wa.me/${phoneNumber}`, "_blank")
  }

  // Função para abrir o Instagram
  const openInstagram = () => {
    window.open("https://www.instagram.com/agenciapontes.ia/", "_blank")
  }

  // Inicialização do tema
  useEffect(() => {
    setMounted(true)
  }, [theme])

  // Função para inicializar as partículas
  const initParticles = () => {
    try {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#000000",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: 0.3,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#000000",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      })
    } catch (error) {
      console.error("Erro ao inicializar partículas:", error)
    }
  }

  if (!mounted) return null

  return (
    
    <div className="min-h-screen text-black dark:text-white overflow-hidden relative bg-white dark:bg-black">
      {/* Script para carregar particles.js */}
      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          if (!particlesLoaded) {
            initParticles()
            setParticlesLoaded(true)
          }
        }}
      />
       <ParticlesBackground />
      {/* Navbar Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
  <div className="container mx-auto px-4 py-3 flex justify-center">
    {/* Logo centralizada */}
    <div className="relative">
      <Image
        src="/images/logo.png"
        alt="Agência Pontes"
        width={80}
        height={32}
        className="h-auto w-auto"
      />
      <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-black dark:bg-white rounded-full animate-pulse" />
    </div>
  </div>
</header>

      {/* Spacer for fixed header */}
      <div className="h-14"></div>

      {/* Hero Section - Simplificado */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center relative z-10 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white">CRIAÇÃO DE AGENTES DE IA</h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl mb-12 max-w-3xl text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Aumente seu faturamento com eficiência através de soluções inteligentes
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-md"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Button
            size="lg"
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-none py-7 relative overflow-hidden group"
            onClick={openWhatsApp}
          >
            <span className="relative z-10 flex items-center">
              <FaWhatsapp className="mr-2 h-5 w-5" />
              Fale conosco no WhatsApp
            </span>
            <AnimatePresence>
              {isHovering && (
                <motion.div
                  className="absolute inset-0 bg-green-700"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </section>

      {/* Feature Cards - Minimalistas */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Inteligência Avançada",
              description:
                "Nossos agentes utilizam os modelos de IA mais avançados para entender e responder às necessidades do seu negócio.",
              icon: <Brain className="h-8 w-8" />,
            },
            {
              title: "Automação Eficiente",
              description:
                "Automatize processos repetitivos e libere sua equipe para focar no que realmente importa para o crescimento.",
              icon: <Cpu className="h-8 w-8" />,
            },
            {
              title: "Personalização Total",
              description:
                "Cada agente é treinado especificamente para o seu negócio, aprendendo continuamente com cada interação.",
              icon: <Bot className="h-8 w-8" />,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black rounded-none p-8 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 group"
            >
              <div className="p-4 border border-black dark:border-white rounded-none text-black dark:text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:underline transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Feature - Minimalista */}
      <section className="py-20 md:py-32 relative bg-transparent text-white" >
        {/* Container para as partículas */}
        <div id="particles-js" className="absolute inset-0 z-0" ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight ">
                Tenha seu <span className="underline">funcionário de IA</span> personalizado
              </h2>
              <p className="text-lg mb-8 ">
                Nossos agentes de IA são desenvolvidos especificamente para as necessidades do seu negócio,
                automatizando tarefas e melhorando a eficiência operacional com tecnologia de ponta.
              </p>
             
            </motion.div>
            <div className="w-full flex justify-center">
        <img
          src="/images/IMG-20250408-WA0018-removebg-preview.png" // troque pelo caminho da sua imagem
          alt="Funcionário de IA"
          className="w-[280px] md:w-[360px] rounded-xl shadow-lg object-cover"
        />
      </div>
            
          </div>
        </div>
        
      </section>

      {/* Services Section - Minimalista */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="relative">
              Soluções Inteligentes
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-black dark:bg-white"></span>
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Nossos agentes de IA podem ser aplicados em diversas áreas do seu negócio
          </p>
        </motion.div>

          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Atendimento",
              description:
                "Atendimento ao cliente 24/7 com respostas rápidas e precisas. Reduza o tempo de espera e aumente a satisfação dos clientes.",
              icon: <MessageSquare className="h-10 w-10" />,
            },
            {
              title: "Vendas",
              description:
                "Aumente suas conversões com um assistente de vendas inteligente que qualifica leads e acompanha todo o processo de venda.",
              icon: <BarChart3 className="h-10 w-10" />,
            },
            {
              title: "Suporte",
              description:
                "Resolva problemas técnicos e dúvidas com eficiência. Nossos agentes aprendem com cada interação para melhorar continuamente.",
              icon: <Cpu className="h-10 w-10" />,
            },
            {
              title: "Agendamento",
              description:
                "Automatize o processo de agendamento e lembretes, eliminando conflitos de horários e reduzindo faltas.",
              icon: <Bot className="h-10 w-10" />,
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black border-t border-l border-r border-black dark:border-white group"
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 border border-black dark:border-white rounded-none text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:underline transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Casos de Uso Section */}
      <section className="py-20 md:py-32 relative bg-transparent text-white z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="relative">
                Aplicações Práticas
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-black dark:bg-white"></span>
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Veja como nossos agentes de IA podem transformar diferentes segmentos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Clínica de Estética */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border border-white bg-black text-white p-8"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 border border-white rounded-none">
                  <Calendar className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mt-3">CLÍNICA DE ESTÉTICA</h3>
              </div>
              <p className="leading-relaxed">
                Imagine ter seus agendamentos automatizados por um assistente que trabalha 24 horas por dia, 7 dias por
                semana — sempre disponível, sempre eficiente. Enquanto você descansa no fim de semana, sua agenda é
                preenchida e seus serviços são divulgados com agilidade.
              </p>
            </motion.div>

            {/* Restaurantes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="border border-white bg-black text-white p-8"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 border border-white rounded-none">
                  <Utensils className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mt-3">RESTAURANTES</h3>
              </div>
              <p className="leading-relaxed">
                E se seu cardápio pudesse conversar com o cliente? Sugerir pratos, indicar bebidas e sobremesas,
                recomendar o vinho ideal para cada refeição… Tudo isso em uma experiência humanizada e envolvente, que
                encanta e fideliza.
              </p>
            </motion.div>

            {/* Serviços de Entrega */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="border border-white bg-black text-white p-8"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 border border-white rounded-none">
                  <Truck className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mt-3">SERVIÇOS DE ENTREGA</h3>
              </div>
              <p className="leading-relaxed">
                Seja pizza, hambúrguer, churrasco ou qualquer outro pedido — tudo pode ser apresentado de forma clara,
                rápida e personalizada. Cardápio completo, tempo de entrega, promoções e preços, tudo na palma da mão,
                com uma comunicação leve e eficiente.
              </p>
            </motion.div>

            {/* Agendamento Médico */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="border border-white bg-black text-white p-8"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 border border-white rounded-none">
                  <Stethoscope className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mt-3">AGENDAMENTO MÉDICO</h3>
              </div>
              <p className="leading-relaxed">
                Atenda pacientes 24/7 com agilidade e sem complicações. O assistente automatizado respeita seus horários
                e pode gerenciar diferentes especialidades da clínica, oferecendo todas as informações que seus
                pacientes precisam, de forma organizada e acessível.
              </p>
            </motion.div>
          </div>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-3xl mx-auto border-t border-b border-gray-200 dark:border-gray-800 py-10"
          >
            <p className="text-xl font-medium mb-4">
              Tudo isso — e muito mais — com o poder da tecnologia ao seu lado.
            </p>
            <p className="leading-relaxed">
              Automatize, encante e potencialize o seu negócio com soluções criativas e eficientes.
            </p>
          </motion.div>
        </div>
      </section>
      

      {/* WhatsApp CTA Section - Minimalista */}
      <section className="py-20 md:py-32 relative bg-transparent text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para o futuro da automação inteligente?</h2>
              <p className="text-xl mb-10 opacity-90">
                Entre em contato pelo WhatsApp e descubra como nossos agentes de IA podem transformar seu negócio.
              </p>

              <div className="border border-white dark:border-black p-8">
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-8 rounded-none"
                  onClick={openWhatsApp}
                >
                  <FaWhatsapp className="mr-2 !h-6 !w-6" />
                  <span className="hidden sm:inline">Falar com um consultor no WhatsApp</span>
                  <span className="sm:hidden">Fale conosco</span>
                </Button>

                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Minimalista */}
      <footer className="bg-white dark:bg-black py-12 relative z-10 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Image src="/images/logo.png" alt="Agência Pontes" width={180} height={70} className="h-auto w-auto" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-black dark:bg-white rounded-full animate-pulse" />
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="https://www.instagram.com/agenciapontes.ia/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-black dark:border-white rounded-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>

            <a
              href="https://wa.me/5591982330102" // troque pelo número real com DDD e sem espaços
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300 rounded-none"
            >
              <FaWhatsapp className="h-5 w-5" />
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Agência Pontes. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating Social Media Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        <motion.a
          href="https://www.instagram.com/agenciapontes.ia/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300"
        >
          <Instagram className="h-6 w-6" />
        </motion.a>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-600 hover:bg-green-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
          onClick={openWhatsApp}
        >
          <FaWhatsapp className="h-6 w-6" />
        </motion.button>
      </div>
    </div>
  )
}

