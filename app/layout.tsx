"use client"

import "./globals.css";
import {backgroundColorSelector,ColorSelector} from './store/selectors/ColorChange';
import {useRecoilValue} from 'recoil';
import {RecoilRoot} from 'recoil'

const Body=({children}:{children:React.ReactNode})=>{
  const backgroundTheme=useRecoilValue(backgroundColorSelector);
  const colorTheme=useRecoilValue(ColorSelector);
  return  <body style={{backgroundColor:`${backgroundTheme}`,color:`${colorTheme}`}}>{children}</body>
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  return (
    <RecoilRoot>
    <html lang="en">
      <Body>{children}</Body>
    </html>
    </RecoilRoot>
  );
}
