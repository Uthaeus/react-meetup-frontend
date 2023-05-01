import { useNavigate } from "react-router";

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>
    );
}

export default ErrorPage;