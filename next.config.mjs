/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "awjojhkgkyiuvlpknapi.supabase.co",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
