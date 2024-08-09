import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onGet('/api/products').reply(200, [
  {
    id: 1,
    name: 'O lar da srta. Peregrine para crianças peculiares: (Série O lar Da Srta. Peregrine Para Crianças Peculiares vol.1)',
    value: 74.93,
    author: 'Ransom Riggs',
    description: 'Jacob Portman cresceu ouvindo as histórias fantásticas que o avô Abe contava. Na época da Segunda Guerra Mundial, o avô havia morado numa ilha remota, num casarão que funcionava como abrigo para crianças. Lá, Abe convivera com uma menina que levitava, uma garota que produzia fogo com as mãos, um menino invisível… Entretanto, todas essas histórias foram perdendo o encanto à medida que Jacob crescia. Até que, aos dezesseis anos, tudo volta à tona para se provar real. Abalado com a morte misteriosa do avô, Jacob decide ir à tal ilha para tentar entender as últimas palavras de Abe: “Encontre a ave. Na fenda. Do outro lado do túmulo do velho.” Ele encontra o casarão em ruínas, mas, ao passar por um túnel subterrâneo, ele se vê em outra época, décadas atrás: em 3 setembro de 1940. Naquele lugar protegido no tempo, ele conhece crianças com habilidades peculiares e encontra as respostas para todas as suas perguntas. Mas o fascínio inicial logo se transforma em uma luta pela sobrevivência e para salvar a vida de seus novos amigos. Viagens no tempo, mulheres que se transformam em aves, crianças com dons inusitados e monstros à espreita. Bem-vindo ao lar da srta. Peregrine para crianças peculiares, um fascinante mundo novo pronto para ser descoberto.',
    dimensions: '23.6 x 16 x 2.2 cm',
    pages: '352 páginas',
    language: 'Português',
    publisher: 'Intrínseca',
    payOptions: ['card', 'bill', 'pix'],
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Miniatura da Enterprise',
    value: 500.00,
    description: 'Uma miniatura detalhada da famosa nave estelar do universo de Star Trek.',
    dimensions: '15 x 10 x 5 cm',
    payOptions: ['card', 'pix'],
    image: 'https://via.placeholder.com/150',
  },
]);

export default mock;
