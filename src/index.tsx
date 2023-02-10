import { render } from "solid-js/web"
import { CounterProvider, useCounter } from "./counter-store"
import { Router, Routes, Route, A } from "@solidjs/router"

import { Home } from "./pages/Home"
import { Users } from "./pages/Users"

const MiddleComponent = () => <NestedComponent />

const NestedComponent = () => {
    const [count, { increment, decrement }] = useCounter()
    return (
        <>
            <p>{count()}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}

const App = () => {
    console.log(document.location.toString())
    return <>
        <CounterProvider count={7}>
            <MiddleComponent />
        </CounterProvider>

        <h1>My Site with Lots of Pages</h1>
        <nav>
            <A href="/about">About</A>
            <A href="/">Home</A>
            <A href="/users">Users</A>
        </nav>

        <Routes>
            <Route path="/users" component={Users} />
            <Route path="/" component={Home} />
            <Route path="/about" element={<div>This site was made with Solid</div>} />
        </Routes>
    </>
}

render(() =>
    <Router>
        <App />
    </Router>
    , document.body)
