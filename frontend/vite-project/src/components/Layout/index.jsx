import Header from '../Header/HeaderTemplate'
import Footer from '../Footer/FooterTemplate'
import { Outlet } from 'react-router-dom'

function Layout ( ) {
    return (
        <>
            <Header/>
                <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export default Layout;