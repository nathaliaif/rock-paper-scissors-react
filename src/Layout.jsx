import { Outlet } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import './scss/styles.scss'
 
export function Layout() {
    return (
        <>
            <Header Score={10} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}