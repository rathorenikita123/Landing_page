import React from "react";
import bg from "../../assests/bg.jpg";
import img1 from "../../assests/img1.jpg";
import img2 from "../../assests/img2.jpg";
import img3 from "../../assests/img3.jpg";
import img4 from "../../assests/img4.jpg";

const Home = () => {
    return (
        <div className="home">
            <div className="card text-white border-0">
                <img className="card-img p-3 h-25 opacity-75" src={bg} alt="background" />
                <div className="card-img-overlay">
                    <div className="container text-center">
                        <h5 className="card-title display-3 fw-bolder mb-0">Donec euismod, nisl eget consectetur sagittis, nisl nunc</h5>
                        <p className="card-text lead fs-2 fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="row m-5">
                        <div className="card-details col-md-3  ">
                            <img className="card-img-more p-3" src={img1} alt="img" width={350} height={350} />
                            <p className="para  fw-bold p-3 text-center">ultrices nisl, euismod eget nisl nunc ultrices nisl euismod</p>
                        </div>
                        <div className="card-details col-md-3 ">
                            <img className="card-img-more p-3" src={img2} alt="img" width={350} height={350} />
                            <p className="para fw-bold p-3 text-center">ultrices nisl, euismod eget nisl nunc ultrices nisl euismod</p>
                        </div>
                        <div className="card-details col-md-3">
                            <img className="card-img-more p-3" src={img3} alt="img" width={350} height={350} />
                            <p className="para fw-bold p-3 text-center">ultrices nisl, euismod eget nisl nunc ultrices nisl euismod</p>
                        </div>
                        <div className="card-details col-md-3">
                            <img className="card-img-more p-3" src={img4} alt="img" width={350} height={350} />
                            <p className="para fw-bold fw-bold p-3 text-center">ultrices nisl, euismod eget nisl nunc ultrices nisl euismod</p>
                        </div>
                        <div>
                            <p className="text display-6 fw-bold text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec euismod, nisl eget consectetur sagittis, nisl nunc
                                ultrices nisl, euismod eget nisl nunc ultrices nisl euismod
                                eget nisl nunc ultrices nisl euismod eget nisl nunc ultrices
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home;