import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center gap-12 py-20">
        <div>
          <h4>Ayakkabılar</h4>
          <ul>
            <li>Golf Shoes</li>
            <li>Winter Trainers</li>
            <li>GORE_TEX trainers</li>
            <li>Walking Trainers</li>
          </ul>
        </div>

        <div>
          <h4>Giysiler</h4>
          <ul>
            <li>All Clothing</li>
            <li>Yoga Eşofman Altları</li>
            <li>Tech Fleece Ayakkabı</li>
            <li>Tech Fleece Pants</li>
          </ul>
        </div>

        <div>
          <h4>Çocuk</h4>
          <ul>
            <li>Kız Çocuk Siyah Ayakkabıları</li>
            <li>Erkek Çocuk Siyah Ayakkabıları</li>
          </ul>
        </div>

        <div>
          <h4>Öne Çıkanlar</h4>
          <ul>
            <li>Futbol Takımları</li>
            <li>Futbol</li>
            <li>Nike Run Club</li>
            <li>Nike Training Club</li>
          </ul>
        </div>
      </div>

      <div className="h-[1px] bg-gray-200"></div>
      <div className="flex justify-between pt-12 px-12">
        <div>
          <h4>Kaynaklar</h4>
          <ul>
            <li>Mağaza Bul</li>
            <li>Nike Journal</li>
            <li>Üye Ol</li>
            <li>Geri Bildirim</li>
            <li>Promosyon Kodları</li>
          </ul>
        </div>

        <div>
          <h4>Yardım</h4>
          <ul>
            <li>Yardım Al</li>
            <li>Sipariş Durumu</li>
            <li>Kargo ve Teslimat</li>
            <li>İadeler</li>
            <li>Ödeme Seçenekleri</li>
            <li>Bize Ulaş</li>
            <li>İncelemeler</li>
          </ul>
        </div>

        <div>
          <h4>Şirket</h4>
          <ul>
            <li>Nike Hakkında</li>
            <li>Haberler</li>
            <li>Kariyer</li>
            <li>Yatırımcılar</li>
            <li>Sürdürülebilirlik</li>
            <li>Amaç</li>
            <li>Endişe Bildir</li>
          </ul>
        </div>

        <div className="mt-4">
          <p>🌐 Türkiye</p>
        </div>
      </div>

      <ul className="flex px-12  gap-6 mt-12 pb-24">
        <li>
          <p>© 2025 Nike, Inc. Tüm Hakları Saklıdır</p>
        </li>
        <li>Rehberler</li>
        <li>Kullanım Şartları</li>
        <li>Satış Şartları</li>
        <li>Şirket Ayrıntıları</li>
        <li>Gizlilik ve Tanımlama Bilgisi Politikası</li>
      </ul>
    </footer>
  );
};

export default Footer;
