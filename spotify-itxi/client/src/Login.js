import React from "react"
import { Container } from "react-bootstrap"
import logo from './spotify.png';

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=218ffeffddd54e1e8b5ae689b2366c17&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", width: 1600 }}
    >
      <a className="btn btn-outline-dark btn-lg" style={{color: "black", width: 300}} href={AUTH_URL}>
        Login
        <img src={logo} style={{ marginLeft: 120 }} width={40} height={40}/>
      </a>
    </Container>
  )
}
