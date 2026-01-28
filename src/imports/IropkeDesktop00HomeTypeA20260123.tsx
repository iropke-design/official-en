import { Link as RouterLink } from 'react-router-dom';
import svgPaths from "./svg-pqowsk9n6i";
import imgHero from "figma:asset/f477a1900081de692c3cdd861d59214dabb0aa1c.png";
import imgHomeBusinessArea01 from "figma:asset/4b1b065a6e39e44db4b8664a00abc2c456c69de0.png";
import imgHomeBusinessArea2 from "figma:asset/1ab2666dc03bf07ddaa6a7512d02034241e14398.png";
import imgHomeBusinessArea3 from "figma:asset/62c5d76544e0df420a9c2ba072d210c988d035ae.png";
import imgHomeBusinessArea4 from "figma:asset/d1b9c6bf07bde5e727069f0b5e6677bfdcbf0413.png";
import imgHomeBusinessArea5 from "figma:asset/6fe3ccb2eb1bb7bb3ff030173aab667e0c160234.png";
import imgHomeBusinessArea6 from "figma:asset/d6479126be6bd0f1719f1da0426cc5bfc20d654f.png";
import imgHomePostThumb01 from "figma:asset/7cd78dfdf1ad8c30dd6056ac07cb70f16a00006e.png";
import imgHomePostThumb2 from "figma:asset/71e06a4eb4332f869f5c3c0b6a36657341377038.png";
import imgHomePostThumb3 from "figma:asset/771c1ee3721a26c507e65c54fc98a9141fe6384d.png";
import imgPopularInsight from "figma:asset/177f1608b6d04e405507dac33177fdd3d9916fa3.png";
import imgInquiryBox from "figma:asset/a44dd1e73c87814009405e4ed156d492d4d69eec.png";
import imgInquiryBox1 from "figma:asset/04f8c716f0defb657c9833b5dd87497183d36556.png";

function IropkeLogo() {
  return (
    <div className="h-[25px] relative shrink-0 w-[130px]" data-name="iropke-logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 25">
        <g id="iropke-logo">
          <path d={svgPaths.p2d015480} fill="var(--fill-0, #4A4C4D)" id="iropke-logo_2" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex h-[22px] items-start px-[10px] relative shrink-0" data-name="Logo">
      <IropkeLogo />
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Menu">
      <RouterLink to="/about" className="css-ew64yg font-['Google_Sans:Google_Sans',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#232329] text-[18px] hover:text-[var(--color-primary)] transition-colors cursor-pointer">About us</RouterLink>
    </div>
  );
}

function Component1Depth() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative shrink-0" data-name="1 Depth">
      <Menu />
    </div>
  );
}

function Menu1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Menu">
      <p className="css-ew64yg font-['Google_Sans:Google_Sans',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#232329] text-[18px]">Portfolio</p>
    </div>
  );
}

function Component1Depth1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative shrink-0" data-name="1 Depth">
      <Menu1 />
    </div>
  );
}

function Menu2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Menu">
      <p className="css-ew64yg font-['Google_Sans:Google_Sans',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#232329] text-[18px]">News</p>
    </div>
  );
}

function Component1Depth2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative shrink-0" data-name="1 Depth">
      <Menu2 />
    </div>
  );
}

function Menu3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Menu">
      <p className="css-ew64yg font-['Google_Sans:Google_Sans',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#232329] text-[18px]">Column</p>
    </div>
  );
}

function Component1Depth3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative shrink-0" data-name="1 Depth">
      <Menu3 />
    </div>
  );
}

function Menu4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Menu">
      <p className="css-ew64yg font-['Google_Sans:Google_Sans',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#232329] text-[18px]">Story</p>
    </div>
  );
}

function Component1Depth4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative shrink-0" data-name="1 Depth">
      <Menu4 />
    </div>
  );
}

function Menu5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Menu">
      <p className="css-ew64yg font-['Google_Sans:Google_Sans',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#232329] text-[18px]">Contact</p>
    </div>
  );
}

function Component1Depth5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative shrink-0" data-name="1 Depth">
      <Menu5 />
    </div>
  );
}

function Gnb() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="GNB">
      <Component1Depth />
      <Component1Depth1 />
      <Component1Depth2 />
      <Component1Depth3 />
      <Component1Depth4 />
      <Component1Depth5 />
    </div>
  );
}

