const Button = (props) => {
  return (
    <>
      <div className="w-full sm:max-w-sm overflow-hidden sm:mt-[5.125rem]">
        <div className="flex flex-col items-center">
          <form className="w-full max-w-sm">
            <div className="w-98 flex flex-col sm:flex-row mx-auto sm:mx-0 space-x-[0.563rem] pb-6 sm:pb-0 mt-6 sm:mt-0">
              <button className="btn px-8 btn-primary">{props.name}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Button;
