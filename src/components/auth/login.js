import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const submitHandler = data => {
        fetch('http://localhost:3000/users/sign_in', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                console.log('response ok', response);
                navigate('/meetups');
                return response.json();
            }
            throw response
        })
        .catch(error => {
            console.log('error login', error);
        });
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Login</h1>

            <form className="auth-form" onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" {...register("username", { required: true })} />
                    {errors.username && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id='password' {...register("password", { required: true })} />
                    {errors.password && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;