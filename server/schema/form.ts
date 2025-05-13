import * as yup from 'yup'

export const form = yup.object({
  email: yup
    .string()
    .trim()
    .required('Email est requis')
    .email('Format d\'email non valide')
    .max(254, 'L\'adresse électronique ne doit pas dépasser 254 caractères.'),
  name: yup
    .string()
    .trim()
    .required('Votre nom est requis')
    .min(4, 'Vos nom et prénom doivent comporter plus de 4 caractères.'),
  message: yup
    .string()
    .trim()
    .required('Le message ne peut pas être vide')
    .min(16, 'Votre message doit comporter plus de 16 caractères')
    .max(100000, 'Le message est trop long'),
  subject: yup
    .string()
    .trim()
    .required('Veuillez saisir l\'objet de votre demande')
    .min(4, 'Votre sujet doit comporter plus de 4 caractères')
    .max(78, 'Le sujet ne doit pas dépasser 78 caractères'),
  reason: yup
    .string()
    .required('N\'oubliez pas le motif')
    .oneOf(['Commerce', 'Après-vente', 'Autre'], 'Sélectionnez une option'),
  terms: yup
    .boolean()
    .oneOf([true], 'Veuillez accepter les conditions d\'utilisation')
    .required('Veuillez accepter les conditions d\'utilisation'),
})
