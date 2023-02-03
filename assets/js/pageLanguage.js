 /* 
  ================
    GET ELEMENTS
    OF THE PAGE
  ================
*/

/* ==================== CLASS 'br' AND 'en' ==================== */

let portuguese = document.querySelector(".br")
let english = document.querySelector(".en")

/* ==================== NAVIGATION LINKS ==================== */

let linkHome = document.getElementById("linkHome")
let linkAbout = document.getElementById("linkAbout")
let linkProjects = document.getElementById("linkProjects")
let linkTalkToMe = document.getElementById("linkTalkToMe")

/* ==================== SECTION 'HOME' ==================== */

let titleHome = document.getElementById("titleHome")
let subtitleHome = document.getElementById("subtitleHome")
let paragraphHome = document.getElementById("paragraphHome")
let myPhoto1 = document.querySelector(".my-photo-1")
let scrollMenssageHome = document.getElementById("scrollMenssageHome")

/* ==================== SECTION 'ABOUT' ==================== */

let titleAbout = document.getElementById("titleAbout")
let myPhoto2 = document.querySelector(".my-photo-2")
let personalPresentation = document.getElementById("personalPresentation")
let aboutMeParagraph = document.getElementById("aboutMeParagraph")
let listNameStrong = document.getElementById("listNameStrong")
let listAcademicEducationStrong = document.getElementById("listAcademicEducationStrong")
let listMyAcademicEducation = document.getElementById("listMyAcademicEducation")
let listStateStrong = document.getElementById("listStateStrong")
let listMyBirthStrong = document.getElementById("listMyBirthStrong")
let listMyBirth = document.getElementById("listMyBirth")
let listCountryStrong = document.getElementById("listCountryStrong")
let listCountry = document.getElementById("listCountry")
let btnDownloadCV = document.getElementById("btnDownloadCV")
let btnSendMessage = document.getElementById("btnSendMessage")

/* ==================== SECTION 'SKILLS' -> HARDSKILLS ==================== */

let htmlDescription = document.getElementById("htmlDescription")
let skillSemantic = document.getElementById("skillSemantic")
let skillHtmlAccessibility = document.getElementById("skillHtmlAccessibility")
let cssDescription = document.getElementById("cssDescription")
let skillResponsiveness = document.getElementById("skillResponsiveness")
let skillCssAccessibility = document.getElementById("skillCssAccessibility")
let jsDescription = document.getElementById("jsDescription")
let skillDom = document.getElementById("skillDom")
let bootstrapDescription = document.getElementById("bootstrapDescription")
let vsCodeDescription = document.getElementById("vsCodeDescription")
let gitDescription = document.getElementById("gitDescription")
let githubDescription = document.getElementById("githubDescription")
let linuxDescription = document.getElementById("linuxDescription")

/* ==================== SECTION 'SKILLS' -> SOFTSKILLS ==================== */

let skillTitleLifeLL = document.getElementById("skillTitleLifeLL")
let skillTitleBodyLifeLL = document.getElementById("skillTitleBodyLifeLL")
let lifeLLDescription = document.getElementById("lifeLLDescription")
let skillConstantStudy = document.getElementById("skillConstantStudy")
let skillNewAbility = document.getElementById("skillNewAbility")
let skillProblemsSolution = document.getElementById("skillProblemsSolution")
let skillTitleCommunication = document.getElementById("skillTitleCommunication")
let skillTitleBodyCommunication = document.getElementById("skillTitleBodyCommunication")
let communicationDescription = document.getElementById("communicationDescription")
let skillListener = document.getElementById("skillListener")
let skillDoubtsQuestion = document.getElementById("skillDoubtsQuestion")
let skillSimplifyExplanation = document.getElementById("skillSimplifyExplanation")
let skillTitleEmpathy = document.getElementById("skillTitleEmpathy")
let skillTitleBodyEmpathy = document.getElementById("skillTitleBodyEmpathy")
let empathyDescription = document.getElementById("empathyDescription")
let skillUsageFlows = document.getElementById("skillUsageFlows")
let skillAsTheUser = document.getElementById("skillAsTheUser")
let skillTitleEmotionalIntelligence = document.getElementById("skillTitleEmotionalIntelligence")
let skillTitleBodyEmotionalIntelligence = document.getElementById("skillTitleBodyEmotionalIntelligence")
let emotionalIDescription = document.getElementById("emotionalIDescription")
let skillLimits = document.getElementById("skillLimits")
let skillPositiveNegativeEmotions = document.getElementById("skillPositiveNegativeEmotions")
let skillTitleFocus = document.getElementById("skillTitleFocus")
let skillTitleBodyFocus = document.getElementById("skillTitleBodyFocus")
let focusDescription = document.getElementById("focusDescription")
let skillRigidFlexible = document.getElementById("skillRigidFlexible")
let skillTitleResilience = document.getElementById("skillTitleResilience")
let skillTitleBodyResilience = document.getElementById("skillTitleBodyResilience")
let resilienceDescription = document.getElementById("resilienceDescription")
let skillMeetGoal = document.getElementById("skillMeetGoal")
let skillIncessantSearch = document.getElementById("skillIncessantSearch")

