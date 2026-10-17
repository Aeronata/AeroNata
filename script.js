const aesthetics = [
{id:"frutiger-aero",name:"Frutiger Aero",cover:"assets/frutiger-aero/category.jpg",banner:"assets/frutiger-aero/banner.jpg",gallery:["assets/frutiger-aero/example1.jpg","assets/frutiger-aero/example2.jpg"],theme:"assets/frutiger-aero/theme.mp3",category:"Natureza",tags:["Digital","Natureza","Nostalgia"],period:"2004–2013",colors:["#21c6d5","#a8ffda"],bg:"linear-gradient(145deg,#7be8f3,#d9fff2 50%,#159dc5)",summary:"O futuro otimista onde tecnologia, água, céu e natureza convivem em harmonia.",origin:"O termo passou a ser usado retrospectivamente por comunidades online para nomear uma linguagem visual muito presente em interfaces, publicidade e tecnologia dos anos 2000.",features:["Água, bolhas, céu azul e vegetação","Vidro translúcido, brilho e superfícies 3D","Gradientes vivos e sensação de limpeza"],culture:"Apareceu em interfaces de sistemas operacionais, embalagens, eletrônicos, campanhas ambientais e publicidade de tecnologia.",evolution:"Após a popularização de interfaces mais planas e minimalistas, o visual ganhou uma segunda vida online como objeto de nostalgia e crítica cultural.",curiosity:"O nome combina referências ao design tipográfico associado a Adrian Frutiger e à direção visual da época — não é o nome de um movimento formal criado nos anos 2000."},
{id:"frutiger-metro",name:"Frutiger Metro",cover:"assets/frutiger-metro/category.jpg",banner:"assets/frutiger-metro/banner1.jpg",gallery:["assets/frutiger-metro/example1.jpg","assets/frutiger-metro/example2.jpg","assets/frutiger-metro/example3.jpg"],theme:"assets/frutiger-metro/theme1.mp3",category:"Digital",tags:["Digital","Nostalgia"],period:"2000s–presente",colors:["#ff6db6","#35d7e8"],bg:"linear-gradient(135deg,#ff6db6,#ffe94f 42%,#35d7e8 72%,#5d68ff)",summary:"Design gráfico urbano e digital dos anos 2000: movimento, cores vivas, vetores e energia metropolitana.",origin:"Frutiger Metro reúne uma linguagem gráfica colorida associada ao design digital e urbano dos anos 2000, com composições vetoriais, formas curvas e sensação de movimento.",features:["Cores vivas e contrastes fortes","Vetores, curvas, silhuetas e grafismos","Composições cheias de movimento e energia"],culture:"A linguagem aparece em publicidade, capas, interfaces, embalagens e peças gráficas ligadas à cultura jovem e tecnológica dos anos 2000.",evolution:"Hoje reaparece como uma estética nostálgica, reinterpretada em edições, interfaces e arquivos visuais da internet.",curiosity:"No AeroNata, Frutiger Metro estreia o sistema de duas variantes: o controle ☀️/🌙 troca simultaneamente o banner e a música."},
{id:"y2k",name:"Y2K",category:"Nostalgia",tags:["Digital","Nostalgia"],period:"1997–2004",colors:["#ff83cf","#72e8ff"],bg:"linear-gradient(135deg,#fb91d6,#b4eaff 55%,#8c7bff)",summary:"Futurismo pop da virada do milênio, com cromados, plástico colorido e formas arredondadas.",origin:"Y2K nasceu do imaginário em torno da virada para o ano 2000, misturando tecnologia doméstica, moda, música pop e design digital.",features:["Cromado e superfícies metálicas","Tipografia arredondada e formas infladas","Prata, azul, rosa e cores iridescentes"],culture:"Presente em capas de álbuns, videoclipes, celulares, consoles, revistas e moda pop.",evolution:"O estilo voltou com força nas redes sociais e na moda, reinterpretado com referências dos primeiros computadores e da cultura pop.",curiosity:"O termo também pode se referir ao bug do milênio, mas no design descreve uma linguagem visual."},
{id:"vaporwave",name:"Vaporwave",cover:"assets/vaporwave/category.jpg",banner:"assets/vaporwave/banner.jpg",gallery:["assets/vaporwave/example1.jpg","assets/vaporwave/example2.jpg"],theme:"assets/vaporwave/theme.mp3",category:"Digital",tags:["Digital","Nostalgia"],period:"2010–presente",colors:["#ff72c6","#7e73ff"],bg:"linear-gradient(135deg,#2b174e,#e55eae 55%,#55cde5)",summary:"Ruínas digitais, nostalgia comercial e surrealismo com cores neon e referências retrô.",origin:"Surgiu online no início da década de 2010, em torno de música experimental que desacelerava e distorcia sons associados ao consumo.",features:["Rosa, roxo, ciano e gradientes neon","Estátuas clássicas, palmeiras e grades 3D","Glitches, texto japonês e imagens de arquivo"],culture:"Conecta música, capas, memes, crítica ao consumismo e imagens de publicidade dos anos 1980 e 1990.",evolution:"Ramificou-se em estilos como mallsoft, future funk e interpretações visuais que vão da sátira à nostalgia.",curiosity:"A estética pode ser irônica, melancólica, crítica ou simplesmente fascinada por imagens antigas."},
{id:"dark-aero",name:"Dark Aero",cover:"assets/dark-aero/category.jpg",banner:"assets/dark-aero/banner.jpg",gallery:["assets/dark-aero/example1.jpg","assets/dark-aero/example2.jpg"],theme:"assets/dark-aero/theme.mp3",category:"Digital",tags:["Digital","Sombria","Nostalgia"],period:"2000s–presente",colors:["#0a2238","#66d9ff"],bg:"linear-gradient(135deg,#05080d,#15334c 55%,#5ac7e8)",summary:"A família Aero em uma direção noturna, profunda e tecnológica.",origin:"Uma estética digital associada à linguagem Aero reinterpretada com atmosferas escuras e superfícies brilhantes.",features:["Vidro escuro e reflexos","Azuis profundos e luz fria","Tecnologia com atmosfera noturna"],culture:"Circula principalmente em comunidades de estética e nostalgia digital.",evolution:"Reinterpreta códigos visuais Aero em composições mais escuras e atmosféricas.",curiosity:"No AeroNata, esta categoria usa as referências visuais selecionadas para esta versão 0.3."},
{id:"evil-aero",name:"Evil Aero",cover:"assets/evil-aero/category.jpg",banner:"assets/evil-aero/banner.jpg",gallery:["assets/evil-aero/example1.jpg","assets/evil-aero/example2.jpg"],theme:"assets/evil-aero/theme.mp3",category:"Sombria",tags:["Digital","Sombria"],period:"Contemporâneo",colors:["#14131c","#b7a9d9"],bg:"linear-gradient(135deg,#07070a,#24202d 55%,#716580)",summary:"Uma vertente Aero mais inquietante, artificial e sombria.",origin:"Categoria de nicho organizada aqui a partir das referências visuais escolhidas para o projeto.",features:["Atmosfera inquietante","Superfícies digitais e brilho","Contraste entre familiaridade e estranheza"],culture:"Aparece em coleções e comunidades online dedicadas a microestéticas digitais.",evolution:"Seu significado varia entre comunidades e continua sendo reinterpretado.",curiosity:"Esta prévia segue deliberadamente as imagens fornecidas para evitar confundir Evil Aero com Horror Aero."},
{id:"2000s-tech",name:"2000s Tech",cover:"assets/2000s-tech/category.jpg",banner:"assets/2000s-tech/banner.jpg",gallery:["assets/2000s-tech/example1.jpg","assets/2000s-tech/example2.jpg"],theme:"assets/2000s-tech/theme.mp3",category:"Nostalgia",tags:["Digital","Nostalgia"],period:"2000s",colors:["#dcecff","#5f8dff"],bg:"linear-gradient(135deg,#eaf5ff,#9bbcff 55%,#5266b5)",summary:"Tecnologia Y2K inspirada na linguagem das propagandas japonesas dos anos 2000.",origin:"No AeroNata, a categoria reúne referências de publicidade tecnológica, eletrônicos e design gráfico japonês da era Y2K.",features:["Tipografia japonesa e composição publicitária","Eletrônicos como protagonistas","Azul, branco, prata, brilho e CG"],culture:"Evoca anúncios de celulares, eletrônicos e campanhas tecnológicas japonesas dos anos 2000.",evolution:"Hoje reaparece como referência nostálgica para design, edição e cultura visual online.",curiosity:"Ela fica separada do Y2K geral para destacar especificamente a estética de publicidade e tecnologia."},
{id:"cyberpunk",name:"Cyberpunk",category:"Digital",tags:["Digital","Sombria"],period:"1980–presente",colors:["#ff397a","#38e9ff"],bg:"linear-gradient(135deg,#130d31,#e32d75 50%,#12b7c9)",summary:"Alta tecnologia, cidades densas, luzes artificiais e futuros marcados por desigualdade.",origin:"O cyberpunk surgiu na ficção científica, especialmente na literatura dos anos 1980, e se espalhou para cinema, jogos e design.",features:["Neons em ambientes escuros","Interfaces técnicas e tipografia condensada","Megacidades, chuva, metal e hologramas"],culture:"Filmes, literatura, anime e videogames popularizaram cidades futuristas e tecnologia invasiva.",evolution:"Hoje aparece em interfaces de jogos, música, moda e debates sobre vigilância e poder corporativo.",curiosity:"A ideia central costuma ser o contraste entre tecnologia avançada e condições sociais difíceis."},
{id:"dreamcore",name:"Dreamcore",category:"Sombria",tags:["Digital","Sombria"],period:"2010–presente",colors:["#a7a4ff","#f3c5ff"],bg:"linear-gradient(135deg,#777bc7,#d5c6ff 50%,#6f9fce)",summary:"Imagens oníricas, espaços familiares estranhos e a sensação de estar dentro de um sonho.",origin:"Desenvolveu-se em comunidades online que exploram imagens surreais, memórias vagas e cenários familiares sem serem reconhecíveis.",features:["Desfoque suave e cores irreais","Corredores, campos e quartos vazios","Texto curto, símbolos e perspectiva estranha"],culture:"Dialoga com fotografia experimental, vídeos curtos, jogos atmosféricos e imagens encontradas.",evolution:"Cruza-se com liminal spaces, weirdcore e nostalgia de infância.",curiosity:"A sensação de sonho e memória é uma parte importante do efeito dreamcore."},
{id:"weirdcore",name:"Weirdcore",category:"Sombria",tags:["Digital","Sombria"],period:"2010–presente",colors:["#c9ff48","#ff4fce"],bg:"linear-gradient(135deg,#19182d,#a3bd37 55%,#ef63d1)",summary:"Colagens digitais inquietantes que parecem familiares, mas não fazem sentido por completo.",origin:"Cresceu em comunidades de imagem e vídeo na internet, combinando edição crua, imagens encontradas e humor surreal.",features:["Texto estranho ou desconexo","Imagens pixeladas, distorcidas ou granuladas","Cores ácidas e composições inesperadas"],culture:"É associado a memes, vídeos experimentais, imagens de baixa resolução e experiências digitais desconfortáveis.",evolution:"Continua mudando conforme ferramentas e comunidades remixam seus códigos visuais.",curiosity:"A aparência aparentemente amadora pode ser intencional."},
{id:"cottagecore",name:"Cottagecore",category:"Natureza",tags:["Natureza"],period:"2010–presente",colors:["#b8d7a0","#f2d4a9"],bg:"linear-gradient(135deg,#426a52,#b8d7a0 55%,#f4d9aa)",summary:"Uma fantasia acolhedora de vida rural, jardins, artesanato e contato com a natureza.",origin:"Ganhou visibilidade em plataformas sociais na década de 2010 e se fortaleceu com o interesse por atividades domésticas e natureza.",features:["Flores silvestres e tons terrosos","Tecidos naturais, cerâmica e madeira","Jardins, livros, pão e casas rurais"],culture:"Aparece em moda, decoração, fotografia, artesanato, jogos e comunidades de jardinagem.",evolution:"Algumas versões enfatizam fantasia romântica; outras valorizam habilidades práticas e sustentabilidade.",curiosity:"É uma idealização estética da vida rural, não necessariamente um retrato realista do trabalho no campo."},
{id:"gothic",name:"Gothic",category:"Sombria",tags:["Sombria"],period:"Séculos XVIII–presente",colors:["#c8a3ff","#8a243d"],bg:"linear-gradient(135deg,#080811,#48203e 60%,#9c7bb7)",summary:"Romantismo sombrio, arquitetura dramática, mistério e beleza melancólica.",origin:"A tradição gótica começou na literatura do século XVIII e influenciou arquitetura, moda, música, cinema e subculturas.",features:["Preto, vinho, roxo e prata","Renda, veludo, pedra e ornamentos","Contraste, sombras e silhuetas dramáticas"],culture:"Inclui literatura gótica, arquitetura, cinema de horror e cenas musicais e de moda.",evolution:"As expressões modernas variam do gótico vitoriano ao goth de clubes e estilos alternativos.",curiosity:"Gothic é um conjunto amplo de referências históricas e subculturas, não um visual único."},
{id:"grunge",name:"Grunge",category:"Nostalgia",tags:["Nostalgia","Sombria"],period:"1980–1990",colors:["#c2ad7b","#6c8b78"],bg:"linear-gradient(135deg,#25282a,#77765d 55%,#a28b69)",summary:"Texturas gastas, atitude anti-polida e mistura de referências alternativas.",origin:"O grunge se desenvolveu em cenas musicais do noroeste dos Estados Unidos e ganhou alcance global no início dos anos 1990.",features:["Flanela, jeans desgastado e camadas","Tons apagados e fotografias granuladas","Colagens, xerox e tipografia irregular"],culture:"Música alternativa, revistas independentes, fotografia analógica e moda deram forma ao visual.",evolution:"O termo passou a descrever estilos online nostálgicos e outras interpretações visuais.",curiosity:"Parte do apelo original vinha da rejeição à aparência polida."},
{id:"old-web",name:"Old Web",category:"Nostalgia",tags:["Digital","Nostalgia"],period:"1990–2000s",colors:["#72ffe5","#ff71c8"],bg:"linear-gradient(135deg,#19123b,#5540a5 55%,#e34eb4)",summary:"Páginas pessoais, GIFs, pixels e uma internet feita de descobertas e experimentação.",origin:"Refere-se a linguagens visuais e práticas comuns na web dos anos 1990 e 2000, antes das plataformas centralizadas dominarem a experiência.",features:["Fundos estampados e cores fortes","GIFs animados, botões e contadores","Layouts simples, links e páginas pessoais"],culture:"GeoCities, blogs, fóruns, guestbooks, páginas de fãs e sites experimentais fazem parte dessa memória.",evolution:"Inspira projetos artísticos, comunidades independentes e experiências que valorizam a web pessoal.",curiosity:"A internet antiga não tinha um único visual: reunia desde páginas simples até portais ornamentados."},
{id:"frutiger-metro",name:"Frutiger Metro",category:"Digital",tags:["Digital","Nostalgia"],period:"2000–2010s",colors:["#a5e8ff","#f8e75e"],bg:"linear-gradient(135deg,#1c8cc7,#d5f8ff 55%,#e8d957)",summary:"Design gráfico vibrante, silhuetas, reflexos e energia de interfaces e publicidade da época.",origin:"O rótulo é usado em comunidades de estética para agrupar visuais digitais e publicitários que misturam formas limpas com cores e efeitos expressivos.",features:["Silhuetas e formas geométricas","Reflexos, brilhos e gradientes","Cores vivas e sensação de movimento"],culture:"É associado a identidades de mídia, publicidade, interfaces e gráficos da cultura digital dos anos 2000.",evolution:"Hoje aparece em moodboards nostálgicos e reinterpretado em capas e identidades digitais.",curiosity:"A categoria é menos padronizada do que nomes como Bauhaus ou Swiss Style."},
{id:"fairycore",name:"Fairycore",category:"Natureza",tags:["Natureza"],period:"2010–presente",colors:["#e7b5f5","#8de2b0"],bg:"linear-gradient(135deg,#4f8b72,#c6e9b5 55%,#e9c1f5)",summary:"Fantasia delicada com fadas, florestas mágicas, brilho e detalhes naturais.",origin:"Ganhou forma em comunidades online que combinam folclore, moda fantástica e imagens de natureza encantada.",features:["Asas, cogumelos, flores e musgo","Luzes suaves, brilho e tons pastel","Rendas, transparências e acessórios naturais"],culture:"Aparece em fotografia, moda, ilustração, artesanato, jogos e universos de fantasia.",evolution:"Pode ser romântico e pastel ou mais sombrio, próximo de florestas misteriosas e contos folclóricos.",curiosity:"Fairycore é uma estética contemporânea inspirada em temas antigos de folclore e fantasia."},
{id:"liminal-spaces",name:"Liminal Spaces",category:"Sombria",tags:["Digital","Sombria","Nostalgia"],period:"2010–presente",colors:["#d3d2ad","#8aa4b8"],bg:"linear-gradient(135deg,#303b4a,#b6b69a 55%,#e3d7bb)",summary:"Lugares de passagem vazios que evocam estranheza, silêncio e memória.",origin:"O conceito de liminaridade vem das ciências sociais; comunidades online o adotaram para imagens de espaços de transição vazios ou sem contexto.",features:["Corredores, salas e estacionamentos vazios","Luz fluorescente e perspectiva central","Baixa resolução, silêncio e sensação de abandono"],culture:"A estética influencia fotografia, vídeos de horror, jogos independentes e comunidades de imagens encontradas.",evolution:"Cruza-se com nostalgia, dreamcore e horror analógico.",curiosity:"Um espaço liminar não precisa ser assustador: pode parecer tranquilo, nostálgico ou desconcertante."}
,{id:"dorfic",name:"Dorfic",cover:"assets/dorfic/category.jpg",banner:"assets/dorfic/banner.png",gallery:["assets/dorfic/example1.jpg","assets/dorfic/example2.jpg","assets/dorfic/example3.jpg","assets/dorfic/example4.jpg"],theme:"assets/dorfic/theme.mp3",category:"Digital",tags:["Digital","Nostalgia"],period:"2000s–presente",colors:["#f28a21","#ffd27a"],bg:"linear-gradient(135deg,#f07b16,#ffbd55 55%,#fff0c4)",summary:"Uma estética Frutiger quente e tecnológica, marcada por laranjas brilhantes, formas fluidas e otimismo digital.",origin:"Dorfic circula em comunidades de microestéticas ligadas ao universo Frutiger e à nostalgia tecnológica dos anos 2000.",features:["Laranja, âmbar, creme e branco","Brilho, gradientes e formas curvas","Tecnologia otimista com energia quente"],culture:"É associado à nostalgia de interfaces, publicidade e design tecnológico dos anos 2000.",evolution:"No AeroNata, Dorfic ganha uma interface própria inspirada em janelas e controles de sistemas antigos.",curiosity:"Nesta versão, o Dorfic é o tema que mais altera a linguagem dos controles do AeroNata."},
{id:"frutiger-aqua",name:"Frutiger Aqua",cover:"assets/frutiger-aqua/category.jpg",banner:"assets/frutiger-aqua/banner.jpg",gallery:["assets/frutiger-aqua/frutiger-aqua-exemplo1.jpg","assets/frutiger-aqua/frutiger-aqua-exemplo2.jpg","assets/frutiger-aqua/frutiger-aqua-exemplo3.jpg"],theme:"assets/frutiger-aqua/theme.mp3",category:"Natureza",tags:["Digital","Natureza","Nostalgia"],period:"2000s–presente",colors:["#72dff2","#248fb9"],bg:"linear-gradient(135deg,#c7f8ff,#68dced 55%,#258fb8)",summary:"A vertente aquática da família Frutiger: água cristalina, azul luminoso, bolhas e transparência.",origin:"Frutiger Aqua reúne referências aquáticas da linguagem visual Frutiger e da nostalgia digital dos anos 2000.",features:["Azul claro e azul médio","Água, bolhas e transparências","Superfícies glossy e sensação de frescor"],culture:"Aparece em moodboards e arquivos de nostalgia visual ligados ao imaginário tecnológico e aquático dos anos 2000.",evolution:"No AeroNata, Aqua funciona como uma expansão da linha Frutiger e possui Desert como variante quente pelo controle ☀️/🌙.",curiosity:"Aqua e Desert formam um par de contraste: água e frescor contra areia e calor."},
{id:"frutiger-eco",name:"Frutiger Eco",cover:"assets/frutiger-eco/category.jpg",banner:"assets/frutiger-eco/banner.jpg",gallery:["assets/frutiger-eco/frutiger-eco-exemplo1.jpg","assets/frutiger-eco/frutiger-eco-exemplo2.jpg"],theme:"assets/frutiger-eco/theme.mp3",category:"Natureza",tags:["Digital","Natureza","Nostalgia"],period:"2000s–presente",colors:["#a8ed7e","#4aa85e"],bg:"linear-gradient(135deg,#eaffd9,#9ce77a 55%,#4da761)",summary:"A face ecológica do universo Frutiger, com verdes claros, natureza limpa e tecnologia em harmonia com o ambiente.",origin:"Frutiger Eco enfatiza os códigos ambientais e naturais presentes na linguagem visual Frutiger.",features:["Verde claro e verde médio","Folhas, paisagens e sensação de ar limpo","Vidro, brilho e tecnologia amigável"],culture:"Dialoga com publicidade ambiental e imaginários de tecnologia sustentável comuns nos anos 2000.",evolution:"Hoje é recuperado em comunidades de nostalgia e microestéticas como uma visão otimista de natureza e tecnologia.",curiosity:"É uma das variantes mais próximas do lado ecológico já presente no Frutiger Aero clássico."},
{id:"frutiger-glacier",name:"Frutiger Glacier",cover:"assets/frutiger-glacier/category.jpg",banner:"assets/frutiger-glacier/banner.png",gallery:["assets/frutiger-glacier/frutiger-glacier-exemplo1.jpg","assets/frutiger-glacier/frutiger-glacier-exemplo2.jpg","assets/frutiger-glacier/frutiger-glacier-exemplo3.jpg"],theme:"assets/frutiger-glacier/theme.mp3",category:"Natureza",tags:["Digital","Natureza","Nostalgia"],period:"2000s–presente",colors:["#d8eef2","#7ea7b5"],bg:"linear-gradient(135deg,#f5fbfc,#c5e3e9 55%,#789ca9)",summary:"Uma interpretação gelada da família Frutiger, feita de cinza azulado, azul claro, gelo e superfícies cristalinas.",origin:"Frutiger Glacier organiza referências frias e glaciais dentro do universo visual Frutiger.",features:["Cinza azulado, branco e azul claro","Gelo, cristal e reflexos frios","Atmosfera limpa, silenciosa e tecnológica"],culture:"Circula em coleções de microestéticas e nostalgia digital ligadas à família Frutiger.",evolution:"Reinterpreta o brilho e a transparência do Aero em uma direção fria e mineral.",curiosity:"Sua paleta troca o verde otimista do Aero por uma sensação de gelo, vidro e luz difusa."}

,{id:"frutiger-zen",name:"Frutiger Zen",cover:"assets/frutiger-zen/category.jpg",banner:"assets/frutiger-zen/banner.jpg",gallery:["assets/frutiger-zen/example1.gif","assets/frutiger-zen/example2.jpg"],theme:"assets/frutiger-zen/theme.mp3",category:"Natureza",tags:["Natureza","Nostalgia"],period:"2000s–presente",colors:["#91c79a","#e9e0bd"],bg:"linear-gradient(135deg,#dcebd0,#9fc5a5 55%,#6f8f78)",summary:"O lado contemplativo da família Frutiger: natureza serena, água calma e uma nostalgia silenciosa.",origin:"Frutiger Zen reúne referências tranquilas associadas ao universo Frutiger, aproximando natureza, equilíbrio e design digital nostálgico.",features:["Verdes suaves, creme e azul de água","Pedras, jardins, bambu e paisagens serenas","Composições limpas com brilho discreto"],culture:"Circula em coleções contemporâneas de microestéticas e nostalgia visual como uma leitura mais calma do imaginário Frutiger.",evolution:"Transforma o otimismo tecnológico do Aero em uma experiência mais contemplativa e natural.",curiosity:"No AeroNata, Zen foi pensado para transmitir silêncio e conforto sem se confundir com o foco ecológico do Frutiger Eco.",new:true},
{id:"hawaii-2000s",name:"Hawaii 2000s",cover:"assets/hawaii-2000s/category.jpg",banner:"assets/hawaii-2000s/banner.png",gallery:["assets/hawaii-2000s/example1.jpg","assets/hawaii-2000s/example2.jpg","assets/hawaii-2000s/example3.gif","assets/hawaii-2000s/example4.jpg"],theme:"assets/hawaii-2000s/theme.mp3",category:"Nostalgia",tags:["Nostalgia","Natureza"],period:"2000s",colors:["#33c8d5","#ff8a73"],bg:"linear-gradient(135deg,#34c9d7,#f5d96a 52%,#ff806c)",summary:"Férias tropicais dos anos 2000: praia, hibiscos, fotografia digital e verão que parece não acabar.",origin:"Hawaii 2000s organiza o imaginário tropical popular em publicidade, moda, turismo e cultura jovem dos anos 2000.",features:["Azul-turquesa, coral e amarelo solar","Palmeiras, hibiscos, praia e elementos tiki","Fotografia digital e sensação de férias"],culture:"Evoca estampas tropicais, resorts, videoclipes, revistas, souvenirs e a fantasia de verão dos anos 2000.",evolution:"Hoje reaparece como nostalgia de uma visão tropical colorida e despreocupada da década.",curiosity:"Mais do que representar o Havaí real, a estética registra o imaginário pop tropical que circulou intensamente nos anos 2000.",new:true},
{id:"brazil-2000s",name:"Brazil 2000s Nostalgia",cover:"assets/brazil-2000s/category.jpg",banner:"assets/brazil-2000s/banner.jpg",gallery:["assets/brazil-2000s/example1.jpg","assets/brazil-2000s/example2.jpg","assets/brazil-2000s/example3.jpg","assets/brazil-2000s/example4.jpg"],theme:"assets/brazil-2000s/theme.mp3",category:"Nostalgia",tags:["Nostalgia","Digital"],period:"2000–2009",colors:["#f2c84b","#48a86a"],bg:"linear-gradient(135deg,#f2c84b,#62b97c 55%,#4c83c3)",summary:"Memórias do Brasil dos anos 2000: TV, lan house, rua, câmera digital e a beleza das coisas que pareciam comuns.",origin:"Uma coleção afetiva de referências do cotidiano brasileiro dos anos 2000, atravessando tecnologia doméstica, mídia, espaços urbanos e cultura popular.",features:["TV de tubo, lan house e internet doméstica","Fotografia digital, ruas e objetos cotidianos","Cores e texturas de mídia e consumo da década"],culture:"Conecta lembranças de escola, televisão, Orkut/MSN, locadoras, revistas, celulares, comércio e vida de bairro.",evolution:"Na internet atual, essas memórias reaparecem em arquivos, vídeos, fotografias e comunidades dedicadas à nostalgia brasileira.",curiosity:"O modo 🌙 transforma a experiência em Brazil Night 2000s: a mesma memória vista pela madrugada, pelos postes e pelas telas acesas.",new:true}

];

