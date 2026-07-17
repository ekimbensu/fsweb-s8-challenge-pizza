import { useState } from 'react';
import Logo from './Logo';
import axios from 'axios';

const malzemeListesi = [
  "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates",
  "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Zeytin", "Ananas", "Kabak"
]

const tabanFiyat = 85.50;
const malzemeFiyati = 5;

export default function OrderForm({successGit}) {
  const [form, setForm] = useState({
    isim: "",
    boyut: "",
    hamurKalinligi: "",
    malzemeler: [],
    notlar: "",
    adet: 1
  })

  const toplamMalzemeFiyati = form.malzemeler.length * malzemeFiyati;
  const toplam = (tabanFiyat + toplamMalzemeFiyati) * form.adet;


 const handleSubmit = () => {
  const payload = {
    isim: form.isim,
    boyut: form.boyut,
    hamurKalinligi: form.hamurKalinligi,
    malzemeler: form.malzemeler,
    notlar: form.notlar,
    adet: form.adet
  }

  axios.post('https://reqres.in/api/pizza', payload, {
    headers: {
       'x-api-key': 'free_user_3GeKYWb6PC0sWH9Mfi2KjzuWXKz'
    }
  })
    .then((response) => {
      console.log("Sipariş özeti:", response.data)
    })
    .catch((error) => {
      console.error("Hata:", error)
    })
}
  return (
    <div>
      <div>
        <div className="form-header">
          <Logo />
          <p>Anasayfa - <strong>Sipariş Oluştur</strong></p>
        </div>

        <div className="pizza-info">
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
        </div>
      </div>

      <div>
        <h3>Boyut Seç *</h3>
        <label>
          <input
            type="radio"
            name="boyut"
            value="Küçük"
            checked={form.boyut === "Küçük"}
            onChange={(e) => setForm({ ...form, boyut: e.target.value })}
          />
          Küçük
        </label>
        <label>
          <input
            type="radio"
            name="boyut"
            value="Orta"
            checked={form.boyut === "Orta"}
            onChange={(e) => setForm({ ...form, boyut: e.target.value })}
          />
          Orta
        </label>
        <label>
          <input
            type="radio"
            name="boyut"
            value="Büyük"
            checked={form.boyut === "Büyük"}
            onChange={(e) => setForm({ ...form, boyut: e.target.value })}
          />
          Büyük
        </label>
      </div>

      <div>
        <h3>Hamur Seç *</h3>
        <select
          value={form.hamurKalinligi}
          onChange={(e) => setForm({ ...form, hamurKalinligi: e.target.value })}
        >
          <option value="" disabled hidden>Hamur Kalınlığı</option>
          <option value="İnce">İnce</option>
          <option value="Orta">Orta</option>
          <option value="Kalın">Kalın</option>
        </select>
      </div>

      <div>
        <h3>Ek Malzemeler</h3>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>

        <div className="malzeme-listesi">
          {malzemeListesi.map((malzeme) => (
            <label key={malzeme}>
              <input
                type="checkbox"
                checked={form.malzemeler.includes(malzeme)}
                disabled={!form.malzemeler.includes(malzeme) && form.malzemeler.length >= 10}
                onChange={() => {
                  if (form.malzemeler.includes(malzeme)) {
                    setForm({
                      ...form,
                      malzemeler: form.malzemeler.filter((m) => m !== malzeme)
                    })
                  } else {
                    setForm({ ...form, malzemeler: [...form.malzemeler, malzeme] })
                  }
                }}
              />
              {malzeme}
            </label>
          ))}
        </div>
      </div>
      <div>
         <h3>İsim *</h3>
         <input
            type="text"
            placeholder="İsminizi girin"
            value={form.isim}
            onChange={(e) => setForm({ ...form, isim: e.target.value })}
         />
         {form.isim.length > 0 && form.isim.length < 3 && (
         <p style={{ color: "red" }}>İsim en az 3 karakter olmalı</p>
         )}
      </div>
      <div>
        <h3>Sipariş Notu</h3>
        <textarea
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          value={form.notlar}
          onChange={(e) => setForm({ ...form, notlar: e.target.value })}
        />
      </div>

      <div className="alt-alan">
        <div className="adet-secici">
          <button
            type="button"
            onClick={() => setForm({ ...form, adet: Math.max(1, form.adet - 1) })}
          >
            -
          </button>
          <span>{form.adet}</span>
          <button
            type="button"
            onClick={() => setForm({ ...form, adet: form.adet + 1 })}
          >
            +
          </button>
        </div>

        <div className="siparis-toplami">
          <h4>Sipariş Toplamı</h4>
          <div>
            <span>Seçimler</span>
            <span>{toplamMalzemeFiyati.toFixed(2)}₺</span>
          </div>
          <div>
            <span>Toplam</span>
            <span>{toplam.toFixed(2)}₺</span>
          </div>
          <button
            onClick={handleSubmit, successGit}
            disabled={
              form.isim.length < 3 ||
              form.boyut === "" ||
              form.hamurKalinligi === "" ||
              form.malzemeler.length < 4
            }
          >
            SİPARİŞ VER
          </button>
        </div>
      </div>
    </div>
  )
}