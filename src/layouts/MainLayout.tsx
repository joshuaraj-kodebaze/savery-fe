import TopBar from '../features/top-bar/TopBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <TopBar />
            <div style={{ marginTop: 50, marginLeft: 200 }}>
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout
