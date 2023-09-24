function Header() {
    return(
        <header>
            <nav className="nav">
                <img src="./react-logo.png" alt="react-logo" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>     
    )
}

function MainContent() {
    return(
        <body>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It is a popular libary</li>
                <li>I'll be able to fit in with cool developers</li>
                <li>I'll be more hireable</li>
            </ol>
        </body>
    )
}

function Footer() {
    return(
        <footer className="footer">
                <small>Tolucodes...</small>
        </footer>
    )
}

function Page() {
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}



ReactDOM.render(<Page />, document.getElementById("root")) 