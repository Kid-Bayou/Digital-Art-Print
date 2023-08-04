import flower from "../assets/flower-background.jpg";

function Home() {
  return (
    <>
      <h1 className="home-header-main">Aethetic Domain</h1>
      <hr className="home-line" />
      <div className="container-container">
        <h1 className="home-header first">Brushstrokes of</h1>
        <h1 className="home-header second">Imagination, Pixels of</h1>
        <h1 className="home-header third">Expression</h1>
        <div className="flower-img-container">
          <img src={flower} className="flower-img" />
        </div>
      </div>
    </>
  );
}

export default Home;