/* ==================== SECTION 'PROJECTS' ==================== */

let titleProjects = document.getElementById("titleProjects")
let filterLabel = document.querySelector(".input-wrapper label")
let filterSearch = document.querySelector(".input-wrapper #filter")
let itemAll = document.getElementById("itemAll")
let itemCourses = document.getElementById("itemCourses")
let itemLiveCodings = document.getElementById("itemLiveCodings")
let itemPersonal = document.getElementById("itemPersonal")
let itemOthers = document.getElementById("itemOthers")
let devlinksImg = document.getElementById("projectDevlinks")
let netflixCloneV1Img = document.getElementById("projectNetflixCloneV1")
let pwaCovidImg = document.getElementById("projectPwaCovid19")
let pwaName = document.getElementById("pwa")
let covidName = document.getElementById("covid-19")
let helpUpImg = document.getElementById("projectHelpUp")
let pokemonUniverseImg = document.getElementById("projectPokemonUniverse")
let projectPortfolioWebsiteImg = document.getElementById("projectPortfolioWebsite")

/* ==================== SECTION 'TALK TO ME' ==================== */

let titleTalkToMe = document.getElementById("titleTalkToMe")
let labelName = document.getElementById("labelName")
let inputName = document.getElementById("name")
let infoName = document.getElementById("infoName")
let inputEmail = document.getElementById("e-mail")
let infoEmail = document.getElementById("infoEmail")
let labelMessage = document.getElementById("labelMessage")
let inputMessage = document.getElementById("message")
let infoMessage = document.getElementById("infoMessage")
let btnSubmit = document.getElementById("btnSubmit")
let btnReset = document.getElementById("btnReset")
let titleDialog = document.getElementById("titleDialog")
let paragraphDialog = document.getElementById("paragraphDialog")

/* ==================== ASIDE 'SWITCH COLORS' ==================== */
let switchColorTitle = document.getElementById("switchColorTitle")

/* 
  =============
    FUNCTIONS
  =============
*/

