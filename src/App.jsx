import { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

// Micro-apps are loaded directly from the submodule folders under /packages
// Each path points to the app's src/index.jsx inside its submodule directory
const LearningApp       = lazy(() => import('../packages/app-learning/src/index.jsx'))
const PokerCalculator   = lazy(() => import('../packages/app-poker-calculator/src/index.jsx'))
const KidsApp           = lazy(() => import('../packages/app-kids/src/index.jsx'))

function RootLayout() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true,                element: <Home /> },
      { path: 'learning',           element: <LearningApp /> },
      { path: 'poker-calculator',   element: <PokerCalculator /> },
      { path: 'kids',               element: <KidsApp /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
