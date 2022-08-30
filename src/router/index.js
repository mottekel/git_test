import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Redirect from '../components/Redirect'

function MRouter(props) {
  const element=useRoutes([
    {
      path:'/home',
      element:LazyLoad('sandbox/home/Home')
    },
    {
      path:'/login',
      element:LazyLoad('login/Login')
    },
    {
      path:'/',
      element:<Redirect to='/home'/>
    },
    {
      path:'*',
      element:LazyLoad('notfound/NotFound')
    }
  ])

  return element
}

//路由懒加载封装   可以自己抽离
const LazyLoad = (path) => {
  const Comp = lazy(() => import(`../views/${path}`))
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <Comp />
    </Suspense>
  )
}

export default MRouter;