import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Frontend-only build: no Payload CMS, no database at runtime.
  // All content is static and every image/video is served from /public/assets.
}

export default nextConfig
