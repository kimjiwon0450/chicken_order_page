import { createBrowserRouter } from 'react-router-dom';
// import LoginPage from '../pages/IndexPage';
import LoginPage from '../login/LoginPage';
import Mypage from '../my-page/Mypage';
import RootLayout from '../components/RootLayout';
import BrandStartUp from '../BrandStartUp/BrandStartUp';
import MainPage from '../components/MainPage';

// 라우터 설정
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true, // 부모 경로가 활성화 되었을 때 기본으로 사용할 컴포넌트
        element: <MainPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'mypage',
        element: <Mypage />,
      },
    ],
    path: 'brand_startup',
    element: <BrandStartUp />,
  },
]);
