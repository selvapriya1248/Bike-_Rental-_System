import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pngkey.com/png/full/263-2630275_yamaha-r15-version-2-0.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Model 1</h5>
          <p>R15v5</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.vhv.rs/dpng/d/495-4951211_yamaha-r15-v3-hd-png-download.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Model 2</h5>
          <p>R15v3</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.iamabiker.com/wp-content/uploads/2021/09/Racing-Blue-YZF-R15-V4-colour-option.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Model 3</h5>
          <p>
            R15v4 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;