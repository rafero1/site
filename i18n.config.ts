export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'welcome',
      aboutMe: 'about me',
      funStuff: 'fun stuff',
      portfolio: 'portfolio',
      portfolioPrompt: '> the programming skull says...',
      portfolioDialogue: 'a collection of my projects',
      introMsg: 'hello, i\'m a developer based in Brazil and i enjoy programming neat things.',
    },
    pt_BR: {
      welcome: 'bem-vindo',
      aboutMe: 'sobre mim',
      funStuff: 'coisas divertidas',
      portfolio: 'portfolio',
      portfolioPrompt: '> a caveira programadora diz...',
      portfolioDialogue: 'uma coleção dos meus projetos',
      introMsg: 'olá, eu sou um desenvolvedor baseado no Brasil e eu gosto de programar coisas legais.',
    }
  }
}));
