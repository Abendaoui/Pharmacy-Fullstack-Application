import DashboardIcon from '@mui/icons-material/Dashboard'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import GroupIcon from '@mui/icons-material/Group'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import PaidIcon from '@mui/icons-material/Paid'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import CategoryIcon from '@mui/icons-material/Category'
import AppsIcon from '@mui/icons-material/Apps'

export const navigation = {
  categories: [
    {
      id: 'm',
      name: 'Medications',
      featured: [
        {
          name: 'Pain Relief',
          href: '#',
          imageSrc: 'https://images.heb.com/is/image/HEBGrocery/000663133-1',
          imageAlt: 'Pain relief medication',
        },
        {
          name: 'Cold & Flu',
          href: '#',
          imageSrc: 'https://pics.walgreens.com/prodimg/533805/450.jpg',
          imageAlt: 'Cold and flu medication',
        },
      ],
      sections: [
        {
          id: 'p',
          name: 'Prescriptions',
          items: [
            { name: 'Antibiotics', href: '#' },
            { name: 'Antidepressants', href: '#' },
            { name: 'Painkillers', href: '#' },
            { name: 'Allergy Medications', href: '#' },
            { name: 'Blood Pressure Medications', href: '#' },
            { name: 'Diabetes Medications', href: '#' },
            { name: 'Heart Medications', href: '#' },
          ],
        },
        {
          id: 'o',
          name: 'Over-the-Counter',
          items: [
            { name: 'Pain Relievers', href: '#' },
            { name: 'Cough & Cold', href: '#' },
            { name: 'Digestive Health', href: '#' },
            { name: 'Allergy Relief', href: '#' },
            { name: 'First Aid', href: '#' },
          ],
        },
      ],
    },
    {
      id: 's',
      name: 'Supplements',
      featured: [
        {
          name: 'Vitamins & Minerals',
          href: '#',
          imageSrc:
            'https://www.naturesaid.co.uk/images/multi-vitamins-minerals-with-iron-p170-1078_zoom.jpg',
          imageAlt: 'Vitamins and minerals supplements',
        },
        {
          name: 'Herbal Supplements',
          href: '#',
          imageSrc:
            'https://cdn.banyanbotanicals.com/media/catalog/product/cache/aec0522aa60909430cc6d2f1819fa10d/h/e/healthy-hair-tablets-1241-lightbox-001_1.jpg',
          imageAlt: 'Herbal supplements',
        },
      ],
      sections: [
        {
          id: 'v',
          name: 'Vitamins',
          items: [
            { name: 'Vitamin C', href: '#' },
            { name: 'Vitamin D', href: '#' },
            { name: 'Vitamin B12', href: '#' },
            { name: 'Multivitamins', href: '#' },
            { name: 'Vitamin E', href: '#' },
          ],
        },
        {
          id: 'h',
          name: 'Herbal',
          items: [
            { name: 'Echinacea', href: '#' },
            { name: 'Ginseng', href: '#' },
            { name: 'Garlic', href: '#' },
            { name: 'Ginkgo Biloba', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact_us' },
    { name: 'Blog', href: '/blog' },
  ],
}

export const contactInfo = [
  {
    id: 1,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='w-5 h-5'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
        />
      </svg>
    ),
    title: 'Email',
    body: 'Our friendly team is here to help.',
    info: 'info.medecine@gmail.com',
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-5 h-5'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z'
        />
      </svg>
    ),
    title: 'Store',
    body: 'Come say hello at our store.',
    info: 'Rabat Hay Riyad Street Nakhil 12250',
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='w-5 h-5'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
        />
      </svg>
    ),
    title: 'Phone',
    body: 'Mon-Fri from 8am to 5pm.',
    info: '+212 641296176',
  },
]

export const footerLinks = [
  {
    id: 1,
    section: 'Company',
    links: [
      { id: '1', name: "What's new", href: '#' },
      { id: '12', name: 'About', href: '/about' },
      { id: '13', name: 'Contact', href: '/contact' },
      { id: '14', name: 'Social Good', href: '#' },
      { id: '15', name: 'Blog', href: '#' },
    ],
  },
  {
    id: 2,
    section: 'Support',
    links: [
      { id: '16', name: 'Help Support', href: '#' },
      { id: '17', name: 'Getting Started', href: '#' },
      { id: '18', name: 'Features & HowTo', href: '#' },
      { id: '180', name: 'FAQs', href: '#' },
      { id: '19', name: 'Report & Violation', href: '#' },
    ],
  },
  {
    id: 3,
    section: 'Pages',
    links: [
      {
        id: 5,
        name: 'Home',
        href: '/home',
      },
      {
        id: 1,
        name: 'Products',
        href: '/products',
      },
      {
        id: 2,
        name: 'About Us',
        href: '/about',
      },
      {
        id: 3,
        name: 'Contact Us',
        href: '/contact_us',
      },
      {
        id: 4,
        name: 'Privacy',
        href: '/privacy',
      },
    ],
  },
  {
    id: 34,
    section: 'Payement',
    links: [
      {
        id: 1,
        name: 'Visa',
        href: '/',
      },
      {
        id: 2,
        name: 'Master Card',
        href: '/',
      },
      {
        id: 3,
        name: 'Express',
        href: '/',
      },
      {
        id: 4,
        name: 'Paypal',
        href: '/',
      },
    ],
  },
]

export const medecines = [
  {
    id: 10,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image:
      'https://www.naturesaid.co.uk/images/multi-vitamins-minerals-with-iron-p170-1078_zoom.jpg',
    quantity: 0,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 20,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image: 'https://nzherbal.co.nz/wp-content/uploads/2016/03/Suprema-C.jpg',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 30,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image:
      'https://cdn.banyanbotanicals.com/media/catalog/product/cache/aec0522aa60909430cc6d2f1819fa10d/h/e/healthy-vata-tablets-1311-lightbox-web-v001_1.jpg',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 40,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBUZv94aPpn-rXT0C4vAxZmfwS79odgJIdHLZ9PzB8U4NzTNKG5cIy5J9KQpADuPsyzc&usqp=CAU',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 50,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image: 'https://bidro.dk/cdn/shop/products/25_1024x1024.jpg?v=1665777120',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 60,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image:
      'https://ecommerce.genericartmedicine.com/upload/products/thumb/product-photo-445.png',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 70,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image:
      'https://www.dgmedicine.com/images2/SKIN%20SHINE%20CREAME_AD_dgmedicine.jpg',
    quantity: 0,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 90,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image:
      'https://tajgenerics.com/wp-content/uploads/Vitamin-C-Tablet-Ascorbic-acid-Chewable-Tablets-500mg-manufcaturer-supplier-india-1-scaled.jpg',
    quantity: 2,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  // Next
  {
    id: 1,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image:
      'https://media.ulta.com/i/ulta/2550469?w=720&$ProductCardNeutralBGLight$&fmt=auto',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 2,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image:
      'https://lovewellness.com/cdn/shop/files/Healthy_V_Shadow_smaller_0c9eb289-2a31-4b57-807e-ef33058fe4d2.png?v=1681836511',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 3,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_dc353dfc-5b0d-4c35-926f-34e7922d59ac?wid=488&hei=488&fmt=pjpeg',
    quantity: 0,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 4,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMothnk0C8skB4gm-XaCwXiD9GjL_y_7mPCJ5mikOV7t9QLpJhEF4ENd-TfIuW-dvP-Tk&usqp=CAU',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 5,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7OPrY03qj7bL2NoUk6i7KL1Ij1iSnVq2HuZMYg5hFe8sE8FuJjx57cZRq2-wjzDZ-gYo&usqp=CAU',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 6,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image:
      'https://cdn.shopify.com/s/files/1/1288/3849/t/92/assets/e8df3e0f3b58--pH-Balancing-Wipes-PDP-Desktop-3-a11014_1200x1600_crop_center.png?v=1685982802',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 7,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image: 'https://media.ulta.com/i/ulta/2550953_alt01?w=1020&h=1020&fmt=auto',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 100,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'orange',
    about: '',
    image:
      'https://tajgenerics.com/wp-content/uploads/Vitamin-C-Tablet-Ascorbic-acid-Chewable-Tablets-500mg-manufcaturer-supplier-india-1-scaled.jpg',
    quantity: 0,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
]

export const popMedecines = [
  {
    id: 1,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'cardiology',
    about: '',
    image:
      'https://media.ulta.com/i/ulta/2550469?w=720&$ProductCardNeutralBGLight$&fmt=auto',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 2,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'cardiology',
    about: '',
    image:
      'https://lovewellness.com/cdn/shop/files/Healthy_V_Shadow_smaller_0c9eb289-2a31-4b57-807e-ef33058fe4d2.png?v=1681836511',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 3,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'cardiology',
    about: '',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_dc353dfc-5b0d-4c35-926f-34e7922d59ac?wid=488&hei=488&fmt=pjpeg',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 4,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'cardiology',
    about: '',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMothnk0C8skB4gm-XaCwXiD9GjL_y_7mPCJ5mikOV7t9QLpJhEF4ENd-TfIuW-dvP-Tk&usqp=CAU',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 5,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'cardiology',
    about: '',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7OPrY03qj7bL2NoUk6i7KL1Ij1iSnVq2HuZMYg5hFe8sE8FuJjx57cZRq2-wjzDZ-gYo&usqp=CAU',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 6,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'cardiology',
    about: '',
    image:
      'https://cdn.shopify.com/s/files/1/1288/3849/t/92/assets/e8df3e0f3b58--pH-Balancing-Wipes-PDP-Desktop-3-a11014_1200x1600_crop_center.png?v=1685982802',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 7,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'cardiology',
    about: '',
    image: 'https://media.ulta.com/i/ulta/2550953_alt01?w=1020&h=1020&fmt=auto',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 100,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'cardiology',
    about: '',
    image:
      'https://tajgenerics.com/wp-content/uploads/Vitamin-C-Tablet-Ascorbic-acid-Chewable-Tablets-500mg-manufcaturer-supplier-india-1-scaled.jpg',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  // Next
  {
    id: 10,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'pulmonology',
    about: '',
    image:
      'https://www.naturesaid.co.uk/images/multi-vitamins-minerals-with-iron-p170-1078_zoom.jpg',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 20,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'pulmonology',
    about: '',
    image: 'https://nzherbal.co.nz/wp-content/uploads/2016/03/Suprema-C.jpg',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 30,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'pulmonology',
    about: '',
    image:
      'https://cdn.banyanbotanicals.com/media/catalog/product/cache/aec0522aa60909430cc6d2f1819fa10d/h/e/healthy-vata-tablets-1311-lightbox-web-v001_1.jpg',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 40,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'pulmonology',
    about: '',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBUZv94aPpn-rXT0C4vAxZmfwS79odgJIdHLZ9PzB8U4NzTNKG5cIy5J9KQpADuPsyzc&usqp=CAU',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 50,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'pulmonology',
    about: '',
    image: 'https://bidro.dk/cdn/shop/products/25_1024x1024.jpg?v=1665777120',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 60,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    category: 'pulmonology',
    about: '',
    image:
      'https://ecommerce.genericartmedicine.com/upload/products/thumb/product-photo-445.png',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 70,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    flavor: 'pulmonology',
    about: '',
    image:
      'https://www.dgmedicine.com/images2/SKIN%20SHINE%20CREAME_AD_dgmedicine.jpg',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 90,
    name: 'Multi Vitamins',
    brand: 'Positive Energy',
    flavor: 'pulmonology',
    about: '',
    image:
      'https://tajgenerics.com/wp-content/uploads/Vitamin-C-Tablet-Ascorbic-acid-Chewable-Tablets-500mg-manufcaturer-supplier-india-1-scaled.jpg',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
]

export const babyFoods = [
  {
    id: 10,
    name: 'Molfix Baby',
    brand: 'Positive Energy',
    flavor: 'orange',
    about: '',
    image:
      'https://smarket.ma/wp-content/uploads/2023/01/couches-molfix-mini.png',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 20,
    name: 'Mediterranean Fruits',
    brand: 'Positive Energy',
    flavor: 'orange',
    about: '',
    image:
      'https://herostore.com.eg/wp-content/uploads/2022/08/mediterranean-min.png',
    quantity: 120,
    price: 3.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 30,
    name: 'Nestle NAN',
    brand: 'Positive Energy',
    flavor: 'orange',
    about: '',
    image:
      'https://www.nestlebaby.be/sites/default/files/content_image/Nestl%C3%A9_NANOptipro1_2632-156_1.png',
    quantity: 120,
    price: 10.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
  {
    id: 40,
    name: 'Babylac',
    brand: 'Positive Energy',
    flavor: 'orange',
    about: '',
    image:
      'https://m.yuehlia.com/wp-content/uploads/2023/01/15170609/Milk-3.jpg',
    quantity: 120,
    price: 8.59,
    rating: 4.6,
    date: new Date('July 20, 2021 20:17:40'),
  },
]

export const sortOptions = [
  { name: 'Best Rating', option: 'rating', current: false },
  { name: 'Newest', option: 'new', current: false },
  { name: 'Price: Low to High', option: 'low', current: false },
  { name: 'Price: High to Low', option: 'high', current: false },
]

export const subCategories = [{ name: 'Medecines', href: '#' }]

export const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'v1', label: 'SkinCare', checked: false },
      { value: 'v2', label: 'Baby', checked: false },
      { value: 'v3', label: 'Vitamins', checked: false },
    ],
  },
  {
    id: 'brand',
    name: 'Brand',
    options: [
      { value: 'b1', label: 'Carave', checked: false },
      { value: 'b2', label: 'Merck', checked: false },
      { value: 'b3', label: 'GSK', checked: false },
      { value: 'b4', label: 'Nestle', checked: false },
      { value: 'b5', label: 'J&J', checked: false },
    ],
  },
]

export const sideBarUrl = [
  {
    id: 1,
    label: 'dashboard',
    icon: <DashboardIcon />,
    url: '/dashboard',
  },
  {
    id: 2,
    label: 'admins',
    icon: <AdminPanelSettingsIcon />,
    url: '/admins',
  },
  {
    id: 3,
    label: 'users',
    icon: <GroupIcon />,
    url: '/users',
  },
  {
    id: 4,
    label: 'customers',
    icon: <PersonPinIcon />,
    url: '/customers',
  },
  {
    id: 5,
    label: 'medecines',
    icon: <MedicationLiquidIcon />,
    url: '/medecines',
  },
  {
    id: 6,
    label: 'brands',
    icon: <AppsIcon />,
    url: '/brands',
  },
  {
    id: 7,
    label: 'products categories',
    icon: <CategoryIcon />,
    url: '/products_categories',
  },
  {
    id: 8,
    label: 'orders',
    icon: <ReceiptLongIcon />,
    url: '/orders',
  },
  {
    id: 9,
    label: 'transactions',
    icon: <PaidIcon />,
    url: '/transactions',
  },
]

export const services = [
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5ea080c95ad6901524de2e27/1633618118774-7P2B09JAL717GPOL1CC4/foot+bone+joint.jpg',
    alt: 'Img by Meriç Dağlı https://unsplash.com/@meric',
    title: 'Bone Care',
  },
  {
    src: 'https://images.pexels.com/photos/4202924/pexels-photo-4202924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Img by Meriç Dağlı https://unsplash.com/@meric',
    title: 'Body Care',
  },
  {
    src: 'https://images.pexels.com/photos/6303712/pexels-photo-6303712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Img by Meriç Dağlı https://unsplash.com/@meric',
    title: 'Diabet Care',
  },
  {
    src: 'https://images.pexels.com/photos/5842835/pexels-photo-5842835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Img by Meriç Dağlı https://unsplash.com/@meric',
    title: 'Eye Care',
  },
  {
    src: 'https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Img by Meriç Dağlı https://unsplash.com/@meric',
    title: 'Skin Care',
  },
  {
    src: 'https://images.pexels.com/photos/3845495/pexels-photo-3845495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Img by Meriç Dağlı https://unsplash.com/@meric',
    title: 'Baby Care',
  },
]

export const brands = [
  {
    id: 1,
    name: 'brand',
    src: 'https://logowik.com/content/uploads/images/141_novartis.jpg',
  },
  {
    id: 2,
    name: 'brand',
    src: 'https://mesugatra.com/cdn/shop/collections/png-transparent-cerave-logo-product-logos.png?v=1659019422',
  },
  {
    id: 3,
    name: 'brand',
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Johnson_and_Johnson_Logo.svg',
  },
  {
    id: 4,
    name: 'brand',
    src: 'https://logo.com/image-cdn/images/kts928pd/production/99bf39097f4253e985714a70db8ae9b8b06f22f5-731x731.png?w=1080&q=72',
  },
  {
    id: 5,
    name: 'brand',
    src: 'https://www.designmantic.com/images/medical-brand-logo-1.png',
  },
  {
    id: 6,
    name: 'brand',
    src: 'https://marketplace.canva.com/EAEvWQLx41Y/1/0/1600w/canva-blue-simple-medical-heart-treatment-logo-G9nzK6eBrkQ.jpg',
  },
  {
    id: 7,
    name: 'brand',
    src: 'https://www.logoground.com/uploads12/dv12y20231480882023-07-154512851S%20Medical%20Logo.jpg',
  },
  {
    id: 8,
    name: 'brand',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KH30iMyeB068nkZlK62OUgw91IXSPlLetg&usqp=CAU',
  },
]

export const reviews = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    content:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla.',
    stars: 5,
    reviewer: 'Michael Foster',
  },
  {
    id: 2,
    title: 'Amazing product',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada urna eget dolor tincidunt, ut tristique nisl finibus. Suspendisse potenti.',
    stars: 4,
    reviewer: 'Jennifer Smith',
  },
  {
    id: 3,
    title: 'Highly recommend!',
    content:
      'Vivamus euismod leo sit amet massa fringilla, ut tincidunt ipsum tincidunt. Aliquam erat volutpat. Sed rutrum tellus vel pretium euismod.',
    stars: 5,
    reviewer: 'John Doe',
  },
  {
    id: 4,
    title: 'Excellent service',
    content:
      'Pellentesque aliquet arcu id feugiat tincidunt. Morbi a orci ut enim laoreet sollicitudin vel nec nisi. In hac habitasse platea dictumst.',
    stars: 4,
    reviewer: 'Emily Johnson',
  },
]

export const socialMediaLinks = [
  {
    id: 1,
    link: '/instagram',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-4 w-4 text-[#475467]'
      >
        <path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
      </svg>
    ),
  },
  {
    id: 2,
    link: '/twitter',
    icon: (
      <svg
        viewBox='0 0 30 30'
        fill='currentColor'
        className='h-4 w-4 text-[#475467]'
      >
        <circle cx='15' cy='15' r='4' />
        <path d='M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z' />
      </svg>
    ),
  },
  {
    id: 3,
    link: '/facebook',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-4 w-4 text-[#475467]'
        fill='currentColor'
        viewBox='0 0 320 512'
      >
        <path d='M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z' />
      </svg>
    ),
  },
]
