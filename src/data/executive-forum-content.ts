export type Locale = "es" | "en"

export type Speaker = {
  name: string
  company: string
  initials: string
  bio: string
  image?: string
  imagePosition?: "center" | "top"
}

export type Panel = {
  eyebrow: string
  title: string
  dialogue?: boolean
  speakers: Speaker[]
}

type LocalizedSpeaker = Record<Locale, Speaker>
type LocalizedPanel = Record<Locale, Panel>

function pick<T>(dict: Record<Locale, T>, locale: Locale): T {
  return dict[locale]
}

const apertura: LocalizedSpeaker = {
  es: {
    name: "Ronaldo Elías Águila",
    company: "Presidente Fundador de CONAJOMX",
    initials: "REA",
    image: "/assets/conajomx/people/ronaldo-elias-aguila.webp",
    imagePosition: "top",
    bio: "Bienvenida al CONAJOMX Executive Forum y marco de la jornada: diálogo entre el liderazgo mexicano y las instituciones de Cambridge y Boston.",
  },
  en: {
    name: "Ronaldo Elías Águila",
    company: "Founding President of CONAJOMX",
    initials: "REA",
    image: "/assets/conajomx/people/ronaldo-elias-aguila.webp",
    imagePosition: "top",
    bio: "Welcome to the CONAJOMX Executive Forum and framing of the day: dialogue between Mexican leadership and the institutions of Cambridge and Boston.",
  },
}

const bookPresentation: LocalizedSpeaker = {
  es: {
    name: "Dr. Jorge Reyes Negrete",
    company: "Derecho, Derechos Humanos y Cultura",
    initials: "JRN",
    image: "/assets/conajomx/people/jorge-reyes-negrete.webp",
    bio: "Doctor en Derecho, investigador SNII y autor especializado en derechos humanos y filosofía del derecho.",
  },
  en: {
    name: "Dr. Jorge Reyes Negrete",
    company: "Law, Human Rights and Culture",
    initials: "JRN",
    image: "/assets/conajomx/people/jorge-reyes-negrete.webp",
    bio: "Doctor of Law, SNII researcher, and author specializing in human rights and the philosophy of law.",
  },
}

const clausura: LocalizedSpeaker = {
  es: {
    name: "Carlos Hernández Ramírez",
    company: "Asesor Legislativo y Asuntos Internacionales, Senado de México",
    initials: "CHR",
    image: "/assets/conajomx/people/carlos-hernandez-ramirez.webp",
    bio: "Asesor legislativo y enlace internacional en el Senado de México, trabajando en vínculos institucionales y empresariales entre México y sus socios en el extranjero.",
  },
  en: {
    name: "Carlos Hernández Ramírez",
    company: "Legislative Advisor and International Affairs, Senate of Mexico",
    initials: "CHR",
    image: "/assets/conajomx/people/carlos-hernandez-ramirez.webp",
    bio: "Legislative advisor and international liaison at the Senate of Mexico, working on institutional and business ties between Mexico and its partners abroad.",
  },
}