function ButtonLightTheme() {
  return (
    <div className="bg-[#43434e] content-stretch flex items-center justify-center px-[20px] py-[11px] relative rounded-[5px] shrink-0 w-[150px]" data-name="Button - Light Theme">
      <p className="css-ew64yg font-['Roboto:Roboto',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white">Project Inquiry</p>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[15px]" data-name="Header">
      <div aria-hidden="true" className="absolute border border-[#e8eaed] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_7px_20px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[15px] relative w-full">
          <Logo />
          <Gnb />
          <ButtonLightTheme />
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 px-[160px] py-[25px] top-0 w-[1920px] z-[6]" data-name="Header">
      <Header />
    </div>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start not-italic relative shrink-0 w-full" data-name="Headline">
      <p className="css-4hzbpn font-['Google_Sans:Google_Sans',sans-serif] leading-[1.2] relative shrink-0 text-[#232329] text-[52px] w-full">Corpis™ Launch</p>
      <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] relative shrink-0 text-[#43434e] text-[18px] w-full">An AEO-Driven Solution for Building Multilingual Official Websites</p>
    </div>
  );
}

function ButtonLightTheme1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[11px] relative rounded-[5px] shrink-0" data-name="Button - Light Theme">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="css-ew64yg font-['Roboto:Roboto',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#232329] text-[14px] text-center">View Details</p>
    </div>
  );
}

function ButtonLightTheme2() {
  return (
    <div className="bg-[#43434e] content-stretch flex items-center justify-center px-[20px] py-[11px] relative rounded-[5px] shrink-0" data-name="Button - Light Theme">
      <p className="css-ew64yg font-['Roboto:Roboto',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white">Launch Promotion</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Buttons">
      <ButtonLightTheme1 />
      <ButtonLightTheme2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[490px]" data-name="Container">
      <Headline />
      <Buttons />
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[860px] relative shrink-0 w-full z-[5]" data-name="Hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end px-[195px] py-[120px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[10px] h-[46px] items-start relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn flex-[1_0_0] font-['Google_Sans:Google_Sans',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[#232329] text-[38px]">Business Area</p>
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Utility Icons">
        <div className="absolute inset-[20.83%]" data-name="icon-arrow-right">
          <div className="absolute inset-[-3.21%]" style={{ "--stroke-0": "rgba(104, 104, 123, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8333 24.8333">
              <path d={svgPaths.p38ae9b80} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 text-[#232329] w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[28px] w-full">AI · AX</p>
      <p className="css-4hzbpn relative shrink-0 text-[16px] w-full">from AI to AX</p>
    </div>
  );
}

function Copy() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[25px] items-start not-italic pb-[25px] pl-[25px] pr-[60px] pt-[10px] relative w-full">
        <Title1 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] relative shrink-0 text-[#68687b] text-[16px] w-full">From AI adoption consulting to AI agent development, we provide end-to-end AX (AI Transformation) services across workflows, organizational structures, and platforms.</p>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-end pb-[25px] pr-[25px] right-0 size-[60px]" data-name="Arrow">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="Utility Icons">
        <div className="absolute inset-[20.83%]" data-name="icon-arrow-right">
          <div className="absolute inset-[-3.67%]" style={{ "--stroke-0": "rgba(104, 104, 123, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9167 21.9167">
              <path d={svgPaths.p241fbb80} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 text-[#232329] w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[28px] w-full">AEO · GEO</p>
      <p className="css-4hzbpn relative shrink-0 text-[16px] w-full">from Search to Answer</p>
    </div>
  );
}

function Copy1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[25px] items-start not-italic pb-[25px] pl-[25px] pr-[60px] pt-[10px] relative w-full">
        <Title2 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] relative shrink-0 text-[#68687b] text-[16px] w-full">Beyond traditional SEO, we design and execute AEO/GEO-focused search optimization strategies that help brands and services be recognized, recommended, and trusted in AI-driven search and recommendation environments.</p>
      </div>
    </div>
  );
}

function UtilityIcons() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Utility Icons">
          <path d={svgPaths.p1a0185a0} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-end pb-[25px] pr-[25px] right-0 size-[60px]" data-name="Arrow">
      <UtilityIcons />
    </div>
  );
}

function Box() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[530px] min-w-px relative rounded-[15px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center min-h-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <div className="aspect-[160/90] relative shrink-0 w-full" data-name="home-business-area-01">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomeBusinessArea01} />
            <div className="absolute bg-gradient-to-b from-[60%] from-[rgba(255,255,255,0)] inset-0 to-white" />
          </div>
        </div>
        <Copy1 />
        <Arrow1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 text-[#232329] w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[28px] w-full">Branding</p>
      <p className="css-4hzbpn relative shrink-0 text-[16px] w-full">from Identity to Meaning</p>
    </div>
  );
}

function Copy2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[25px] items-start not-italic pb-[25px] pl-[25px] pr-[60px] pt-[10px] relative w-full">
        <Title3 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] relative shrink-0 text-[#68687b] text-[16px] w-full">We structure corporate and brand identities and build brand strategies and digital brand architectures that maintain consistency across AI, search, and content-driven environments.</p>
      </div>
    </div>
  );
}

