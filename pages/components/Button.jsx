const Button = (props) => {
  const { as: Component = "button", className, ...otherProps } = props;

  return (
    <Component
      {...otherProps}
      className={className(
        "py-1.5 px-3 font-bold text-lg bg-slate-500 text-white",
        className
      )}
    />
  );
};

export default Button;
