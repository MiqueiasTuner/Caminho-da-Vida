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

// LISTA DE EVENTOS FUTUROS (Acampamentos, conferências, etc)
export const SPECIAL_EVENTS: SpecialEvent[] = [
  {
    id: 'confra-final-ano',
    title: 'Festa de Final de Ano',
    date: '2025-12-31T21:00', // Data do evento ajustada para 31/12
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
  { id: '1',  url: 'https://i.postimg.cc/FssVQ5JY/123.png', title: 'Momento de Adoração', description: '', category: 'Culto' },
  { id: '2',  url: 'https://i.postimg.cc/Qxt1yQRY/1010.png', title: 'Comunhão', description: '', category: 'Igreja' },
  { id: '3',  url: 'https://i.postimg.cc/2yHv5yBZ/1012.png', title: 'Louvor', description: '', category: 'Música' },
  { id: '4',  url: 'https://i.postimg.cc/13V699RW/1013.png', title: 'Palavra', description: '', category: 'Culto' },
  { id: '5',  url: 'https://i.postimg.cc/g2LRYYck/1015.png', title: 'Família', description: '', category: 'Eventos' },
  { id: '6',  url: 'https://i.postimg.cc/cJNK0wb1/1234.png', title: 'Oração', description: '', category: 'Culto' },
  { id: '7',  url: 'https://i.postimg.cc/5tMHbLRy/1516.png', title: 'Celebração', description: '', category: 'Jovens' },
  { id: '8',  url: 'https://i.postimg.cc/3xGysn91/2025.png', title: 'Encontro', description: '', category: 'Igreja' },
  { id: '9',  url: 'https://i.postimg.cc/t461K2D3/3010.png', title: 'Batismo', description: '', category: 'Sacramento' },
  { id: '10', url: 'https://i.postimg.cc/MKMXBdC3/3015.png', title: 'Jovens', description: '', category: 'Kairós' },
  { id: '11', url: 'https://i.postimg.cc/6q76dpmy/3045.png', title: 'Adoração', description: '', category: 'Culto' },
  { id: '12', url: 'https://i.postimg.cc/zBGGGjSq/4550.png', title: 'Fé', description: '', category: 'Vida' },
  { id: '13', url: 'https://i.postimg.cc/ydpYgZv1/4555.png', title: 'Esperança', description: '', category: 'Vida' },
  { id: '14', url: 'https://i.postimg.cc/vHVHTD9T/5050.png', title: 'Amor', description: '', category: 'Comunhão' },
  { id: '15', url: 'https://i.postimg.cc/V6hmLckX/5054.png', title: 'Ensino', description: '', category: 'Bíblia' },
  { id: '16', url: 'https://i.postimg.cc/gj6dxBx7/12310.png', title: 'Crianças', description: '', category: 'Kids' },
  { id: '17', url: 'https://i.postimg.cc/YC7GwQVM/12345.png', title: 'Alegria', description: '', category: 'Igreja' },
  { id: '18', url: 'https://i.postimg.cc/NFTM307W/123456.png', title: 'Serviço', description: '', category: 'Ministério' },
  { id: '19', url: 'https://i.postimg.cc/7ZX68d0L/a45.png', title: 'Unidade', description: '', category: 'Comunhão' },
  { id: '20', url: 'https://i.postimg.cc/6QmpTZHv/454545.png', title: 'Graça', description: '', category: 'Vida' },
  { id: '21', url: 'https://i.postimg.cc/15rRw2WH/b45.png', title: 'Paz', description: '', category: 'Espírito' },
  { id: '22', url: 'https://i.postimg.cc/76JYzLc1/BRa455.png', title: 'Luz', description: '', category: 'Mundo' },
  { id: '23', url: 'https://i.postimg.cc/wT2H7JvZ/bss45.png', title: 'Salvação', description: '', category: 'Cruz' },
  { id: '24', url: 'https://i.postimg.cc/fRgNvNYp/d455.png', title: 'Vida', description: '', category: 'Eternidade' },
  { id: '25', url: 'https://i.postimg.cc/3J8Q5R1H/m45.png', title: 'Verdade', description: '', category: 'Jesus' },
  { id: '26', url: 'https://i.postimg.cc/2S1JrBZp/m4555.png', title: 'Vida', description: '', category: 'Jesus' },
  { id: '27', url: 'https://i.postimg.cc/8kbxHGSs/r45.png', title: 'Família de Deus', description: '', category: 'Igreja' },
  { id: '28', url: 'https://i.postimg.cc/50sqXnh4/y45.png', title: 'Comunidade', description: '', category: 'Igreja' },
];