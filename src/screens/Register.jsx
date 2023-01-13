import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { register } from "../Redux/Actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  Button,
  Typography,
  Col,
  Row,
  Divider,
  Avatar,
  Image,
} from "antd";

const { Text } = Typography;

const Register = () => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (firstName && lastName) {
      const combineNames = (firstName, lastName) => `${firstName} ${lastName}`;
      setName(combineNames(firstName, lastName));
    }
  }, [firstName, lastName]);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, userName, email, password));
  };

  if (userInfo) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <Col span={12} offset={6}>
        <Divider orientation="left" />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Avatar
            src={
              <Image
                src="../public/instagram"
                style={{
                  width: 32,
                }}
              />
            }
          />
          <Text component="h1" variant="h5">
            Sign up
          </Text>
          <form onSubmit={submitHandler}>
            <Col>
              <Row span={24}>
                <Input
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Row>
              <Row span={24}>
                <Input
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Row>
              <Row span={24}>
                <Input
                  variant="outlined"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  autoComplete="userName"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </Row>
              <Row span={24}>
                <Input
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Row>
              <Row span={24}>
                <Input
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Row>
            </Col>
            <div className="mt-4">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </div>
            <Col>
              <Row>
                <Link to={"/"} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Row>
            </Col>
          </form>
        </div>
      </Col>
    </>
  );
};

export default Register;