const $ = (selector, root = document) => root.querySelector(selector);
const grid = $("#aestheticGrid");
const search = $("#searchInput");
const filters = $("#filters");
const detailDialog = $("#detailDialog");
const experienceDialog = $("#experienceDialog");
let activeFilter = "Todas";
let showAll = false;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function renderCards() {
  const query = search.value.trim().toLocaleLowerCase("pt-BR");
  let items = aesthetics.filter(item => {
    const matchesFilter = activeFilter === "Todas" || item.tags.includes(activeFilter);
    const searchable = `${item.name} ${item.summary} ${item.category} ${item.tags.join(" ")} ${item.origin}`.toLocaleLowerCase("pt-BR");
    return matchesFilter && (!query || searchable.includes(query));
  });
  const totalFiltered = items.length;
  if (!showAll && !query && activeFilter === "Todas") items = items.slice(0, 8);

  grid.innerHTML = items.map(item => {
    const index = aesthetics.indexOf(item) + 1;
    return `<article class="aesthetic-card" tabindex="0" role="button" aria-label="Abrir ${escapeHtml(item.name)}" data-id="${item.id}">
      <div class="aesthetic-art" style="--artbg:${item.bg};--art1:${item.colors[0]};--art2:${item.colors[1]};${item.cover ? `background-image:linear-gradient(180deg,transparent 45%,rgba(0,0,0,.58)),url(${item.cover});background-size:cover;background-position:center;` : ``}">
        <span class="art-word">${escapeHtml(item.name)}</span>${item.new ? `<span class="new-badge">NEW</span>` : ``}<span class="art-tag">AERONATA ARCHIVE / ${String(index).padStart(3, "0")}</span>
      </div>
      <div class="card-content"><div class="card-topline"><span class="category-tag">${escapeHtml(item.category)}</span><span class="card-arrow" aria-hidden="true">↗</span></div>
        <h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.summary)}</p>
        <div class="card-bottom"><span>${escapeHtml(item.period)}</span><span>EXPLORAR +</span></div>
      </div></article>`;
  }).join("");

  $("#emptyState").hidden = totalFiltered > 0;
  $("#countNumber").textContent = aesthetics.length;
  $("#resultsLabel").textContent = query || activeFilter !== "Todas"
    ? `Encontradas ${totalFiltered} ${totalFiltered === 1 ? "estética" : "estéticas"}`
    : `Mostrando ${items.length} de ${aesthetics.length} estéticas`;
  $("#showAll").hidden = Boolean(query) || activeFilter !== "Todas";
  $("#showAll").innerHTML = showAll ? 'Mostrar menos <span>↑</span>' : 'Ver todas as estéticas <span>→</span>';
}

