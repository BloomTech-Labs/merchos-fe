//copied code, because I don't want to lose the contents of the items, it's annoying to remake them.
// [
//     //This is where the page columns are held which is the layout of the page
//     {
//       id: "MONSTER_IMAGE_1",
//       items: [{ id: "monsterImage1", content: "Monster Image", height: "100px" }],
//       order: 0,
//       containerHeight: '750px'
//     },
//     {
//       id: "BANNER_1",
//       items: [
//         { id: "banner1", content: "Double Size", height: "100px", order: 2 },
//         {
//           id: "halfImage1",
//           content: "half width image",
//           height: "100px",
//           width: "50%",
//           order: 1
//         },
//         {
//           id: "halfImage2",
//           content: "half width image",
//           height: "100px",
//           width: "50%",
//           order: 1
//         }
//       ],
//       order: 2,
//       containerHeight: '75px'
//     },
//     {
//       id: "stuff",
//       items: [
//         { id: "box3", content: "Regular Banner", height: "100px", order: 1 }
//       ]
//     },
//     {
//       id: "Products",
//       items: [
//         { id: "0", content: "A", height: "100px" },
//         { id: "1", content: "B", height: "100px" },
//         { id: "2", content: "C", height: "100px" },
//         { id: "3", content: "D", height: "100px" },
//         { id: "4", content: "E", height: "100px" },
//         { id: "5", content: "F", height: "100px" }
//       ]
//     }
// ]

export const BasicLayout = [
  //This is where the page columns are held which is the layout of the page
  {
    id: "MONSTER_IMAGE_1",
    items: [],
    order: 0,
    containerHeight: "750px"
  },
  {
    id: "DOUBLE_SIZE_1",
    items: [
      { id: "banner1", content: "Double Size", height: "100px", order: 2 },
      {
        id: "halfImage1",
        content: "half width image",
        height: "100px",
        width: "50%",
        order: 1
      },
      {
        id: "halfImage2",
        content: "half width image",
        height: "100px",
        width: "50%",
        order: 1
      }
    ],
    order: 1,
    containerHeight: "150px"
  },
  {
    id: "REGULAR_BANNER_1",
    items: [],
    order: 2,
    containerHeight: "75px"
  },
  {
    id: "PRODUCTS_1",
    items: [
      { id: "0", content: "A", height: "100px" },
      { id: "1", content: "B", height: "100px" },
      { id: "2", content: "C", height: "100px" },
      { id: "3", content: "D", height: "100px" },
      { id: "4", content: "E", height: "100px" },
      { id: "5", content: "F", height: "100px" }
    ],
    order: 3
  }
];
