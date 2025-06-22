import { FaSearch, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.title}>PAMPAM EDUCATION</div>
      <nav style={styles.nav}>
        <a href="/" style={styles.link}>Beranda</a>
        <FaSearch style={styles.icon} />
        <FaUserCircle style={styles.icon} />
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 24px",
    background: "#f5f5f5",
    borderBottom: "1px solid #e0e0e0"
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500"
  },
  icon: {
    fontSize: "1.3rem",
    color: "#333",
    cursor: "pointer"
  }
};

export default Header;