import { useState } from 'react';
import Logo from './Logo';
import axios from 'axios';
import formBanner from '../../images/iteration-2-images/pictures/form-banner.png';
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

const malzemeListesi = [
  "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates",
  "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Zeytin", "Ananas", "Kabak"
]
const sicakMenuler = [
  "Position Absolute Acı Pizza", "Margherita", "Karışık Pizza", "BBQ Tavuklu", "Sebzeli"
  // Home sayfandaki footer'da hangi menü isimleri geçiyorsa onları yaz
]

const instaGorselleri = [insta0, insta1, insta2, insta3, insta4, insta5]

const tabanFiyat = 85.50;
const malzemeFiyati = 5;

export default function OrderForm({ successGit }) {
  const [form, setForm] = useState({
    isim: "",
    boyut: "",
    hamurKalinligi: "",
    malzemeler: [],
    notlar: "",
    adet: 1
  })
  const [gonderiliyor, setGonderiliyor] = useState(false)
  const [hata, setHata] = useState("")

  const toplamMalzemeFiyati = form.malzemeler.length * malzemeFiyati;
  const toplam = (tabanFiyat + toplamMalzemeFiyati) * form.adet;

  const handleSubmit = (event) => {
    event.preventDefault()

    const payload = { ...form }
    setHata("")
    setGonderiliyor(true)

    axios.post('https://reqres.in/api/pizza', payload, {
      headers: {
        'x-api-key': 'free_user_3GeKYWb6PC0sWH9Mfi2KjzuWXKz'
      }
    })
      .then((response) => {
        successGit({
          form: payload,
          toplam,
          apiYaniti: response.data
        })
      })
      .catch((error) => {
        console.error("Hata:", error)
        setHata(
          "Siparişiniz gönderilemedi. İnternet bağlantınızı kontrol edip tekrar deneyin."
        )
      })
      .finally(() => {
        setGonderiliyor(false)
      })
  }

  return (
    <div className="order-page">
      <header className="form-header">
        <Logo />

      </header>

      <main className="order-main">
        <form onSubmit={handleSubmit}>
          <section className="pizza-name">

            <img src={formBanner} alt="Position Absolute Acı Pizza" className="pizza-banner-img" />
            <p>Anasayfa - Seçenekler -<strong style={{ color: "#CE2829" }}>Sipariş Oluştur</strong></p>
            <h2>Position Absolute Acı Pizza</h2>
            <div className="price-rating">
              <span className="price">{tabanFiyat}₺</span>
              <span className="rating">4.9</span>
              <span className="review-count">(200)</span>
            </div>
            <p className="description">
              Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
              Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra
              geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli
              bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
            </p>
          </section>

          <div className="boyut-hamur-satiri">
            <fieldset className="boyut-secimi">
              <legend>Boyut Seç <span style={{ color: "#CE2829" }}>*</span></legend>
              <label className="boyut-chip">
                <input
                  type="radio"
                  name="boyut"
                  value="S"
                  checked={form.boyut === "S"}
                  onChange={(e) => setForm({ ...form, boyut: e.target.value })}
                />
                <span>S</span>
              </label>
              <label className="boyut-chip">
                <input
                  type="radio"
                  name="boyut"
                  value="M"
                  checked={form.boyut === "M"}
                  onChange={(e) => setForm({ ...form, boyut: e.target.value })}
                />
                <span>M</span>
              </label>
              <label className="boyut-chip">
                <input
                  type="radio"
                  name="boyut"
                  value="L"
                  checked={form.boyut === "L"}
                  onChange={(e) => setForm({ ...form, boyut: e.target.value })}
                />
                <span>L</span>
              </label>
            </fieldset>

            <div className="hamur-secimi">
              <label htmlFor="hamur-select"><h3>Hamur Seç<span style={{ color: "#CE2829" }}>*</span></h3></label>
              <select
                id="hamur-select"
                value={form.hamurKalinligi}
                onChange={(e) => setForm({ ...form, hamurKalinligi: e.target.value })}
              >
                <option value="" disabled hidden>-Hamur Kalınlığı Seç-</option>
                <option value="İnce">İnce</option>
                <option value="Orta">Orta</option>
                <option value="Kalın">Kalın</option>
              </select>
            </div>
          </div>

          <fieldset className="malzeme-alani">
            <legend>Ek Malzemeler</legend>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>

            <div className="malzeme-listesi">
              {malzemeListesi.map((malzeme) => (
                <label key={malzeme} className="malzeme-chip">
                  <input
                    type="checkbox"
                    checked={form.malzemeler.includes(malzeme)}
                    disabled={!form.malzemeler.includes(malzeme) && form.malzemeler.length >= 10}
                    onChange={() => {
                      if (form.malzemeler.includes(malzeme)) {
                        setForm({ ...form, malzemeler: form.malzemeler.filter((m) => m !== malzeme) })
                      } else {
                        setForm({ ...form, malzemeler: [...form.malzemeler, malzeme] })
                      }
                    }}
                  />
                  <span className="checkbox-kutu"></span>
                  {malzeme}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="isim-alani">
            <label htmlFor="isim-input"><h3>İsim<span style={{ color: "#CE2829" }}>*</span></h3></label>
            <input
              id="isim-input"
              type="text"
              placeholder="İsminizi girin"
              value={form.isim}
              onChange={(e) => setForm({ ...form, isim: e.target.value })}
              aria-label="İsminizi girin, en az 3 karakter"
            />
            {form.isim.length > 0 && form.isim.length < 3 && (
              <p className="hata-mesaji">İsim en az 3 karakter olmalı</p>
            )}
          </div>

          <div className="notlar-alani">
            <label htmlFor="notlar-textarea"><h3>Sipariş Notu</h3></label>
            <textarea
              id="notlar-textarea"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={form.notlar}
              onChange={(e) => setForm({ ...form, notlar: e.target.value })}
            />
          </div>


          <div className="siparis-toplami">
            <h4>Sipariş Toplamı</h4>
            <div className="satir">
              <span>Seçimler</span>
              <span>{toplamMalzemeFiyati.toFixed(2)}₺</span>
            </div>
            <div className="satir toplam-satir">
              <span>Toplam</span>
              <span>{toplam.toFixed(2)}₺</span>
            </div>

            <div className="siparis-alt-satir">
              <div className="adet-secici">
                <button
                  type="button"
                  aria-label="Adeti azalt"
                  onClick={() => setForm({ ...form, adet: Math.max(1, form.adet - 1) })}
                >
                  -
                </button>
                <span>{form.adet}</span>
                <button
                  type="button"
                  aria-label="Adeti artır"
                  onClick={() => setForm({ ...form, adet: form.adet + 1 })}
                >
                  +
                </button>
              </div>

              <button
                type="submit"
                className="siparis-ver-btn"
                disabled={
                  form.isim.length < 3 ||
                  form.boyut === "" ||
                  form.hamurKalinligi === "" ||
                  form.malzemeler.length < 4 ||
                  gonderiliyor
                }
              >
                {gonderiliyor ? "GÖNDERİLİYOR..." : "SİPARİŞ VER"}
              </button>
            </div>

            {hata && <p className="hata-mesaji" style={{ marginTop: 12 }}>{hata}</p>}
          </div>
        </form>
      </main>
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
    </div>
  )
}