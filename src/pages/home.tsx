import { Link } from "react-router-dom"
import Game from '../components/Game'
import { useState, useEffect } from 'react';
import Result from "./result";

export default function Home() {
    return (
        <div className="home-container">
            <Game />
        </div>
    )
}