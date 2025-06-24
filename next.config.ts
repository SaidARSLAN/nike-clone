import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmplb2h2bzk1Z3ZrdzI4cHBwaTk2dm4wNWdsYm5lNTZqZGw4NDRzdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Ztqh4JSlVqi2Z20/giphy.gif",
      ),
    ],
  },
};

const withNextIntl = createNextIntlPlugin("./i18/request.ts");
export default withNextIntl(nextConfig);
