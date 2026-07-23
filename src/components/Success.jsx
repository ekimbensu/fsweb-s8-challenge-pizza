import Logo from './Logo'

export default function Success({ siparisOzeti }) {
  if (!siparisOzeti) {
    return (
      <div className="hero hero-success">
        <Logo />
        <h2 className="hero-title">
          <span>SİPARİŞ BULUNAMADI</span>
        </h2>
      </div>
    )
  }

  const { form, toplam, apiYaniti } = siparisOzeti
  const secimler = form.malzemeler.length * 5 * form.adet

  return (
    <div className="hero hero-success">
      <Logo />

      <p className="success-etiket">lezzetin yolda</p>
      <h2 className="hero-title success-baslik">SİPARİŞ ALINDI</h2>

      <hr className="success-cizgi" />

      <h3 className="success-urun-adi">
        Position Absolute Acı Pizza
      </h3>

      <div className="success-detaylar">
        <p>İsim: <strong>{form.isim}</strong></p>
        <p>Boyut: <strong>{form.boyut}</strong></p>
        <p>Hamur: <strong>{form.hamurKalinligi}</strong></p>
        <p>Adet: <strong>{form.adet}</strong></p>
        <p>
          Ek Malzemeler:
          <strong> {form.malzemeler.join(', ')}</strong>
        </p>

        {form.notlar && (
          <p>
            Sipariş Notu: <strong>{form.notlar}</strong>
          </p>
        )}

        {apiYaniti?.id && (
          <p>
            Sipariş No: <strong>{apiYaniti.id}</strong>
          </p>
        )}
      </div>

      <div className="siparis-ozet-kart">
        <h4>Sipariş Toplamı</h4>

        <div className="satir">
          <span>Seçimler</span>
          <span>{secimler.toFixed(2)}₺</span>
        </div>

        <div className="satir">
          <span>Toplam</span>
          <span>{toplam.toFixed(2)}₺</span>
        </div>
      </div>
    </div>
  )
}