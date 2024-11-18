export const categories = [
    {
      id: 1,
      name: '한식',
      images: require("../assets/images/categories/icons8-pizza-96.png"),
    },
    {
      id: 2,
      name: '중식',
      images: require("../assets/images/categories/icons8-pizza-96.png"),
    },
    {
      id: 3,
      name: '양식',
      images: require("../assets/images/categories/icons8-pizza-96.png"),
    },
    {
      id: 4,
      name: '일식',
      images: require("../assets/images/categories/icons8-pizza-96.png"),
    },
    {
      id: 5,
      name: '패스트푸드',
      images: require("../assets/images/categories/icons8-pizza-96.png"),
    },
    {
        id: 6,
        name: '패스트푸드2',
        images: require("../assets/images/categories/icons8-pizza-96.png"),
      },
      {
        id: 7,
        name: '패스트푸드3',
        images: require("../assets/images/categories/icons8-pizza-96.png"),
      }
  ]
  export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'Soft and tender fried chicken',
    restaurants: [
      {
        id: 1,
        name: 'Spicy Chicken Haven',
        address: 'Seoul, South Korea',
        description: 'Soft and tender fried chicken',
        stars: 4.5,
        reviews: 120,
        category: 'Fried Chicken',
        image: { uri: 'https://placehold.co/600x400.png' },
        lat: 37.5665, // 위도
        lng: 126.9780, // 경도
        dishes: [
          {
            id: 1,
            name: 'Hot Wings',
            description: 'Spicy chicken wings with a crispy coating',
            price: 12.99,
            image: { uri: 'https://placehold.co/600x400.png' },
          },
          {
            id: 2,
            name: 'BBQ Chicken',
            description: 'Tender fried chicken glazed with BBQ sauce',
            price: 14.99,
            image: { uri: 'https://placehold.co/600x400.png' },
          },
        ],
      },
      {
        id: 2,
        name: 'Crispy Delight',
        address: 'Busan, South Korea',
        stars: 4.3,
        reviews: 85,
        category: 'Fried Chicken',
        image: { uri: 'https://placehold.co/600x400.png' },
        lat: 35.1796, // 위도
        lng: 129.0756, // 경도
        dishes: [
          {
            id: 1,
            name: 'Crispy Chicken Strips',
            description: 'Golden and crispy fried chicken strips',
            price: 9.99,
            image: { uri: 'https://placehold.co/600x400.png' },
          },
          {
            id: 2,
            name: 'Spicy Fried Chicken',
            description: 'Extra spicy fried chicken served with a side of fries',
            price: 13.49,
            image: { uri: 'https://placehold.co/600x400.png' },
          },
        ],
      },
      {
        id: 3,
        name: 'Chicken Palace',
        address: 'Incheon, South Korea',
        stars: 4.7,
        reviews: 150,
        category: 'Fried Chicken',
        image: { uri: 'https://placehold.co/600x400.png' },
        lat: 37.4563, // 위도
        lng: 126.7052, // 경도
        dishes: [
          {
            id: 1,
            name: 'Fried Chicken Bucket',
            description: 'A bucket of crispy fried chicken with a special seasoning',
            price: 18.99,
            image: { uri: 'https://placehold.co/600x400.png' },
          },
          {
            id: 2,
            name: 'Chicken and Waffles',
            description: 'Classic fried chicken served with waffles and syrup',
            price: 16.49,
            image: { uri: 'https://placehold.co/600x400.png' },
          },
        ],
      },
    ],
  };
  
  
