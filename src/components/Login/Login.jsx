import React from "react";
import img5 from "../../assests/img5.jpg";

const Login = () => {
    return (
        <div className="login">
            <section class="vh-100">
                <div class="container h-75 p-5">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="card text-black" >
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center">
                                        <img src={img5} class="img-fluid" alt="" />
                                    </div>
                                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                        <form class="m-3 mx-md-4">
                                            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                                <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                                    <i class="fa fa-facebook-f"></i>
                                                </button>

                                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                                    <i class="fa fa-twitter"></i>
                                                </button>

                                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                                    <i class="fa fa-linkedin"></i>
                                                </button>
                                            </div>
                                            <div class="divider d-flex align-items-center my-4">
                                                <p class="text-center fw-bold mx-3 mb-0">Or</p>
                                            </div>
                                            <div class="form-outline mb-4">
                                                <input type="email" id="form3Example3" class="form-control form-control-lg"
                                                    placeholder="Enter a valid Email address" />
                                            </div>
                                            <div class="form-outline mb-3">
                                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                                    placeholder="Enter password" />
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="form-check mb-0">
                                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                                    <label class="form-check-label" for="form2Example3">
                                                        Remember me
                                                    </label>
                                                </div>
                                                <a href="#!" class="text-body">Forgot password?</a>
                                            </div>
                                            <div class="text-center text-lg-start d-flex flex-column justify-content-center mt-4 pt-2">
                                                <button type="button" class="btn btn-dark btn-lg mx-5 ">Login</button>
                                                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                                                    class="link-danger">Register</a></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;