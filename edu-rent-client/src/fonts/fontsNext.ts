import { Roboto, Montserrat, Pompiere, Nunito, Rochester } from 'next/font/google';

export const roboto = Roboto({
  weight: ["100",'300','400','500','700','900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const montserrat = Montserrat({
  weight: ['300', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const pompire = Pompiere({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const nunito = Nunito({
  weight: ["200","300", "500", "700", "900", "1000"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const rock = Rochester({ subsets: ["latin"], weight: '400' });