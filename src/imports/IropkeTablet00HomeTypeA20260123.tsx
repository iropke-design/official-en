import { Link as RouterLink } from 'react-router-dom';
import svgPaths from "./svg-y23f25lxsh";
import imgHero from "figma:asset/e4da40e9ffc5e5128eaa0211db7401037ce4e4b7.png";
import imgHomeBusinessArea01 from "figma:asset/62c5d76544e0df420a9c2ba072d210c988d035ae.png";
import imgHomeBusinessArea2 from "figma:asset/4b1b065a6e39e44db4b8664a00abc2c456c69de0.png";
import imgHomeBusinessArea3 from "figma:asset/1ab2666dc03bf07ddaa6a7512d02034241e14398.png";
import imgHomeBusinessArea4 from "figma:asset/d1b9c6bf07bde5e727069f0b5e6677bfdcbf0413.png";
import imgHomeBusinessArea5 from "figma:asset/6fe3ccb2eb1bb7bb3ff030173aab667e0c160234.png";
import imgHomeBusinessArea6 from "figma:asset/d6479126be6bd0f1719f1da0426cc5bfc20d654f.png";
import imgHomePostThumb01 from "figma:asset/771c1ee3721a26c507e65c54fc98a9141fe6384d.png";
import imgHomePostThumb2 from "figma:asset/7cd78dfdf1ad8c30dd6056ac07cb70f16a00006e.png";
import imgHomePostThumb3 from "figma:asset/71e06a4eb4332f869f5c3c0b6a36657341377038.png";
import imgPopularInsight from "figma:asset/177f1608b6d04e405507dac33177fdd3d9916fa3.png";
import imgInquiryBox from "figma:asset/04f8c716f0defb657c9833b5dd87497183d36556.png";
import imgInquiryBox1 from "figma:asset/a44dd1e73c87814009405e4ed156d492d4d69eec.png";

function IropkeLogo() {
  return (
    <div className="h-[22px] relative shrink-0 w-[117px]" data-name="iropke-logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 22">
        <g id="iropke-logo">
          <path d={svgPaths.p6b82900} fill="var(--fill-0, #4A4C4D)" id="iropke-logo_2" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0" data-name="Logo">
      <IropkeLogo />
    </div>
  );
}

function ButtonLightTheme() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center px-[20px] py-[11px] relative rounded-[5px] shrink-0" data-name="Button - Light Theme">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="css-ew64yg font-['Roboto:Roboto',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#232329] text-[14px] text-center">Project Inquiry</p>
    </div>
  );
}

function UtilityIcons() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Utility Icons">
          <path d={svgPaths.p2ae90080} id="icon-menu" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Menu() {
  return (
    <div className="bg-[#43434e] content-stretch flex items-center justify-center p-[6px] relative rounded-[5px] shrink-0 size-[36px]" data-name="Menu">
      <UtilityIcons />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-name="Buttons">
      <ButtonLightTheme />
      <Menu />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between pl-[15px] pr-[10px] py-[10px] relative rounded-[10px] shrink-0 w-[708px]" data-name="Header">
      <div aria-hidden="true" className="absolute border border-[#e8eaed] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_7px_20px_0px_rgba(0,0,0,0.08)]" />
      <Logo />
      <Buttons />
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 px-[30px] py-[20px] top-0 w-[768px] z-[6]" data-name="Header">
      <Header />
    </div>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start not-italic relative shrink-0 w-full" data-name="Headline">
      <p className="css-4hzbpn font-['Google_Sans:Google_Sans',sans-serif] leading-[1.2] relative shrink-0 text-[#232329] text-[34px] w-full">Corpis™ Launch</p>
      <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] relative shrink-0 text-[#43434e] text-[16px] w-full">An AEO-Driven Solution for Building Multilingual Official Websites</p>
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

function Buttons1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Buttons">
      <ButtonLightTheme1 />
      <ButtonLightTheme2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="Container">
      <Headline />
      <Buttons1 />
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[768px] relative shrink-0 w-full z-[5]" data-name="Hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[40px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn flex-[1_0_0] font-['Google_Sans:Google_Sans',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[#232329] text-[28px]">Business Area</p>
    </div>
  );
}

function Headline1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Headline">
      <Title />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 text-[#232329] w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[24px] w-full">AI · AX</p>
      <p className="css-4hzbpn relative shrink-0 text-[14px] w-full">from AI to AX</p>
    </div>
  );
}

function Copy() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[20px] items-start not-italic pb-[20px] pl-[20px] pr-[40px] pt-[5px] relative w-full">
        <Title1 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] relative shrink-0 text-[#68687b] text-[15px] w-full">From AI adoption consulting to AI agent development, we provide end-to-end AX (AI Transformation) services across workflows, organizational structures, and platforms.</p>
      </div>
    </div>
  );
}

