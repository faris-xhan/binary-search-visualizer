const Footer = (props) => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="d-flex justify-content-center">
        <span className="text-muted">
          Copyright &copy; {new Date().getFullYear()}
        </span>
        &nbsp;
        <span className="text-muted">
          <p>
            Created with &nbsp;
            <svg
              viewBox="0 0 512 512"
              width="14"
              height="14"
              aria-label="love"
              class="inline-block"
            >
              <path
                fill="#e31b23"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              ></path>
            </svg>{" "}
            by <a href="https://twitter.com/nemoxhan">Nemo</a>
          </p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
