import { areas, blogs, services, site } from '@/data/content';
const slugify=(a:string)=>`${a.toLowerCase().replaceAll('ı','i').replaceAll('ö','o').replaceAll('ü','u').replaceAll('ş','s').replaceAll('ç','c').replaceAll('ğ','g')}-ozel-egitim-merkezi`;
export default function sitemap(){return [{url:site.url,lastModified:new Date()},...services.map(([s])=>({url:`${site.url}/hizmetler/${s}`,lastModified:new Date()})),...areas.map(a=>({url:`${site.url}/bolgeler/${slugify(a)}`,lastModified:new Date()})),...blogs.map((_,i)=>({url:`${site.url}/blog/${i+1}`,lastModified:new Date()}))]}
