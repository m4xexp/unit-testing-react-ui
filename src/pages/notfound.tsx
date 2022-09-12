import '@/style/notfound.css';

function Notfound() {
  console.log('hello');
  return (
    <>
      <div className="site">
        <div className="sketch">
          <div className="bee-sketch red"></div>
          <div className="bee-sketch blue"></div>
        </div>

        <h1>
          <span className="yellow">404 : </span>
          <small>Page Not Found</small>
        </h1>
      </div>
    </>
  );
}

export default Notfound;
