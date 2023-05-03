import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const submitHandler = data => {
        console.log(data);

        fetch('http://localhost:3000/users', {
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
    };

    return (
        <div className="auth-container">
            <h1 className="auth-title">Sign Up</h1>

            <form className="auth-form" onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" {...register("username", { required: true })} />
                    {errors.username && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type='email' className="form-control" id='email' {...register("email", { required: true })} />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id='password' {...register("password", { required: true })} />
                    {errors.password && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type="password" className="form-control" id='password_confirmation' {...register("password_confirmation", { required: true })} />
                    {errors.password_confirmation && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;