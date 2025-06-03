import type { ContactConfig } from '~/server/interfaces/contact-data-template'

export const contact: ContactConfig = {
  button: {
    title: 'Répondre au message',
    link: `mailto:{{email}}`,
  },
  title: 'Nouvelle demande de contact',
  banner: {
    h1: 'Nouvelle demande de contact',
    text: `Reçue le ${(new Date()).toLocaleDateString('fr-FR')}`,
  },
  contact: {
    name: '{{name}}',
    email: '{{email}}',
    reason: '{{reason}}',
    subject: '{{subject}}',
    message: '{{message}}',
  },
}
