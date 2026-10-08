import "/src/styles/footer.css";

function Footer() {
  return (
    <footer>
      <p>© 2026 Caricias para tu piel. Todos los derechos reservados.</p>

      <div className="redes-sociales">
        <a
          href="https://www.instagram.com/carinoparatupiel/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5Zm8.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
          </svg>
          Instagram
        </a>

        <a
          href=""
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M13.5 22v-8h2.75l.5-3h-3.25V9.05c0-.87.24-1.55 1.6-1.55h1.7V4.82c-.29-.04-1.28-.12-2.43-.12-2.41 0-4.07 1.47-4.07 4.17V11H7.5v3h2.8v8h3.2Z" />
          </svg>
          Facebook
        </a>
      </div>
    </footer>
  );
}

export default Footer;