function UtilityIcons1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Utility Icons">
          <path d={svgPaths.p1a0185a0} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow2() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-end pb-[25px] pr-[25px] right-0 size-[60px]" data-name="Arrow">
      <UtilityIcons1 />
    </div>
  );
}

function Box1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[530px] min-w-px relative rounded-[15px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center min-h-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <div className="aspect-[160/90] relative shrink-0 w-full" data-name="home-business-area-01">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomeBusinessArea2} />
            <div className="absolute bg-gradient-to-b from-[60%] from-[rgba(255,255,255,0)] inset-0 to-white" />
          </div>
        </div>
        <Copy2 />
        <Arrow2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white flex-[1_0_0] min-h-[530px] min-w-px relative rounded-[15px]" data-name="Box">
        <div className="content-stretch flex flex-col items-center min-h-[inherit] overflow-clip relative rounded-[inherit] w-full">
          <div className="aspect-[160/90] relative shrink-0 w-full" data-name="home-business-area-01">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomeBusinessArea3} />
              <div className="absolute bg-gradient-to-b from-[60%] from-[rgba(255,255,255,0)] inset-0 to-white" />
            </div>
          </div>
          <Copy />
          <Arrow />
        </div>
        <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[15px]" />
      </div>
      <Box />
      <Box1 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 text-[#232329] w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[28px] w-full">Marketing</p>
      <p className="css-4hzbpn relative shrink-0 text-[16px] w-full">from Exposure to Performance</p>
    </div>
  );
}

function Copy3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[25px] items-start not-italic pb-[25px] pl-[25px] pr-[60px] pt-[10px] relative w-full">
        <Title4 />
        <div className="font-['Roboto:Roboto',sans-serif] leading-[1.5] relative shrink-0 text-[#68687b] text-[16px] w-full">
          <p className="css-4hzbpn mb-0">We develop and operate content-driven and digital marketing strategies that go beyond traffic acquisition and lead to measurable conversion and performance</p>
          <p className="css-4hzbpn">(search, content, performance marketing, data-driven optimization).</p>
        </div>
      </div>
    </div>
  );
}

function UtilityIcons2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Utility Icons">
          <path d={svgPaths.p1a0185a0} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow3() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-end pb-[25px] pr-[25px] right-0 size-[60px]" data-name="Arrow">
      <UtilityIcons2 />
    </div>
  );
}

function Box2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[530px] min-w-px relative rounded-[15px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center min-h-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <div className="aspect-[160/90] relative shrink-0 w-full" data-name="home-business-area-01">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomeBusinessArea4} />
            <div className="absolute bg-gradient-to-b from-[60%] from-[rgba(255,255,255,0)] inset-0 to-white" />
          </div>
        </div>
        <Copy3 />
        <Arrow3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 text-[#232329] w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[28px] w-full">Solution</p>
      <p className="css-4hzbpn relative shrink-0 text-[16px] w-full">from Problem to System</p>
    </div>
  );
}

function Copy4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[25px] items-start not-italic pb-[25px] pl-[25px] pr-[60px] pt-[10px] relative w-full">
        <Title5 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] relative shrink-0 text-[#68687b] text-[16px] w-full">We design and build AI- and platform-based solutions to solve recurring business problems, including CMS, automation, data integration, and service system architecture.</p>
      </div>
    </div>
  );
}

