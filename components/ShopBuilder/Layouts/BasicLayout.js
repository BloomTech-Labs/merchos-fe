export const BasicLayoutContent = [
  {
    style: {},
    content: {
      message: 'i"m a banner i"m a banner i"m a banner',
    },
    contentType: "banner",
    id: `banner-${Date.now().toPrecision()}`,
  },
  {
    style: {},
    content: {
      title: "Store Header",
    },
    contentType: "store-name",
    id: `store-name-${Date.now().toPrecision()}`,
  },
  {
    style: {},
    content: {
      imageArray: [
        "https://images.dog.ceo/breeds/clumber/n02101556_7617.jpg",
        "https://images.unsplash.com/photo-1495954147468-729898cbe8aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
        "https://images.dog.ceo/breeds/setter-english/n02100735_10175.jpg",
      ],
    },
    contentType: "carousel",
    id: `carousel-${Date.now().toPrecision()}`,
  },
  {
    style: {},
    content: {},
    contentType: "product-container",
    id: `product-container-${Date.now().toPrecision()}`,
  },
  {
    style: {},
    content: {},
    contentType: "product-container",
    id: `product-container-${Date.now().toPrecision()}`,
  },
  {
    style: {},
    content: {},
    contentType: "product-container",
    id: `product-container-${Date.now().toPrecision()}`,
  },
  {
    style: {},
    content: {},
    contentType: "product-container",
    id: `product-container-${Date.now().toPrecision()}`,
  },
  {
    style: {},
    content: {},
    contentType: "product-container",
    id: `product-container-${Date.now().toPrecision()}`,
  },
  {
    style: {},
    content: {},
    contentType: "product-container",
    id: `product-container-${Date.now().toPrecision()}`,
  },
  {
    style: {},
    content: {},
    contentType: "product-container",
    id: `product-container-${Date.now().toPrecision()}`,
  },
  {
    style: {},
    content: {
      src: "https://i.imgur.com/bnbVBob.jpg",
    },
    contentType: "image",
    id: `image-${Date.now().toPrecision()}`,
  },
];

export const contentExample = [
  {
    content: (
      <form>
        <input />
      </form>
    ),
  },
  { content: "b" },
  { content: "c" },
  { content: "d" },
];

export const ProductExample3 = [
  { x: 0, y: 0, w: 1, h: 2, content: "g" },
  { x: 1, y: 0, w: 3, h: 2, content: "h" },
  { x: 4, y: 0, w: 1, h: 2, content: "i" },
];

export const BlankLayout = [
  //This is where the page columns are held which is the layout of the page
];

export const BasicLayout = [
  //This is where the page columns are held which is the layout of the page
  { minW: 12, maxW: 12, minH: 2, maxH: 2, w: 12, h: 2, x: 0, y: 3, i: "0" },
  { minW: 12, maxW: 12, minH: 4, maxH: 4, w: 12, h: 4, x: 0, y: 3, i: "1" },
  { minW: 6, maxW: 12, minH: 9, maxH: 9, w: 6, h: 9, x: 0, y: 6, i: "2" },
  { minW: 3, maxW: 6, minH: 9, maxH: 9, w: 3, h: 9, x: 3, y: 3, i: "3" },
  { minW: 3, maxW: 6, minH: 9, maxH: 9, w: 3, h: 9, x: 6, y: 3, i: "4" },
  { minW: 3, maxW: 6, minH: 9, maxH: 9, w: 3, h: 9, x: 9, y: 3, i: "5" },
  { minW: 3, maxW: 6, minH: 9, maxH: 9, w: 3, h: 9, x: 0, y: 10, i: "6" },
  { minW: 3, maxW: 6, minH: 9, maxH: 9, w: 3, h: 9, x: 3, y: 10, i: "7" },
  { minW: 3, maxW: 6, minH: 9, maxH: 9, w: 3, h: 9, x: 6, y: 10, i: "8" },
  { minW: 3, maxW: 6, minH: 9, maxH: 9, w: 3, h: 9, x: 9, y: 10, i: "9" },
  { minW: 6, maxW: 12, minH: 6, maxH: 12, w: 6, h: 9, x: 0, y: 24, i: "10" },
];