function openDetail(id) {
  const item = aesthetics.find(entry => entry.id === id);
  if (!item) return;
  const isNightAero = item.id === "frutiger-aero" && document.body.classList.contains("aero-night");
  const isBrazilNight = item.id === "brazil-2000s" && document.body.classList.contains("brazil-night");
  const detailName = isNightAero ? "Frutiger Night" : isBrazilNight ? "Brazil Night 2000s" : item.name;
  const detailBanner = isNightAero ? "assets/frutiger-night/banner-user-20261016.jpg" : isBrazilNight ? "assets/brazil-night-2000s/banner.png" : item.banner;
  const detailGallery = isNightAero ? ["assets/frutiger-night/example1.jpg","assets/frutiger-night/example2.jpg"] : isBrazilNight ? ["assets/brazil-night-2000s/example1.jpg"] : item.gallery;
  const nightNote = isNightAero ? `<div class="detail-callout"><b>Modo noturno</b><br>Frutiger Night é a interpretação noturna do Frutiger Aero dentro do AeroNata — não uma categoria separada do arquivo.</div>` : isBrazilNight ? `<div class="detail-callout"><b>Modo noturno</b><br>Brazil Night 2000s é a face noturna da nostalgia brasileira dos anos 2000 — ruas sob postes, telas acesas e memórias de madrugada.</div>` : ``;
  $("#detailContent").innerHTML = `
    <p class="eyebrow">AERONATA ARCHIVE · ${escapeHtml(item.period)}</p>
    <h2 id="detailTitle">${escapeHtml(detailName)}</h2>
    <div class="detail-hero ${item.id === "frutiger-aero" ? "frutiger-detail-hero" : ""}" style="background:${detailBanner ? `linear-gradient(180deg,transparent 58%,rgba(0,0,0,.42)),url(${detailBanner}) center/cover no-repeat` : item.bg}">${escapeHtml(detailName)}</div>
    <p>${escapeHtml(item.summary)}</p>${nightNote}
    <div class="detail-pills">${item.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    <h3>Origem e contexto</h3><p>${escapeHtml(item.origin)}</p>
    <h3>Características visuais</h3><ul>${item.features.map(feature => `<li>${escapeHtml(feature)}</li>`).join("")}</ul>
    <h3>Influência cultural</h3><p>${escapeHtml(item.culture)}</p>
    <h3>Evolução</h3><p>${escapeHtml(item.evolution)}</p>
    <div class="detail-callout"><b>Você sabia?</b><br>${escapeHtml(item.curiosity)}</div>${detailGallery?.length ? `<h3>Exemplos visuais</h3><div class="detail-gallery">${detailGallery.map(src => `<img src="${src}" alt="Exemplo visual de ${escapeHtml(detailName)}" loading="lazy">`).join("")}</div>` : ``}`;
  if (!detailDialog.open) detailDialog.showModal();
}

