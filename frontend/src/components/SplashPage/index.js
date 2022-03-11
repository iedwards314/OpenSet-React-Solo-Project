import "./SplashPage.css"
const SplashPage = () => {


  return (
    <div className="HomePage">
      <div className="img-container">
        <img
          className="main-image"
          src="https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvb2x8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="movie clp bord and film"
        ></img>
      </div>
      <div className="Activity-select-container">
        <h1 className="splashHeader">Choose the Right Setting to Power Your Story</h1>
          <img className="image-rounded" src="https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"></img>
      </div>
    </div>
  );
};

export default SplashPage;
