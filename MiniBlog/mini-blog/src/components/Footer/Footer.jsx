import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>Escreva sobre o que você tem interesse!</h3>
        <p>Mini Blog &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
