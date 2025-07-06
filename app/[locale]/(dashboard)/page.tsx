import Slider from "@/components/Sliders/Slider";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { shuffle } from "../../../utils/shuffe";

export default async function Home() {
  const t = await getTranslations("HomePage");
  const firstDatas = await fetch("https://fakestoreapi.com/products");
  if (!firstDatas.ok) throw new Error("Something happened bad");
  const firstSliderDatas = await firstDatas.json();
  console.log(firstSliderDatas);
  return (
    <div>
      <div className="px-6 text-center py-2 bg-gray-200 md:px-12">
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
          height={100}
          className="z-[-9999] md:h-[150px] md:object-cover lg:h-[300px] xl:h-[500px] "
        />
        <div className="absolute bottom-0 px-4 text-black py-4 md:top-0 md:py-0 lg:bottom-0 lg:top-24 xl:top-64">
          <p className=" text-xs md:hidden lg:block lg:text-sm">
            Satışta: Shox TL
          </p>
          <h3 className="text-3xl font-extrabold lg:text-5xl xl:text-7xl mb-2">
            EZBER BOZAN TASARIM
          </h3>
          <p className="hidden md:block mt-4">
            İkonik Shox TL, fütüristik silüetiyle zamanın ötesinde
            <br className="hidden lg:block" /> bir tasarım ortaya koyuyor ve
            stil anlayışının sınırlarını zorluyor.
          </p>
          <Link
            href="#"
            className="bg-black text-white rounded-2xl px-3 py-1 text-sm  md:mt-4"
          >
            İncele
          </Link>
        </div>
      </div>
      <div className="px-5 mt-8 lg:mt-16">
        <h1 className="text-3xl font-extrabold text-center md:text-4xl lg:text-5xl xl:text-7xl">
          {t("title")}
        </h1>
        <p className="text-center mt-2 lg:px-72 lg:mt-6">
          Türkiye gümrük mevzuatında yapılan son değişiklikler nedeniyle
          maalesef şu an için
          <br className="hidden xl:block" /> Nike.com ve Nike App üzerinden
          alışveriş yapılamıyor.
        </p>
        <p className="text-center  mt-4">
          Favori ürünlerini sana en yakın Nike mağazasında bulabilirsin.
          Mağazalarımıza ulaşamıyor ya da aradığın ürünü bulamıyor musun?
        </p>
        <p className="text-center">{t("titleSecond")}</p>
      </div>
      <div className="flex flex-col mt-4 gap-2 items-center md:flex-row md:justify-center">
        <Link
          href="#"
          className="text-white bg-black w-[160px] text-center rounded-2xl py-[2px]"
        >
          Nike Mağazası Bul
        </Link>
        <Link
          href="#"
          className="text-white bg-black w-[200px] text-center rounded-2xl py-[2px]"
        >
          Nike Satış Ortaklarını Bul
        </Link>
      </div>
      <div className="px-12">
        <Slider
          header={"En Çok Satan Ürünler"}
          context={"Tümünü Keşfet"}
          datas={firstSliderDatas}
        />
      </div>
      <div className="mt-24 pl-24 pr-12">
        <Slider
          header={"En Yeni Ve Mükemmel Ürünler"}
          datas={shuffle(firstSliderDatas)}
        />
      </div>
      <div className="mt-24 pl-24 pr-12">
        <Slider
          header={"İkonik Modellerimizi İncele"}
          datas={shuffle(firstSliderDatas)}
        />
      </div>
      <div className="mt-24 pl-24 pr-12">
        <Slider
          header={"Daha Fazlasını keşfet"}
          datas={shuffle(firstSliderDatas)}
        />
      </div>
      <div className="mt-24 pl-24 pr-12">
        <Slider header={"Nike Üyeliği"} datas={shuffle(firstSliderDatas)} />
      </div>
    </div>
  );
}