grid.addEventListener("click", event => {
  const card = event.target.closest("[data-id]");
  if (card) openDetail(card.dataset.id);
});
grid.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-id]")) {
    event.preventDefault();
    openDetail(event.target.dataset.id);
  }
});
search.addEventListener("input", renderCards);
filters.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  filters.querySelectorAll("[data-filter]").forEach(item => {
    const active = item === button;
    item.classList.toggle("active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  showAll = false;
  renderCards();
});
$("#showAll").addEventListener("click", () => { showAll = !showAll; renderCards(); });
$("#dialogClose").addEventListener("click", () => detailDialog.close());
detailDialog.addEventListener("click", event => { if (event.target === detailDialog) detailDialog.close(); });

const modeSelect = $("#modeSelect");
const themeTracks = {
  aero:{name:"Frutiger Aero",src:"assets/frutiger-aero/theme.mp3"},
  "aero-night":{name:"Frutiger Night",src:"assets/frutiger-night/theme.mp3"},
  "dark-aero":{name:"Dark Aero",src:"assets/dark-aero/theme.mp3"},
  "frutiger-metro":{name:"Frutiger Metro 1",src:"assets/frutiger-metro/theme1.mp3"},
  "frutiger-metro-2":{name:"Frutiger Metro 2",src:"assets/frutiger-metro/theme2.mp3"},
  vaporwave:{name:"Vaporwave",src:"assets/vaporwave/theme.mp3"},
  "evil-aero":{name:"Evil Aero",src:"assets/evil-aero/theme.mp3"},
  "2000s-tech":{name:"2000s Tech",src:"assets/2000s-tech/theme.mp3"},
  dorfic:{name:"Dorfic",src:"assets/dorfic/theme.mp3"},
  "frutiger-aqua":{name:"Frutiger Aqua",src:"assets/frutiger-aqua/theme.mp3"},
  "frutiger-desert":{name:"Frutiger Desert",src:"assets/frutiger-desert/theme.mp3"},
  "frutiger-eco":{name:"Frutiger Eco",src:"assets/frutiger-eco/theme.mp3"},
  "frutiger-glacier":{name:"Frutiger Glacier",src:"assets/frutiger-glacier/theme.mp3"},
  "frutiger-zen":{name:"Frutiger Zen",src:"assets/frutiger-zen/theme.mp3"},
  "hawaii-2000s":{name:"Hawaii 2000s",src:"assets/hawaii-2000s/theme.mp3"},
  "brazil-2000s":{name:"Brazil 2000s Nostalgia",src:"assets/brazil-2000s/theme.mp3"},
  "brazil-night-2000s":{name:"Brazil Night 2000s",src:"assets/brazil-night-2000s/theme.mp3"}
};
const audio = $("#themeAudio"), musicPlayer = $("#musicPlayer"), musicToggle = $("#musicToggle"), musicTitle = $("#musicTitle"), musicStatus = $("#musicStatus");
const themeHint = $("#themeHint"), nightHint = $("#nightHint"), metroHint = $("#metroHint");
let audioUnlocked = false;
audio.volume=.45;

function currentTrackKey(){ if(modeSelect.value === "brazil-2000s" && document.body.classList.contains("brazil-night")) return "brazil-night-2000s"; if(modeSelect.value === "frutiger-aqua" && document.body.classList.contains("aqua-desert")) return "frutiger-desert"; if(modeSelect.value === "aero" && document.body.classList.contains("aero-night")) return "aero-night"; if(modeSelect.value === "frutiger-metro" && document.body.classList.contains("metro-2")) return "frutiger-metro-2"; return modeSelect.value; }
function hideHint(el,key){ if(!el || el.hidden) return; el.classList.add("is-hiding"); try{localStorage.setItem(key,"1")}catch(e){} setTimeout(()=>{el.hidden=true;el.classList.remove("is-hiding")},300); }
function refreshHints(){
  let themeSeen=false, nightSeen=false; try{themeSeen=localStorage.getItem("aeronata-theme-hint-seen")==="1";nightSeen=localStorage.getItem("aeronata-night-hint-seen")==="1"}catch(e){}
  themeHint.hidden=themeSeen;
  nightHint.hidden=nightSeen || modeSelect.value!=="aero";
  if (metroHint && modeSelect.value !== "frutiger-metro") metroHint.hidden=true;
  else if (metroHint && !metroHint.dataset.dismissed) metroHint.hidden=false;
}
let audioRequestId=0;
let audioPlayIntent=false;
function setMusicUI(playing,status){musicToggle.textContent=playing?"❚❚":"▶";musicStatus.textContent=status||(playing?"tocando":"pausado")}
function waitForAudioReady(requestId,timeout=2600){
  if(audio.readyState>=2)return Promise.resolve();
  return new Promise(resolve=>{
    let done=false;
    const finish=()=>{if(done)return;done=true;clearTimeout(timer);audio.removeEventListener("canplay",onReady);audio.removeEventListener("loadeddata",onReady);resolve()};
    const onReady=()=>{if(requestId===audioRequestId)finish()};
    const timer=setTimeout(finish,timeout);
    audio.addEventListener("canplay",onReady,{once:true});audio.addEventListener("loadeddata",onReady,{once:true});
  });
}
async function loadAndMaybePlay(trackKey, shouldPlay=(audioUnlocked||audioPlayIntent)){
  const requestId=++audioRequestId;
  const track=themeTracks[trackKey];
  if(!track){audio.pause();musicPlayer.hidden=true;audio.removeAttribute("src");audio.load();audioPlayIntent=false;return}
  musicPlayer.hidden=false; musicTitle.textContent=track.name+" · tema";
  const targetVolume=Number($("#musicVolume").value);
  const wantsPlay=Boolean(shouldPlay);
  audioPlayIntent=wantsPlay;
  audio.pause();
  audio.volume=targetVolume;
  const current=audio.getAttribute("src")||"";
  if(current!==track.src){audio.src=track.src;audio.load()}
  if(!wantsPlay){setMusicUI(false,"pausado");return}
  setMusicUI(false,"carregando…");
  await waitForAudioReady(requestId);
  if(requestId!==audioRequestId)return;
  try{
    await audio.play();
    if(requestId!==audioRequestId){audio.pause();return}
    setMusicUI(true,"tocando");
  }catch(e){
    if(requestId!==audioRequestId)return;
    audioPlayIntent=true;
    setMusicUI(false,"toque para ouvir");
  }
}
function updateThemeToggle(){
  const aeroNight=modeSelect.value==="aero" && document.body.classList.contains("aero-night");
  const metroTwo=modeSelect.value==="frutiger-metro" && document.body.classList.contains("metro-2");
  const aquaDesert=modeSelect.value==="frutiger-aqua" && document.body.classList.contains("aqua-desert");
  const brazilNight=modeSelect.value==="brazil-2000s" && document.body.classList.contains("brazil-night");
  const alt=aeroNight||metroTwo||aquaDesert||brazilNight;
  $("#themeToggle").textContent=alt?"☀":"🌙";
  const label=modeSelect.value==="brazil-2000s"?(brazilNight?"Voltar ao Brazil 2000s":"Ativar Brazil Night 2000s"):modeSelect.value==="frutiger-aqua"?(aquaDesert?"Voltar ao Frutiger Aqua":"Ativar Frutiger Desert"):modeSelect.value==="frutiger-metro"?(metroTwo?"Ativar Frutiger Metro 1":"Ativar Frutiger Metro 2"):(aeroNight?"Ativar Frutiger Aero claro":"Ativar modo escuro");
  $("#themeToggle").title=label;
  $("#themeToggle").setAttribute("aria-label",label);
}
async function applyMode(mode){
  document.body.dataset.mode=mode; document.body.classList.remove("light-override","aero-night","metro-2","aqua-desert","brazil-night");
  updateThemeToggle(); refreshHints();
  await loadAndMaybePlay(currentTrackKey());
}
modeSelect.addEventListener("change", async()=>{audioUnlocked=true;hideHint(themeHint,"aeronata-theme-hint-seen");await applyMode(modeSelect.value)});

// AeroNata custom interface selector
const modeTrigger=$("#modeTrigger"), modePanel=$("#modePanel"), modeCurrent=$("#modeCurrent");
function syncModePicker(){ const opt=modeSelect.options[modeSelect.selectedIndex]; if(modeCurrent&&opt) modeCurrent.textContent=opt.textContent; document.querySelectorAll("[data-mode-choice]").forEach(b=>b.classList.toggle("active",b.dataset.modeChoice===modeSelect.value)); }
modeTrigger?.addEventListener("click",()=>{const open=!modePanel.classList.contains("open");modePanel.classList.toggle("open",open);modeTrigger.setAttribute("aria-expanded",String(open));});
document.addEventListener("click",e=>{if(!e.target.closest(".mode-picker")){modePanel?.classList.remove("open");modeTrigger?.setAttribute("aria-expanded","false")}});
modePanel?.addEventListener("click",e=>{const b=e.target.closest("[data-mode-choice]");if(!b)return;modeSelect.value=b.dataset.modeChoice;modeSelect.dispatchEvent(new Event("change"));syncModePicker();modePanel.classList.remove("open");modeTrigger.setAttribute("aria-expanded","false");});
syncModePicker();
musicToggle.addEventListener("click", async()=>{audioUnlocked=true;if(audio.paused){audioPlayIntent=true;await loadAndMaybePlay(currentTrackKey(),true)}else{audioPlayIntent=false;++audioRequestId;audio.pause();setMusicUI(false,"pausado")}});
$("#musicVolume").addEventListener("input",e=>audio.volume=Number(e.target.value));
audio.addEventListener("ended",()=>{audioPlayIntent=false;setMusicUI(false,"finalizado")});
audio.addEventListener("play",()=>setMusicUI(true,"tocando"));
audio.addEventListener("pause",()=>{if(!audio.ended && !audioPlayIntent)setMusicUI(false,"pausado")});
$("#themeToggle").addEventListener("click", async()=>{
  audioUnlocked=true;
  if(modeSelect.value==="aero"){
    document.body.classList.toggle("aero-night");
    hideHint(nightHint,"aeronata-night-hint-seen");
  }else if(modeSelect.value==="brazil-2000s"){
    document.body.classList.toggle("brazil-night");
  }else if(modeSelect.value==="frutiger-aqua"){
    document.body.classList.toggle("aqua-desert");
  }else if(modeSelect.value==="frutiger-metro"){
    document.body.classList.toggle("metro-2");
    if(metroHint && !metroHint.hidden){ metroHint.classList.add("is-hiding"); metroHint.dataset.dismissed="1"; setTimeout(()=>{metroHint.hidden=true;metroHint.classList.remove("is-hiding")},300); }
  }else{
    document.body.classList.toggle("light-override");
  }
  updateThemeToggle();
  await loadAndMaybePlay(currentTrackKey(),true);
});
// First meaningful interaction unlocks audio; tracks selected afterwards can start automatically.
document.addEventListener("pointerdown",()=>{audioUnlocked=true},{once:true,passive:true});
document.addEventListener("keydown",()=>{audioUnlocked=true},{once:true});
refreshHints(); updateThemeToggle();

const experienceContent = {
  aero: `<p class="eyebrow">PORTAL ESPECIAL · 01</p><h2 id="experienceTitle">O mundo que nos prometeram</h2>
    <p>O Frutiger Aero imaginava um amanhã em que a tecnologia seria amigável, transparente e integrada à natureza. Céus azuis, água cristalina, folhas e interfaces brilhantes formavam uma promessa visual de progresso otimista.</p>
    <div class="feature-grid">
      <div class="feature-tile"><b>◉ Natureza como futuro</b><p>Plantas, água e céu apareciam como sinais de um mundo limpo e conectado.</p></div>
      <div class="feature-tile"><b>◇ Tecnologia tátil</b><p>Vidro, reflexos, botões volumosos e transparências faziam interfaces parecerem físicas.</p></div>
      <div class="feature-tile"><b>☼ Otimismo digital</b><p>O design sugeria que inovação e bem-estar poderiam avançar juntos.</p></div>
      <div class="feature-tile"><b>↗ A promessa e a realidade</b><p>O contraste entre imagens idealizadas e problemas ambientais convida a pensar no futuro.</p></div>
    </div>
    <h3>O que podemos fazer hoje?</h3><p>Uma estética não resolve problemas sozinha, mas pode inspirar atitudes concretas: não deixar lixo em ruas, rios ou trilhas; cuidar de árvores e áreas verdes; reduzir desperdício; reutilizar materiais; e apoiar iniciativas locais de recuperação ambiental.</p>
    <div class="detail-callout">O futuro bonito não precisa ficar preso em propagandas antigas. Ele também depende das pequenas escolhas e ações coletivas que fazemos agora.</div>
    <h3>Uma pequena missão</h3><ul><li>Leve embora seu lixo quando visitar um parque ou praia.</li><li>Cuide de uma planta ou ajude a preservar uma área verde local.</li><li>Repare, reutilize ou doe algo antes de descartá-lo.</li><li>Compartilhe informações confiáveis sobre proteção ambiental.</li></ul>`,
  retro: `<p class="eyebrow">PORTAL ESPECIAL · 02</p><h2 id="experienceTitle">Um passeio pela antiga internet</h2>
    <p>Antes de feeds infinitos, muitos espaços da web eram páginas feitas por pessoas, fãs e pequenos grupos. Cada site podia ter cores, botões, animações e regras próprias — e navegar era também encontrar links inesperados.</p>
    <div class="feature-grid">
      <div class="feature-tile"><b>✦ Páginas pessoais</b><p>Sites com diários, coleções, listas de links, contadores de visitas e mensagens para visitantes.</p></div>
      <div class="feature-tile"><b>▧ GIFs e pixels</b><p>Imagens animadas, botões minúsculos, fundos repetidos e banners eram parte da personalidade visual.</p></div>
      <div class="feature-tile"><b>⌘ Fóruns e guestbooks</b><p>Comunidades organizadas por tópicos, assinaturas personalizadas e livros de visitas.</p></div>
      <div class="feature-tile"><b>▶ Vídeos e jogos</b><p>O YouTube dos primeiros anos, jogos em Flash e experiências simples de navegador marcaram a cultura online.</p></div>
    </div>
    <h3>Como a web mudou?</h3><p>A internet passou de uma coleção de páginas relativamente independentes para uma experiência cada vez mais concentrada em plataformas, aplicativos e recomendações algorítmicas. Isso facilitou o acesso, mas também mudou a forma como encontramos pessoas e conteúdos.</p>
    <h3>Uma linha do tempo resumida</h3><ul><li><b>Anos 1990:</b> expansão da World Wide Web, sites pessoais, diretórios e primeiros navegadores populares.</li><li><b>Anos 2000:</b> blogs, fóruns, compartilhamento de fotos, vídeos online e redes sociais iniciais.</li><li><b>Anos 2010:</b> crescimento do acesso móvel e das plataformas centralizadas.</li><li><b>Hoje:</b> comunidades independentes, arquivos digitais e projetos como o AeroNata ajudam a preservar e reinterpretar a memória da web.</li></ul>
    <div class="detail-callout">A internet antiga não era perfeita nem acessível a todos. Mas sua diversidade de pequenos espaços inspira quem quer construir uma web mais pessoal, curiosa e criativa.</div>`
};

function openExperience(key) {
  const content = experienceContent[key];
  if (!content) return;
  $("#experienceContent").innerHTML = content;
  if (!experienceDialog.open) experienceDialog.showModal();
}
document.querySelectorAll('a[href="#experience-aero"]').forEach(link => link.addEventListener("click", event => { event.preventDefault(); openExperience("aero"); }));
document.querySelectorAll('a[href="#experience-retro"]').forEach(link => link.addEventListener("click", event => { event.preventDefault(); openExperience("retro"); }));
$("#experienceClose").addEventListener("click", () => experienceDialog.close());
experienceDialog.addEventListener("click", event => { if (event.target === experienceDialog) experienceDialog.close(); });

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (detailDialog.open) detailDialog.close();
    if (experienceDialog.open) experienceDialog.close();
  }
});

