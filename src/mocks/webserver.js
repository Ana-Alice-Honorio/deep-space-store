import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onGet("/api/products").reply(200, [
  {
    id: 1,
    name: "O lar da srta. Peregrine para crianças peculiares: (Série O lar Da Srta. Peregrine Para Crianças Peculiares vol.1)",
    value: 74.93,
    author: "Ransom Riggs",
    description:
      "Jacob Portman cresceu ouvindo as histórias fantásticas que o avô Abe contava...",
    dimensions: "23.6 x 16 x 2.2 cm",
    pages: "352 páginas",
    language: "Português",
    publisher: "Intrínseca",
    payOptions: ["card", "bill", "pix"],
    image: "https://m.media-amazon.com/images/I/51jSqg+1KuL._SY445_SX342_.jpg",
  },
  {
    id: 2,
    name: "Miniatura da Enterprise",
    value: 500.0,
    description:
      "Uma miniatura detalhada da famosa nave estelar do universo de Star Trek.",
    dimensions: "15 x 10 x 5 cm",
    payOptions: ["card", "pix"],
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQzghnJuTqhur2dEQrGXc429vVaZI1_vxTicYgJGtWlb1jM9_StiSOLgRe_-Mv3GDF8dtl-EYPaukGaND_0tCf9zSJyXG1oE6hvQRJeDuY_xYK_ThGE_vzT&usqp=CAE",
  },
  {
    id: 3,
    name: "Fralda Turma da Mônica Baby Jumbinho M 18 Unidades",
    value: 18.14,
    description: "fralda infantil",
    publisher: "COMOYA",
    payOptions: ["card", "bill", "pix"],
    image: "https://m.media-amazon.com/images/I/61yD+qhQusL._AC_SL1080_.jpg",
  },
]);

mock.onPost(/\/offers\/\w+\/create_order/).reply(201, {
  message: "Pedido criado com sucesso",
});

export default mock;
