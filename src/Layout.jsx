import { Outlet } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import './scss/styles.scss'
 
export function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <button className="rules">Rules</button>
            <Footer />
        </>
    )
}