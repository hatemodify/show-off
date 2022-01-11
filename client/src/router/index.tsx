import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import MainList from '../page/list'



const ItemDetail = lazy(() => import('../page/itemDetail'))




function SiteRouter(props: any) {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path={`/detail/:detailId/*`} element={<ItemDetail />} />
                <Route path={`/`} element={<MainList />} />
            </Routes>
        </Suspense>
    )
}

export default SiteRouter
