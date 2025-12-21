import { ServiceEvent, BibleVerse, Leader, GalleryImage, SpecialEvent } from './types';
import { BookOpen, Calendar, Flame, Users, Heart, Star, Music, Award } from 'lucide-react';
import React from 'react';

export const CHURCH_NAME = "Caminho da Vida";
export const CHURCH_SUBTITLE = "Igreja em Células - Ministério Apostólico";
export const TAGLINE = "Alimentando vidas com a palavra há 14 anos";
export const ADDRESS = "Rua das Samambaias, QD 16/2, LT 24/25";
export const MAP_LINK = "https://maps.app.goo.gl/rxyeebsfwAcCkD1J6";
export const EMAIL = "caminhodavidaministerio@gmail.com";
export const WHATSAPP_LINK = "https://wa.me/556285465311";
export const LOGO_URL = "https://i.postimg.cc/x1hmqg0R/image-(1).png";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/caminho_igreja/",
  facebook: "https://www.facebook.com/CaminhoDaVidaIgrejaEmCelulasMinisterioApostolico/?locale=pt_BR",
  youtube: "https://www.youtube.com/@caminhodavidaministerio"
};

export const WEEKLY_SCHEDULE: ServiceEvent[] = [
  {
    day: "Segunda-Feira",
    title: "Cultos Temáticos",
    time: "19:30",
    description: "Um início de semana abençoado com temas edificantes.",
    icon: <Star className="w-6 h-6 text-church-cyan" />
  },
  {
    day: "Quarta-Feira",
    title: "Instituto Bíblico",
    time: "19:30",
    description: "Aprofundamento na palavra e estudo das escrituras.",
    icon: <BookOpen className="w-6 h-6 text-church-blue dark:text-church-blue" />
  },
  {
    day: "Quinta-Feira",
    title: "Células",
    time: "19:30",
    description: "Tempo de comunhão, palavra e crescimento nos lares.",
    icon: <Users className="w-6 h-6 text-emerald-500" />
  },
  {
    day: "Sexta-Feira",
    title: "Células",
    time: "19:30",
    description: "Tempo de comunhão, palavra e crescimento nos lares.",
    icon: <Users className="w-6 h-6 text-emerald-500" />
  },
  {
    day: "Sábado",
    title: "Rede Kairós",
    time: "19:30",
    description: "Culto de Jovens. Energia, louvor e adoração.",
    icon: <Award className="w-6 h-6 text-orange-500" />
  },
  {
    day: "Domingo",
    title: "Culto de Celebração",
    time: "19:00",
    description: "Reunião da família para celebrar a Jesus.",
    icon: <Heart className="w-6 h-6 text-red-500" />
  }
];

// LISTA DE EVENTOS FUTUROS
export const SPECIAL_EVENTS: SpecialEvent[] = [
  {
    id: 'confra-final-ano',
    title: 'Festa de Final de Ano',
    date: '2025-12-31T00:00',
    location: 'Igreja Caminho da Vida',
    description: 'Grandes coisas fez o Senhor por nós, e por isso estamos alegres (Salmos 126:3). Venha celebrar conosco! Pagamento até 20/12.',
    imageUrl: 'https://i.postimg.cc/9Xd4PZ2W/Grandes-coisas-fez-o-Senhor-por-nos-e-por-isso-estamos-alegres-Salmos-1263.png',
    buttonLink: WHATSAPP_LINK
  }
];

export const VERSES: BibleVerse[] = [
  {
    text: "Para o entendido, o caminho da vida leva para cima, para que se desvie do inferno em baixo.",
    reference: "Provérbios 15:24"
  },
  {
    text: "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.",
    reference: "João 14:6"
  },
  {
    text: "Se você confessar com a sua boca que Jesus é Senhor e crer em seu coração que Deus o ressuscitou dentre os mortos, será salvo.",
    reference: "Romanos 10:9"
  }
];

export const LEADERS: Leader[] = [
  {
    name: "Pastor Genecarlos",
    role: "Pastor Sênior",
  },
  {
    name: "Pastora Adriana",
    role: "Pastora Sênior",
  }
];

export const GALLERY_ITEMS: GalleryImage[] = [
  { id: '1',  url: 'https://i.postimg.cc/JnvLMmkR/Whats-App-Image-2025-12-21-at-16-17-39.jpg', title: 'Alegria no Culto', description: '', category: 'Culto Kids' },
  { id: '2',  url: 'https://i.postimg.cc/kGSd5ZQ8/Whats-App-Image-2025-12-21-at-16-17-41.jpg', title: 'Aprendizado Bíblico', description: '', category: 'Culto Kids' },
  { id: '3',  url: 'https://i.postimg.cc/jxgqMYCh/Whats-App-Image-2025-12-21-at-16-17-42-(1).jpg', title: 'Louvor Kids', description: '', category: 'Culto Kids' },
  { id: '4',  url: 'https://i.postimg.cc/FrssbHFB/Whats-App-Image-2025-12-21-at-16-17-42.jpg', title: 'Comunhão dos Pequenos', description: '', category: 'Culto Kids' },
  { id: '5',  url: 'https://i.postimg.cc/T1bXPSVW/Whats-App-Image-2025-12-21-at-16-17-43-(1).jpg', title: 'Ensino Criativo', description: '', category: 'Culto Kids' },
  { id: '6',  url: 'https://i.postimg.cc/prjtd7fk/Whats-App-Image-2025-12-21-at-16-17-43.jpg', title: 'Momentos Preciosos', description: '', category: 'Culto Kids' },
  { id: '7',  url: 'https://i.postimg.cc/909jfSdJ/Whats-App-Image-2025-12-21-at-16-17-54.jpg', title: 'Oração das Crianças', description: '', category: 'Culto Kids' },
  { id: '8',  url: 'https://i.postimg.cc/yxRzN5mw/Whats-App-Image-2025-12-21-at-16-17-55-(1).jpg', title: 'Diversão e Fé', description: '', category: 'Culto Kids' },
  { id: '9',  url: 'https://i.postimg.cc/G3TRzBWp/Whats-App-Image-2025-12-21-at-16-17-56.jpg', title: 'Jesus e as Crianças', description: '', category: 'Culto Kids' },
  { id: '10', url: 'https://i.postimg.cc/44HGwKD9/Whats-App-Image-2025-12-21-at-16-17-57.jpg', title: 'Futuro da Igreja', description: '', category: 'Culto Kids' },
  { id: '11', url: 'https://i.postimg.cc/2jLYTqs4/Whats-App-Image-2025-12-21-at-16-17-58-(1).jpg', title: 'Festa Espiritual', description: '', category: 'Culto Kids' },
  { id: '12', url: 'https://i.postimg.cc/XNBWxZRc/Whats-App-Image-2025-12-21-at-16-17-58.jpg', title: 'Amor de Deus', description: '', category: 'Culto Kids' },
];