function UtilityIcons3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Utility Icons">
          <path d={svgPaths.p1a0185a0} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow4() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-end pb-[25px] pr-[25px] right-0 size-[60px]" data-name="Arrow">
      <UtilityIcons3 />
    </div>
  );
}

function Box3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[530px] min-w-px relative rounded-[15px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center min-h-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <div className="aspect-[160/90] relative shrink-0 w-full" data-name="home-business-area-01">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomeBusinessArea5} />
            <div className="absolute bg-gradient-to-b from-[60%] from-[rgba(255,255,255,0)] inset-0 to-white" />
          </div>
        </div>
        <Copy4 />
        <Arrow4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 text-[#232329] w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[28px] w-full">Maintenance</p>
      <p className="css-4hzbpn relative shrink-0 text-[16px] w-full">from Launch to Growth</p>
    </div>
  );
}

function Copy5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[25px] items-start not-italic pb-[25px] pl-[25px] pr-[60px] pt-[10px] relative w-full">
        <Title6 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] relative shrink-0 text-[#68687b] text-[16px] w-full">We provide operations, improvement, and scalability-focused maintenance services after launch, covering content, search performance, technical stability, and continuous optimization.</p>
      </div>
    </div>
  );
}

function UtilityIcons4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Utility Icons">
          <path d={svgPaths.p1a0185a0} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow5() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-end pb-[25px] pr-[25px] right-0 size-[60px]" data-name="Arrow">
      <UtilityIcons4 />
    </div>
  );
}

function Box4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[530px] min-w-px relative rounded-[15px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center min-h-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <div className="aspect-[160/90] relative shrink-0 w-full" data-name="home-business-area-01">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomeBusinessArea6} />
            <div className="absolute bg-gradient-to-b from-[60%] from-[rgba(255,255,255,0)] inset-0 to-white" />
          </div>
        </div>
        <Copy5 />
        <Arrow5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full" data-name="Row">
      <Box2 />
      <Box3 />
      <Box4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full" data-name="Container">
      <Row />
      <Row1 />
    </div>
  );
}

function BusinessArea() {
  return (
    <div className="relative shrink-0 w-full z-[4]" data-name="Business Area">
      <div className="content-stretch flex flex-col gap-[25px] items-start px-[195px] py-[120px] relative w-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Headline">
          <Title />
          <div className="content-stretch flex flex-col gap-[40px] items-start justify-end relative shrink-0 w-full" data-name="Description">
            <div className="flex flex-col font-['Roboto:Roboto',sans-serif] h-[24px] justify-end leading-[0] not-italic relative shrink-0 text-[#68687b] text-[16px] w-full">
              <p className="css-4hzbpn leading-[1.5]">Business Area</p>
            </div>
            <div className="content-stretch flex items-center justify-center px-[20px] py-[11px] relative rounded-[5px] shrink-0" data-name="Button - Light Theme">
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[5px]" />
              <p className="css-ew64yg font-['Roboto:Roboto',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#232329] text-[14px] text-center">View Details</p>
            </div>
          </div>
        </div>
        <Container1 />
      </div>
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex gap-[10px] h-[46px] items-start relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn flex-[1_0_0] font-['Google_Sans:Google_Sans',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[#232329] text-[38px]">Popular Insight</p>
    </div>
  );
}

function ButtonLightTheme3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[11px] relative rounded-[5px] shrink-0" data-name="Button - Light Theme">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="css-ew64yg font-['Roboto:Roboto',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#232329] text-[14px] text-center">View More</p>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start justify-end min-h-px min-w-px relative w-full" data-name="Description">
      <div className="flex flex-col font-['Roboto:Roboto',sans-serif] h-[24px] justify-end leading-[0] not-italic relative shrink-0 text-[#68687b] text-[16px] w-full">
        <p className="css-4hzbpn leading-[1.5]">A curated collection of insights on technology, digital trends, and how they translate into real products, systems, and user experiences.</p>
      </div>
      <ButtonLightTheme3 />
    </div>
  );
}

function Headline1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative w-full" data-name="Headline">
      <Title7 />
      <Description />
    </div>
  );
}

function Headline2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[80px] py-[60px] relative shrink-0 w-[490px]" data-name="Headline">
      <Headline1 />
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn font-['Google_Sans:Google_Sans',sans-serif] h-[58px] leading-[1.2] not-italic overflow-hidden relative shrink-0 text-[#232329] text-[24px] text-ellipsis w-full">Transforming a Traditional FAQ Page into an AI-Powered Chatbot</p>
    </div>
  );
}

