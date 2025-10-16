import react, { useState } from 'react';

const RegisterPage = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        // email: "",
        // password: "",
        // confirmPassword: ""
    });
    

    const onChangeHandler = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        setUser({ ...user, [e.target.name]: e.target.value });
    }


    return (
        <div class="container">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="wrapper">
                        <h2 class="mb-3">Register</h2>
                        <hr />
                        <h1>{user.firstName} {user.lastName}</h1>
                        <form>
                            <div class="form-group">
                                <label for="firstName">First Name</label>
                                <input type="text"
                                    class="form-control"
                                    name="firstName"
                                    id="firstName"
                                    value={user.firstName}
                                    onChange={onChangeHandler}
                                    placeholder="Enter first name" />
                            </div>
                            <div class="form-group">
                                <label for="lastName">Last Name</label>
                                <input type="text"
                                    class="form-control"
                                    name="lastName"
                                    id="lastName"
                                    value={user.lastName}
                                    onChange={onChangeHandler}
                                    placeholder="Enter last name" />
                            </div>
                            {/* <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword">Confirm Password</label>
                                <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password" />
                            </div> */}
                            <button type="submit" class="btn btn-primary mt-3">Register</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RegisterPage;