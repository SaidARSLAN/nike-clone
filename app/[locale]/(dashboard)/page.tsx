import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <div>
      <div>Video Section</div>
      <h1>{t("title")}</h1>
      <p>{t("titleFirst")}</p>
      <p>{t("titleSecond")}</p>
    </div>
  );
}