function Copy6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[15px] items-start px-[25px] py-[40px] relative size-full">
        <Title8 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] h-[47px] leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#68687b] text-[16px] text-ellipsis w-full">How to reduce FAQ operating costs and customer drop-off. Explore a case study where a traditional FAQ was converted into an AI chatbot—improving both support efficiency and search performance.</p>
      </div>
    </div>
  );
}

function Arrow6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[32px]" data-name="Arrow">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="Utility Icons">
        <div className="absolute inset-[20.83%]" data-name="icon-arrow-right">
          <div className="absolute inset-[-4.02%]" style={{ "--stroke-0": "rgba(104, 104, 123, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1667 20.1667">
              <path d={svgPaths.p26a9dc00} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn font-['Google_Sans:Google_Sans',sans-serif] h-[58px] leading-[1.2] not-italic overflow-hidden relative shrink-0 text-[#232329] text-[24px] text-ellipsis w-full">What Needs to Change in the Marketing Funnel in the Age of AI?</p>
    </div>
  );
}

function Copy7() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[15px] items-start px-[25px] py-[40px] relative size-full">
        <Title9 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] h-[47px] leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#68687b] text-[16px] text-ellipsis w-full">Why do traditional acquisition-to-conversion funnels no longer work? We examine how marketing funnel structures must evolve to align with AI search and recommendation systems, and how to apply them in practice.</p>
      </div>
    </div>
  );
}

function UtilityIcons5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Utility Icons">
          <path d={svgPaths.p30f57c80} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[32px]" data-name="Arrow">
      <UtilityIcons5 />
    </div>
  );
}

function Post() {
  return (
    <div className="bg-white relative rounded-[15px] shrink-0 w-full" data-name="Post">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pr-[25px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="aspect-[160/90] h-full relative shrink-0" data-name="home-post-thumb-01">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomePostThumb01} />
                <div className="absolute bg-gradient-to-r from-[70%] from-[rgba(255,255,255,0)] inset-0 to-white" />
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Copy7 />
          </div>
          <Arrow7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Title10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn font-['Google_Sans:Google_Sans',sans-serif] h-[58px] leading-[1.2] not-italic overflow-hidden relative shrink-0 text-[#232329] text-[24px] text-ellipsis w-full">The Future Is Already Here: Web Service Strategies for Seniors</p>
    </div>
  );
}

function Copy8() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[15px] items-start px-[25px] py-[40px] relative size-full">
        <Title10 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] h-[47px] leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#68687b] text-[16px] text-ellipsis w-full">As aging societies become a reality, what must change in web services for senior users? We outline future-ready web strategies centered on accessibility, UX, and trust for senior audiences.</p>
      </div>
    </div>
  );
}

function UtilityIcons6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Utility Icons">
          <path d={svgPaths.p30f57c80} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[32px]" data-name="Arrow">
      <UtilityIcons6 />
    </div>
  );
}

function Post1() {
  return (
    <div className="bg-white relative rounded-[15px] shrink-0 w-full" data-name="Post">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pr-[25px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="aspect-[160/90] h-full relative shrink-0" data-name="home-post-thumb-01">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomePostThumb2} />
                <div className="absolute bg-gradient-to-r from-[70%] from-[rgba(255,255,255,0)] inset-0 to-white" />
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Copy8 />
          </div>
          <Arrow8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[25px] items-start justify-center min-h-px min-w-px relative" data-name="List">
      <div className="bg-white relative rounded-[15px] shrink-0 w-full" data-name="Post">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center pr-[25px] relative w-full">
            <div className="flex flex-row items-center self-stretch">
              <div className="aspect-[160/90] h-full relative shrink-0" data-name="home-post-thumb-01">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomePostThumb3} />
                  <div className="absolute bg-gradient-to-r from-[70%] from-[rgba(255,255,255,0)] inset-0 to-white" />
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <Copy6 />
            </div>
            <Arrow6 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[15px]" />
      </div>
      <Post />
      <Post1 />
    </div>
  );
}

