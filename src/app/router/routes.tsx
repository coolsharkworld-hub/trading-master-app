import AffiliatesPage from '@pages/Affiliates'
import BlogPage from '@pages/Blog'
import FeaturesPage from '@pages/Features'
import HomePage from '@pages/Home'
import LandingPage from '@pages/Landing'
import NewsletterPage from '@pages/Newsletter'
import PricingPage from '@pages/Pricing'
import ReportsPage from '@pages/Reports'
import NotFoundPage from '@shared/components/common/NotFoundPage'

import { DashboardLayout } from '../layouts/DashboardLayout'
import { LandingLayout } from '../layouts/LandingLayout'
import { MainLayout } from '../layouts/MainLayout'

export const routes = [
  {
    path: '/',
    element: <LandingLayout />,
    children: [{ path: '', element: <LandingPage /> }]
  },
  {
    path: '/dashboard',
    element: <LandingLayout />,
    children: [{ path: '', element: <HomePage /> }]
  },
  {
    path: '/features',
    element: <LandingLayout />,
    children: [{ path: '', element: <FeaturesPage /> }]
  },
  {
    path: '/pricing',
    element: <LandingLayout />,
    children: [{ path: '', element: <PricingPage /> }]
  },
  {
    path: '/newsletter',
    element: <LandingLayout />,
    children: [{ path: '', element: <NewsletterPage /> }]
  },
  {
    path: '/blog',
    element: <LandingLayout />,
    children: [{ path: '', element: <BlogPage /> }]
  },
  {
    path: '/affiliates',
    element: <MainLayout />,
    children: [{ path: '', element: <AffiliatesPage /> }]
  },
  {
    path: '/reports',
    element: <DashboardLayout />,
    children: [{ path: '', element: <ReportsPage /> }]
  },
  {
    path: '*',
    element: <LandingLayout />,
    children: [{ path: '*', element: <NotFoundPage /> }]
  }
]
