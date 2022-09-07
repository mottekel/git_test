import { Spin } from 'antd';
import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Redirect from '../components/Redirect'

function MRouter(props) {
  const element = useRoutes([
    {
      path: '/login',
      element: LazyLoad('login/Login')
    },
    {
      path: '/news',
      element: LazyLoad('news/News'),
      children: [
        {
          path: '',
          element: <Redirect to='/news/home' />
        },
        {
          path: 'home',
          element: LazyLoad('news/home/Home')
        },
        {
          path: 'articles',
          element: LazyLoad('news/articles/Articles')
        },
        {
          path: 'favorites',
          element: LazyLoad('news/favorites/Favorites')
        },
        {
          path: 'comments',
          element: LazyLoad('news/comments/Comments')
        },
        {
          path: 'journey',
          element: LazyLoad('news/journey/Journey')
        },
        {
          path: 'write',
          element: LazyLoad('news/write/Write')
        },
      ]
    },
    {
      path: '/test',
      element: LazyLoad('Test')
    },
    {
      path: '/',
      element: <Redirect to='/news/home' />,
    },
    {
      path: '*',
      element: LazyLoad('notfound/NotFound')
    }
  ])

  return element
}

//路由懒加载封装   可以自己抽离
const LazyLoad = (path) => {
  const Comp = lazy(() => import(`../views/${path}`))
  return (
    <Suspense fallback={<div style={{
      width: '100%',
      height: '100%',
      background: '#ccc',
      opacity: 0.5,
    }}>
      <Spin style={{
        position: 'absolute',
        left: '50%',
        top: "50%",
        transform: ' translate(-50%,-50%)'
      }}></Spin>
    </div>}>
      <Comp />
    </Suspense>
  )
}

export default MRouter;