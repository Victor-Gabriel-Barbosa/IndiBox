'use client';

import Link from 'next/link';
import { Header, Footer, Icons, DotLottieReact } from '@/components';

export default function Sobre() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Seção Hero - Sobre o IndiBox */}
      <section className="py-10 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sobre o <span className="text-indigo-600"> IndiBox</span>
          </h1>
          <p className="text-xl mb-4 max-w-4xl mx-auto text-gray-600 dark:text-gray-400">
            Uma plataforma criada com paixão para conectar desenvolvedores independentes com jogadores que buscam experiências únicas e inovadoras, totalmente gratuitas.
          </p>
          <DotLottieReact src={"/assets/game-asset.lottie"} loop autoplay style={{ margin: '0 auto', maxWidth: '900px', width: '100%', height: 'auto' }} />
        </div>
      </section>

      {/* Seção Nossa Missão */}
      <section className="py-16 px-4 mx-4 rounded-2xl bg-indigo-600 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Missão</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Democratizar o acesso a jogos indie de qualidade e dar visibilidade aos desenvolvedores independentes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-300">Para Jogadores</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Icons.BsCheckCircleFill className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Descoberta Facilitada</h4>
                    <p className="text-foreground/70">Encontre facilmente jogos indie únicos e criativos em um só lugar.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Icons.BsCheckCircleFill className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">100% Gratuito</h4>
                    <p className="text-foreground/70">Todos os jogos são completamente gratuitos, sem pegadinhas ou taxas ocultas.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Icons.BsCheckCircleFill className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Comunidade Ativa</h4>
                    <p className="text-foreground/70">Conecte-se com outros jogadores e desenvolvedores apaixonados.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Para Desenvolvedores</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Icons.BsCheckCircleFill className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Visibilidade Garantida</h4>
                    <p className="text-foreground/70">Tenha seu jogo descoberto por uma audiência engajada e interessada.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Icons.BsCheckCircleFill className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Plataforma Gratuita</h4>
                    <p className="text-foreground/70">Publique seus jogos sem custos, taxas ou comissões.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Icons.BsCheckCircleFill className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Feedback Direto</h4>
                    <p className="text-foreground/70">Receba avaliações e comentários valiosos da comunidade.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Valores */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-lg mb-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Os princípios que guiam nossa plataforma e nossa comunidade.
            </p>
          </div>

          <DotLottieReact src="/assets/criative.lottie" loop autoplay style={{ margin: '0 auto', maxWidth: '500px', width: '100%', height: 'auto' }} />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 text-white">
            <div className="group relative bg-indigo-600 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100 dark:border-indigo-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-indigo-800/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Icons.BsHeart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-300">
                  Paixão
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Acreditamos na paixão como motor da criatividade. Cada jogo indie carrega a alma de seu criador.
                </p>
              </div>
            </div>

            <div className="group relative bg-indigo-600 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100 dark:border-indigo-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent dark:from-green-800/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Icons.BsUnlockFill className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors duration-300">
                  Acessibilidade
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Jogos devem ser acessíveis a todos. Por isso, mantemos nossa plataforma 100% gratuita.
                </p>
              </div>
            </div>

            <div className="group relative bg-indigo-600 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100 dark:border-indigo-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent dark:from-purple-800/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Icons.BsLightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                  Inovação
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Celebramos a experimentação e a ousadia que tornam os jogos indie únicos e especiais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção História */}
      <section className="py-16 px-4 mx-4 rounded-2xl bg-indigo-600">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nossa História</h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              O IndiBox nasceu da necessidade de criar um espaço dedicado exclusivamente aos jogos indie gratuitos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">O Problema</h3>
              <p className="text-indigo-100 mb-4 leading-relaxed">
                Desenvolvedores indie enfrentam dificuldades para dar visibilidade aos seus jogos gratuitos em meio às grandes plataformas dominadas por títulos comerciais.
              </p>
              <p className="text-indigo-100 mb-6 leading-relaxed">
                Jogadores, por sua vez, têm dificuldade em descobrir essas pequenas joias escondidas entre milhares de outros títulos.
              </p>
              
              <h3 className="text-2xl font-bold mb-6">Nossa Solução</h3>
              <p className="text-indigo-100 leading-relaxed">
                Criamos uma plataforma focada exclusivamente em jogos indie gratuitos, onde desenvolvedores podem compartilhar suas criações e jogadores podem descobrir experiências únicas e inovadoras.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-indigo-200">Gratuito</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">∞</div>
                  <div className="text-indigo-200">Possibilidades</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">🎮</div>
                  <div className="text-indigo-200">Diversão</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">❤️</div>
                  <div className="text-indigo-200">Comunidade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Tecnologia */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologia</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Construído com as melhores tecnologias modernas para oferecer a melhor experiência.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-white">
            <div className="text-center p-6 bg-indigo-600 rounded-xl shadow-lg border border-indigo-100 dark:border-indigo-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Icons.TbBrandNextjs className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Next.js</h3>
              <p className="text-sm">Framework React para aplicações web modernas</p>
            </div>
            
            <div className="text-center p-6 bg-indigo-600 rounded-xl shadow-lg border border-indigo-100 dark:border-indigo-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <Icons.SiSupabase className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Supabase</h3>
              <p className="text-sm">Backend como serviço com banco PostgreSQL</p>
            </div>
            
            <div className="text-center p-6 bg-indigo-600 rounded-xl shadow-lg border border-indigo-100 dark:border-indigo-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center">
                <Icons.SiTailwindcss className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="font-bold mb-2">Tailwind CSS</h3>
              <p className="text-sm">Framework CSS utilitário para design responsivo</p>
            </div>
            
            <div className="text-center p-6 bg-indigo-600 rounded-xl shadow-lg border border-indigo-100 dark:border-indigo-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Icons.SiTypescript className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">TypeScript</h3>
              <p className="text-sm">JavaScript tipado para maior segurança</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça Parte da
            <span className="text-indigo-600"> Revolução Indie</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Seja você um desenvolvedor que quer compartilhar sua criação ou um jogador em busca de experiências únicas, o IndiBox é o lugar para você.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/jogos" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors inline-flex items-center space-x-2">
              <Icons.BsController className="w-5 h-5" />
              <span>Explorar Jogos</span>
            </Link>
            <Link href="/devs" className="text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors inline-flex items-center space-x-2">
              <Icons.BsCodeSlash className="w-5 h-5" />
              <span>Área do Desenvolvedor</span>
            </Link>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-foreground/60 mb-4">Siga-nos nas redes sociais</p>
            <div className="flex justify-center space-x-6">
              <Link href="https://github.com/Victor-Gabriel-Barbosa/indibox" target="_blank" className="text-foreground/60 hover:text-indigo-600 transition-colors">
                <Icons.BsGithub className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-indigo-600 transition-colors">
                <Icons.BsTwitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-indigo-600 transition-colors">
                <Icons.BsDiscord className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
