import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex w-full justify-between px-16 bg-gray-100 py-2">
        <div>Nike First Image</div>
        <ul className="flex gap-2 text-sm">
          <li className="cursor-pointer hover:text-gray-500">
            <Link href="/search-place">Mağaza Bul</Link>
          </li>
          <div>|</div>
          <li className="cursor-pointer hover:text-gray-500">
            <Link href="/help">Yardım</Link>
          </li>
          <div>|</div>
          <li className="cursor-pointer hover:text-gray-500">
            <Link href="/join-us">Bize Katıl</Link>
          </li>
          <div>|</div>
          <li className="cursor-pointer hover:text-gray-500">
            <Link href="/log-in">Oturum Aç</Link>
          </li>
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
