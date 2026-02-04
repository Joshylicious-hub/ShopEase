import WatchImg from '../images/rolex.jpg'
import LaptopImg from '../images/laptop.jpg'
import ShopImg from '../images/shop.jpg'
import PhoneImg from '../images/phone.jpg';
import BackgroundGirl from '../images/background.jpg';
import TelivisionImg from '../images/telivision.jpg'
import { useNavigate, Link } from 'react-router';

import './Homepage.css'
export function HomePage() {

  const navigate = useNavigate();
  return (
    <>
    <nav>
      <h1>ShopEase</h1>
      <ul>
        <li><Link to="/Testing">Home</Link></li>
        <li><Link to="#">Shop</Link></li>
        <li><Link to="#">About</Link></li>
        <li><Link to="#">Contact</Link></li>
      </ul>
       <button onClick={() => navigate("/Testing")}>Log in</button>
    </nav>

    <div className="welcome-page-container">

      <div 
      className="welcome-page-element-container" 
      style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${BackgroundGirl})`,
      backgroundSize: 'cover',
      height: '60vh',            
      width: '100%', 
      backgroundPosition: 'center 10%',
      backgroundRepeat: 'no-repeat',
      }}>
        <div className="welcome-page-element">
          <h1>Welcome to ShopEase</h1>
          <h2>Best Deals on Latest Products</h2>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="features-products-container">
        
        <div className="features-products-container-element">
          <h1>Features Products</h1>
          <p>Popular Items Just For you</p>
        </div>

        <div className="products-container">
          <div className="products-element">
            <img src={WatchImg} className="products-image"/>
            <div className="products-description">
              <p>Rolex Watch</p>
              <h3>$200,000.00</h3>
              <button className="buy-items">Buy Now</button>
            </div>
          </div>


          <div className="products-element">
            <img src={TelivisionImg} className="products-image"/>
            <div className="products-description">
              <p>Televison</p>
              <h3>$123.00</h3>
              <button className="buy-items">Buy Now</button>
            </div>
          </div>


          <div className="products-element">
            <img src={PhoneImg} className="products-image"/>
            <div className="products-description">
              <p>Apple Iphone 15 128gb</p>
              <h3>$108.99</h3>
              <button className="buy-items">Buy Now</button>
            </div>
          </div>

          <div className="products-element">
            <img src={LaptopImg} className="products-image"/>
            <div className="products-description">
              <p>Acer Nitro 5</p>
              <h3>$97.39</h3>
              <button className="buy-items">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div 
      className="summer-sale-ads"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${ShopImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 10%',
        backgroundRepeat: 'no-reapeat'

      }}
      >
        <div className="summer-sale-container">
          <h1>Summer Sale</h1>
          <h1>Up to 50% off</h1>         
          <button className="summer-button">Shop Sale</button>
        </div>
      </div>

    <footer>
    <div className="footer-links">
      <h2>Customer Services</h2>
    <ul>
      <li><Link>FAQ</Link></li>
      <li><Link>Shipping & Returns</Link></li>
      <li><Link>Contact Us</Link></li>
    </ul>
    </div>

    <div className="footer-links">
    <h2>About Us</h2>
    <ul>
      <li><Link>Our Story</Link></li>
      <li><Link>Careers</Link></li>
    </ul>
    </div>

    <div className="footer-links">
    <h2>Follow Us</h2>
    <ul>
      <li><Link>Facebook</Link></li>
      <li><Link>Twitter</Link></li>
      <li><Link>Instagram</Link></li>
      <li><Link>WhatsApp</Link></li>
    </ul>
    </div>

    <div className="footer-links">
    <h2>Secure Payment</h2>
    <ul>
      <li><Link>Gcash</Link></li>
      <li><Link>Maya</Link></li>
      <li><Link>GoTyme</Link></li>
      <li><Link>GoDaddy</Link></li>
    </ul>
    </div>
    
    </footer>

    <div className="rights-reserved">
      <h2 className="shopease-rights">@2026 ShopEase. All rights reserved!</h2>
    </div>

    </div>

    
   
    </>
  )
}