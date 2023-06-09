
import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

export default function Home() {
    return (
        <>
            <AppWrapper>
                <Header />
                <Outlet />
                {/* <Footer /> */}
            </AppWrapper>
        </>
    )
}