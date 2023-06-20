import './WelcomePage.css';

const Homepage = () => {
  return (
    <div className="welcome-page flex p-4">
      <div className="flex flex-col sm:w-full md:w-1/2 lg:w-1/2 align-center justify-center px-4">
        <p className="text-xl mb-4 mx-4">Barcelona, Spain</p>
        <h1 className="text-6xl mb-2 mx-4">Discover the world around you</h1>
        <span>
          <button className="border-none text-white">Log In</button>
          <button className="border-none text-white">Become a member</button>
        </span>
      </div>
      <div className="sm:hidden md:w-1/2 lg:w-1/2 md:flex lg:flex relative">
        <div className="sm:hidden md:w-1/2 lg:w-1/2 absolute top-200 left-0"><img className="hidden sm:block welcome-image w-full h-120" src="https://images.unsplash.com/photo-1614635523324-795692530ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="view1" /></div>
        <div className="sm:hidden md:w-1/2 lg:w-1/2 absolute top-120 right-114"><img className="hidden sm:block welcome-image absolute w-110 h-160" src="https://images.unsplash.com/photo-1518474436123-0e44861523f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="view2" /></div>
        <div className="sm:hidden md:w-1/2 lg:w-1/2 absolute bottom-81 right-333"><img className="hidden sm:block welcome-image w-full h-120" src="https://images.unsplash.com/photo-1579282240050-352db0a14c21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=352&q=80" alt="view3" /></div>
        <div className="sm:hidden md:w-1/2 lg:w-1/2 absolute bottom-202 right-72"><img className="hidden sm:block welcome-image w-75 h-75" src="https://images.unsplash.com/photo-1468793195345-d9d67818016d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" alt="view4" /></div>
      </div>
    </div>
  );
}
export default Homepage;
