import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <div>
      <div className="px-6 text-center py-2 bg-gray-200">
        <p className="text-sm">
          Türkiye’de Nike.com ve Nike App üzerinden şu an için alışveriş
          yapılamamaktadır.
        </p>
        <Link href="#" className="underline text-xs">
          Daha fazla bilgi edinin.
        </Link>
      </div>
      <div className="relative w-full h-full">
        <Image
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmplb2h2bzk1Z3ZrdzI4cHBwaTk2dm4wNWdsYm5lNTZqZGw4NDRzdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Ztqh4JSlVqi2Z20/giphy.gif"
          alt="Nike Video"
          width={1920}
          height={0}
          className="z-[-9999]"
        />
        <div className="absolute bottom-0 px-4 text-black py-4">
          <p className=" text-xs">Satışta: Shox TL</p>
          <h3 className="text-3xl font-extrabold">EZBER BOZAN TASARIM</h3>
          <button className="bg-black text-white rounded-2xl w-[70px] py-1 text-sm">
            İncele
          </button>
        </div>
      </div>
      <div className="px-5 mt-8">
        <h1 className="text-3xl font-extrabold text-center">{t("title")}</h1>
        <p className="text-center mt-2">{t("titleFirst")}</p>
        <p className="text-center  mt-4">
          Favori ürünlerini sana en yakın Nike mağazasında bulabilirsin.
          Mağazalarımıza ulaşamıyor ya da aradığın ürünü bulamıyor musun?
        </p>
        <p className="text-center">{t("titleSecond")}</p>
      </div>
      <div className="flex flex-col mt-4 gap-2 items-center">
        <button className="text-white bg-black w-[160px] rounded-2xl py-[2px]">
          Nike Mağazası Bul
        </button>
        <button className="text-white bg-black w-[200px] rounded-2xl py-[2px]">
          Nike Satış Ortaklarını Bul
        </button>
      </div>
    </div>
  );
}