const panels: LocalizedPanel[] = [
  {
    es: {
      eyebrow: "Panel I · Diálogo de Dos",
      title: "Migración desde el Sector Público: México y Estados Unidos",
      dialogue: true,
      speakers: [
        {
          name: "Carlos Hernández Ramírez",
          company: "Asesor Legislativo y Asuntos Internacionales, Senado de México",
          initials: "CHR",
          image: "/assets/conajomx/people/carlos-hernandez-ramirez.webp",
          bio: "Asesor legislativo y enlace internacional en el Senado de México, trabajando en vínculos institucionales y empresariales entre México y sus socios en el extranjero.",
        },
        {
          name: "Mateo Rull Garza",
          company: "Asesor y Gerente de Defensoría Ciudadana, Oficina de la Congresista Ayanna Pressley",
          initials: "MRG",
          image: "/assets/conajomx/people/mateo-rull-garza.webp",
          bio: "Defensor de la ciudadanía del Distrito 7 de Massachusetts, enfocado en migración, acceso a alimentos, agricultura urbana, educación y justicia climática.",
        },
      ],
    },
    en: {
      eyebrow: "Panel I · A Dialogue of Two",
      title: "Migration from the Public Sector: Mexico and the United States",
      dialogue: true,
      speakers: [
        {
          name: "Carlos Hernández Ramírez",
          company: "Legislative Advisor and International Affairs, Senate of Mexico",
          initials: "CHR",
          image: "/assets/conajomx/people/carlos-hernandez-ramirez.webp",
          bio: "Legislative advisor and international liaison at the Senate of Mexico, working on institutional and business ties between Mexico and its partners abroad.",
        },
        {
          name: "Mateo Rull Garza",
          company: "Advisor & Constituent Advocacy Manager, Office of Congresswoman Ayanna Pressley",
          initials: "MRG",
          image: "/assets/conajomx/people/mateo-rull-garza.webp",
          bio: "Constituent advocate for Massachusetts' 7th congressional district, working on immigration, food access, urban agriculture, education, and climate justice.",
        },
      ],
    },
  },
  {
    es: {
      eyebrow: "Panel II",
      title: "Economía Circular y Transición Energética",
      speakers: [
        {
          name: "Miguel Alejandro Vargas Cabrera",
          company: "SUNSUN Energy",
          initials: "MVC",
          image: "/assets/conajomx/people/miguel-alejandro-vargas-cabrera.webp",
          bio: "Empresario del sector energético, enfocado en soluciones de energía solar y sostenibilidad para el desarrollo regional.",
        },
        {
          name: "Eduardo Solano González",
          company: "NSM Ecosistemas Circulares",
          initials: "ESG",
          image: "/assets/conajomx/people/eduardo-solano-gonzalez.webp",
          bio: "Secretario de Economía de CNEM 2026, impulsor de la agenda de sostenibilidad y economía circular en foros como Latam Green.",
        },
      ],
    },
    en: {
      eyebrow: "Panel II",
      title: "Circular Economy and Energy Transition",
      speakers: [
        {
          name: "Miguel Alejandro Vargas Cabrera",
          company: "SUNSUN Energy",
          initials: "MVC",
          image: "/assets/conajomx/people/miguel-alejandro-vargas-cabrera.webp",
          bio: "Solar energy and sustainability solutions for regional development.",
        },
        {
          name: "Eduardo Solano González",
          company: "NSM Ecosistemas Circulares",
          initials: "ESG",
          image: "/assets/conajomx/people/eduardo-solano-gonzalez.webp",
          bio: "Secretary of Economy, CNEM 2026, and advocate for the circular economy agenda.",
        },
      ],
    },
  },
  {
    es: {
      eyebrow: "Panel III",
      title: "Capital, Inversión y Gestión Patrimonial",
      speakers: [
        {
          name: "Daniel Olea Montes",
          company: "Mayorazgo Wealth Management",
          initials: "DOM",
          image: "/assets/conajomx/people/daniel-olea-montes.webp",
          bio: "Vicepresidente de CONAJOMX y especialista en gestión patrimonial y planeación financiera para familias empresarias.",
        },
        {
          name: "Diego García del Río",
          company: "Urbion Capital ETP",
          initials: "DGR",
          image: "/assets/conajomx/people/diego-garcia-del-rio.webp",
          bio: "Especialista en estructuración de capital e inversión, con enfoque en proyectos de alto rendimiento en mercados internacionales.",
        },
        {
          name: "Francisco Javier Porras Velázquez",
          company: "Grupo CYSE",
          initials: "FPV",
          image: "/assets/conajomx/people/javier-porras-velazquez.webp",
          bio: "Presidente del Consejo de Empresarios de CONAJOMX (CNEM), impulsando alianzas estratégicas entre el sector empresarial y las instituciones públicas de México.",
        },
      ],
    },
    en: {
      eyebrow: "Panel III",
      title: "Capital, Investment and Wealth Management",
      speakers: [
        {
          name: "Daniel Olea Montes",
          company: "Mayorazgo Wealth Management",
          initials: "DOM",
          image: "/assets/conajomx/people/daniel-olea-montes.webp",
          bio: "Vice President of CONAJOMX, specializing in wealth management and financial planning for business families.",
        },
        {
          name: "Diego García del Río",
          company: "Urbion Capital ETP",
          initials: "DGR",
          image: "/assets/conajomx/people/diego-garcia-del-rio.webp",
          bio: "Capital structuring and investment, focused on high-yield projects in international markets.",
        },
        {
          name: "Francisco Javier Porras Velázquez",
          company: "Grupo CYSE",
          initials: "FPV",
          image: "/assets/conajomx/people/javier-porras-velazquez.webp",
          bio: "President of the CONAJOMX Council of Entrepreneurs (CNEM), building alliances between business and public institutions.",
        },
      ],
    },
  },
  {
    es: {
      eyebrow: "Panel IV · Diálogo de Dos",
      title: "Infraestructura, Bienes Raíces y Desarrollo Urbano",
      dialogue: true,
      speakers: [
        {
          name: "Raúl Vargas Barrera",
          company: "Varcla Constructores",
          initials: "RVB",
          image: "/assets/conajomx/people/raul-vargas-barrera.webp",
          bio: "Empresario del sector de la construcción, impulsando proyectos de infraestructura y desarrollo regional al frente de Varcla Constructores.",
        },
        {
          name: "Jorge Handal Canavati",
          company: "Cien Grupo Inmobiliario",
          initials: "JHC",
          image: "/assets/conajomx/people/jorge-handal-canavati.webp",
          imagePosition: "top",
          bio: "Empresario del sector inmobiliario, con proyectos de desarrollo urbano y vivienda al frente de Cien Grupo Inmobiliario.",
        },
      ],
    },
    en: {
      eyebrow: "Panel IV · A Dialogue of Two",
      title: "Infrastructure, Real Estate and Urban Development",
      dialogue: true,
      speakers: [
        {
          name: "Raúl Vargas Barrera",
          company: "Varcla Constructores",
          initials: "RVB",
          image: "/assets/conajomx/people/raul-vargas-barrera.webp",
          bio: "Construction entrepreneur leading infrastructure and regional development projects.",
        },
        {
          name: "Jorge Handal Canavati",
          company: "Cien Grupo Inmobiliario",
          initials: "JHC",
          image: "/assets/conajomx/people/jorge-handal-canavati.webp",
          imagePosition: "top",
          bio: "Real estate entrepreneur with urban development and housing projects across Mexico.",
        },
      ],
    },
  },
  {
    es: {
      eyebrow: "Panel V · Diálogo de Dos",
      title: "Emprendimiento y Empresa Familiar",
      dialogue: true,
      speakers: [
        {
          name: "Fernando Arista Reyes",
          company: "AR Seguridad",
          initials: "FAR",
          image: "/assets/conajomx/people/fernando-arista-reyes.webp",
          bio: "Empresario especializado en soluciones de seguridad corporativa y patrimonial para organizaciones e instituciones en México.",
        },
        {
          name: "Mirian Escalante Rejón",
          company: "Corporativo Escalante",
          initials: "MER",
          image: "/assets/conajomx/people/mirian-escalante-rejon.webp",
          imagePosition: "top",
          bio: "Vicepresidenta del Consejo de Empresarios de CONAJOMX (CNEM), al frente de Corporativo Escalante.",
        },
      ],
    },
    en: {
      eyebrow: "Panel V · A Dialogue of Two",
      title: "Entrepreneurship and Family Enterprise",
      dialogue: true,
      speakers: [
        {
          name: "Fernando Arista Reyes",
          company: "AR Seguridad",
          initials: "FAR",
          image: "/assets/conajomx/people/fernando-arista-reyes.webp",
          bio: "Corporate and asset security solutions for organizations and institutions in Mexico.",
        },
        {
          name: "Mirian Escalante Rejón",
          company: "Corporativo Escalante",
          initials: "MER",
          image: "/assets/conajomx/people/mirian-escalante-rejon.webp",
          imagePosition: "top",
          bio: "Vice President of the CONAJOMX Council of Entrepreneurs (CNEM), leading Corporativo Escalante.",
        },
      ],
    },
  },
]

