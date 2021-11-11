import Heart from "./Heart";
const Footer = (props) => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="d-flex justify-content-center flex-wrap">
        <span className="text-muted">
          Copyright &copy; {new Date().getFullYear()}
        </span>
        &nbsp;
        <div className="text-muted d-flex align-items-center justify-content-center flex-wrap">
          Created with &nbsp;
          <Heart /> &nbsp;
          <div className="d-inline-block">
            by <a href="https://twitter.com/nemoxhan">Nemo</a>
            &nbsp; using <a href="https://reactjs.org/">React.js</a> and{" "}
            <a href="https://react-bootstrap.github.io/">React Bootstrap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
