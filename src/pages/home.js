import { useNavigate } from "react-router";

function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="home-container">
            <div className="welcome-wrapper">
                <h1 className="welcome-title">Welcome to Community Meetups</h1>
                <button className="welcome-btn" onClick={() => navigate('/meetups')}>See Meetups</button>
            </div>
            <div className="home-meetups-wrapper">
                <h2 className="home-meetups-title">Recently Posted Meetups</h2>
                <div className="home-meetups">
                    
                </div>
            </div>
        </div>
    );
}

export default HomePage;