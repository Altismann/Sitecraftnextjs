import type { NextPage } from "next";
import Nav from "../components/nav";

const Body: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-center pt-0 px-0 pb-[30.5px] box-border leading-[normal] tracking-[normal] text-center text-[34px] text-white font-montserrat">
      <Nav />
      <div className="w-[100%] bg-darkkhaki overflow-hidden flex flex-col items-center justify-center pt-[434px] pb-[404px] pl-[559px] pr-[558px] box-border gap-0.5 max-w-full mq750:pt-[183px] mq750:px-[139px] mq750:pb-[171px] mq750:box-border mq1050:pt-[282px] mq1050:px-[279px] mq1050:pb-[263px] mq1050:box-border">
        <div className="w-[100%] flex flex-row items-start justify-center py-0 pl-[99px] pr-[98px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:pl-[49px] mq1050:pr-[49px] mq1050:box-border">
          <div className="h-5 flex-1 relative leading-[20px] flex items-center justify-center max-w-full mq450:text-[20px] mq450:leading-[20px] mq1050:text-[27px] mq1050:leading-[27px]">
            Portfolio
          </div>
        </div>
        <h1 className="m-0 self-stretch relative text-[130px] leading-[130px] font-black font-[inherit] mq450:text-[32px] mq450:leading-[52px] mq1050:text-[52px] mq1050:leading-[78px]">
          Sitecraft
        </h1>
      </div>
      <main className="w-[100%] bg-black flex flex-col items-center justify-center pt-[0px] pb-[306px] pl-[786px] pr-[786px] box-border relative gap-[227px] max-w-full text-left text-27xl text-white font-montserrat lg:pt-[215px] lg:pb-[129px] lg:box-border mq750:gap-[57px] mq750:pt-[140px] mq750:pb-[84px] mq750:pl-[143px] mq750:pr-[196px] mq750:box-border mq1050:gap-[113px] mq1050:pl-[286px] mq1050:pr-[393px] mq1050:box-border">
      <section className="w-full h-[560px] relative text-45xl leading-[60px] uppercase font-black font-montserrat text-white text-left flex items-center mq450:text-19xl mq450:leading-[36px] mq1050:text-32xl mq1050:leading-[48px]">
          Hej! Jag heter Anders, jag är en hobby produktdesigner och
          webbutvecklare plaserad i Stockholm. Jag skapar gränssnitt för
          hobbyister, småföretag och skapare. Alla sidor här är skapade från
          grunden utan färdiga teman.
        </section>
        <div className="flex flex-col items-end justify-start gap-[187px] max-w-full text-45xl mq450:gap-[47px] mq750:gap-[93px]">
          <div className="flex flex-col items-start justify-start">
            <h2 className="m-0 h-[267px] relative text-inherit leading-[64px] font-black font-[inherit] flex items-center shrink-0 mq450:text-19xl mq450:leading-[38px] mq1050:text-32xl mq1050:leading-[51px]">
              <span>
                <p className="m-0">Web Developer</p>
                <p className="m-0">(Mimo)</p>
                <p className="m-0">Certifiering i JS</p>
                <p className="m-0">HTML CSS</p>
              </span>
            </h2>
            <div className="self-stretch relative text-17xl leading-[36px] lowercase font-black mq450:text-3xl mq450:leading-[22px] mq1050:text-10xl mq1050:leading-[29px]">
              (Jan2022)
            </div>
          </div>
          <div className="w-[441px] flex flex-row items-start justify-end py-0 px-[26px] box-border max-w-full text-center">
            <div className="flex-1 flex flex-col items-start justify-start relative gap-0 max-w-full">
              <h2 className="m-0 w-[305px] relative text-inherit leading-[64px] lowercase font-black font-[inherit] flex items-center justify-center mq450:text-19xl mq450:leading-[38px] mq1050:text-32xl mq1050:leading-[51px]">
                Sitecraft
              </h2>
              <div className="w-[327px] flex flex-row items-start justify-center max-w-full [row-gap:20px] text-27xl mq750:flex-wrap">
                <div className="flex-1 relative leading-[46px] font-black inline-block min-w-[136px] mq450:text-9xl mq450:leading-[28px] mq1050:text-18xl mq1050:leading-[37px]">
                  bydyoid
                </div>
                <div className="relative text-5xl leading-[46px] lowercase font-black inline-block min-w-[120px] mq450:text-lgi mq450:leading-[37px]">
                  Webflow
                </div>
              </div>
              <div className="w-[85px] absolute !m-[0] top-[18px] right-[-2px] text-5xl leading-[36px] lowercase font-black flex items-center justify-center min-w-[85px] mq450:text-lgi mq450:leading-[29px]">
                Nextjs
              </div>
            </div>
          </div>
        </div>

        <div className="w-[440px] flex flex-row items-start justify-center pt-0 px-11 pb-[55px] box-border max-w-full text-center mq450:pl-5 mq450:pr-5 mq450:pb-9 mq450:box-border">
          <div className="h-[336px] relative leading-[48px] font-black flex items-center mq450:text-9xl mq450:leading-[29px] mq1050:text-18xl mq1050:leading-[38px]">
            <span className="[line-break:anywhere]">
              <p className="m-0">React.js</p>
              <p className="m-0 tracking-[25px]">NextJs</p>
              <p className="m-0">Github</p>
              <p className="m-0 tracking-[25px]">Figma</p>
              <p className="m-0">Shopify</p>
              <p className="m-0 tracking-[25px]">Webflow</p>
              <p className="m-0">TeleportHQ</p>
            </span>
          </div>
        </div>
        <div className="w-[518px] flex flex-row items-start justify-end py-0 px-[70px] box-border max-w-full text-right mq750:pl-[35px] mq750:pr-[35px] mq750:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-3.5 max-w-full">

            <div className="self-stretch relative text-17xl leading-[36px] font-black mq450:text-3xl mq450:leading-[22px] mq1050:text-10xl mq1050:leading-[29px]">
              <h2 className="m-0">Kontakt</h2>
              <p className="m-0">Anders Altmann</p>
              <p className="m-0">48 år bor på</p>
              <p className="m-0">adressen</p>
              <p className="m-0">Enlundavägen 46</p>
              <p className="m-0">Stensborg 179 75</p>
              <p className="m-0">Skå</p>
              <p className="m-0">Telefonnummer</p>
              <p className="m-0">070-231 21 73</p>
              <p className="m-0">aaltismann@gmail.com</p>
                      
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Body;
