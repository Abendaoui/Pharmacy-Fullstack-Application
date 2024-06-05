import React from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import {
  PublicLayout,
  PrivateLayout,
  ManagementLayout,
  BlogLayout,
} from '../views/layouts'
import { Form, AdminForm } from '../views/pages/Auth'
import {
  Home,
  About,
  ContactUs,
  Products,
  Card,
  Checkout,
  Profile,
  ShowProductDetails,
  ShowBrandDetails,
  Search,
  Address,
  Return,
} from '../views/pages/Customer'
import {
  Dashboard,
  Admins,
  Users,
  Customers,
  Medecine,
  ProductsCategories,
  Brands,
  Orders,
  Transactions,
  Account,
  AddAdmin,
  AddMedecine,
  AddBrand,
  AddCategory,
  ShowOrder,
} from '../views/pages/Admin'
import {
  Blog,
  Post,
  CreatePost,
  AboutBlog,
  ContactBlog,
  SearchBlog,
} from '../views/pages/blog'
import NotFound from '../views/pages/Errors/NotFound'
import Unauthorized from '../views/pages/Errors/Unauthorized'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/auth' />,
      },
      {
        path: '/auth',
        element: <Form />,
      },

      {
        path: '/admin',
        element: <AdminForm />,
      },
    ],
  },
  {
    path: '/',
    element: <PrivateLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
        index: true,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:slug',
        element: <ShowProductDetails />,
      },
      {
        path: '/brands/:slug',
        element: <ShowBrandDetails />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact_us',
        element: <ContactUs />,
      },
      {
        path: '/card',
        element: <Card />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/address',
        element: <Address />,
      },
      {
        path: '/search/:title',
        element: <Search />,
      },
      {
        path: '/return/:id',
        element: <Return />,
      },
    ],
  },
  {
    path: '/',
    element: <ManagementLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
        index: true,
      },
      {
        path: '/admins',
        element: <Admins />,
      },
      {
        path: '/admins/add_admin',
        element: <AddAdmin />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/customers',
        element: <Customers />,
      },
      {
        path: '/medecines',
        element: <Medecine />,
      },
      {
        path: '/medecines/add_medecine',
        element: <AddMedecine />,
      },
      {
        path: '/products_categories',
        element: <ProductsCategories />,
      },
      {
        path: '/products_categories/add_category',
        element: <AddCategory />,
      },
      {
        path: '/brands',
        element: <Brands />,
      },
      {
        path: '/brands/add_brand',
        element: <AddBrand />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/orders/:id',
        element: <ShowOrder />,
      },
      {
        path: '/transactions',
        element: <Transactions />,
      },
      {
        path: '/account',
        element: <Account />,
      },
    ],
  },
  {
    path: '/',
    element: <BlogLayout />,
    children: [
      {
        path: '/blog',
        element: <Blog />,
        index: true,
      },
      {
        path: '/posts/:slug',
        element: <Post />,
      },
      {
        path: '/create_post',
        element: <CreatePost />,
      },
      {
        path: '/blog/about_us',
        element: <AboutBlog />,
      },
      {
        path: '/blog/contact_us',
        element: <ContactBlog />,
      },
      {
        path: '/blog/search',
        element: <SearchBlog />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/unauthorized',
    element: <Unauthorized />,
  },
])

export default router
