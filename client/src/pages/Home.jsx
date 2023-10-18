import DashboardNavbar from "../widgets/layout/Dashboard-navbar";
import Sidenav from "../widgets/layout/Sidenav";

const Home = () => {

    return (
        <div className="flex">
            <Sidenav />
            <DashboardNavbar />
        </div>
    );
}

export default Home;
