"use client";
import { sendMailToClient } from "@/app/actions/actions";
import React, { useActionState } from "react";

const page = () => {
  const [state, formAction] = useActionState(sendMailToClient, undefined);
  return (
    <div className="w-full flex flex-col items-center  pt-12 gap-12">
      <div>
        <div className="flex gap-4">
          <span>İlk Logo</span>
          <span>İkinci Logo</span>
        </div>

        <h4 className="text-3xl max-w-md mt-8">
          Bize katılmak veya giriş yapmak için e-posta adresini gir.
        </h4>
        <div className="flex gap-4 mt-4">
          <p>Türkiye</p>
          <button className="underline text-gray-400">Değiştir</button>
        </div>
        <form className="mt-8" action={formAction}>
          <input
            placeholder="E-posta*"
            name="email"
            className="border w-full px-4 py-3 rounded-lg"
          />
          <p className="mt-12 max-w-xs text-gray-400 text-md">
            Devam ederek Nike'ın{" "}
            <span className="underline font-bold">Gizlilik Politikası</span> ve{" "}
            <span className="underline font-bold">Kullanım Şartlarını </span>
            kabul ediyorum.
          </p>
          <button
            type="submit"
            className="mt-8 float-end bg-black text-white w-[100px] py-2 rounded-3xl hover:bg-gray-500 cursor-pointer text-lg"
          >
            Devam
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