function PopularInsight() {
  return (
    <div className="relative shrink-0 w-full z-[3]" data-name="Popular Insight">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgPopularInsight} />
        <div className="absolute bg-gradient-to-b from-[rgba(243,244,247,0)] inset-0 to-[#f3f4f7]" />
      </div>
      <div className="content-stretch flex gap-[25px] items-start px-[195px] py-[120px] relative w-full">
        <Headline2 />
        <List />
      </div>
    </div>
  );
}

function Title11() {
  return (
    <div className="content-stretch flex gap-[10px] h-[46px] items-start relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn flex-[1_0_0] font-['Google_Sans:Google_Sans',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[38px] text-black">Inquiry</p>
    </div>
  );
}

function Headline3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Headline">
      <Title11 />
    </div>
  );
}

function Title12() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[28px] w-full">Project Inquiry</p>
      <p className="css-4hzbpn relative shrink-0 text-[16px] w-full">from AI to AX</p>
    </div>
  );
}

function Copy9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[25px] items-start min-h-px min-w-px not-italic relative text-white" data-name="Copy">
      <Title12 />
      <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] opacity-80 relative shrink-0 text-[16px] w-full">From AI adoption consulting to AI agent development, we provide end-to-end AX (AI Transformation) services across workflows, organizational structures, and platforms.</p>
    </div>
  );
}

function Arrow9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[32px]" data-name="Arrow">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px opacity-80 overflow-clip relative" data-name="Utility Icons">
        <div className="absolute inset-[20.83%]" data-name="icon-arrow-right">
          <div className="absolute inset-[-4.02%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1667 20.1667">
              <path d={svgPaths.p26a9dc00} id="icon-arrow-right" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title13() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[28px] w-full">Speaking Engagement Inquiry</p>
      <p className="css-4hzbpn relative shrink-0 text-[16px] w-full">from Search to Answer</p>
    </div>
  );
}

function Copy10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[25px] items-start min-h-px min-w-px not-italic relative text-white" data-name="Copy">
      <Title13 />
      <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] opacity-80 relative shrink-0 text-[16px] w-full">Beyond traditional SEO, we design and execute AEO/GEO-focused search optimization strategies that help brands and services be recognized, recommended, and trusted in AI-driven search and recommendation environments.</p>
    </div>
  );
}

function UtilityIcons7() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Utility Icons" opacity="0.8">
          <path d={svgPaths.p30f57c80} id="icon-arrow-right" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[32px]" data-name="Arrow">
      <UtilityIcons7 />
    </div>
  );
}

function InquiryBox() {
  return (
    <div className="flex-[1_0_0] h-[340px] min-h-px min-w-px relative rounded-[15px]" data-name="Inquiry Box">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15px] size-full" src={imgInquiryBox} />
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[160px] items-end p-[25px] relative size-full">
          <Copy10 />
          <Arrow10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="flex-[1_0_0] h-[340px] min-h-px min-w-px relative rounded-[15px]" data-name="Inquiry Box">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15px] size-full" src={imgInquiryBox1} />
        <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[160px] items-end p-[25px] relative size-full">
            <Copy9 />
            <Arrow9 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[15px]" />
      </div>
      <InquiryBox />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Row2 />
    </div>
  );
}

function Inquiry() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Inquiry">
      <div className="content-stretch flex flex-col gap-[25px] items-start pb-[120px] px-[195px] relative w-full">
        <Headline3 />
        <Container2 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 text-[#dfdfe4]" data-name="Link">
      <p className="css-ew64yg relative shrink-0">Careers</p>
      <p className="css-ew64yg relative shrink-0">Privacy Policy</p>
      <p className="css-ew64yg relative shrink-0">Location</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#43434e] h-[40px] relative shrink-0 w-full z-[1]" data-name="Footer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Roboto:Roboto',sans-serif] items-center justify-between leading-[1.5] not-italic px-[195px] py-[10px] relative size-full text-[13px]">
          <p className="css-ew64yg relative shrink-0 text-[#d0d0d7]">© Iropke All Rights Reserved.</p>
          <Link />
        </div>
      </div>
    </div>
  );
}

export default function IropkeDesktop00HomeTypeA() {
  return (
    <div className="bg-[#f3f4f7] content-stretch flex flex-col isolate items-start relative size-full" data-name="IROPKE_Desktop_00_Home_TypeA_20260123">
      <Header1 />
      <Hero />
      <BusinessArea />
      <PopularInsight />
      <Inquiry />
      <Footer />
    </div>
  );
}