renderCards();


// AeroNata 1.0 — banco variável do quiz de afinidade estética
const Q=(id,q,a,w,pics=null)=>({id,q,a,w,img:Boolean(pics),pics});
const quizQuestionBank=[
Q("q01","Você acorda num lugar desconhecido. O que faria você querer ficar?",["A sensação de já ter estado ali","O silêncio e a paz","A quantidade de detalhes","A tecnologia ao redor"],[[["brazil-2000s",3],["old-web",1],["liminal-spaces",2]],[["frutiger-zen",3],["frutiger-eco",2],["frutiger-glacier",1]],[["frutiger-metro",2],["cyberpunk",2],["2000s-tech",1]],[["2000s-tech",3],["y2k",2],["cyberpunk",1]]]),
Q("q02","Qual coisa desbloqueia uma memória mais rápido?",["Uma música esquecida","Uma interface antiga","Uma foto ruim de câmera digital","Um lugar que mudou"],[[["brazil-2000s",3],["hawaii-2000s",2],["old-web",1]],[["2000s-tech",3],["dorfic",2],["old-web",1]],[["brazil-2000s",3],["hawaii-2000s",2],["y2k",1]],[["brazil-2000s",2],["liminal-spaces",3],["grunge",1]]]),
Q("q03","Você tem espaço para UMA foto. O que registra?",["O céu daquele momento","Uma rua comum","Seus amigos sem posar","Uma paisagem natural"],[[["frutiger-aero",3],["frutiger-glacier",1],["hawaii-2000s",2]],[["brazil-2000s",3],["liminal-spaces",2],["old-web",1]],[["brazil-2000s",2],["hawaii-2000s",2],["y2k",1]],[["frutiger-zen",3],["frutiger-eco",2],["frutiger-aqua",2]]]),
Q("q04","Qual horário parece ter mais personalidade?",["11:00, sol forte","16:30, tarde dourada","18:40, luzes acendendo","03:00, mundo vazio"],[[["hawaii-2000s",3],["frutiger-aero",2],["frutiger-eco",1]],[["brazil-2000s",3],["frutiger-desert",2],["grunge",1]],[["brazil-2000s",2],["dark-aero",2],["frutiger-metro",1]],[["old-web",2],["liminal-spaces",3],["dark-aero",2]]]),
Q("q05","Qual dessas imagens parece uma memória que você nunca viveu?",["Praia tropical antiga","PC brilhando no quarto","Rua ao entardecer","Água e céu impossivelmente limpos"],[[["hawaii-2000s",3],["y2k",1],["vaporwave",1]],[["2000s-tech",3],["old-web",2],["brazil-2000s",1]],[["brazil-2000s",3],["liminal-spaces",2],["dark-aero",1]],[["frutiger-aero",3],["frutiger-aqua",2],["frutiger-eco",1]]],["assets/hawaii-2000s/example2.jpg","assets/2000s-tech/example1.jpg","assets/brazil-night-2000s/example1.jpg","assets/frutiger-aero/example1.jpg"]),
Q("q06","Você encontra um computador antigo funcionando. O que procura primeiro?",["Fotos pessoais","Programas antigos","Músicas baixadas","Conversas salvas"],[[["brazil-2000s",3],["hawaii-2000s",1],["old-web",2]],[["2000s-tech",3],["dorfic",2],["old-web",1]],[["brazil-2000s",2],["vaporwave",2],["grunge",1]],[["old-web",3],["brazil-2000s",2],["y2k",1]]]),
Q("q07","Em qual lugar você ficaria sozinho por uma hora?",["Jardim silencioso","Praia de férias","Cidade iluminada","Ambiente gelado e cristalino"],[[["frutiger-zen",3],["frutiger-eco",2],["frutiger-aero",1]],[["hawaii-2000s",3],["frutiger-aqua",2],["brazil-2000s",1]],[["frutiger-metro",3],["cyberpunk",2],["y2k",1]],[["frutiger-glacier",3],["dark-aero",1],["frutiger-aqua",1]]],["assets/frutiger-zen/example2.jpg","assets/hawaii-2000s/example1.jpg","assets/frutiger-metro/example2.jpg","assets/frutiger-glacier/frutiger-glacier-exemplo1.jpg"]),
Q("q08","Qual imperfeição deixa uma imagem mais bonita?",["Granulação","Cores desbotadas","Compressão digital","Reflexos fortes demais"],[[["grunge",3],["brazil-2000s",2],["hawaii-2000s",1]],[["brazil-2000s",3],["old-web",1],["hawaii-2000s",2]],[["old-web",3],["vaporwave",2],["2000s-tech",1]],[["frutiger-aero",2],["y2k",3],["dorfic",1]]]),
Q("q09","Qual imagem você usaria como wallpaper sem saber o nome da estética?",["Tropical quente","Tecnologia cromada","Natureza verde limpa","Noite urbana silenciosa"],[[["hawaii-2000s",3],["frutiger-desert",1],["brazil-2000s",1]],[["2000s-tech",3],["y2k",2],["dorfic",1]],[["frutiger-eco",3],["frutiger-zen",2],["frutiger-aero",1]],[["brazil-2000s",3],["dark-aero",2],["liminal-spaces",1]]],["assets/hawaii-2000s/banner.png","assets/2000s-tech/banner.jpg","assets/frutiger-eco/banner.jpg","assets/brazil-night-2000s/banner.png"]),
Q("q10","Você visita o passado sem poder ver nenhum evento famoso. Onde passa o dia?",["Shopping e lojas comuns","Lan house","Praia","Em casa vendo TV e mexendo nas coisas da época"],[[["y2k",2],["brazil-2000s",2],["vaporwave",1]],[["brazil-2000s",3],["old-web",3],["2000s-tech",2]],[["hawaii-2000s",3],["frutiger-aqua",1],["brazil-2000s",1]],[["brazil-2000s",3],["old-web",2],["y2k",1]]]),
Q("q11","Qual combinação visual te prende sem você saber explicar por quê?",["Água + vidro","Laranja + interface antiga","Verde + luz natural","Rosa/ciano + ruínas digitais"],[[["frutiger-aqua",3],["frutiger-aero",2],["frutiger-glacier",1]],[["dorfic",3],["2000s-tech",2],["y2k",1]],[["frutiger-eco",3],["frutiger-zen",2],["frutiger-aero",1]],[["vaporwave",3],["y2k",2],["old-web",1]]],["assets/frutiger-aqua/frutiger-aqua-exemplo2.jpg","assets/dorfic/example2.jpg","assets/frutiger-eco/frutiger-eco-exemplo1.jpg","assets/vaporwave/example1.jpg"]),
Q("q12","O que torna um lugar confortável?",["Familiaridade","Natureza","Pouca iluminação","Objetos e detalhes por toda parte"],[[["brazil-2000s",3],["old-web",1],["hawaii-2000s",1]],[["frutiger-zen",3],["frutiger-eco",2],["frutiger-aero",1]],[["dark-aero",3],["liminal-spaces",2],["brazil-2000s",1]],[["dorfic",2],["old-web",3],["2000s-tech",1]]]),
Q("q13","Uma janela mágica pode mostrar uma paisagem para sempre. Qual?",["Oceano azul","Bairro no pôr do sol","Jardim depois da chuva","Cidade futurista à noite"],[[["frutiger-aqua",3],["hawaii-2000s",2],["frutiger-aero",1]],[["brazil-2000s",3],["hawaii-2000s",1],["liminal-spaces",1]],[["frutiger-zen",3],["frutiger-eco",2],["frutiger-aero",1]],[["cyberpunk",3],["dark-aero",2],["frutiger-metro",1]]],["assets/frutiger-aqua/frutiger-aqua-exemplo1.jpg","assets/brazil-2000s/example1.jpg","assets/frutiger-zen/example2.jpg","assets/dark-aero/example1.jpg"]),
Q("q14","Você abre uma caixa marcada ‘2007’. O que pega primeiro?",["Um celular","Uma câmera cheia de fotos","Um CD gravado","Um brinquedo"],[[["2000s-tech",3],["y2k",2],["brazil-2000s",1]],[["brazil-2000s",3],["hawaii-2000s",2],["grunge",1]],[["brazil-2000s",2],["old-web",2],["vaporwave",1]],[["brazil-2000s",3],["y2k",1],["old-web",1]]]),
Q("q15","Uma porta apareceu na sua frente. O que mais te faria atravessar?",["Uma música familiar","Uma luz bonita pelas frestas","Algo da infância","Não saber absolutamente nada do outro lado"],[[["brazil-2000s",2],["vaporwave",2],["hawaii-2000s",1]],[["frutiger-aero",2],["frutiger-glacier",2],["y2k",1]],[["brazil-2000s",3],["old-web",2],["y2k",1]],[["liminal-spaces",3],["weirdcore",2],["cyberpunk",1]]]),
Q("q16","Você perdeu o ônibus e precisa esperar quarenta minutos. Onde preferia estar?",["Sob uma marquise vendo a chuva","Numa praça com árvores","Dentro de uma loja de eletrônicos","Num posto iluminado quase vazio"],[[["brazil-2000s",3],["grunge",1],["liminal-spaces",1]],[["frutiger-zen",3],["frutiger-eco",2],["frutiger-aero",1]],[["2000s-tech",3],["y2k",2],["dorfic",1]],[["brazil-2000s",2],["liminal-spaces",3],["dark-aero",1]]]),
Q("q17","Qual detalhe de um lugar faria você lembrar dele anos depois?",["A iluminação","O som ambiente","Os objetos","A temperatura"],[[["vaporwave",2],["dark-aero",2],["brazil-2000s",1]],[["brazil-2000s",3],["old-web",1],["hawaii-2000s",1]],[["dorfic",2],["2000s-tech",2],["brazil-2000s",2]],[["frutiger-glacier",3],["frutiger-aqua",1],["frutiger-desert",1]]]),
Q("q18","Você encontra uma pasta sem nome num PC antigo. Qual arquivo abre primeiro?",["IMG_0047.JPG","mix_final.mp3","chat_2008.txt","setup_old.exe"],[[["brazil-2000s",3],["hawaii-2000s",1],["grunge",1]],[["vaporwave",2],["brazil-2000s",2],["old-web",1]],[["old-web",3],["brazil-2000s",2],["y2k",1]],[["2000s-tech",3],["dorfic",2],["old-web",1]]]),
Q("q19","Qual tipo de silêncio você acha mais bonito?",["Casa de madrugada","Praia depois do pôr do sol","Jardim depois da chuva","Prédio comercial vazio"],[[["brazil-2000s",3],["dark-aero",1],["old-web",1]],[["hawaii-2000s",3],["frutiger-aqua",2],["vaporwave",1]],[["frutiger-zen",3],["frutiger-eco",2],["frutiger-aero",1]],[["liminal-spaces",3],["weirdcore",2],["cyberpunk",1]]]),
Q("q20","Se uma memória pudesse ter textura, qual você escolheria?",["Plástico transparente","Papel de foto","Metal cromado","Vidro molhado"],[[["y2k",3],["frutiger-aero",1],["2000s-tech",1]],[["brazil-2000s",3],["grunge",2],["hawaii-2000s",1]],[["2000s-tech",3],["y2k",2],["cyberpunk",1]],[["frutiger-aqua",3],["frutiger-glacier",2],["frutiger-aero",1]]]),
Q("q21","Você pode recuperar um único hábito antigo da internet. Qual parece mais especial?",["Personalizar cada cantinho do perfil","Baixar músicas e organizar pastas","Entrar em fóruns pequenos","Descobrir sites por acaso"],[[["old-web",3],["y2k",2],["brazil-2000s",1]],[["brazil-2000s",3],["old-web",2],["vaporwave",1]],[["old-web",3],["grunge",1],["weirdcore",1]],[["old-web",3],["weirdcore",2],["liminal-spaces",1]]]),
Q("q22","Qual dessas viagens parece mais memorável?",["Estrada costeira num dia quente","Cidade grande depois da meia-noite","Interior verde numa manhã fresca","Rodovia vazia no fim da tarde"],[[["hawaii-2000s",3],["frutiger-desert",1],["frutiger-aqua",1]],[["cyberpunk",2],["frutiger-metro",3],["dark-aero",1]],[["frutiger-eco",3],["frutiger-zen",2],["frutiger-aero",1]],[["brazil-2000s",3],["liminal-spaces",2],["grunge",1]]]),
Q("q23","Um lugar parece familiar, mas você sabe que nunca esteve nele. Isso te dá mais…",["Conforto","Curiosidade","Melancolia","Estranheza"],[[["brazil-2000s",2],["frutiger-zen",2],["old-web",1]],[["y2k",2],["2000s-tech",2],["cyberpunk",1]],[["brazil-2000s",3],["vaporwave",2],["grunge",1]],[["liminal-spaces",3],["weirdcore",3],["dark-aero",1]]]),
Q("q24","Se você pudesse guardar um som numa cápsula do tempo, qual seria?",["Som de inicialização de computador","Chuva batendo na janela","Ondas e vento","Barulho distante de uma rua"],[[["2000s-tech",3],["old-web",2],["dorfic",1]],[["brazil-2000s",3],["dark-aero",1],["frutiger-zen",1]],[["hawaii-2000s",3],["frutiger-aqua",2],["frutiger-zen",1]],[["brazil-2000s",3],["liminal-spaces",2],["grunge",1]]]),
Q("q25","Qual dessas coisas parece mais ‘futuro’ para você?",["Algo brilhante e otimista","Algo escuro e urbano","Algo simples integrado à natureza","Algo antigo que ainda parece estranho"],[[["frutiger-aero",3],["y2k",2],["frutiger-aqua",1]],[["cyberpunk",3],["dark-aero",2],["frutiger-metro",2]],[["frutiger-eco",3],["frutiger-zen",2],["frutiger-aero",1]],[["dorfic",3],["2000s-tech",2],["old-web",1]]]),
Q("q26","Você ganha uma tarde completamente livre. O cenário ideal seria…",["Piscina e sol","Quarto fresco com computador","Parque silencioso","Centro da cidade cheio de luz"],[[["hawaii-2000s",3],["frutiger-aqua",2],["frutiger-desert",1]],[["brazil-2000s",2],["old-web",3],["2000s-tech",1]],[["frutiger-zen",3],["frutiger-eco",2],["frutiger-aero",1]],[["frutiger-metro",3],["cyberpunk",2],["y2k",1]]]),
Q("q27","Qual objeto teria mais chance de virar decoração no seu quarto?",["Uma câmera digital antiga","Um gadget translúcido","Uma luminária estranha","Uma planta dentro de vidro"],[[["brazil-2000s",3],["hawaii-2000s",2],["grunge",1]],[["y2k",3],["2000s-tech",2],["frutiger-aero",1]],[["vaporwave",2],["weirdcore",2],["cyberpunk",1]],[["frutiger-eco",3],["frutiger-zen",2],["frutiger-aero",1]]]),
Q("q28","Qual dessas cenas parece ter uma história escondida?",["Uma TV acesa numa sala vazia","Um parque impecável sem ninguém","Um monitor com uma janela aberta","Uma piscina de hotel à noite"],[[["brazil-2000s",3],["liminal-spaces",2],["old-web",1]],[["frutiger-aero",2],["liminal-spaces",3],["frutiger-eco",1]],[["old-web",3],["dorfic",2],["2000s-tech",1]],[["hawaii-2000s",3],["liminal-spaces",2],["vaporwave",1]]]),
Q("q29","Qual clima combina mais com uma lembrança boa?",["Calor depois da chuva","Frio seco e céu claro","Brisa de praia","Noite abafada com janela aberta"],[[["brazil-2000s",2],["frutiger-eco",2],["frutiger-aero",1]],[["frutiger-glacier",3],["frutiger-zen",1],["dark-aero",1]],[["hawaii-2000s",3],["frutiger-aqua",2],["frutiger-zen",1]],[["brazil-2000s",3],["old-web",1],["dark-aero",1]]]),
Q("q30","Você acha um cartão de memória de 2009. O que gostaria que tivesse nele?",["Vídeos aleatórios do cotidiano","Fotos de uma viagem","Prints e imagens da internet","Músicas e arquivos sem organização"],[[["brazil-2000s",3],["old-web",1],["grunge",1]],[["hawaii-2000s",3],["brazil-2000s",2],["y2k",1]],[["old-web",3],["y2k",2],["vaporwave",1]],[["brazil-2000s",2],["old-web",3],["grunge",1]]]),
Q("q31","Qual dessas imagens parece mais confortável para desaparecer por algumas horas?",["Lago azul e limpo","Rua brasileira à noite","Jardim verde e silencioso","Praia tropical antiga"],[[["frutiger-aqua",3],["frutiger-aero",2],["frutiger-glacier",1]],[["brazil-2000s",3],["dark-aero",2],["liminal-spaces",1]],[["frutiger-zen",3],["frutiger-eco",2],["frutiger-aero",1]],[["hawaii-2000s",3],["frutiger-desert",1],["vaporwave",1]]],["assets/frutiger-aqua/banner.jpg","assets/brazil-night-2000s/banner.png","assets/frutiger-zen/banner.jpg","assets/hawaii-2000s/banner.png"]),
Q("q32","Qual sensação você prefere numa interface?",["Parece um objeto físico","Quase desaparece e deixa tudo limpo","Tem personalidade e exagero","Parece uma máquina de outro tempo"],[[["dorfic",3],["2000s-tech",2],["frutiger-aero",1]],[["frutiger-glacier",2],["frutiger-zen",2],["frutiger-aqua",1]],[["y2k",2],["vaporwave",3],["frutiger-metro",1]],[["2000s-tech",3],["old-web",2],["dorfic",2]]]),
Q("q33","Você entra numa loja que parou no tempo. Qual seção visita primeiro?",["Eletrônicos","Revistas e CDs","Brinquedos","Decoração e objetos de casa"],[[["2000s-tech",3],["y2k",2],["brazil-2000s",1]],[["brazil-2000s",3],["grunge",2],["old-web",1]],[["brazil-2000s",3],["y2k",1],["hawaii-2000s",1]],[["dorfic",2],["brazil-2000s",2],["old-web",1]]]),
Q("q34","Qual palavra descreve melhor o que você procura numa estética?",["Memória","Calma","Descoberta","Impacto"],[[["brazil-2000s",3],["old-web",2],["hawaii-2000s",1]],[["frutiger-zen",3],["frutiger-eco",2],["frutiger-aqua",1]],[["weirdcore",2],["old-web",2],["y2k",1]],[["cyberpunk",3],["vaporwave",2],["frutiger-metro",2]]]),
Q("q35","Você recebe um mapa de uma cidade desconhecida. Qual ponto visita primeiro?",["Um bairro residencial antigo","Um jardim botânico","Um centro tecnológico","Uma estação quase abandonada"],[[["brazil-2000s",3],["old-web",1],["grunge",1]],[["frutiger-eco",3],["frutiger-zen",2],["frutiger-aero",1]],[["2000s-tech",2],["cyberpunk",3],["y2k",1]],[["liminal-spaces",3],["weirdcore",2],["dark-aero",1]]]),
Q("q36","Qual dessas coisas você acha mais bonita quando envelhece?",["Fotografias","Tecnologia","Lugares","Músicas"],[[["brazil-2000s",3],["hawaii-2000s",2],["grunge",1]],[["2000s-tech",3],["old-web",2],["dorfic",1]],[["brazil-2000s",2],["liminal-spaces",3],["grunge",1]],[["brazil-2000s",2],["vaporwave",2],["old-web",1]]]),
Q("q37","Se sua internet tivesse um ‘clima’, qual seria?",["Ensolarado e limpo","Chuvoso e confortável","Neon e barulhento","Estranho e imprevisível"],[[["frutiger-aero",3],["frutiger-eco",2],["frutiger-aqua",1]],[["brazil-2000s",2],["old-web",2],["dark-aero",1]],[["cyberpunk",3],["frutiger-metro",3],["vaporwave",1]],[["weirdcore",3],["old-web",2],["liminal-spaces",2]]]),
Q("q38","Qual dessas pequenas coisas parece mais nostálgica sem depender de uma época específica?",["Luz entrando pela cortina","Tela iluminando o quarto","Mala pronta perto da porta","Chuva formando poças na rua"],[[["frutiger-zen",2],["brazil-2000s",2],["hawaii-2000s",1]],[["old-web",3],["brazil-2000s",2],["2000s-tech",1]],[["hawaii-2000s",2],["brazil-2000s",2],["y2k",1]],[["brazil-2000s",3],["frutiger-aqua",1],["liminal-spaces",1]]]),
Q("q39","Qual tipo de descoberta na internet te atrai mais?",["Um site pessoal esquecido","Uma tecnologia antiga incomum","Um arquivo de fotos anônimas","Uma comunidade pequena e estranha"],[[["old-web",3],["brazil-2000s",1],["weirdcore",1]],[["2000s-tech",3],["dorfic",2],["y2k",1]],[["brazil-2000s",3],["liminal-spaces",2],["grunge",1]],[["weirdcore",3],["old-web",2],["grunge",1]]]),
Q("q40","Você pode mudar a iluminação do mundo por uma hora. Qual escolhe?",["Azul claro de manhã","Dourado de fim de tarde","Laranja de postes antigos","Roxo e ciano de neon"],[[["frutiger-aero",3],["frutiger-glacier",2],["frutiger-aqua",1]],[["hawaii-2000s",2],["frutiger-desert",3],["brazil-2000s",1]],[["brazil-2000s",3],["dark-aero",2],["liminal-spaces",1]],[["vaporwave",3],["cyberpunk",2],["frutiger-metro",2]]]),
Q("q41","Qual dessas imagens parece pertencer a um mundo em que você moraria?",["Água translúcida e azul","Interface laranja retrô","Natureza tecnológica","Cidade escura e verde"],[[["frutiger-aqua",3],["frutiger-aero",2],["frutiger-glacier",1]],[["dorfic",3],["2000s-tech",2],["old-web",1]],[["frutiger-eco",3],["frutiger-aero",2],["frutiger-zen",1]],[["dark-aero",3],["cyberpunk",2],["frutiger-metro",1]]],["assets/frutiger-aqua/banner.jpg","assets/dorfic/banner.png","assets/frutiger-eco/banner.jpg","assets/dark-aero/banner.jpg"]),
Q("q42","Qual lembrança fictícia parece mais real na sua cabeça?",["Voltar da escola e ligar a TV","Passar férias num hotel perto do mar","Abrir um programa antigo no PC","Caminhar num parque perfeito demais"],[[["brazil-2000s",3],["old-web",1],["y2k",1]],[["hawaii-2000s",3],["frutiger-aqua",1],["vaporwave",1]],[["2000s-tech",3],["dorfic",2],["old-web",2]],[["frutiger-aero",2],["liminal-spaces",3],["frutiger-eco",1]]]),
Q("q43","Se você pudesse dar uma cor para o silêncio, ele seria…",["Azul muito claro","Verde profundo","Laranja apagado","Preto com pequenos pontos de luz"],[[["frutiger-glacier",3],["frutiger-aqua",2],["frutiger-zen",1]],[["dark-aero",2],["frutiger-eco",3],["frutiger-zen",1]],[["brazil-2000s",3],["frutiger-desert",2],["grunge",1]],[["cyberpunk",2],["liminal-spaces",2],["frutiger-metro",2]]]),
Q("q44","O que você gostaria que uma estética fizesse com você?",["Me lembrasse de algo","Me desse vontade de explorar","Me acalmasse","Me colocasse em outro mundo"],[[["brazil-2000s",3],["old-web",2],["hawaii-2000s",1]],[["y2k",2],["2000s-tech",2],["weirdcore",1]],[["frutiger-zen",3],["frutiger-eco",2],["frutiger-aqua",1]],[["vaporwave",2],["cyberpunk",2],["liminal-spaces",2]]]),
Q("q45","No fim de um dia perfeito, qual cena fecha melhor a história?",["Uma rua conhecida ficando vazia","O mar escurecendo devagar","Um computador ainda ligado","Luzes da cidade vistas de longe"],[[["brazil-2000s",3],["liminal-spaces",1],["grunge",1]],[["hawaii-2000s",3],["frutiger-aqua",2],["frutiger-zen",1]],[["old-web",3],["2000s-tech",2],["brazil-2000s",1]],[["frutiger-metro",3],["cyberpunk",2],["vaporwave",1]]])
];
let quizQuestions=[],quizIndex=0,quizScores={},quizAnswers=[],lastQuizIds=[];
function shuffleQuiz(list){const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function buildQuizSet(){
  const unused=quizQuestionBank.filter(q=>!lastQuizIds.includes(q.id));
  const source=unused.length>=15?unused:quizQuestionBank;
  const visuals=shuffleQuiz(source.filter(q=>q.img)).slice(0,Math.min(5,source.filter(q=>q.img).length));
  const used=new Set(visuals.map(q=>q.id));
  const texts=shuffleQuiz(source.filter(q=>!used.has(q.id))).slice(0,15-visuals.length);
  let set=shuffleQuiz([...visuals,...texts]);
  if(set.length<15){const have=new Set(set.map(q=>q.id));set=set.concat(shuffleQuiz(quizQuestionBank.filter(q=>!have.has(q.id))).slice(0,15-set.length));}
  lastQuizIds=set.map(q=>q.id);return set;
}
function quizEl(){return document.querySelector('#quizApp')}
function startQuiz(){quizQuestions=buildQuizSet();quizIndex=0;quizScores={};quizAnswers=[];renderQuiz()}
function renderQuiz(){const app=quizEl();if(!app)return;const q=quizQuestions[quizIndex];if(!q){renderQuizResult();return}app.innerHTML=`<div class="quiz-progress"><span>${String(quizIndex+1).padStart(2,'0')} / 15</span><i><b style="width:${((quizIndex+1)/15)*100}%"></b></i></div><p class="eyebrow">PERGUNTA ${String(quizIndex+1).padStart(2,'0')}</p><h3>${q.q}</h3><div class="quiz-options ${q.img?'visual':''}">${q.a.map((x,i)=>`<button type="button" data-quiz-answer="${i}">${q.img?`<img src="${q.pics[i]}" alt="" loading="lazy">`:''}<span>${x}</span></button>`).join('')}</div>`}
function answerQuiz(i){const q=quizQuestions[quizIndex],weights=q.w[i]||[];weights.forEach(([id,pts])=>quizScores[id]=(quizScores[id]||0)+pts);quizAnswers.push(i);quizIndex++;renderQuiz()}
function renderQuizResult(){const app=quizEl();const sorted=Object.entries(quizScores).sort((a,b)=>b[1]-a[1]);const best=sorted[0];const item=aesthetics.find(x=>x.id===best[0])||aesthetics[0];const max=Math.max(...sorted.map(x=>x[1]));const pct=Math.min(97,Math.round(68+(best[1]/Math.max(1,max))*25));const runners=sorted.slice(1,4).map(([id,s])=>{const x=aesthetics.find(a=>a.id===id);return x?`<div><span>${x.name}</span><b>${Math.round((s/max)*100)}%</b></div>`:''}).join('');app.innerHTML=`<div class="quiz-result-hero" style="background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.72)),url('${item.banner||item.cover||''}')"><p>SUA ESTÉTICA É</p><h3>${item.name}</h3><strong>${pct}% DE AFINIDADE</strong></div><p class="quiz-result-copy">${item.summary}</p><div class="quiz-runners"><p class="eyebrow">OUTRAS PARTES DE VOCÊ</p>${runners}</div><div class="quiz-result-actions"><button class="button primary" type="button" data-open-result="${item.id}">Explorar estética ↗</button><button class="button secondary" type="button" id="quizRestart">Refazer com novas perguntas ↻</button></div>`;document.querySelector('#quizRestart')?.addEventListener('click',startQuiz);document.querySelector('[data-open-result]')?.addEventListener('click',e=>openDetail(e.currentTarget.dataset.openResult))}
document.querySelector('#quizStart')?.addEventListener('click',startQuiz);document.querySelector('#quizApp')?.addEventListener('click',e=>{const b=e.target.closest('[data-quiz-answer]');if(b)answerQuiz(Number(b.dataset.quizAnswer))});


/* ===== AeroNata ID / Supabase Auth ===== */
(() => {
  const SUPABASE_URL = 'https://vaqdiaqzlpzhngahgzcuo.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_IemRQeg7UnyTpAgqBPiCnA_cMZgmRVJ';
  if (!window.supabase) return console.warn('AeroNata ID: biblioteca Supabase indisponível.');
  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    global: { headers: { apikey: SUPABASE_PUBLISHABLE_KEY } }
  });

  async function authNetworkCheck() {return true;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(SUPABASE_URL + '/auth/v1/settings', {
        headers: { apikey: SUPABASE_PUBLISHABLE_KEY },
        signal: controller.signal,
        cache: 'no-store'
      });
      return response.ok || response.status === 401 || response.status === 403;
    } catch (_) {
      return false;
    } finally { clearTimeout(timer); }
  }

  const dialog = document.getElementById('authDialog');
  const openBtn = document.getElementById('authOpen');
  const closeBtn = document.getElementById('authClose');
  const guest = document.getElementById('authGuest');
  const userBox = document.getElementById('authUser');
  const form = document.getElementById('authForm');
  const loginTab = document.getElementById('loginTab');
  const signupTab = document.getElementById('signupTab');
  const nameField = document.getElementById('nameField');
  const nameInput = document.getElementById('authName');
  const emailInput = document.getElementById('authEmail');
  const passwordInput = document.getElementById('authPassword');
  const submit = document.getElementById('authSubmit');
  const message = document.getElementById('authMessage');
  const signout = document.getElementById('authSignout');
  let mode = 'login';

  function setMessage(text = '', kind = '') {
    message.textContent = text;
    message.className = 'auth-message' + (kind ? ' ' + kind : '');
  }
  function setMode(next) {
    mode = next;
    const signup = next === 'signup';
    loginTab.classList.toggle('active', !signup);
    signupTab.classList.toggle('active', signup);
    nameField.hidden = !signup;
    nameInput.required = signup;
    passwordInput.autocomplete = signup ? 'new-password' : 'current-password';
    submit.textContent = signup ? 'Criar AeroNata ID' : 'Entrar';
    setMessage();
  }
  function showSession(session) {
    const user = session?.user;
    const logged = !!user;
    guest.hidden = logged;
    userBox.classList.toggle('visible', logged);
    if (logged) {
      const displayName = user.user_metadata?.display_name || 'Conta AeroNata';
      document.getElementById('authUserName').textContent = displayName;
      document.getElementById('authUserEmail').textContent = user.email || '';
      document.getElementById('authAvatar').textContent = displayName.trim().charAt(0).toUpperCase() || 'A';
      openBtn.textContent = displayName;
    } else {
      openBtn.textContent = 'AeroNata ID';
    }
  }

  openBtn?.addEventListener('click', () => dialog?.showModal());
  closeBtn?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  loginTab?.addEventListener('click', () => setMode('login'));
  signupTab?.addEventListener('click', () => setMode('signup'));

  form?.addEventListener('submit', async e => {
    e.preventDefault();
    submit.disabled = true;
    setMessage(mode === 'signup' ? 'Criando sua conta…' : 'Entrando…');
    try {
      const online = await authNetworkCheck();
      if (!online) {
        throw new Error('AERONATA_NETWORK');
      }
      if (mode === 'signup') {
        const { data, error } = await sb.auth.signUp({
          email: emailInput.value.trim(),
          password: passwordInput.value,
          options: { data: { display_name: nameInput.value.trim() || 'Conta AeroNata' } }
        });
        if (error) throw error;
        if (data.session) {
          setMessage('Conta criada. Bem-vindo ao AeroNata ✦', 'success');
        } else {
          setMessage('Conta criada! Confira seu e-mail para confirmar o cadastro.', 'success');
        }
      } else {
        const { error } = await sb.auth.signInWithPassword({ email: emailInput.value.trim(), password: passwordInput.value });
        if (error) throw error;
        setMessage('Login realizado ✦', 'success');
      }
    } catch (err) {
      const friendly = {
        'Invalid login credentials': 'E-mail ou senha incorretos.',
        'User already registered': 'Esse e-mail já possui uma conta.',
        'Email not confirmed': 'Confirme seu e-mail antes de entrar.',
        'AERONATA_NETWORK': 'Não consegui alcançar o servidor de contas. Troque entre Wi‑Fi/5G e tente de novo; sua conta não foi criada.'
      }[err?.message] || err?.message || 'Não foi possível concluir. Tente novamente.';
      setMessage(friendly, 'error');
    } finally { submit.disabled = false; }
  });

  signout?.addEventListener('click', async () => {
    signout.disabled = true;
    await sb.auth.signOut();
    signout.disabled = false;
    dialog?.close();
  });

  sb.auth.getSession().then(({ data }) => showSession(data.session));
  sb.auth.onAuthStateChange((_event, session) => showSession(session));
  window.AeroNataAuth = { supabase: sb };
})();
