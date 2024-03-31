import React, { useState, useEffect } from 'react';

function Booking() {
    const [quantityValidationResult, setQuantityValidationResult] = useState("");
    const [contactValidationResult, setContactValidationResult] = useState("");

    useEffect(() => {
        const quantityInput = document.querySelector(".BookingQuantity");
        const contactInput = document.querySelector(".BookingContact");
        const startDateInput = document.querySelector("#start_date");
        const endDateInput = document.querySelector("#end_date");

        function quantityValidation() {
            const quantityData = quantityInput.value;
            const quantityPattern = /^\d+$/;

            if (quantityPattern.test(quantityData)) {
                return true;
            } else {
                return false;
            }
        }

        function contactValidation() {
            const contactData = contactInput.value;
            const contactPattern = /^\d{10}$/;

            if (contactPattern.test(contactData)) {
                return true;
            } else {
                return false;
            }
        }

        quantityInput.addEventListener("keyup", function () {
            if (quantityValidation()) {
                setQuantityValidationResult("Valid Quantity");
                quantityInput.style.color = "green";
                quantityInput.style.fontWeight = "500";
                quantityInput.style.boxShadow = "10px 10px 10px lightgreen";
            } else {
                setQuantityValidationResult("Invalid Quantity");
                quantityInput.style.color = "red";
                quantityInput.style.fontWeight = "800";
                quantityInput.style.boxShadow = "10px 10px 10px #FF474C";
            }
        });

        contactInput.addEventListener("keyup", function () {
            if (contactValidation()) {
                setContactValidationResult("Valid Contact");
                quantityInput.style.color = "green";
                quantityInput.style.fontWeight = "500";
                contactInput.style.boxShadow = "10px 10px 10px lightgreen";
            } else {
                setContactValidationResult("Invalid Contact");
                quantityInput.style.color = "red";
                quantityInput.style.fontWeight = "800";
                contactInput.style.boxShadow = "10px 10px 10px #FF474C";
            }
        });
         function handleStartDateChange() {
        const startDateValue = startDateInput.value;
        endDateInput.min = startDateValue;
        if (endDateInput.value < startDateValue) {
            endDateInput.value = startDateValue;
        }
    }

    startDateInput.addEventListener('change', handleStartDateChange);

        return () => {
            quantityInput.removeEventListener("keyup", quantityValidation);
            contactInput.removeEventListener("keyup", contactValidation);
            startDateInput.removeEventListener('change', handleStartDateChange);
        };
    }, []);
    function Booking_alert() {
        var product = document.querySelector(".BookingProduct").value;
        var Sdatearray = document.querySelector('#start_date').value;
        var Edatearray = document.querySelector('#end_date').value;
        var Baddress = document.querySelector(".BookingAddress").value;
        if (product !== "" && quantityValidationResult === "Valid Quantity" && Sdatearray !== "" && Edatearray !== "" && contactValidationResult === "Valid Contact" && (Baddress !== "" || Baddress !== null)) {
            alert("Booking Successfull");
        }else{
            alert("Please fill all the details");
        }
    }
    return (
        <>
            <br /><br /><br />
            <div className="Booking">
                <div className=" row Booking-Body">
                    <div className="col-md-6 Booking-left">
                        <img className="Booking-img" src="./images/Booking-Img.jpg" />
                    </div>
                    <div className="col-md-6 Booking-Right">
                        <form>
                            <div className="form-group">
                                <select className="form-control BookingProduct">
                                    <option value="">Select product</option>
                                    <option value="polo-tshirt">Polo T-Shirts</option>
                                    <option value="sweatpants">Sweatpants</option>
                                    <option value="formal-shoes">Formal Shoes</option>
                                    <option value="checkered-shirt">Checkered Shirt</option>
                                    <option value="formal-pants">Formal Pants</option>
                                    <option value="casual-sneakers">Casual Sneakers</option>
                                    <option value="long-sleeve-tshirt">Long Sleeve T-Shirt</option>
                                    <option value="blue-jeans">Blue Jeans</option>
                                    <option value="sport-shoes">Sport Shoes</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="quantity" placeholder="Enter Quantity" className="form-control BookingQuantity" />
                            </div>
                            <p className="Quantitytest">{quantityValidationResult}</p>
                            <div className="form-group">
                                <label for="startDate">Start Date:</label>
                                <input type="date" className="form-control startDate" id="start_date" />
                            </div>
                            <div className="form-group">
                                <label for="endDate">End Date:</label>
                                <input type="date" className="form-control endDate" id="end_date" min=""/>
                            </div>
                            <div className="form-group">
                                <input type="Contact" placeholder="Contact Number" className="form-control BookingContact" />
                            </div>
                            <p className="BookingContacttest">{contactValidationResult}</p>
                            <div className="form-group">
                                <textarea id="BookingAddress" className="form-control BookingAddress" placeholder="Enter your address"
                                    rows="4"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary Booking-btn" onClick={Booking_alert}>Book Now</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Booking