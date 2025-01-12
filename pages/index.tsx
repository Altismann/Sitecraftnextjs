import type { NextPage } from "next";
import Nav from "../components/nav";

const Body: NextPage = () => {
  return (
  <div className=" bg-black" >
  <Nav />
  <div className="absolute z-30 text-45xl uppercase font-montserrat text-white text-opacity-80 font-black items-center justify-center mq450:mt-[75px] mq750:mt-[150px] mt-[300px] mq450:text-[24px] mq750:text-[36px] mq450:leading-[24px] mq750:leading-[36px]" >
    Portfolio för arbetsgivare
  </div>
  <video
    autoPlay
    loop
    muted
    className="relative z-10 min-h-30% max-w-full overflow-hidden"
  >
    <source
      src="https://cdn.pixabay.com/video/2021/07/08/80711-573496150_large.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>

      
      <main className="w-full flex flex-col items-center justify-center box-border relative gap-[227px] max-w-full text-left text-27xl text-white font-montserrat ">
      <section className="w-full leading-[60px] uppercase font-black font-montserrat text-white text- flex items-center mq450:text-[18px] mq750:text-[36px] mq450:leading-[18px] mq750:leading-[36px]">
        Hej! Jag heter Anders, jag är en hobby produktdesigner och 
        webbutvecklare plaserad i Stockholm. Alla sidor här är skapade från
        grunden utan färdiga teman. Jag använde Figma, Locofy och Nextjs för 
        att göra den här sidan.
        </section>
        <div className="w-full flex flex-col items-center justify-center ">
          <div className="flex flex-row items-center justify-center">
            <h2 className="relative leading-[64px] font-black font-[inherit] flex items-center mq450:text-[24px] mq750:text-[36px] mq450:leading-[24px] mq750:leading-[36px]">
              <section className="w-full leading-[60px] uppercase font-black mb-[150px] font-montserrat text-white items-center mq450:text-[18px] mq750:text-[36px] mq450:leading-[18px] mq750:leading-[36px]">
              Web Developer
                (Mimo)
                Certifiering i JS
               HTML CSS
               (2022)
        </section>
            </h2>

          </div>
          <div className="flex flex-col items-center justify-center py-0 px-[26px] box-border max-w-full text-center">
            <div className="flex-1 flex flex-col items-end justify-center relative mq450:gap-20 max-w-full">
              <h2 className="flex flex-col relative text-45xl breal-all leading-[64px] lowercase font-black font-[inherit] items-center justify-center ">
                Den här sidan
              </h2>
              
              
              <div className="flex flex-col items-start justify-center mt-1 max-w-full [row-gap:20px] text-45xl text-pink-400">
              <a
          className="relative [text-decoration:underline] tracking-[10px] leading-[40px] font-bold text-[inherit]"
          href="https://www.dyoid.se"
          target="_blank"
        >
          dyoid
        </a>
                <div className="relative text-5xl leading-[20px] lowercase font-black inline-block min-w-[120px] ">
                  Webflow
                </div>
              </div>
              <div className="flex-col absolute break-all text-5xl leading-[64px] lowercase font-black flex items-center justify-center min-w-[85px] ">
                Nextjs
              </div>
            </div>
          </div>
        </div>

        <div className="w-[440px] flex flex-row items-start justify-center pt-0 box-border max-w-full text-center ">
          <div className="h-[336px] relative leading-[48px] font-black flex items-center ">
            <span className="[line-break:none]">
              <p className="m-0">Vscode</p>
              <p className="m-0 tracking-[25px]">NextJs</p>
              <p className="m-0">Github</p>
              <p className="m-0 tracking-[25px]">Figma</p>
              <p className="m-0">Shopify</p>
              <p className="m-0 tracking-[25px]">Webflow</p>
              <p className="m-0">Locofy</p>
              <p className="m-0">Wordpress</p>
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center py-0 px-[0px] box-border max-w-full text-center pb-[200px]">
          <div className="flex-1 flex flex-col items-center justify-center gap-3.5 max-w-full">

            <div className="w-full text-17xl leading-[36px] font-black ">
              <h2 className="m-0 mb-1">Kontakt</h2>
              <p className="m-0">Anders Altmann</p>
              <p className="m-0">48 år bor på</p>
              <p className="m-0">adressen</p>
              <p className="m-0">Enlundavägen 46</p>
              <p className="m-0">Stensborg 179 75</p>
              <p className="m-0">Skå</p>
              <p className="m-0">Telefonnummer</p>
              <p className="m-0">070-231 21 73</p>
              <a
          className="relative [text-decoration:underline] leading-[30px] font-bold text-[inherit] mq450:text-[5xl] break-all "
          href="mailto:aaltismann@gmail.com"
          target="_blank"
        >
          aaltismann@gmail.com
        </a>
                      
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Body;
