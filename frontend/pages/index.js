import { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import styles from "../styles/home.module.css";
import { users } from "../data/users.js";
import Head from "next/head";
import Link from "next/link";
const index = () => {
  // State
  const [memberID, setMemberID] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  // Handlers
  const loginHandler = (memberID, password) => {
    const user = users.find((user) => user.memberID === memberID);
    if (!user) {
      setMessage("Invalid Credentials");
    } else {
      user.password === password
        ? setMessage(
            `Welcome ${user.name.split(" ")[0]}, you will be redirected soon.`
          )
        : setMessage("Invalid Credentials");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    loginHandler(memberID, password);
  };

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>OSASS || Log In</title>
      </Head>
      <div className={`${styles.formContainer}`}>
        <div className={styles.formText}>
          <p className={styles.intro}>Welcome To OSASS</p>
          <small>Enter your login credentials</small>
        </div>
        <Form className={styles.form} onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label className="my-2" htmlFor="member-id">
              Member ID
            </Form.Label>
            <Form.Control
              className={`${styles.input}`}
              type="text"
              value={memberID}
              onChange={(event) => setMemberID(event.target.value)}
              aria-label="Member ID"
              id="member-id"
              required
            />
          </Form.Group>
          <Form.Group>
            {" "}
            <Form.Label className="my-2" htmlFor="password">
              Password
            </Form.Label>
            <Form.Control
              className={`${styles.input} `}
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              id="password"
              required
            />
          </Form.Group>
          {message && (
            <Alert
              variant={!message.includes("Invalid") ? "success" : "danger"}
            >
              {message}
            </Alert>
          )}
          <Row className="my-4 ml-1">
            <Col sm={6}>
              <Form.Group controlId="remember">
                <Form.Check
                  type="checkbox"
                  label="Remember Me?"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                ></Form.Check>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Link href="/forgot">
                <a className={styles.forgot}>Forgot Password?</a>
              </Link>
            </Col>
          </Row>

          <div className={styles.buttonWrapper}>
            <Button
              className={`${styles.button} my-3 mx-auto`}
              type="submit"
              variant="primary"
            >
              Sign In
            </Button>
          </div>
          <hr />

          <p className={styles.small}>
            <small>
              UMAT{" "}
              <Link href="/">
                <a href="">OSASS</a>
              </Link>{" "}
              - &copy; {new Date().getFullYear()}
            </small>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default index;
