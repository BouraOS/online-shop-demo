const Button = ({ filterFn, value, title }) => {
    return (
      <button onClick={() => filterFn(value)} value={value} className="btn btn-outline-dark btn-sm">
        {title}
      </button>
    );
  };
  
  export default Button;