const Slider = ({ children, speed}) => {
  return (
    <div className="inner outer">
      <div className="wrapper">
        <section
          className="skill-item grid grid2"
          style={{ "--speed": `${speed}ms` }}
        >
          {children}
          {children}
          {children}
        </section>
      </div>
    </div>
  );
};

export { Slider };