/* ==================== TRANSLATE THE PAGE TO 'PORTUGUESE' ==================== */
function languagePortuguese() {
    let attribute = portuguese.getAttribute("language")
    let languageSelected = document.querySelector(".language-selected")
    let idiom = document.querySelector("#idiom")
    let html = document.documentElement
  
    /* ==================== NAVIGATION LINKS ==================== */

    linkHome.textContent = data[attribute].linkHome
    linkAbout.textContent = data[attribute].linkAbout
    linkProjects.textContent = data[attribute].linkProjects
    linkTalkToMe.textContent = data[attribute].linkTalkToMe

    /* ==================== SECTION 'HOME' ==================== */

    titleHome.textContent = data[attribute].titleHome
    subtitleHome.textContent = data[attribute].subtitleHome
    paragraphHome.textContent = data[attribute].paragraphHome
    scrollMenssageHome.textContent = data[attribute].scrollMenssageHome
    myPhoto1.removeAttribute("alt", "")
    myPhoto1.setAttribute("alt", "Foto de Bruno Souza com os braços cruzados e sorridente, vestindo camisa branca e jaqueta jeans azul.")
    
    /* ==================== SECTION 'ABOUT' ==================== */

    titleAbout.textContent = data[attribute].titleAbout
    myPhoto2.removeAttribute("alt", "")
    myPhoto2.setAttribute("alt", "Autorretrato de Bruno Souza sorrindo, vestindo camisa branca e jaqueta jeans azul.")
    personalPresentation.textContent = data[attribute].personalPresentation
    aboutMeParagraph.textContent = data[attribute].aboutMeParagraph
    listNameStrong.textContent = data[attribute].listNameStrong
    listAcademicEducationStrong.textContent = data[attribute].listAcademicEducationStrong
    listMyAcademicEducation.textContent = data[attribute].listMyAcademicEducation
    listStateStrong.textContent = data[attribute].listStateStrong
    listMyBirthStrong.textContent = data[attribute].listMyBirthStrong
    listMyBirth.textContent = data[attribute].listMyBirth
    listCountryStrong.textContent = data[attribute].listCountryStrong
    listCountry.textContent = data[attribute].listCountry
    btnDownloadCV.removeAttribute("href", "")
    btnDownloadCV.setAttribute("href", "./assets/download/BrunoSouza_CV_ptBr.pdf")
    btnSendMessage.textContent = data[attribute].btnSendMessage

    /* ==================== SECTION 'SKILLS' -> HARDSKILLS ==================== */

    htmlDescription.textContent = data[attribute].htmlDescription
    skillSemantic.textContent = data[attribute].skillSemantic
    skillHtmlAccessibility.textContent = data[attribute].skillHtmlAccessibility
    cssDescription.textContent = data[attribute].cssDescription
    skillResponsiveness.textContent = data[attribute].skillResponsiveness
    skillCssAccessibility.textContent = data[attribute].skillCssAccessibility
    jsDescription.textContent = data[attribute].jsDescription
    skillDom.textContent = data[attribute].skillDom
    bootstrapDescription.textContent = data[attribute].bootstrapDescription
    vsCodeDescription.textContent = data[attribute].vsCodeDescription
    gitDescription.textContent = data[attribute].gitDescription
    githubDescription.textContent = data[attribute].githubDescription
    linuxDescription.textContent = data[attribute].linuxDescription

    /* ==================== SECTION 'SKILLS' -> SOFTSKILLS ==================== */

    skillTitleLifeLL.setAttribute('lang', 'en')
    skillTitleBodyLifeLL.setAttribute('lang', 'en')
    lifeLLDescription.textContent = data[attribute].lifeLLDescription
    skillConstantStudy.textContent = data[attribute].skillConstantStudy
    skillNewAbility.textContent = data[attribute].skillNewAbility
    skillProblemsSolution.textContent = data[attribute].skillProblemsSolution
    skillTitleCommunication.textContent = data[attribute].skillTitleCommunication
    skillTitleBodyCommunication.textContent = data[attribute].skillTitleBodyCommunication
    communicationDescription.textContent = data[attribute].communicationDescription
    skillListener.textContent = data[attribute].skillListener
    skillDoubtsQuestion.textContent = data[attribute].skillDoubtsQuestion
    skillSimplifyExplanation.textContent = data[attribute].skillSimplifyExplanation
    skillTitleEmpathy.textContent = data[attribute].skillTitleEmpathy
    skillTitleBodyEmpathy.textContent = data[attribute].skillTitleBodyEmpathy
    empathyDescription.textContent = data[attribute].empathyDescription
    skillUsageFlows.textContent = data[attribute].skillUsageFlows
    skillAsTheUser.textContent = data[attribute].skillAsTheUser
    skillTitleEmotionalIntelligence.textContent = data[attribute].skillTitleEmotionalIntelligence
    skillTitleBodyEmotionalIntelligence.textContent = data[attribute].skillTitleBodyEmotionalIntelligence
    emotionalIDescription.textContent = data[attribute].emotionalIDescription
    skillLimits.textContent = data[attribute].skillLimits
    skillPositiveNegativeEmotions.textContent = data[attribute].skillPositiveNegativeEmotions
    skillTitleFocus.textContent = data[attribute].skillTitleFocus
    skillTitleBodyFocus.textContent = data[attribute].skillTitleBodyFocus
    focusDescription.textContent = data[attribute].focusDescription
    skillRigidFlexible.textContent = data[attribute].skillRigidFlexible  
    skillTitleResilience.textContent = data[attribute].skillTitleResilience
    skillTitleBodyResilience.textContent = data[attribute].skillTitleBodyResilience
    resilienceDescription.textContent = data[attribute].resilienceDescription
    skillMeetGoal.textContent = data[attribute].skillMeetGoal
    skillIncessantSearch.textContent = data[attribute].skillIncessantSearch

    /* ==================== SECTION 'PROJECTS' ==================== */

    titleProjects.textContent = data[attribute].titleProjects
    filterSearch.removeAttribute('placeholder', '')
    filterSearch.setAttribute('placeholder', 'Pesquisar projeto')
    itemAll.textContent = data[attribute].itemAll
    itemCourses.textContent = data[attribute].itemCourses
    itemLiveCodings.setAttribute('lang', 'en')
    itemPersonal.textContent = data[attribute].itemPersonal
    itemOthers.textContent = data[attribute].itemOthers
    devlinksImg.removeAttribute('alt', '')
    devlinksImg.setAttribute('alt', 'Imagem do projeto DevLinks')
    helpUpImg.removeAttribute('alt', '')
    helpUpImg.setAttribute('alt', 'Imagem do projeto Help Up')
    netflixCloneV1Img.removeAttribute('alt', '')
    netflixCloneV1Img.setAttribute('alt', 'Imagem do projeto Netflix Clone versão 1')
    pokemonUniverseImg.removeAttribute('alt', '')
    pokemonUniverseImg.setAttribute('alt', 'Imagem do projeto Pokémon Universe')
    pwaCovidImg.removeAttribute('alt', '')
    pwaCovidImg.setAttribute('alt', 'Imagem do projeto Painel Covid-19')
    pwaName.setAttribute('lang', 'en')
    covidName.setAttribute('lang', 'en')
    projectPortfolioWebsiteImg.removeAttribute('alt', '')
    projectPortfolioWebsiteImg.setAttribute('alt', 'Imagem do projeto Portfolio Website')

    /* ==================== SECTION 'TALK TO ME' ==================== */

    titleTalkToMe.textContent = data[attribute].titleTalkToMe
    labelName.textContent = data[attribute].labelName
    inputName.removeAttribute('placeholder', '')
    inputName.setAttribute('placeholder', 'Digite seu nome')
    inputName.removeAttribute('title', '')
    inputName.setAttribute('title', 'Preencha com seu nome')
    infoName.textContent = data[attribute].infoName
    inputEmail.removeAttribute('placeholder', '')
    inputEmail.setAttribute('placeholder', 'Digite seu e-mail')
    inputEmail.removeAttribute('title', '')
    inputEmail.setAttribute('title', 'Preencha com seu nome')
    infoEmail.textContent = data[attribute].infoEmail
    labelMessage.textContent = data[attribute].labelMessage
    inputMessage.removeAttribute('placeholder', '')
    inputMessage.setAttribute('placeholder', 'Digite sua mensagem')
    inputMessage.removeAttribute('title', '')
    inputMessage.setAttribute('title', 'Preencha com sua mensagem')
    infoMessage.textContent = data[attribute].infoMessage
    btnSubmit.textContent = data[attribute].btnSubmit
    btnReset.textContent = data[attribute].btnReset
    titleDialog.textContent = data[attribute].titleDialog
    paragraphDialog.textContent = data[attribute].paragraphDialog

    /* ==================== ASIDE 'SWITCH COLORS' ==================== */

    switchColorTitle.textContent = data[attribute].switchColorTitle
    
    idiom.textContent = "Português"
    languageSelected.classList.remove("change-en")
    languageSelected.classList.add("change-br")
    
    html.removeAttribute('lang', 'en')
    html.setAttribute('lang', 'pt-BR')
}

