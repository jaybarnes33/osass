import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/home.module.css";
import Head from "next/head";
const index = () => {
  const [memberID, setMemberID] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    console.log(submit);
  };
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Log In</title>
      </Head>
      <div className={`${styles.formContainer}`}>
        <div className={styles.formText}>
          <p className={styles.intro}>Welcome To OSASS</p>
          Enter your login credentials
        </div>
        <Form className={styles.form} onSubmit={submitHandler}>
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
          />
          <Form.Label className="my-2" htmlFor="password">
            Password
          </Form.Label>
          <Form.Control
            className={`${styles.input} `}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            id="password"
          />
          <div className={styles.buttonWrapper}>
            <Button
              className={`${styles.button} my-3 mx-auto`}
              type="submit"
              variant="primary"
            >
              Sign In
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default index;
