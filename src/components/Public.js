import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Arya Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in 555 Noida Sector 69 City, Arya Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Arya Repairs<br />
                    555 Noida Sector 69<br />
                    Noida City<br />
                    <a href="tel:+91987654321">987654321</a>
                </address>
                <br />
                <p>Owner: Arya Chaudhary</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public