function UtilityIcons1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Utility Icons">
          <path d={svgPaths.p3b6ad300} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-end p-[20px] right-0 size-[60px]" data-name="Arrow">
      <UtilityIcons1 />
    </div>
  );
}

function Box() {
  return (
    <div className="bg-white flex-[1_0_0] h-[450px] min-h-[450px] min-w-px relative rounded-[10px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <div className="aspect-[160/90] relative shrink-0 w-full" data-name="home-business-area-01">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomeBusinessArea01} />
            <div className="absolute bg-gradient-to-b from-[60%] from-[rgba(255,255,255,0)] inset-0 to-white" />
          </div>
        </div>
        <Copy />
        <Arrow />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 text-[#232329] w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[24px] w-full">AEO · GEO</p>
      <p className="css-4hzbpn relative shrink-0 text-[14px] w-full">from Search to Answer</p>
    </div>
  );
}

function Copy1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[20px] items-start not-italic pb-[20px] pl-[20px] pr-[40px] pt-[5px] relative w-full">
        <Title2 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] relative shrink-0 text-[#68687b] text-[15px] w-full">Beyond traditional SEO, we design and execute AEO/GEO-focused search optimization strategies that help brands and services be recognized, recommended, and trusted in AI-driven search and recommendation environments.</p>
      </div>
    </div>
  );
}

function UtilityIcons2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Utility Icons">
          <path d={svgPaths.p3b6ad300} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-end p-[20px] right-0 size-[60px]" data-name="Arrow">
      <UtilityIcons2 />
    </div>
  );
}

function Box1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[450px] min-h-[450px] min-w-px relative rounded-[10px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <div className="aspect-[160/90] relative shrink-0 w-full" data-name="home-business-area-01">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomeBusinessArea2} />
            <div className="absolute bg-gradient-to-b from-[60%] from-[rgba(255,255,255,0)] inset-0 to-white" />
          </div>
        </div>
        <Copy1 />
        <Arrow1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Row">
      <Box />
      <Box1 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 text-[#232329] w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[24px] w-full">Branding</p>
      <p className="css-4hzbpn relative shrink-0 text-[14px] w-full">from Identity to Meaning</p>
    </div>
  );
}

function Copy2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[20px] items-start not-italic pb-[20px] pl-[20px] pr-[40px] pt-[5px] relative w-full">
        <Title3 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] relative shrink-0 text-[#68687b] text-[15px] w-full">We structure corporate and brand identities and build brand strategies and digital brand architectures that maintain consistency across AI, search, and content-driven environments.</p>
      </div>
    </div>
  );
}

function UtilityIcons3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Utility Icons">
          <path d={svgPaths.p3b6ad300} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow2() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-end p-[20px] right-0 size-[60px]" data-name="Arrow">
      <UtilityIcons3 />
    </div>
  );
}

function Box2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[450px] min-h-[450px] min-w-px relative rounded-[10px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <div className="aspect-[160/90] relative shrink-0 w-full" data-name="home-business-area-01">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomeBusinessArea3} />
            <div className="absolute bg-gradient-to-b from-[60%] from-[rgba(255,255,255,0)] inset-0 to-white" />
          </div>
        </div>
        <Copy2 />
        <Arrow2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 text-[#232329] w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[24px] w-full">Marketing</p>
      <p className="css-4hzbpn relative shrink-0 text-[14px] w-full">from Exposure to Performance</p>
    </div>
  );
}

