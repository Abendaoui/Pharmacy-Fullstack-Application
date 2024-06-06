import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import GroupIcon from '@mui/icons-material/Group'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import PaidIcon from '@mui/icons-material/Paid'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import CategoryIcon from '@mui/icons-material/Category'
import AppsIcon from '@mui/icons-material/Apps'
import { IMG08, IMG09, IMG10, IMG11, IMG12, IMG13 } from '../assets/images'

export const navigation = {
  pages: [
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact_us' },
    { name: 'Our Blog', href: '/blog' },
  ],
}
export const guestNavigation = {
  pages: [
    { name: 'Products', href: '/guest/products' },
    { name: 'About Us', href: '/guest/about' },
    { name: 'Contact Us', href: '/guest/contact_us' },
    { name: 'Our Blog', href: '/blog' },
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
        name: 'Blog',
        href: '/blog',
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
        name: 'Cash',
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

export const sortOptions = [
  { name: 'Price: Low to High', option: 'low', current: false },
  { name: 'Price: High to Low', option: 'high', current: false },
]

export const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'skincare', label: 'Skincare', checked: false },
      { value: 'Baby Food', label: 'Baby Food', checked: false },
      { value: 'vitamin', label: 'Vitamin', checked: false },
    ],
  },
  {
    id: 'brand',
    name: 'Brand',
    options: [
      { value: 'cerave', label: 'Carave', checked: false },
      { value: 'sanofi', label: 'sanofi', checked: false },
      { value: 'nestle', label: 'Nestle', checked: false },
      { value: 'merck', label: 'Merck', checked: false },
      { value: 'johnson&johnson', label: 'J&J', checked: false },
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
    src: IMG08,
    alt: 'Img by Me',
    title: 'Bone Care',
  },
  {
    src: IMG09,
    alt: 'Img by Me',
    title: 'Body Care',
  },
  {
    src: IMG10,
    alt: 'Img by Me',
    title: 'Diabet Care',
  },
  {
    src: IMG11,
    alt: 'Img by Me',
    title: 'Eye Care',
  },
  {
    src: IMG12,
    alt: 'Img by Me',
    title: 'Skin Care',
  },
  {
    src: IMG13,
    alt: 'Img by Me',
    title: 'Baby Care',
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
 export const listOption = [
    {
      id: 1,
      title: 'Provides Essential Nutrients',
    },
    {
      id: 2,
      title: 'High In Fiber',
    },
    {
      id: 3,
      title: 'Low In Fat',
    },
  ]
export const reviews = [
  {
    id: 1,
    title: 'Fast and reliable delivery',
    content:
      'The delivery was super quick, and the packaging was excellent. The medication arrived in perfect condition. I am very satisfied with the service.',
    stars: 5,
    reviewer: 'Alex Brown',
  },
  {
    id: 2,
    title: 'User-friendly interface',
    content:
      'The app is very easy to navigate and use. I found what I needed quickly, and the checkout process was smooth and hassle-free. Great experience overall!',
    stars: 4,
    reviewer: 'Sarah Williams',
  },
  {
    id: 3,
    title: 'Great customer support',
    content:
      'I had an issue with my order, but the customer support team resolved it promptly. They were very courteous and helpful. Highly recommend this pharmacy.',
    stars: 4,
    reviewer: 'David Miller',
  },
  {
    id: 4,
    title: 'Competitive prices',
    content:
      'The prices are very reasonable, and I even found some items cheaper than other places. The discounts and offers are also a nice bonus.',
    stars: 5,
    reviewer: 'James Wilson',
  },
]

export const questions = [
  {
    id: 1,
    head: 'How can I place an order on the pharmacy app?',
    answer:
      'To place an order, simply browse through the products, add the desired items to your cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.',
  },
  {
    id: 2,
    head: 'Can I track my order after placing it?',
    answer:
      'Yes, you can track your order through the "My Orders" section in your account. You will also receive updates via email or SMS regarding the status of your order.',
  },
  {
    id: 3,
    head: 'Are there any delivery charges for orders?',
    answer:
      'Delivery charges may vary depending on your location and the total value of your order. You can see the applicable delivery charges at the checkout page before confirming your order.',
  },
  {
    id: 4,
    head: 'What payment methods are accepted?',
    answer:
      'We accept various payment methods including credit/debit cards, Paypal. You can choose your preferred payment method at checkout.',
  },
  {
    id: 5,
    head: 'What should I do if I receive the wrong medication?',
    answer:
      'If you receive the wrong medication, please contact our customer support immediately. We will arrange for a return and replacement as per our return policy.',
  },
]