const ui = {
  es: {
    heroEyebrow: "CONAJOMX",
    heroTitle: "Executive Forum",
    heroIntro: "Liderazgo mexicano con visión global, en el corazón de Harvard.",
    ctaRegister: "Registrarme",
    ctaMoreInfo: "Quiero más información",
    sedeEyebrow: "Sede",
    sedeTitle: "Longfellow Hall, Harvard University",
    sedeDate: "4 de septiembre, 2026 · 8:00 AM – 2:00 PM · Cambridge, MA",
    aperturaEyebrow: "Fase Inaugural",
    aperturaTitle: "Palabras de Bienvenida",
    bookEyebrow: "Presentación de Libro",
    bookTitle: "Derecho, Derechos Humanos y Cultura",
    clausuraEyebrow: "Clausura Oficial",
    clausuraTitle: "Clausura del Foro",
    bannerTitle: "Liderazgo · Visión · Impacto",
    bannerSubtitle: "Diálogo ejecutivo para un futuro sostenible y competitivo",
  },
  en: {
    heroEyebrow: "CONAJOMX",
    heroTitle: "Executive Forum",
    heroIntro: "Mexican leadership with a global vision, at the heart of Harvard.",
    ctaRegister: "Register",
    ctaMoreInfo: "I want more information",
    sedeEyebrow: "Venue",
    sedeTitle: "Longfellow Hall, Harvard University",
    sedeDate: "September 4, 2026 · 8:00 AM – 2:00 PM · Cambridge, MA",
    aperturaEyebrow: "Opening Phase",
    aperturaTitle: "Welcome Remarks",
    bookEyebrow: "Book Presentation",
    bookTitle: "Law, Human Rights and Culture",
    clausuraEyebrow: "Official Closing",
    clausuraTitle: "Closing of the Forum",
    bannerTitle: "Leadership · Vision · Impact",
    bannerSubtitle: "Executive dialogue for a sustainable and competitive future",
  },
}

