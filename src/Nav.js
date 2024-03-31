import React, { useState, useEffect } from 'react';

function Nav() {
    const texts = ["T-Shirts", "Necklace's", "Watches", "Pants", "Shorts", "Shoes", "Other Accessories...", "Shirts"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, [texts.length]);


    const [emailValidationResult, setEmailValidationResult] = useState("");
    const [nameValidationResult, setNameValidationResult] = useState("");
    const [PWValidationResult, setPwvalidationResult] = useState("");
    const [ContactValidationResult, setContactvalidationResult] = useState("");
    useEffect(() => {
        const emailInput = document.querySelector(".signupEmail");
        const nameInput = document.querySelector(".signupName");
        const pwInput = document.querySelector(".signupPW");
        const ContactInput = document.querySelector(".signupContact");

        function ContactValidation() {
            let Contactdata = ContactInput.value;
            let Contactpattern = /^\d{10}$/;

            if (Contactpattern.test(Contactdata)) {
                return true;
            } else {
                return false;
            }
        }

        function PWValidation() {
            const PWdata = pwInput.value;
            const PWpattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,16}$/;


            if (PWpattern.test(PWdata)) {
                return true;
            } else {
                return false;
            }
        }
        function emailValidation() {
            const emailData = emailInput.value;
            const mailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8})$/;

            if (mailPattern.test(emailData)) {
                return true;
            } else {
                return false;
            }
        }

        function nameValidation() {
            const nameData = nameInput.value;
            const namePattern = /^[a-zA-Z\s]+$/;

            if (namePattern.test(nameData)) {
                return true;
            } else {
                return false;
            }
        }

        emailInput.addEventListener("keyup", function () {
            if (emailValidation()) {
                setEmailValidationResult("Valid Email");
                emailInput.style.color = "green";
                emailInput.style.fontWeight = "500";
                emailInput.style.boxShadow = "10px 10px 10px lightgreen";

            } else {
                setEmailValidationResult("Invalid Email");
                emailInput.style.color = "red";
                emailInput.style.fontWeight = "800";
                emailInput.style.boxShadow = "10px 10px 10px #FF474C";
            }
        });

        nameInput.addEventListener("keyup", function () {
            if (nameValidation()) {
                setNameValidationResult("Valid");
                nameInput.style.color = "green";
                nameInput.style.fontWeight = "500";
                nameInput.style.boxShadow = "10px 10px 10px lightgreen";
            } else {
                setNameValidationResult("Only Characters");
                nameInput.style.color = "red";
                nameInput.style.fontWeight = "800";
                nameInput.style.boxShadow = "10px 10px 10px #FF474C";
            }
        });
        pwInput.addEventListener("keyup", function () {
            if (PWValidation()) {
                setPwvalidationResult("Valid Password Pattern");
                pwInput.style.color = "green";
                pwInput.style.fontWeight = "500";
                pwInput.style.boxShadow = "10px 10px 10px lightgreen";
            }
            else {
                setPwvalidationResult("Invalid Password Pattern");
                pwInput.style.color = "red";
                pwInput.style.fontWeight = "800";
                pwInput.style.boxShadow = "10px 10px 10px #FF474C";
            }
        });
        ContactInput.addEventListener("keyup", function () {
            if (ContactValidation()) {
                setContactvalidationResult("Valid Contact");
                ContactInput.style.color = "green";
                ContactInput.style.fontWeight = "500";
                ContactInput.style.boxShadow = "10px 10px 10px lightgreen";
            }
            else {
                setContactvalidationResult("Invalid Contact");
                ContactInput.style.color = "red";
                ContactInput.style.fontWeight = "800";
                ContactInput.style.boxShadow = "10px 10px 10px #FF474C";
            }
        });
        return () => {
            emailInput.removeEventListener("keyup", emailValidation);
            nameInput.removeEventListener("keyup", nameValidation);
            pwInput.removeEventListener("keyup", PWValidation);
            ContactInput.removeEventListener("keyup", ContactValidation);
        };
    }, []);
    return (
        <>
            <div className="TopSide">

                <div className="header">
                    <nav className="navbar navbar-expand-lg background-curve">
                        <img id="atomIcon" src="./images/LogoAtom.png" alt="ATOMStyles Image" />
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#"><i className="bi bi-house"></i> Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="bi bi-shop-window"></i> Shop</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i className="bi bi-menu-down"></i> Category
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Shirts</a>
                                        <a className="dropdown-item" href="#">T-Shirts</a>
                                        <a className="dropdown-item" href="#">Necklace's</a>
                                        <a className="dropdown-item" href="#">Watches</a>
                                        <a className="dropdown-item" href="#">Other Accessories...</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Pants</a>
                                        <a className="dropdown-item" href="#">Shorts</a>
                                        <a className="dropdown-item" href="#">Shoes</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="bi bi-info-square"></i> About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="bi bi-telephone"></i> Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="form-inline my-2 my-lg-0">
                            <button className="btn btn-primary" data-toggle="modal" data-target=".loginmodal"><i className="bi bi-door-open"></i> LogIn</button>
                            <button className="btn btn-primary" data-toggle="modal" data-target=".signupmodal"><i className="bi bi-person-add"></i> SignUp</button>
                        </div>

                    </nav>
                </div>

                <div className="hero">
                    <div className="d-flex">
                        <div className="w-50">
                        </div>
                        <div className="w-50">
                            <h1>NEW YEAR SALE!!<br /></h1>
                            <h1 className="blink-text">Up to 50% off</h1>
                            <h2>Offer's On - <span className="changetext" id="textContainer">{texts[currentIndex]}</span> </h2>
                            <p>Ring in the New Year with style at ATOMStyles! Enjoy up to 50% off on our fashion-forward collection.<br />
                                Elevate your wardrobe with chic essentials and statement pieces.<br /> Don't miss out on this limited-time
                                opportunity to start the year in fashion.<br /> Shop now and save big!</p>
                            <div className="text-center">

                                <button className="btn btn-primary"><i className="bi bi-shop-window"></i> Shop Now</button>
                            </div>
                        </div >
                    </div >
                </div >

                <br /><br />
            </div >


            <div className="modal signupmodal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Sign Up Form</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Full Name" className="form-control signupName" />
                                </div>
                                <p className="nametest">{nameValidationResult}</p>
                                <div className="form-group">
                                    <input type="email" placeholder="Email" className="form-control signupEmail" />
                                </div>
                                <p className="emailtest">{emailValidationResult}</p>
                                <div className="form-group">
                                    <input type="password" placeholder="Password" className="form-control signupPW" />
                                </div>
                                <p className="PWtest">{PWValidationResult}</p>
                                <div className="form-group">
                                    <input type="Contact" placeholder="Contact Number" className="form-control signupContact" />
                                </div>
                                <p className="Contacttest">{ContactValidationResult}</p>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                </div>
                                <p>Already Have an Account?<a href=".loginmodal" data-toggle="modal" data-dismiss="modal"> Sign In</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal loginmodal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Sign Up Form</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <input type="email" placeholder="Email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="Password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                </div>
                                <p>Don't Have an Account?<a href=".signupmodal" data-toggle="modal" data-dismiss="modal"> Sign Up</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Nav