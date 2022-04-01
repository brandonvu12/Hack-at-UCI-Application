import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "/Users/brandonvu/Documents/hack_uci_app/src/App.css";

const ApplicationForm = () => {
  const [enteredName, setName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredFunFact, setFunFact] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const funFactChangeHandler = (event) => {
    setFunFact(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setName("");
    setEmail("");
    setFunFact("");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    var data = {
      name: enteredName,
      email: enteredEmail,
      funfact: enteredFunFact,
    };
    const searchParams = new URLSearchParams(data);

    const searchURL =
      "https://hack-tech-app-endpoint.herokuapp.com/test?" + searchParams;

    fetch(searchURL, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    return toast("🦄  Submitted Succesfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Container id="main-container" className="d-grid">
      <Form
        className="bg-white p-5 mt-5 "
        onSubmit={submitHandler}
        id="formthing"
      >
        <p id="titleForm">Hack UCI Application</p>
        <Form.Group className="mb-3" controlId="form.Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
            placeholder="Name"
            required
          />
        </Form.Group>
        <Form.Group controlId="form.Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            placeholder="Email"
            required
          />
        </Form.Group>
        <Form.Group controlId="form.FunFact">
          <Form.Label>Fun Fact</Form.Label>
          <Form.Control
            as="textarea"
            value={enteredFunFact}
            rows={3}
            onChange={funFactChangeHandler}
            placeholder="Fun Fact"
            required
          />
        </Form.Group>
        <div id="buttondiv">
          <Button type="submit" className="m-5" id="buttonstyle">
          Submit
        </Button>
        </div>
        
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </Form>
    </Container>
  );
};
export default ApplicationForm;
