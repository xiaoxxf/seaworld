import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 使用懒加载
export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/pc/Home'),
    },

    {
      path: '/NFT',
      name: 'NFT',
      component: () => import('@/components/pc/NFT'),
    },
    {
      path: '/removeliquidity',
      name: 'RemoveLiquidity',
      component: () => import("@/components/pc/RemoveLiquidity"),
    },
    {
      path: '/Liquidity',
      name: 'Liquidity',
      component: () => import("@/components/pc/Liquidity"),
    },
    {
      path: '/Swap',
      name: 'Swap',
      component: () => import("@/components/pc/Swap"),
    },
    {
      path: '/exchange',
      name: 'Exchange',
      component: () => import('@/components/pc/Exchange'),
    },
    

    {
      path: '/MysteryBox',
      name: 'MysteryBox',
      component: () => import('@/components/pc/MysteryBox'),
    },
    
    {
      path: '/farms',
      name: 'Farms',
      component: () => import('@/components/pc/Farms'),
    },
    {
      path: '/nftMining',
      name: 'NftMining',
      component: () => import('@/components/pc/NftMining'),
    },
    
    {
      path: '/boxNFT',
      name: 'BoxNFT',
      component: () => import('@/components/pc/BoxNFT'),
    },
    {
      path: '/store',
      name: 'Store',
      component: () => import('@/components/pc/Store'),
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('@/components/pc/Account'),
    },
    {
      path: '/header',
      name: 'Header',
      component: () => import('@/components/pc/Header'),
    },
    {
      path: '/footer',
      name: 'Footer',
      component: () => import('@/components/pc/Footer'),
    },

  ]
})
