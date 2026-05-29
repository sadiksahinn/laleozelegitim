import './globals.css';
import type { Metadata } from 'next';
import { site } from '@/data/content';
export const metadata: Metadata = {title:{default:`${site.name} | Sincan Özel Eğitim Merkezi`,template:`%s | ${site.shortName}`},description:'Sincan ve Ankara çevresinde bireysel eğitim, grup eğitimi, otizm, dil-konuşma ve öğrenme güçlüğü alanlarında özel eğitim ve rehabilitasyon desteği.',openGraph:{title:site.name,description:'Sincan Özel Eğitim ve Rehabilitasyon Merkezi',url:site.url,siteName:site.name,locale:'tr_TR',type:'website'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body>{children}</body></html>}