/* ==================== TRANSLATE THE PAGE TO 'ENGLISH' ==================== */
function languageEnglish() {
    let attribute = english.getAttribute("language")
    let languageSelected = document.querySelector(".language-selected")
    let idiom = document.querySelector("#idiom")
    let html = document.documentElement

    /* ==================== NAVIGATION LINKS ==================== */

    linkHome.textContent = data[attribute].linkHome
    linkAbout.textContent = data[attribute].linkAbout
    linkProjects.textContent = data[attribute].linkProjects
    linkTalkToMe.textContent = data[attribute].linkTalkToMe

    /* ==================== SECTION 'HOME' ==================== */

    titleHome.textContent = data[attribute].titleHome
    subtitleHome.textContent = data[attribute].subtitleHome
    paragraphHome.textContent = data[attribute].paragraphHome
    scrollMenssageHome.textContent = data[attribute].scrollMenssageHome
    myPhoto1.removeAttribute("alt", "")
    myPhoto1.setAttribute("alt", "Photo of Bruno Souza with his arms crossed and smiling, wearing a white shirt and blue denim jacket.")
  
    /* ==================== SECTION 'ABOUT' ==================== */

    titleAbout.textContent = data[attribute].titleAbout
    myPhoto2.removeAttribute("alt", "")
    myPhoto2.setAttribute("alt", "Self-portrait of Bruno Souza smiling, wearing a white shirt and blue jean jacket.")
    personalPresentation.textContent = data[attribute].personalPresentation
    aboutMeParagraph.textContent = data[attribute].aboutMeParagraph
    listNameStrong.textContent = data[attribute].listNameStrong
    listAcademicEducationStrong.textContent = data[attribute].listAcademicEducationStrong
    listMyAcademicEducation.textContent = data[attribute].listMyAcademicEducation
    listStateStrong.textContent = data[attribute].listStateStrong
    listMyBirthStrong.textContent = data[attribute].listMyBirthStrong
    listMyBirth.textContent = data[attribute].listMyBirth
    listCountryStrong.textContent = data[attribute].listCountryStrong
    listCountry.textContent = data[attribute].listCountry
    btnDownloadCV.removeAttribute("href", "")
    btnDownloadCV.setAttribute("href", "./assets/download/BrunoSouza_CV_en.pdf")
    btnSendMessage.textContent = data[attribute].btnSendMessage

    /* ==================== SECTION 'SKILLS' -> HARDSKILLS ==================== */

    htmlDescription.textContent = data[attribute].htmlDescription
    skillSemantic.textContent = data[attribute].skillSemantic
    skillHtmlAccessibility.textContent = data[attribute].skillHtmlAccessibility
    cssDescription.textContent = data[attribute].cssDescription
    skillResponsiveness.textContent = data[attribute].skillResponsiveness
    skillCssAccessibility.textContent = data[attribute].skillCssAccessibility
    jsDescription.textContent = data[attribute].jsDescription
    skillDom.textContent = data[attribute].skillDom
    bootstrapDescription.textContent = data[attribute].bootstrapDescription
    vsCodeDescription.textContent = data[attribute].vsCodeDescription
    gitDescription.textContent = data[attribute].gitDescription
    githubDescription.textContent = data[attribute].githubDescription
    linuxDescription.textContent = data[attribute].linuxDescription

    /* ==================== SECTION 'SKILLS' -> SOFTSKILLS ==================== */

    skillTitleLifeLL.removeAttribute('lang')
    skillTitleBodyLifeLL.removeAttribute('lang')
    lifeLLDescription.textContent = data[attribute].lifeLLDescription
    skillConstantStudy.textContent = data[attribute].skillConstantStudy
    skillNewAbility.textContent = data[attribute].skillNewAbility
    skillProblemsSolution.textContent = data[attribute].skillProblemsSolution
    skillTitleCommunication.textContent = data[attribute].skillTitleCommunication
    skillTitleBodyCommunication.textContent = data[attribute].skillTitleBodyCommunication
    communicationDescription.textContent = data[attribute].communicationDescription
    skillListener.textContent = data[attribute].skillListener
    skillDoubtsQuestion.textContent = data[attribute].skillDoubtsQuestion
    skillSimplifyExplanation.textContent = data[attribute].skillSimplifyExplanation
    skillTitleEmpathy.textContent = data[attribute].skillTitleEmpathy
    skillTitleBodyEmpathy.textContent = data[attribute].skillTitleBodyEmpathy
    empathyDescription.textContent = data[attribute].empathyDescription
    skillUsageFlows.textContent = data[attribute].skillUsageFlows
    skillAsTheUser.textContent = data[attribute].skillAsTheUser
    skillTitleEmotionalIntelligence.textContent = data[attribute].skillTitleEmotionalIntelligence
    skillTitleBodyEmotionalIntelligence.textContent = data[attribute].skillTitleBodyEmotionalIntelligence
    emotionalIDescription.textContent = data[attribute].emotionalIDescription
    skillLimits.textContent = data[attribute].skillLimits
    skillPositiveNegativeEmotions.textContent = data[attribute].skillPositiveNegativeEmotions
    skillTitleFocus.textContent = data[attribute].skillTitleFocus
    skillTitleBodyFocus.textContent = data[attribute].skillTitleBodyFocus
    focusDescription.textContent = data[attribute].focusDescription
    skillRigidFlexible.textContent = data[attribute].skillRigidFlexible
    skillTitleResilience.textContent = data[attribute].skillTitleResilience
    skillTitleBodyResilience.textContent = data[attribute].skillTitleBodyResilience
    resilienceDescription.textContent = data[attribute].resilienceDescription
    skillMeetGoal.textContent = data[attribute].skillMeetGoal
    skillIncessantSearch.textContent = data[attribute].skillIncessantSearch
    
    /* ==================== SECTION 'PROJECTS' ==================== */

    titleProjects.textContent = data[attribute].titleProjects
    filterLabel.textContent = data[attribute].filterLabel
    filterSearch.removeAttribute('placeholder', '')
    filterSearch.setAttribute('placeholder', 'Search projects')
    itemAll.textContent = data[attribute].itemAll
    itemCourses.textContent = data[attribute].itemCourses
    itemLiveCodings.removeAttribute('lang')
    itemPersonal.textContent = data[attribute].itemPersonal
    itemOthers.textContent = data[attribute].itemOthers
    devlinksImg.removeAttribute('alt', '')
    devlinksImg.setAttribute('alt', 'Image from the DevLinks project')
    helpUpImg.removeAttribute('alt', '')
    helpUpImg.setAttribute('alt', 'Help Up project image')
    netflixCloneV1Img.removeAttribute('alt', '')
    netflixCloneV1Img.setAttribute('alt', 'Project image Netflix Clone version 1')
    pokemonUniverseImg.removeAttribute('alt', '')
    pokemonUniverseImg.setAttribute('alt', 'Image from the Pokémon Universe project')
    pwaCovidImg.removeAttribute('alt', '')
    pwaCovidImg.setAttribute('alt', 'Image of the Covid-19 Dashboard project')
    pwaName.removeAttribute('lang')
    covidName.removeAttribute('lang')
    projectPortfolioWebsiteImg.removeAttribute('alt', '')
    projectPortfolioWebsiteImg.setAttribute('alt', 'Image from the Portfolio Website project')

    /* ==================== SECTION 'TALK TO ME' ==================== */

    titleTalkToMe.textContent = data[attribute].titleTalkToMe
    labelName.textContent = data[attribute].labelName
    inputName.removeAttribute('placeholder', '')
    inputName.setAttribute('placeholder', 'Type your name')
    inputName.removeAttribute('title', '')
    inputName.setAttribute('title', 'Fill in your name')
    infoName.textContent = data[attribute].infoName
    inputEmail.removeAttribute('placeholder', '')
    inputEmail.setAttribute('placeholder', 'Type your e-mail')
    inputEmail.removeAttribute('title', '')
    inputEmail.setAttribute('title', 'Fill in your e-mail')
    infoEmail.textContent = data[attribute].infoEmail
    labelMessage.textContent = data[attribute].labelMessage
    inputMessage.removeAttribute('placeholder', '')
    inputMessage.setAttribute('placeholder', 'Type your message')
    inputMessage.removeAttribute('title', '')
    inputMessage.setAttribute('title', 'Fill in your message')
    infoMessage.textContent = data[attribute].infoMessage
    btnSubmit.textContent = data[attribute].btnSubmit
    btnReset.textContent = data[attribute].btnReset
    titleDialog.textContent = data[attribute].titleDialog
    paragraphDialog.textContent = data[attribute].paragraphDialog

    /* ==================== ASIDE 'SWITCH COLORS' ==================== */

    switchColorTitle.textContent = data[attribute].switchColorTitle
      
    idiom.textContent = "English"
    languageSelected.classList.remove("change-br")
    languageSelected.classList.add("change-en")

    html.removeAttribute('lang', 'pt-BR')
    html.setAttribute('lang', 'en')
}

