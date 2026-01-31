import { source } from '@/lib/source';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `https://magos.com${path}`; // Thay domain của ông

  return [
    {
      url: url(''),
      lastModified: new Date(),
    },
    ...source.getPages().map((page) => ({
      url: url(page.url),
      lastModified: new Date(), // Hoặc lấy từ file hệ thống nếu muốn chuẩn
    })),
  ];
}