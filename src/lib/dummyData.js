import moment from 'moment';

export const categories = [
  'All',
  'Mobile Covers',
  'Tuffon Glasses',
  'Head Phones',
  'Chargers',
  'USB',
  'OTG Cable',
  'Screen Casting',
  'Selfie Sticks',
  'Bluetooth Earbuds',
  'Car Mounts',
  'Smartwatches',
  'Gaming Controllers',
  'Skins',
  'Phone Ring Holder',
];

export const products = [
  // {
  //   id: '1',
  //   name: 'Real me Narzo 20 pro mobile cover',
  //   image: require('../assets/mobile_covers.png'),
  //   price: 200,
  //   category: ['Mobile Covers'],
  //   quantity: 3,
  //   status: 'pending',
  //   date: new Date(),
  // },
  // {
  //   id: '2',
  //   name: 'Blutooth Headphone',
  //   image: require('../assets/headephones.png'),
  //   price: 2000,
  //   category: ['Head Phones'],
  //   quantity: 1,
  //   status: 'cancel',
  //   date: new Date(),
  // },
  {
    id: '3',
    name: 'Oppo Mobile Cover Ring',
    image: require('../assets/oppo_ring.png'),
    price: 50,
    category: ['Phone Ring Holder'],
    quantity: 1,
    status: 'success',
    date: moment().add(2, 'days').set({hour: 16, minute: 43}).toISOString(),
  },
  // {
  //   id: '4',
  //   name: 'car mount for any mobile',
  //   image: require('../assets/car_mount.png'),
  //   price: 300,
  //   category: ['Car Mounts'],
  //   quantity: 3,
  //   status: 'success',
  //   date: new Date(),
  // },
  // {
  //   id: '5',
  //   name: 'Otg cable',
  //   image: require('../assets/otg.png'),
  //   price: 1000,
  //   category: ['OTG Cable'],
  //   quantity: 1,
  //   status: 'pending',
  //   date: new Date(),
  // },
  // {
  //   id: '6',
  //   name: 'Sandisk pendrive of 16gb',
  //   image: require('../assets/usb.png'),
  //   price: 400,
  //   category: ['OTG Cable', 'USB'],
  //   quantity: 10,
  //   status: 'cancel',
  //   date: new Date(),
  // },
  // {
  //   id: '7',
  //   name: 'Smart watch',
  //   image: require('../assets/smart_watch.png'),
  //   price: 1500,
  //   category: ['Smartwatches'],
  //   quantity: 3,
  //   status: 'pending',
  //   date: new Date(),
  // },
  {
    id: '9',
    name: 'OnePlus Buds Bluetooth Headset',
    image: require('../assets/air_buds.png'),
    price: 8000,
    category: ['Buds'],
    quantity: 2,
    status: 'pending',
    date: moment()
      .subtract(9, 'days')
      .set({hour: 16, minute: 43})
      .toISOString(),
  },

  {
    id: '8',
    name: 'Selfie Stick',
    image: require('../assets/selfie_stick.png'),
    price: 800,
    category: ['Selfie Sticks'],
    quantity: 1,
    status: 'cancel',
    date: moment().subtract(2, 'days').toISOString(),
  },
];

export const deliveryAddress = [
  {
    id: '1',
    name: 'Pratik Panchal',
    address:
      'Gandhi ni khadki, Near Chachariya, Lal Darwaja, Patan, Gujarat, 384265',
  },
  {
    id: '2',
    name: 'Parshv Shah',
    address: 'Khearvasi, Blood Bank, Patan, Gujarat, 384265',
  },
  {
    id: '3',
    name: 'Karan Rajpurohit',
    address: 'Bhagwati nagar, near bus stand, Patan, Gujarat, 384265',
  },
  {
    id: '4',
    name: 'Meet Rathod',
    address: 'Ambaji Neliyu, Patan, Gujarat, 384265',
  },
  {
    id: '5',
    name: 'Nisarg Patel',
    address: 'Chindiya, Patan, Gujarat, 384265',
  },
  {
    id: '6',
    name: 'Yuvraj Vaghela',
    address: 'Harij ni baju na gomde, Patan, Gujarat, 384265',
  },
];

export const savedCards = [
  {
    id: '1',
    cardNum: '2948',
    cardExpiry: '12/23',
    cardType: 'Visa',
  },
  {
    id: '2',
    cardNum: '8956',
    cardExpiry: '09/23',
    cardType: 'Master',
  },
  {
    id: '3',
    cardNum: '9623',
    cardExpiry: '02/26',
    cardType: 'Maestro',
  },
  {
    id: '4',
    cardNum: '1648',
    cardExpiry: '12/23',
    cardType: 'Rupay',
  },
  {
    id: '5',
    cardNum: '6912',
    cardExpiry: '11/25',
    cardType: 'Rupay',
  },
  {
    id: '6',
    cardNum: '5668',
    cardExpiry: '10/24',
    cardType: 'Visa',
  },
];