function Copy3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[20px] items-start not-italic pb-[20px] pl-[20px] pr-[40px] pt-[5px] relative w-full">
        <Title4 />
        <div className="font-['Roboto:Roboto',sans-serif] leading-[1.5] relative shrink-0 text-[#68687b] text-[15px] w-full">
          <p className="css-4hzbpn mb-0">We develop and operate content-driven and digital marketing strategies that go beyond traffic acquisition and lead to measurable conversion and performance</p>
          <p className="css-4hzbpn">(search, content, performance marketing, data-driven optimization).</p>
        </div>
      </div>
    </div>
  );
}

function UtilityIcons4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Utility Icons">
          <path d={svgPaths.p3b6ad300} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow3() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-end p-[20px] right-0 size-[60px]" data-name="Arrow">
      <UtilityIcons4 />
    </div>
  );
}

function Box3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[450px] min-h-[450px] min-w-px relative rounded-[10px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <div className="aspect-[160/90] relative shrink-0 w-full" data-name="home-business-area-01">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomeBusinessArea4} />
            <div className="absolute bg-gradient-to-b from-[60%] from-[rgba(255,255,255,0)] inset-0 to-white" />
          </div>
        </div>
        <Copy3 />
        <Arrow3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Row">
      <Box2 />
      <Box3 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 text-[#232329] w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[24px] w-full">Solution</p>
      <p className="css-4hzbpn relative shrink-0 text-[14px] w-full">from Problem to System</p>
    </div>
  );
}

function Copy4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[20px] items-start not-italic pb-[20px] pl-[20px] pr-[40px] pt-[5px] relative w-full">
        <Title5 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] relative shrink-0 text-[#68687b] text-[15px] w-full">We design and build AI- and platform-based solutions to solve recurring business problems, including CMS, automation, data integration, and service system architecture.</p>
      </div>
    </div>
  );
}

function UtilityIcons5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Utility Icons">
          <path d={svgPaths.p3b6ad300} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow4() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-end p-[20px] right-0 size-[60px]" data-name="Arrow">
      <UtilityIcons5 />
    </div>
  );
}

function Box4() {
  return (
    <div className="bg-white flex-[1_0_0] h-[450px] min-h-[450px] min-w-px relative rounded-[10px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <div className="aspect-[160/90] relative shrink-0 w-full" data-name="home-business-area-01">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomeBusinessArea5} />
            <div className="absolute bg-gradient-to-b from-[60%] from-[rgba(255,255,255,0)] inset-0 to-white" />
          </div>
        </div>
        <Copy4 />
        <Arrow4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 text-[#232329] w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[24px] w-full">Maintenance</p>
      <p className="css-4hzbpn relative shrink-0 text-[14px] w-full">from Launch to Growth</p>
    </div>
  );
}

function Copy5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[20px] items-start not-italic pb-[20px] pl-[20px] pr-[40px] pt-[5px] relative w-full">
        <Title6 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] relative shrink-0 text-[#68687b] text-[15px] w-full">We provide operations, improvement, and scalability-focused maintenance services after launch, covering content, search performance, technical stability, and continuous optimization.</p>
      </div>
    </div>
  );
}

function UtilityIcons6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Utility Icons">
          <path d={svgPaths.p3b6ad300} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow5() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-end p-[20px] right-0 size-[60px]" data-name="Arrow">
      <UtilityIcons6 />
    </div>
  );
}

