/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/drive/home",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
