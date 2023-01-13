import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
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
import { login } from "../Redux/Actions/UserAction";

const { Text } = Typography;

const Login = () => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
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
            Sign in
          </Text>
          <form onSubmit={submitHandler}>
            <Col>
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
                Log in
              </Button>
            </div>
            <Col>
              <Row>
                <Link to={"/register"} variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Row>
            </Col>
          </form>
        </div>
      </Col>
    </>
  );
};

export default Login;