function Box5() {
  return (
    <div className="bg-white flex-[1_0_0] h-[450px] min-h-[450px] min-w-px relative rounded-[10px]" data-name="Box">
      <div className="content-stretch flex flex-col items-center min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <div className="aspect-[160/90] relative shrink-0 w-full" data-name="home-business-area-01">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomeBusinessArea6} />
            <div className="absolute bg-gradient-to-b from-[60%] from-[rgba(255,255,255,0)] inset-0 to-white" />
          </div>
        </div>
        <Copy5 />
        <Arrow5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Row">
      <Box4 />
      <Box5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function BusinessArea() {
  return (
    <div className="relative shrink-0 w-full z-[4]" data-name="Business Area">
      <div className="content-stretch flex flex-col gap-[20px] items-start px-[40px] py-[60px] relative w-full">
        <Headline1 />
        <Container1 />
      </div>
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn flex-[1_0_0] font-['Google_Sans:Google_Sans',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[#232329] text-[28px]">Popular Insight</p>
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
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-end relative shrink-0 w-full" data-name="Description">
      <div className="flex flex-col font-['Roboto:Roboto',sans-serif] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[#68687b] text-[16px] w-[min-content]">
        <p className="css-4hzbpn leading-[1.5]">A curated collection of insights on technology, digital trends, and how they translate into real products, systems, and user experiences.</p>
      </div>
      <ButtonLightTheme3 />
    </div>
  );
}

function Headline2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Headline">
      <Title7 />
      <Description />
    </div>
  );
}

function Headline3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Headline">
      <div className="content-stretch flex flex-col items-start pb-[40px] pr-[80px] relative w-full">
        <Headline2 />
      </div>
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn font-['Google_Sans:Google_Sans',sans-serif] h-[58px] leading-[1.2] not-italic overflow-hidden relative shrink-0 text-[#232329] text-[20px] text-ellipsis w-full">Transforming a Traditional FAQ Page into an AI-Powered Chatbot</p>
    </div>
  );
}

function Copy6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[10px] items-start px-[20px] py-[30px] relative size-full">
        <Title8 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] h-[47px] leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#68687b] text-[15px] text-ellipsis w-full">How to reduce FAQ operating costs and customer drop-off. Explore a case study where a traditional FAQ was converted into an AI chatbot—improving both support efficiency and search performance.</p>
      </div>
    </div>
  );
}

function UtilityIcons7() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Utility Icons">
          <path d={svgPaths.p3b6ad300} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow6() {
  return (
    <div className="content-stretch flex items-center pl-[12px] py-[6px] relative shrink-0 size-[32px]" data-name="Arrow">
      <UtilityIcons7 />
    </div>
  );
}

function Post() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Post">
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
            <Copy6 />
          </div>
          <Arrow6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn font-['Google_Sans:Google_Sans',sans-serif] h-[58px] leading-[1.2] not-italic overflow-hidden relative shrink-0 text-[#232329] text-[20px] text-ellipsis w-full">What Needs to Change in the Marketing Funnel in the Age of AI?</p>
    </div>
  );
}

function Copy7() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[10px] items-start px-[20px] py-[30px] relative size-full">
        <Title9 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] h-[47px] leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#68687b] text-[15px] text-ellipsis w-full">Why do traditional acquisition-to-conversion funnels no longer work? We examine how marketing funnel structures must evolve to align with AI search and recommendation systems, and how to apply them in practice.</p>
      </div>
    </div>
  );
}

function UtilityIcons8() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Utility Icons">
          <path d={svgPaths.p3b6ad300} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow7() {
  return (
    <div className="content-stretch flex items-center pl-[12px] py-[6px] relative shrink-0 size-[32px]" data-name="Arrow">
      <UtilityIcons8 />
    </div>
  );
}

function Post1() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Post">
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
            <Copy7 />
          </div>
          <Arrow7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Title10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn font-['Google_Sans:Google_Sans',sans-serif] h-[58px] leading-[1.2] not-italic overflow-hidden relative shrink-0 text-[#232329] text-[20px] text-ellipsis w-full">The Future Is Already Here: Web Service Strategies for Seniors</p>
    </div>
  );
}

function Copy8() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[10px] items-start px-[20px] py-[30px] relative size-full">
        <Title10 />
        <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] h-[47px] leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#68687b] text-[15px] text-ellipsis w-full">As aging societies become a reality, what must change in web services for senior users? We outline future-ready web strategies centered on accessibility, UX, and trust for senior audiences.</p>
      </div>
    </div>
  );
}

function UtilityIcons9() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Utility Icons">
          <path d={svgPaths.p3b6ad300} id="icon-arrow-right" stroke="var(--stroke-0, #68687B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow8() {
  return (
    <div className="content-stretch flex items-center pl-[12px] py-[6px] relative shrink-0 size-[32px]" data-name="Arrow">
      <UtilityIcons9 />
    </div>
  );
}

