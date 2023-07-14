import React from 'react'
import Card from '../components/elements/Card'
import MiscCard from '../components/templates/MiscCard'
import { Outlet } from 'react-router-dom'

export default function Login() {

    return (
        <section className="login-container">
            <Card
                id={0}
            >
                <Outlet />
                <MiscCard />
            </Card>
        </section>
    )
}