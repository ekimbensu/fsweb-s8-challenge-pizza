import Logo from './Logo';
import banner from '../../images/iteration-1-images/home-banner.png';

import icon1 from '../../images/iteration-2-images/icons/1.svg';
import icon2 from '../../images/iteration-2-images/icons/2.svg';
import icon3 from '../../images/iteration-2-images/icons/3.svg';
import icon4 from '../../images/iteration-2-images/icons/4.svg';
import icon5 from '../../images/iteration-2-images/icons/5.svg';
import icon6 from '../../images/iteration-2-images/icons/6.svg';

import kart1 from '../../images/iteration-2-images/cta/kart-1.png';
import kart2 from '../../images/iteration-2-images/cta/kart-2.png';
import kart3 from '../../images/iteration-2-images/cta/kart-3.png';

import food1 from '../../images/iteration-2-images/pictures/food-1.png';
import food2 from '../../images/iteration-2-images/pictures/food-2.png';
import food3 from '../../images/iteration-2-images/pictures/food-3.png';

import logoFooter from '../../images/iteration-2-images/footer/logo-footer.svg';
import footerIcon1 from '../../images/iteration-2-images/footer/icons/icon-1.png';
import footerIcon2 from '../../images/iteration-2-images/footer/icons/icon-2.png';
import footerIcon3 from '../../images/iteration-2-images/footer/icons/icon-3.png';

import insta0 from '../../images/iteration-2-images/footer/insta/li-0.png';
import insta1 from '../../images/iteration-2-images/footer/insta/li-1.png';
import insta2 from '../../images/iteration-2-images/footer/insta/li-2.png';
import insta3 from '../../images/iteration-2-images/footer/insta/li-3.png';
import insta4 from '../../images/iteration-2-images/footer/insta/li-4.png';
import insta5 from '../../images/iteration-2-images/footer/insta/li-5.png';

const kategoriler = [
  { ad: "YENİ! Kore", ikon: icon1 },
  { ad: "Pizza", ikon: icon2 },
  { ad: "Burger", ikon: icon3 },
  { ad: "Kızartmalar", ikon: icon4 },
  { ad: "Fast food", ikon: icon5 },
  { ad: "Gazlı İçecek", ikon: icon6 },
];

const ikinciListe = [
  { ad: "Ramen", ikon: icon1, aktifSinif: "active1" },
  { ad: "Pizza", ikon: icon2, aktifSinif: "active2", aktifYazi: true },
  { ad: "Burger", ikon: icon3, aktifSinif: "active3" },
  { ad: "French fries", ikon: icon4, aktifSinif: "active4" },
  { ad: "Fast food", ikon: icon5, aktifSinif: "active5" },
  { ad: "Soft drinks", ikon: icon6, aktifSinif: "active6" },
];

const urunler = [
  { ad: "Terminal Pizza", puan: 4.9, yorum: 200, fiyat: 60, gorsel: food1 },
  { ad: "Position Absolute Acı Pizza", puan: 4.9, yorum: 200, fiyat: 60, gorsel: food2 },
  { ad: "useEffect Tavuklu Burger", puan: 4.9, yorum: 200, fiyat: 60, gorsel: food3 },
];

const sicakMenuler = [
  "Terminal Pizza",
  "5 Kişilik Hackathlon Pizza",
  "useEffect Tavuklu Pizza",
  "Beyaz Console Frosty",
  "Testler Geçti Mutlu Burger",
  "Position Absolute Acı Burger",
];

const instaGorselleri = [insta0, insta1, insta2, insta3, insta4, insta5];

export default function Home({ formGit }) {
  return (
    <>
      <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-content">
          <Logo />
          <p className="slogan">fırsatı kaçırma</p>
          <h1 className="baslik">
            KOD ACIKTIRIR <br />
            PİZZA, DOYURUR
          </h1>
          <button id="aciktim" type="button" onClick={formGit}>ACIKTIM</button>
        </div>
      </div>

      <nav className="list">
        <ul>
          {kategoriler.map((k) => (
            <li key={k.ad}>
              <a href="#">
                <img src={k.ikon} alt={k.ad} />
                <span>{k.ad}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="campaigns">
        <div className="campaigns-card">
          <div className="left-card" style={{ backgroundImage: `url(${kart1})` }}>
            <h2 className="left-card-heading">Özel<br /> Lezzetus</h2>
            <p className="left-card-text">Position:Absolute Acı Burger</p>
            <button className="order-btn" type="button" onClick={formGit}>SİPARİŞ VER</button>
          </div>
          <div className="right-card">
            <div className="right-top-card" style={{ backgroundImage: `url(${kart2})` }}>
              <h3 className="right-card-top-heading">Hackathlon<br /> Burger Menü</h3>
              <button className="order-btn" type="button" onClick={formGit}>SİPARİŞ VER</button>
            </div>

            <div className="right-bottom-card" style={{ backgroundImage: `url(${kart3})` }}>
              <h3 className="right-card-bottom-heading">
                <span className="highlight">Çoooook</span> hızlı<br />
                npm gibi kurye
              </h3>
              <button className="order-btn" type="button" onClick={formGit}>SİPARİŞ VER</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="most-kod">
          <p className="most">en çok paketlenen menüler</p>
          <p className="kod">Acıktıran Kodlara Doyuran Lezzetler</p>
        </div>
      </section>

      <nav className="secondList">
        <ul>
          {ikinciListe.map((k) => (
            <li className={k.aktifSinif} key={k.ad}>
              <a href="#">
                <img src={k.ikon} alt={k.ad} />
                <span className={k.aktifYazi ? "active-pizza" : ""}>{k.ad}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="cards">
        {urunler.map((u) => (
          <div className="pizza-card" key={u.ad}>
            <img src={u.gorsel} alt={u.ad} />
            <h3>{u.ad}</h3>
            <div className="pizza-info">
              <p className="puan">{u.puan}</p>
              <p className="yorum">({u.yorum})</p>
              <p className="tl">{u.fiyat}₺</p>
            </div>
          </div>
        ))}
      </section>

      <footer>
        <div className="container">
          <div className="container-left">
            <img src={logoFooter} alt="Teknolojik Yemekler" />
            <div className="contact">
              <img src={footerIcon1} alt="" />
              <p>341 Londonderry Road,<br />İstanbul Türkiye</p>
            </div>
            <div className="contact">
              <img src={footerIcon2} alt="" />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div className="contact">
              <img src={footerIcon3} alt="" />
              <p>+90 216 123 45 67</p>
            </div>
          </div>

          <div className="container-center">
            <h3>Hot Menu</h3>
            <ul>
              {sicakMenuler.map((menu) => (
                <li key={menu}>{menu}</li>
              ))}
            </ul>
          </div>

          <div className="container-right">
            <h3>Instagram</h3>
            <div className="instagram">
              {instaGorselleri.map((img, i) => (
                <img src={img} alt={`Instagram gönderisi ${i + 1}`} key={i} />
              ))}
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <p>© 2023 Teknolojik Yemekler.</p>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </footer>
    </>
  );
}