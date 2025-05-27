import { Link } from "react-router-dom"
import Game from '../components/Game'

export default function Home() {
    return (
        <>
            <Link to="/result">
                <Game />
            </Link>
        </>
    )
}