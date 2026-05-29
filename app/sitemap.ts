import { site, services, regions, blogs } from "@/data/content";
const slugify=(s:string)=>s.toLowerCase().replaceAll(' ','-');
export default function sitemap(){const urls=["", "/blog", "/iletisim", ...services.map(s=>`/hizmetler/${s.slug}`), ...regions.map(r=>`/bolgeler/${slugify(r)}`), ...blogs.map(([slug])=>`/blog/${slug}`)];return urls.map(u=>({url:`${site.url}${u}`,lastModified:new Date(),changeFrequency:"weekly" as const,priority:u===""?1:.75}))}