function Post2() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Post">
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
            <Copy8 />
          </div>
          <Arrow8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="List">
      <Post />
      <Post1 />
      <Post2 />
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
      <div className="content-stretch flex flex-col gap-[20px] items-start px-[40px] py-[60px] relative w-full">
        <Headline3 />
        <List />
      </div>
    </div>
  );
}

function Title11() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn flex-[1_0_0] font-['Google_Sans:Google_Sans',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[28px] text-black">Inquiry</p>
    </div>
  );
}

function Headline4() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Headline">
      <Title11 />
    </div>
  );
}

function Title12() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[24px] w-full">Project Inquiry</p>
      <p className="css-4hzbpn relative shrink-0 text-[14px] w-full">from AI to AX</p>
    </div>
  );
}

function Copy9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[25px] items-start min-h-px min-w-px not-italic relative text-white" data-name="Copy">
      <Title12 />
      <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] opacity-80 relative shrink-0 text-[15px] w-full">From AI adoption consulting to AI agent development, we provide end-to-end AX (AI Transformation) services across workflows, organizational structures, and platforms.</p>
    </div>
  );
}

function UtilityIcons10() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Utility Icons" opacity="0.8">
          <path d={svgPaths.p3b6ad300} id="icon-arrow-right" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow9() {
  return (
    <div className="content-stretch flex items-center pl-[12px] pt-[12px] relative shrink-0 size-[32px]" data-name="Arrow">
      <UtilityIcons10 />
    </div>
  );
}

function InquiryBox() {
  return (
    <div className="h-[260px] relative rounded-[10px] shrink-0 w-full" data-name="Inquiry Box">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgInquiryBox} />
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[80px] items-end p-[20px] relative size-full">
          <Copy9 />
          <Arrow9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Title13() {
  return (
    <div className="content-stretch flex flex-col font-['Google_Sans:Google_Sans',sans-serif] gap-[10px] items-start leading-[1.2] relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn relative shrink-0 text-[24px] w-full">Speaking Engagement Inquiry</p>
      <p className="css-4hzbpn relative shrink-0 text-[14px] w-full">from Search to Answer</p>
    </div>
  );
}

function Copy10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[25px] items-start min-h-px min-w-px not-italic relative text-white" data-name="Copy">
      <Title13 />
      <p className="css-4hzbpn font-['Roboto:Roboto',sans-serif] leading-[1.5] opacity-80 relative shrink-0 text-[15px] w-full">Beyond traditional SEO, we design and execute AEO/GEO-focused search optimization strategies that help brands and services be recognized, recommended, and trusted in AI-driven search and recommendation environments.</p>
    </div>
  );
}

function UtilityIcons11() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Utility Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Utility Icons" opacity="0.8">
          <path d={svgPaths.p3b6ad300} id="icon-arrow-right" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow10() {
  return (
    <div className="content-stretch flex items-center pl-[12px] pt-[12px] relative shrink-0 size-[32px]" data-name="Arrow">
      <UtilityIcons11 />
    </div>
  );
}

function InquiryBox1() {
  return (
    <div className="h-[260px] relative rounded-[10px] shrink-0 w-full" data-name="Inquiry Box">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgInquiryBox1} />
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[80px] items-end p-[20px] relative size-full">
          <Copy10 />
          <Arrow10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfe4] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Row">
      <InquiryBox />
      <InquiryBox1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Row3 />
    </div>
  );
}

function Inquiry() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Inquiry">
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[60px] px-[40px] relative w-full">
        <Headline4 />
        <Container2 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#43434e] h-[40px] relative shrink-0 w-full z-[1]" data-name="Footer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[30px] py-[10px] relative size-full">
          <p className="css-ew64yg font-['Roboto:Roboto',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#d0d0d7] text-[12px]">© Iropke</p>
        </div>
      </div>
    </div>
  );
}

export default function IropkeTablet00HomeTypeA() {
  return (
    <div className="bg-[#f3f4f7] content-stretch flex flex-col isolate items-start relative size-full" data-name="IROPKE_Tablet_00_Home_TypeA_20260123">
      <Header1 />
      <Hero />
      <BusinessArea />
      <PopularInsight />
      <Inquiry />
      <Footer />
    </div>
  );
}