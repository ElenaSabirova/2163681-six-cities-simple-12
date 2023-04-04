import {OffersType} from '../types/offersType';

export const offers: OffersType [] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 120,
    rating: 3.2,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  },

  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 53.370216,
        longitude: 5.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'Green Globe certified Hilton Seychelles Labriz Resort & Spa is located on Silhouette Island. It offers spacious, fully equipped villas with a private terrace.',
    goods: [
      'Heating',
      'Washing machine',
      'Towels',
      'Coffee machine'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      isPro: false,
      name: 'Eugene'
    },
    id: 2,
    images: [
      'img/apartment-01.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 54.35514938496378,
      longitude: 6.673877537499948,
      zoom: 8
    },
    maxAdults: 3,
    previewImage: 'img/apartment-01.jpg',
    price: 180,
    rating: 3.8,
    title: 'Hilton Seychelles Labriz Resort & Spa',
    type: 'hotel'
  },

  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'B&B VILLA KiKi is located in Anse-à-la-Mouche Bay. The hotel features a restaurant, shared lounge, bar, garden and terrace. The windows offer sea views.',
    goods: [
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 5,
      isPro: true,
      name: 'Alexandra'
    },
    id: 3,
    images: [
      'img/apartment-02.jpg',
      'img/room.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 53.35514938496378,
      longitude: 7.673877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 190,
    rating: 4.3,
    title: 'VILLA KIKI Seychelles',
    type: 'villa'
  },

  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.379916,
        longitude: 4.896668,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'Set in Mahe, a few steps from Anse Royale Beach, Laïla, Seychelles, a Tribute Portfolio Resort offers accommodation with a fitness centre, free private parking, a restaurant and a bar.',
    goods: [
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Wi-Fi',
      'Washing machine'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 6,
      isPro: false,
      name: 'Michael'
    },
    id: 4,
    images: [
      'img/apartment-03.jpg',
      'img/studio-01.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 53.6614938496378,
      longitude: 7.773877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 200,
    rating: 4.2,
    title: 'Laïla, Seychelles, a Tribute Portfolio Resort',
    type: 'apartment'
  },
];


// import {OffersType} from '../types/offersTypeMocks';
//
// const offers: OffersType[] = [
//   {
//     bedrooms: 3,
//     city: {
//       location: {
//         latitude: 52.370216,
//         longitude: 4.895168,
//         zoom: 10
//       },
//       name: 'Amsterdam'
//     },
//     description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
//     goods: [
//       'Heating'
//     ],
//     host: {
//       avatarUrl: 'img/1.png',
//       id: 3,
//       isPro: true,
//       name: 'Angelina'
//     },
//     id: 1,
//     images: [
//       'img/1.png'
//     ],
//     isPremium: false,
//     location: {
//       latitude: 52.35514938496378,
//       longitude: 4.673877537499948,
//       zoom: 8
//     },
//     maxAdults: 4,
//     previewImage: 'img/1.png',
//     price: 120,
//     rating: 4.8,
//     title: 'Beautiful & luxurious studio at great location',
//     type: 'apartment'
//   },
//
//   {
//     bedrooms: 3,
//     city: {
//       location: {
//         latitude: 53.370216,
//         longitude: 5.895168,
//         zoom: 10
//       },
//       name: 'Amsterdam'
//     },
//     description: 'Green Globe certified Hilton Seychelles Labriz Resort & Spa is located on Silhouette Island. It offers spacious, fully equipped villas with a private terrace.',
//     goods: [
//       'Heating',
//       'Washing machine',
//       'Towels',
//       'Heating',
//       'Coffee machine'
//     ],
//     host: {
//       avatarUrl: 'img/2.png',
//       id: 4,
//       isPro: true,
//       name: 'Eugene'
//     },
//     id: 2,
//     images: [
//       'img/2.png'
//     ],
//     isPremium: false,
//     location: {
//       latitude: 54.35514938496378,
//       longitude: 6.673877537499948,
//       zoom: 8
//     },
//     maxAdults: 3,
//     previewImage: 'img/2.png',
//     price: 180,
//     rating: 3.8,
//     title: 'Hilton Seychelles Labriz Resort & Spa',
//     type: 'apartment'
//   },
//
//   {
//     bedrooms: 2,
//     city: {
//       location: {
//         latitude: 52.370216,
//         longitude: 4.895168,
//         zoom: 10
//       },
//       name: 'Amsterdam'
//     },
//     description: 'B&B VILLA KiKi is located in Anse-à-la-Mouche Bay. The hotel features a restaurant, shared lounge, bar, garden and terrace. The windows offer sea views.',
//     goods: [
//       'Towels',
//       'Heating',
//       'Coffee machine',
//       'Baby seat',
//       'Kitchen',
//       'Dishwasher',
//       'Cabel TV'
//     ],
//     host: {
//       avatarUrl: 'img/3.png',
//       id: 5,
//       isPro: true,
//       name: 'Alexandra'
//     },
//     id: 4,
//     images: [
//       'img/3.png'
//     ],
//     isPremium: false,
//     location: {
//       latitude: 53.35514938496378,
//       longitude: 7.673877537499948,
//       zoom: 8
//     },
//     maxAdults: 2,
//     previewImage: 'img/3.png',
//     price: 190,
//     rating: 4.3,
//     title: 'VILLA KIKI Seychelles',
//     type: 'apartment'
//   },
//
//   {
//     bedrooms: 4,
//     city: {
//       location: {
//         latitude: 52.379916,
//         longitude: 4.896668,
//         zoom: 10
//       },
//       name: 'Amsterdam'
//     },
//     description: 'Set in Mahe, a few steps from Anse Royale Beach, Laïla, Seychelles, a Tribute Portfolio Resort offers accommodation with a fitness centre, free private parking, a restaurant and a bar.',
//     goods: [
//       'Towels',
//       'Heating',
//       'Coffee machine',
//       'Baby seat',
//       'Kitchen',
//       'Dishwasher',
//       'Cabel TV',
//       'Wi-Fi',
//       'Washing machine'
//     ],
//     host: {
//       avatarUrl: 'img/4.png',
//       id: 6,
//       isPro: false,
//       name: 'Michael'
//     },
//     id: 6,
//     images: [
//       'img/4.png'
//     ],
//     isPremium: false,
//     location: {
//       latitude: 53.6614938496378,
//       longitude: 7.773877537499948,
//       zoom: 8
//     },
//     maxAdults: 4,
//     previewImage: 'img/4.png',
//     price: 200,
//     rating: 4.2,
//     title: 'Laïla, Seychelles, a Tribute Portfolio ResortОткроется в новом окне',
//     type: 'apartment'
//   },
// ];
//
//
// function getRandomArrayElement(arr: OffersType[]) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }
//
// export const offer = getRandomArrayElement(offers);
