import React from "react"
import { Link } from 'gatsby'
import { getUser,isLoggedIn } from "../services/auth"

import Layout from "../components/layout"

export default () => (
    <Layout>
        <h1>Hello {isLoggedIn() ? getUser().name : "World"}</h1>
        <p>
            {
                isLoggedIn() ?
                (<>
                    You are logged in, so check your{" "}
                    <Link to="/app/profile">Profile</Link>
                </>) :
                (<>
                    You Should <Link to="/app/login">Login</Link> to see restricted content
                </>)
            }
        </p>
    </Layout>
)
