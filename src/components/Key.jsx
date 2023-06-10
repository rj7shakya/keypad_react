const Key = (props) => {
  const { value, action } = props;

  return (
    <span className="btn btn-dark m-2" onClick={action}>
      {value}
    </span>
  );
};

export { Key };
