import { Outlet } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import './scss/styles.scss'
import { useState } from "react"
import { createPortal } from 'react-dom';
import ModalRulesContent from './components/ModalRulesContent';
 
export function Layout() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <button className="rules" onClick={() => setShowModal(true)}>Rules</button>
            { showModal && createPortal(
                <ModalRulesContent onClose={() => setShowModal(false)} />,
                document.body
            )};
            <Footer />
        </>
    )
}