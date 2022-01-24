import styled, { keyframes } from 'styled-components';

const float=keyframes`
 0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(180px);
  }
`

const floatReverse=keyframes`
0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-180px);
  }
`

const float2=keyframes`
0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(28px);
  }
`

const floatReverse2=keyframes`
 0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-28px);
  }
`


export const Particle=styled.span`
 position: absolute;
  display: block;
  pointer-events: none;

  &:nth-child(1) {
  top: 66.9950738916%;
  left: 91.8972332016%;
  font-size: 12px;
  filter: blur(0.02px);
  animation: 26s ${float} infinite;
}
&:nth-child(2) {
  top: 20.487804878%;
  left: 89.2156862745%;
  font-size: 20px;
  filter: blur(0.04px);
  animation: 27s ${floatReverse2} infinite;
}
&:nth-child(3) {
  top: 26.6337854501%;
  left: 69.2383778437%;
  font-size: 11px;
  filter: blur(0.06px);
  animation: 21s ${float} infinite;
}
&:nth-child(4) {
  top: 17.6687116564%;
  left: 96.5517241379%;
  font-size: 15px;
  filter: blur(0.08px);
  animation: 34s ${floatReverse} infinite;
}
&:nth-child(5) {
  top: 13.5429262394%;
  left: 30.1850048685%;
  font-size: 27px;
  filter: blur(0.1px);
  animation: 23s ${float2} infinite;
}
&:nth-child(6) {
  top: 19.3003618818%;
  left: 82.6044703596%;
  font-size: 29px;
  filter: blur(0.12px);
  animation: 31s ${float} infinite;
}
&:nth-child(7) {
  top: 6.7632850242%;
  left: 64.2023346304%;
  font-size: 28px;
  filter: blur(0.14px);
  animation: 30s ${float} infinite;
}
&:nth-child(8) {
  top: 27.5184275184%;
  left: 56.2130177515%;
  font-size: 14px;
  filter: blur(0.16px);
  animation: 38s ${floatReverse2} infinite;
}
&:nth-child(9) {
  top: 62.9766297663%;
  left: 21.7176702863%;
  font-size: 13px;
  filter: blur(0.18px);
  animation: 31s ${float2} infinite;
}
&:nth-child(10) {
  top: 92.2330097087%;
  left: 6.8359375%;
  font-size: 24px;
  filter: blur(0.2px);
  animation: 24s ${floatReverse2} infinite;
}
&:nth-child(11) {
  top: 40.7766990291%;
  left: 30.2734375%;
  font-size: 24px;
  filter: blur(0.22px);
  animation: 27s ${floatReverse} infinite;
}
&:nth-child(12) {
  top: 33.4975369458%;
  left: 38.5375494071%;
  font-size: 12px;
  filter: blur(0.24px);
  animation: 25s ${floatReverse2} infinite;
}
&:nth-child(13) {
  top: 69.6078431373%;
  left: 33.4645669291%;
  font-size: 16px;
  filter: blur(0.26px);
  animation: 35s ${floatReverse} infinite;
}
&:nth-child(14) {
  top: 19.3939393939%;
  left: 56.5853658537%;
  font-size: 25px;
  filter: blur(0.28px);
  animation: 24s ${float} infinite;
}
&:nth-child(15) {
  top: 69.9029126214%;
  left: 38.0859375%;
  font-size: 24px;
  filter: blur(0.3px);
  animation: 36s ${floatReverse} infinite;
}
&:nth-child(16) {
  top: 64.8648648649%;
  left: 56.2130177515%;
  font-size: 14px;
  filter: blur(0.32px);
  animation: 26s ${floatReverse} infinite;
}
&:nth-child(17) {
  top: 79.0361445783%;
  left: 33.0097087379%;
  font-size: 30px;
  filter: blur(0.34px);
  animation: 25s ${floatReverse2} infinite;
}
&:nth-child(18) {
  top: 91.2621359223%;
  left: 45.8984375%;
  font-size: 24px;
  filter: blur(0.36px);
  animation: 26s ${floatReverse2} infinite;
}
&:nth-child(19) {
  top: 91.1515151515%;
  left: 57.5609756098%;
  font-size: 25px;
  filter: blur(0.38px);
  animation: 29s ${floatReverse2} infinite;
}
&:nth-child(20) {
  top: 59.4397076736%;
  left: 11.7531831538%;
  font-size: 21px;
  filter: blur(0.4px);
  animation: 23s ${float2} infinite;
}
&:nth-child(21) {
  top: 21.6748768473%;
  left: 14.8221343874%;
  font-size: 12px;
  filter: blur(0.42px);
  animation: 31s ${floatReverse} infinite;
}
&:nth-child(22) {
  top: 20.6896551724%;
  left: 34.5849802372%;
  font-size: 12px;
  filter: blur(0.44px);
  animation: 31s ${floatReverse} infinite;
}
&:nth-child(23) {
  top: 26.0869565217%;
  left: 64.2023346304%;
  font-size: 28px;
  filter: blur(0.46px);
  animation: 27s ${float2} infinite;
}
&:nth-child(24) {
  top: 11.6222760291%;
  left: 66.2768031189%;
  font-size: 26px;
  filter: blur(0.48px);
  animation: 36s ${floatReverse2} infinite;
}
&:nth-child(25) {
  top: 81.6728167282%;
  left: 58.2428430405%;
  font-size: 13px;
  filter: blur(0.5px);
  animation: 35s ${floatReverse} infinite;
}
&:nth-child(26) {
  top: 34.8246674728%;
  left: 17.5267770204%;
  font-size: 27px;
  filter: blur(0.52px);
  animation: 37s ${float2} infinite;
}
&:nth-child(27) {
  top: 74.9691738594%;
  left: 31.6518298714%;
  font-size: 11px;
  filter: blur(0.54px);
  animation: 31s ${floatReverse} infinite;
}
&:nth-child(28) {
  top: 22.3300970874%;
  left: 58.59375%;
  font-size: 24px;
  filter: blur(0.56px);
  animation: 37s ${float} infinite;
}
&:nth-child(29) {
  top: 80.490797546%;
  left: 53.2019704433%;
  font-size: 15px;
  filter: blur(0.58px);
  animation: 37s ${floatReverse2} infinite;
}
&:nth-child(30) {
  top: 12.6213592233%;
  left: 46.875%;
  font-size: 24px;
  filter: blur(0.6px);
  animation: 23s ${float2} infinite;
}
&:nth-child(31) {
  top: 49.2159227986%;
  left: 27.2108843537%;
  font-size: 29px;
  filter: blur(0.62px);
  animation: 28s ${floatReverse2} infinite;
}
&:nth-child(32) {
  top: 34.0218712029%;
  left: 44.9657869013%;
  font-size: 23px;
  filter: blur(0.64px);
  animation: 26s ${floatReverse} infinite;
}
&:nth-child(33) {
  top: 18.6046511628%;
  left: 48.1809242871%;
  font-size: 17px;
  filter: blur(0.66px);
  animation: 28s ${floatReverse} infinite;
}
&:nth-child(34) {
  top: 20.5378973105%;
  left: 53.0451866405%;
  font-size: 18px;
  filter: blur(0.68px);
  animation: 39s ${floatReverse2} infinite;
}
&:nth-child(35) {
  top: 93.2515337423%;
  left: 6.8965517241%;
  font-size: 15px;
  filter: blur(0.7px);
  animation: 32s ${floatReverse} infinite;
}
&:nth-child(36) {
  top: 57.8313253012%;
  left: 10.6796116505%;
  font-size: 30px;
  filter: blur(0.72px);
  animation: 40s ${float} infinite;
}
&:nth-child(37) {
  top: 80.8877928483%;
  left: 2.9673590504%;
  font-size: 11px;
  filter: blur(0.74px);
  animation: 29s ${float} infinite;
}
&:nth-child(38) {
  top: 25.304136253%;
  left: 42.0743639922%;
  font-size: 22px;
  filter: blur(0.76px);
  animation: 25s ${float} infinite;
}
&:nth-child(39) {
  top: 93.2515337423%;
  left: 88.6699507389%;
  font-size: 15px;
  filter: blur(0.78px);
  animation: 40s ${floatReverse2} infinite;
}
&:nth-child(40) {
  top: 56.9325153374%;
  left: 11.8226600985%;
  font-size: 15px;
  filter: blur(0.8px);
  animation: 32s ${floatReverse2} infinite;
}
&:nth-child(41) {
  top: 31.0303030303%;
  left: 86.8292682927%;
  font-size: 25px;
  filter: blur(0.82px);
  animation: 28s ${float} infinite;
}
&:nth-child(42) {
  top: 88.9975550122%;
  left: 41.257367387%;
  font-size: 18px;
  filter: blur(0.84px);
  animation: 21s ${float} infinite;
}
&:nth-child(43) {
  top: 86.8292682927%;
  left: 5.8823529412%;
  font-size: 20px;
  filter: blur(0.86px);
  animation: 26s ${floatReverse2} infinite;
}
&:nth-child(44) {
  top: 15.4402895054%;
  left: 86.491739553%;
  font-size: 29px;
  filter: blur(0.88px);
  animation: 30s ${float2} infinite;
}
&:nth-child(45) {
  top: 46.7153284672%;
  left: 56.7514677104%;
  font-size: 22px;
  filter: blur(0.9px);
  animation: 36s ${floatReverse} infinite;
}
&:nth-child(46) {
  top: 59.8039215686%;
  left: 22.6377952756%;
  font-size: 16px;
  filter: blur(0.92px);
  animation: 21s ${floatReverse2} infinite;
}
&:nth-child(47) {
  top: 39.312039312%;
  left: 28.5996055227%;
  font-size: 14px;
  filter: blur(0.94px);
  animation: 27s ${float2} infinite;
}
&:nth-child(48) {
  top: 7.8335373317%;
  left: 46.2143559489%;
  font-size: 17px;
  filter: blur(0.96px);
  animation: 38s ${float2} infinite;
}
&:nth-child(49) {
  top: 49.5145631068%;
  left: 17.578125%;
  font-size: 24px;
  filter: blur(0.98px);
  animation: 35s ${float2} infinite;
}
&:nth-child(50) {
  top: 70.6166868198%;
  left: 43.8169425511%;
  font-size: 27px;
  filter: blur(1px);
  animation: 21s ${float2} infinite;
}
&:nth-child(51) {
  top: 32.810615199%;
  left: 5.8309037901%;
  font-size: 29px;
  filter: blur(1.02px);
  animation: 22s ${floatReverse} infinite;
}
&:nth-child(52) {
  top: 37.8640776699%;
  left: 69.3359375%;
  font-size: 24px;
  filter: blur(1.04px);
  animation: 23s ${floatReverse2} infinite;
}
&:nth-child(53) {
  top: 86.5928659287%;
  left: 62.1915103653%;
  font-size: 13px;
  filter: blur(1.06px);
  animation: 26s ${floatReverse2} infinite;
}
&:nth-child(54) {
  top: 0.9744214373%;
  left: 11.7531831538%;
  font-size: 21px;
  filter: blur(1.08px);
  animation: 24s ${floatReverse} infinite;
}
&:nth-child(55) {
  top: 56.5164433618%;
  left: 73.4573947111%;
  font-size: 21px;
  filter: blur(1.1px);
  animation: 28s ${floatReverse2} infinite;
}
&:nth-child(56) {
  top: 86.0943168077%;
  left: 12.6582278481%;
  font-size: 27px;
  filter: blur(1.12px);
  animation: 26s ${float} infinite;
}
&:nth-child(57) {
  top: 8.6746987952%;
  left: 46.6019417476%;
  font-size: 30px;
  filter: blur(1.14px);
  animation: 34s ${floatReverse} infinite;
}
&:nth-child(58) {
  top: 61.7647058824%;
  left: 3.937007874%;
  font-size: 16px;
  filter: blur(1.16px);
  animation: 28s ${floatReverse2} infinite;
}
&:nth-child(59) {
  top: 20.2653799759%;
  left: 25.267249757%;
  font-size: 29px;
  filter: blur(1.18px);
  animation: 40s ${floatReverse} infinite;
}
&:nth-child(60) {
  top: 28.0532043531%;
  left: 88.6075949367%;
  font-size: 27px;
  filter: blur(1.2px);
  animation: 31s ${float2} infinite;
}
&:nth-child(61) {
  top: 37.2549019608%;
  left: 69.8818897638%;
  font-size: 16px;
  filter: blur(1.22px);
  animation: 26s ${floatReverse} infinite;
}
&:nth-child(62) {
  top: 71.8327183272%;
  left: 71.076011846%;
  font-size: 13px;
  filter: blur(1.24px);
  animation: 35s ${float} infinite;
}
&:nth-child(63) {
  top: 60.1726263872%;
  left: 65.2818991098%;
  font-size: 11px;
  filter: blur(1.26px);
  animation: 33s ${floatReverse} infinite;
}
&:nth-child(64) {
  top: 49.8168498168%;
  left: 49.0677134446%;
  font-size: 19px;
  filter: blur(1.28px);
  animation: 32s ${floatReverse2} infinite;
}
&:nth-child(65) {
  top: 66.0194174757%;
  left: 56.640625%;
  font-size: 24px;
  filter: blur(1.3px);
  animation: 40s ${float2} infinite;
}
&:nth-child(66) {
  top: 74.4186046512%;
  left: 51.1307767945%;
  font-size: 17px;
  filter: blur(1.32px);
  animation: 35s ${float} infinite;
}
&:nth-child(67) {
  top: 27.2838002436%;
  left: 58.7659157689%;
  font-size: 21px;
  filter: blur(1.34px);
  animation: 39s ${floatReverse2} infinite;
}
&:nth-child(68) {
  top: 18.7422934649%;
  left: 14.8367952522%;
  font-size: 11px;
  filter: blur(1.36px);
  animation: 31s ${floatReverse} infinite;
}
&:nth-child(69) {
  top: 60.7843137255%;
  left: 62.9921259843%;
  font-size: 16px;
  filter: blur(1.38px);
  animation: 24s ${float2} infinite;
}
&:nth-child(70) {
  top: 39.0243902439%;
  left: 72.5490196078%;
  font-size: 20px;
  filter: blur(1.4px);
  animation: 27s ${floatReverse2} infinite;
}
&:nth-child(71) {
  top: 68.2926829268%;
  left: 61.7647058824%;
  font-size: 20px;
  filter: blur(1.42px);
  animation: 36s ${floatReverse} infinite;
}
&:nth-child(72) {
  top: 61.6136919315%;
  left: 55.0098231827%;
  font-size: 18px;
  filter: blur(1.44px);
  animation: 36s ${float2} infinite;
}
&:nth-child(73) {
  top: 6.8543451652%;
  left: 0.9832841691%;
  font-size: 17px;
  filter: blur(1.46px);
  animation: 39s ${float} infinite;
}
&:nth-child(74) {
  top: 15.6670746634%;
  left: 58.9970501475%;
  font-size: 17px;
  filter: blur(1.48px);
  animation: 28s ${float2} infinite;
}
&:nth-child(75) {
  top: 30.0606060606%;
  left: 20.487804878%;
  font-size: 25px;
  filter: blur(1.5px);
  animation: 32s ${floatReverse2} infinite;
}
&:nth-child(76) {
  top: 91.7874396135%;
  left: 82.6848249027%;
  font-size: 28px;
  filter: blur(1.52px);
  animation: 34s ${float2} infinite;
}
&:nth-child(77) {
  top: 70.6748466258%;
  left: 21.6748768473%;
  font-size: 15px;
  filter: blur(1.54px);
  animation: 28s ${float} infinite;
}
&:nth-child(78) {
  top: 17.6904176904%;
  left: 86.7850098619%;
  font-size: 14px;
  filter: blur(1.56px);
  animation: 32s ${float2} infinite;
}
&:nth-child(79) {
  top: 33.4152334152%;
  left: 60.157790927%;
  font-size: 14px;
  filter: blur(1.58px);
  animation: 27s ${floatReverse} infinite;
}
&:nth-child(80) {
  top: 12.7607361963%;
  left: 82.7586206897%;
  font-size: 15px;
  filter: blur(1.6px);
  animation: 22s ${float} infinite;
}
`

const apparition=keyframes`
from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`


export const ErrorPageContainer = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.primaryFontColor};
  color: ${({ theme }) => theme.secondaryFontColor};
  font-family: arial, sans-serif;
  overflow: hidden;`

export const ErrorPageArticle = styled.article`
position: relative;
  width: 600px;
  max-width: 100%;
  margin: 20px;
  background: ${({ theme }) => theme.secondaryFontColor};
  padding: 60px 40px;
  text-align: center;
  box-shadow: -10px 10px 67px -12px rgba(0, 0, 0, 0.2);
  opacity: 0;
  animation: ${apparition} 0.8s 1.2s cubic-bezier(0.39, 0.575, 0.28, 0.995) forwards;

  p {
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 0.6rem;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.primaryFontColor};
}

button {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border: 3px solid ${({ theme }) => theme.primaryFontColor};
  background: transparent;
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryFontColor};
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
} 

`