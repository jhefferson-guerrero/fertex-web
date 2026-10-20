// Datos de contacto únicos: se cambian aquí y se actualizan en toda la web.

const WHATSAPP_NUMBER = '51944351592';

export const PHONE_DISPLAY = '+51 944 351 592';
export const PHONE_TEL = `+${WHATSAPP_NUMBER}`;

// Texto del botón principal (Hero y ventana de cada disciplina)
export const CTA_LABEL = 'Empieza a Entrenar';

// Versión corta para el menú de navegación
export const NAV_CTA_LABEL = 'Únete Ahora';

// Oferta de la primera clase de prueba (sección final)
export const TRIAL_CTA_LABEL = 'Agenda tu Clase de Prueba Gratis';
export const TRIAL_MESSAGE = 'Hola FERTEX, vengo de su página web. Quiero agendar mi clase de prueba gratis.';

export const DEFAULT_MESSAGE =
  'Hola FERTEX, vengo de su página web. Me gustaría saber los horarios y precios de las clases, por favor.';

export const whatsappLink = (message = DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