const registro = {
  es: {
    kicker: "CONAJOMX Executive Forum",
    title: "Registro de Estudiantes",
    description:
      "¿Eres estudiante y te interesa participar en el Executive Forum? Cambridge & Boston Leadership Experience, en Longfellow Hall, Harvard University, el 4 de septiembre de 2026. Déjanos tus datos y te contactaremos con los siguientes pasos.",
    venueBadge: "Longfellow Hall, Harvard University",
    dateBadge: "4 de septiembre, 2026 · 8:00 AM – 2:00 PM",
  },
  en: {
    kicker: "CONAJOMX Executive Forum",
    title: "Student Registration",
    description:
      "Are you a student interested in taking part in the Executive Forum? Cambridge & Boston Leadership Experience, at Longfellow Hall, Harvard University, on September 4, 2026. Leave us your details and we'll reach out with next steps.",
    venueBadge: "Longfellow Hall, Harvard University",
    dateBadge: "September 4, 2026 · 8:00 AM – 2:00 PM",
  },
}

const form = {
  es: {
    nombre: "Nombre completo",
    nombrePlaceholder: "Tu nombre completo",
    email: "Correo electrónico",
    emailPlaceholder: "tucorreo@ejemplo.com",
    telefono: "Teléfono / WhatsApp",
    telefonoPlaceholder: "+52 55 0000 0000",
    universidad: "Universidad / Institución",
    universidadPlaceholder: "Nombre de tu universidad",
    carrera: "Carrera / Programa",
    carreraPlaceholder: "Ej. Relaciones Internacionales",
    semestre: "Semestre / Año",
    semestrePlaceholder: "Ej. 6to semestre",
    ciudad: "Ciudad",
    ciudadPlaceholder: "Ciudad donde resides",
    mensaje: "¿Por qué te interesa participar?",
    mensajePlaceholder: "Cuéntanos brevemente tu interés en el Executive Forum...",
    privacidad:
      "Acepto el aviso de privacidad y autorizo a CONAJOMX a utilizar mis datos para dar seguimiento a este registro.",
    submit: "Enviar registro",
    submitting: "Enviando...",
    errorRequired: "Completa nombre, correo y universidad para continuar.",
    errorPrivacy: "Debes aceptar el aviso de privacidad para continuar.",
    errorSubmit: "No pudimos enviar tu registro. Intenta de nuevo en unos minutos.",
    successToast: "¡Registro recibido! Nos pondremos en contacto contigo.",
    successTitle: "¡Registro recibido!",
    successBody:
      "Gracias por tu interés en el CONAJOMX Executive Forum. Nuestro equipo revisará tu solicitud y te contactará con los siguientes pasos.",
    registerAnother: "Registrar a alguien más",
  },
  en: {
    nombre: "Full name",
    nombrePlaceholder: "Your full name",
    email: "Email address",
    emailPlaceholder: "youremail@example.com",
    telefono: "Phone / WhatsApp",
    telefonoPlaceholder: "+1 555 000 0000",
    universidad: "University / Institution",
    universidadPlaceholder: "Name of your university",
    carrera: "Major / Program",
    carreraPlaceholder: "E.g. International Relations",
    semestre: "Semester / Year",
    semestrePlaceholder: "E.g. 6th semester",
    ciudad: "City",
    ciudadPlaceholder: "City where you live",
    mensaje: "Why are you interested in taking part?",
    mensajePlaceholder: "Briefly tell us about your interest in the Executive Forum...",
    privacidad:
      "I accept the privacy notice and authorize CONAJOMX to use my information to follow up on this registration.",
    submit: "Submit registration",
    submitting: "Sending...",
    errorRequired: "Please complete your name, email, and university to continue.",
    errorPrivacy: "You must accept the privacy notice to continue.",
    errorSubmit: "We couldn't submit your registration. Please try again in a few minutes.",
    successToast: "Registration received! We'll be in touch with you.",
    successTitle: "Registration received!",
    successBody:
      "Thank you for your interest in the CONAJOMX Executive Forum. Our team will review your application and contact you with next steps.",
    registerAnother: "Register someone else",
  },
}

export function getExecutiveForumUi(locale: Locale) {
  return ui[locale]
}

export function getRegistroContent(locale: Locale) {
  return registro[locale]
}

export function getFormContent(locale: Locale) {
  return form[locale]
}

export function getApertura(locale: Locale): Speaker {
  return pick(apertura, locale)
}

export function getBookPresentation(locale: Locale): Speaker {
  return pick(bookPresentation, locale)
}

export function getClausura(locale: Locale): Speaker {
  return pick(clausura, locale)
}

export function getPanels(locale: Locale): Panel[] {
  return panels.map((panel) => pick(panel, locale))
}

export function localePath(locale: Locale, path: string): string {
  return locale === "en" ? `/en${path}` : path
}