/* 
  =============
    DATABASE
  =============
*/

/* ==================== INFORMATION IN 'PORTUGUESE' AND 'ENGLISH' ==================== */

let data = {
    portuguese: {
        linkHome: "Início", // NAVIGATION
        linkAbout: "Sobre",
        linkProjects: "Projetos",
        linkTalkToMe: "Fale Comigo",
        titleHome: "Oi, eu sou o", // HOME
        subtitleHome: "Desenvolvedor Front-End",
        paragraphHome: "Apaixonado por aprender, criar e desbravar desafios na construção de sistemas e interfaces no mundo da Web!",
        scrollMenssageHome: "Role para baixo",
        titleAbout: "Sobre Mim", // ABOUT 
        personalPresentation: "Olá, eu sou o Bruno",
        aboutMeParagraph: "Desde que me interessei pelo Desenvolvimento Web, estudo diariamente para ser um programador melhor, um estudante melhor, uma pesssoa melhor. Há tempos venho desenvolvendo diversos projetos, além de buscar minha própria evolução como pessoa e com as pessoas. Hoje, curso Análise e Desenvolvimento de Sistemas na UNINASSAU e continuo nessa jornada, pois me considero um eterno aprendiz!",
        listNameStrong: "Nome:",
        listAcademicEducationStrong: "Formação:",
        listMyAcademicEducation: "Técnico em Redes de Computadores",
        listStateStrong: "Estado:",
        listMyBirthStrong: "Nascimento:",
        listMyBirth: "13 Outubro, 2003",
        listCountryStrong: "País:",
        listCountry: "Brasil",
        btnSendMessage: "Envie uma mensagem",
        htmlDescription: "Linguagem de Marcação de Hipertexto utilizada na estruturação de páginas na Web.", // HARDSKILLS
        skillSemantic: "Semântica em",
        skillHtmlAccessibility: "Acessibilidade",
        cssDescription: "Linguagem de Folha de Estilo em Cascatas utilizada na estilização de páginas escritas em uma linguagem de marcação.",
        skillResponsiveness: "Responsividade",
        skillCssAccessibility: "Acessibilidade",
        jsDescription: "Linguagem de programação utilizada para dar interatividade nas páginas na Web, melhorando a experiência dos usuários durante a navegação.",
        skillDom: "Manipulação da DOM (Document Object Model)",
        bootstrapDescription: "Framework web utilizado na letrução de interfaces utilizando componentes, com o princípio da responsividade em primeiro plano.",
        vsCodeDescription: "Editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e MacOS, com suporte para várias tecnologias atuais.",
        gitDescription: "Sistema de controle de versões distribuído usado para criar registros históricos de edições de qualquer tipo de arquivo.",
        githubDescription: "Plataforma de hospedagem de código-fonte e arquivos controlados historicamente pelo Git.",
        linuxDescription: "Sistema Operacional com código aberto, ou seja, com possibilidade para modificações e distribuições de forma livre.",
        lifeLLDescription: "Tendo como princípio o aprendizado ao longo da vida, essa skill proconiza a educação contínua.", // SOFTSKILLS
        skillConstantStudy: "Busco estudar constantemente.",
        skillNewAbility: "Desenvolvo novas habilidades.",
        skillProblemsSolution: "Busco novas formas de resolver um problema.",
        skillTitleCommunication: "Comunicação",
        skillTitleBodyCommunication: "Comunicação",
        communicationDescription: "Permite quebrar barreiras departamentais e colaborar junto com o time na troca de ideias e recebimento de avaliações externas.",
        skillListener: "Sou um bom ouvinte.",
        skillDoubtsQuestion: "Exponho minhas dúvidas e perguntas.",
        skillSimplifyExplanation: "Esforço em simplificar explicações.",
        skillTitleEmpathy: "Empatia",
        skillTitleBodyEmpathy: "Empatia",
        empathyDescription: "Se colocar no lugar da outra pessoa, observando o mundo com outra perspectiva e com o respeito acima de tudo.",
        skillUsageFlows: "Imagino possíveis fluxos de uso de um produto.",
        skillAsTheUser: "Esforço em pensar como o usuário.",
        skillTitleEmotionalIntelligence: "Inteligência Emocional",
        skillTitleBodyEmotionalIntelligence: "Inteligência Emocional",
        emotionalIDescription: "Gerencia das emoções com objetivo da não interferência na entrega de resultados e desenvolver equilíbrio na rotina.",
        skillLimits: "Autoconhecimento dos meus limites.",
        skillPositiveNegativeEmotions: "Diferencio emoções positivas de negativas.",
        skillTitleFocus: "Foco",
        skillTitleBodyFocus: "Foco",
        focusDescription: "Dedicação e constância para realizar qualquer objetivo único.",
        skillRigidFlexible: "Rígido nas metas e ações, mas flexível nas expectativas.",
        skillTitleResilience: "Resiliência",
        skillTitleBodyResilience: "Resiliência",
        resilienceDescription: "Capacidade de gerenciamento de momentos difíceis, evitando a sua desistência e impulsionando você a seguir adiante.",
        skillMeetGoal: "Penso em cumprir o objetivo, apesar dos obstáculos.",
        skillIncessantSearch: "Procuro incessantemente por soluções de problemas.",
        titleProjects: "Projetos", // PROJECTS
        filterLabel: "Pesquisar projeto",
        itemAll: "Todos",
        itemCourses: "Cursos",
        itemPersonal: "Pessoais",
        itemOthers: "Outros",
        titleTalkToMe: "Fale Comigo", // TALK TO ME
        labelName: "Nome",
        infoName: "Nome deve ter pelo menos 3 caracteres.",
        infoEmail: "Por favor, forneça um e-mail válido.",
        labelMessage: "Mensagem",
        infoMessage: "Preencha sua mensagem.",
        btnSubmit: "Enviar mensagem",
        btnReset: "Apagar",
        titleDialog: "Agradeço pela sua mensagem!",
        paragraphDialog: "Em breve entrarei em contato",
        switchColorTitle: "Escolha sua cor:"
    },
    english: {
        linkHome: "Home", // NAVIGATION
        linkAbout: "About",
        linkProjects: "Projects",
        linkTalkToMe: "Talk To Me",
        titleHome: "Hi, I'm", // HOME
        subtitleHome: "Front-End Developer",
        paragraphHome: "Passionate about learning, creating and tackling challenges in building systems and interfaces in the world of the Web!",
        scrollMenssageHome: "Scroll Down",
        titleAbout: "About Me", // ABOUT 
        personalPresentation: "Hi, I'm Bruno",
        aboutMeParagraph: "Since I got interested in Web Development, I study daily to be a better programmer, a better student, a better person. I have been developing several projects for some time, in addition to seeking my own evolution as a person and with people. Today, I'm studying Systems Analysis and Development at UNINASSAU and I continue on this journey, because I consider myself an eternal apprentice!",
        listNameStrong: "Name:",
        listAcademicEducationStrong: "Academic Education:",
        listMyAcademicEducation: "Computer Network Technician",
        listStateStrong: "State:", 
        listMyBirthStrong: "Birth:",
        listMyBirth: "October 13, 2003",
        listCountryStrong: "Country:",
        listCountry: "Brazil",
        btnSendMessage: "Send a message",
        htmlDescription: "Hypertext Markup Language used to structure web pages.", // HARDSKILLS
        skillSemantic: "Semantic",
        skillHtmlAccessibility: "Acessibility",
        cssDescription: "Cascading Style Sheet Language used for styling pages written in a markup language.",
        skillResponsiveness: "Responsiveness",
        skillCssAccessibility: "Acessibility",
        jsDescription: "Programming language used to provide interactivity on web pages, improving user experience during navigation.",
        skillDom: "DOM (Document Object Model) Manipulation",
        bootstrapDescription: "Web framework used to build interfaces using components, with the principle of responsiveness in the foreground.",
        vsCodeDescription: "Source code editor developed by Microsoft for Windows, Linux and MacOS, with support for several current technologies.",
        gitDescription: "Distributed version control system used to create historical records of edits of any type of file.",
        githubDescription: "Hosting platform for source code and files historically controlled by Git.",
        linuxDescription: "Open source Operating System, that is, with the possibility of free modifications and distributions.",
        lifeLLDescription: "Based on the principle of lifelong learning, this skill promotes continuous education.", // SOFTSKILLS
        skillConstantStudy: "I seek to study constantly.",
        skillNewAbility: "I develop new skills.",
        skillProblemsSolution: "I look for new ways to solve a problem.",
        skillTitleCommunication: "Communication",
        skillTitleBodyCommunication: "Communication",
        communicationDescription: "It allows breaking departmental barriers and collaborating with the team in exchanging ideas and receiving external evaluations.",
        skillListener: "I'm a good listener.",
        skillDoubtsQuestion: "I expose my doubts and questions.",
        skillSimplifyExplanation: "Effort to simplify explanations.",
        skillTitleEmpathy: "Empathy",
        skillTitleBodyEmpathy: "Empathy",
        empathyDescription: "Put yourself in the other person's shoes, observing the world with another perspective and with respect above all else.",
        skillUsageFlows: "I imagine possible flows of use of a product.",
        skillAsTheUser: "Effort to think like the user.",
        skillTitleEmotionalIntelligence: "Emotional Intelligence",
        skillTitleBodyEmotionalIntelligence: "Emotional Intelligence",
        emotionalIDescription: "Manages emotions with the aim of not interfering in the delivery of results and developing balance in the routine.",
        skillLimits: "Self-awareness of my limits.",
        skillPositiveNegativeEmotions: "Differentiate between positive and negative emotions.",
        skillTitleFocus: "Focus",
        skillTitleBodyFocus: "Focus",
        focusDescription: "Dedication and constancy to accomplish any single goal.",
        skillRigidFlexible: "Rigid on goals and actions, but flexible on expectations.",
        skillTitleResilience: "Resilience",
        skillTitleBodyResilience: "Resilience",
        resilienceDescription: "Ability to manage difficult times, preventing you from giving up and encouraging you to move forward.",
        skillMeetGoal: "I think about fulfilling the objective, despite the obstacles.",
        skillIncessantSearch: "I am constantly looking for solutions to problems.",
        titleProjects: "Projects", // PROJECTS
        filterLabel: "Search projects",
        itemAll: "All",
        itemCourses: "Courses",
        itemPersonal: "Personal",
        itemOthers: "Others",
        titleTalkToMe: "Talk To Me", // TALK TO ME
        labelName: "Name",
        infoName: "Name must be at least 3 characters long.",
        infoEmail: "Please, provide a valid e-mail.",
        labelMessage: "Message",
        infoMessage: "Fill in your message.",
        btnSubmit: "Send message",
        btnReset: "Erase",
        titleDialog: "Thanks for your message!",
        paragraphDialog: "I will contact you soon",
        switchColorTitle: "Select your color:"
    }
}

english.addEventListener("click", languageEnglish)
portuguese.addEventListener("click", languagePortuguese)