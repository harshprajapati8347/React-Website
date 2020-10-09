import React, { useState } from "react";
import "./Contact.css"

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Name Is ${data.fullname}. My mobile number is ${data.phone}. My email id is ${data.email}.I want to infom you that ${data.msg}.`
    );
  };

  return (
    <>
      <div className="container-fluid">
        <form onSubmit={formSubmit}>
          <div class="form-row">
            <div class="form-group input-group col-md-6">
              <label>fullname</label>
              <input
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                type="text"
                class="form-control"
                id="fullname"
              />
            </div>

            <div class="form-group input-group col-md-6">
              <label>Email</label>
              <input
                name="email"
                value={data.email}
                onChange={InputEvent}
                type="email"
                class="form-control"
                id="inputEmail4"
              />
            </div>

            <div class="form-group input-group col-md-6">
              <label for="inputEmail4">Phone Number</label>
              <input
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                type="number"
                class="form-control"
                id="phone"
              />
            </div>

            <div class="form-group input-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                name="msg"
                value={data.msg}
                onChange={InputEvent}
                type="text"
                class="form-control"
                id="msg"
              />
            </div>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
