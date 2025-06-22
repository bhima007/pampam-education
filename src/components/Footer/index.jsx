import React from "react";

const footerStyle = {
  background: "#222",
  color: "#fff",
  padding: "48px 0",
  textAlign: "center",
  minHeight: "180px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const linkStyle = {
  color: "#61dafb",
  margin: "0 12px",
  textDecoration: "none",
  fontWeight: "bold",
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <h2>PAMPAM EDUCATION</h2>
      <p>
        Built with ❤️ by Kelompok 1. <br />
        Connect with us:
      </p>
      <div>
        <a href="/" style={linkStyle} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="/" style={linkStyle} target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="/" style={linkStyle}>
          Twitter
        </a>
      </div>
      <small style={{ marginTop: "24px", opacity: 0.7 }}>
        &copy; {new Date().getFullYear()} PAMPAM EDUCATION. All rights reserved.
      </small>
    </footer>
  );
}