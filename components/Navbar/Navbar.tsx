import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex w-full justify-between px-16 bg-gray-100 py-3">
        <div>Nike First Image</div>
        <ul className="flex gap-2">
          <li>Mağaza Bul</li>
          <div>|</div>
          <li>Yardım</li>
          <div>|</div>
          <li>Bize Katıl</li>
          <div>|</div>
          <li>Oturum Aç</li>
        </ul>
      </div>
      <div className="flex w-full justify-between px-16 py-6">
        <div>Nike Second Image</div>
        <ul className="flex gap-4">
          <li>Yeni Ürünler ve Öne Çıkanlar</li>
          <li>Erkek</li>
          <li>Kadin</li>
          <li>Çocuk</li>
        </ul>
        <div className="flex gap-3">
          <div>Search</div>
          <div>Likes</div>
          <div>Box</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
