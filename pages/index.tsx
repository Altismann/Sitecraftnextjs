import type { NextPage } from "next";
import Nav from "../components/nav";

const Body: NextPage = () => {
  return (
  <div className=" bg-black " >
  <Nav />
  <div className="flex absolute z-30 text-[90px] uppercase font-montserrat text-white text-opacity-80 font-black mq450:text-[24px] mq750:text-[46px] mt-[400px] mb-[400px] mq450:leading-[24px] mq750:leading-[46px] mq450:mt-[50px] mq750:mt-[100px] mq1050:mt-[200px] " >
    Portfolio för arbetsgivare
  </div>
  <video
    autoPlay
    loop
    muted
    className="flex w-full relative z-10 min-h-30% max-w-full "
  >
    <source
      src="https://cdn.pixabay.com/video/2021/07/08/80711-573496150_large.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>

      
      <main className="w-full flex flex-col items-center justify-center box-border relative max-w-full ">
      <section className="w-full uppercase font-black font-montserrat text-white items-center text-left text-[60px] text-white font-montserrat mq450:text-[24px] mq750:text-[36px] mq450:leading-[24px] mq750:leading-[36px]">
        Hej! Jag heter Anders, jag är en hobby produktdesigner och 
        webbutvecklare placerad i Stockholm. Alla sidor här är skapade från
        grunden utan färdiga teman. Jag använde Figma, Locofy och Nextjs för 
        att göra den här sidan.
        </section>
        <div className="w-full flex flex-col items-center justify-center mt-[200px] ">
          <div className="flex flex-row items-center justify-center">
            <h2 className="relative text-left text-[60px] text-white font-montserrat font-black flex items-center mq450:text-[24px] mq750:text-[36px] mq450:leading-[24px] mq750:leading-[36px]">
              <section className="w-full leading-[60px] uppercase font-black font-montserrat text-white items-center mq450:text-[18px] mq750:text-[36px] mq450:leading-[18px] mq750:leading-[36px]">
              Web Developer
                (Mimo)
                Certifiering i JS
               HTML CSS
               (2022)
        </section>
            </h2>

          </div>
          <div className="flex flex-col mt-[75px] max-w-full items-center justify-center ">
            <div className="max-w-full ">
              <h2 className="flex flex-col relative text-left text-[60px] leading-[74px] text-white font-montserrat lowercase font-black items-center justify-center ">
                Mitt hobby projekt:
              </h2>
              
              
              <div className="flex flex-col max-w-full items-center justify-center ">
              <a
          className="relative [text-decoration:underline] mt-[-65px] text-left text-[60px] leading-[74px] font-montserrat font-black break-all text-pink-400 "
          href="https://www.dyoid.se"
          target="_blank"
        >
          bydyoid
        </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[440px] flex flex-row items-start justify-center mt-[300px] box-border max-w-full text-center ">
          <div className="h-[336px] relative text-[45px] font-montserrat font-black break-all text-white flex break-all items-center ">
            <span className="[line-break:none]">
              <p className="m-0">Vscode</p>
              <p className="m-0 tracking-[25px]">NextJs</p>
              <p className="m-0">Github</p>
              <p className="m-0 tracking-[25px]">Figma</p>
              <p className="m-0">Shopify</p>
              <p className="m-0 tracking-[25px]">Webflow</p>
              <p className="m-0">Locofy</p>
              <p className="m-0 tracking-[25px]">Wordpress</p>
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-[300px] box-border max-w-full mb-[200px]">
          <div className="flex-1 flex flex-col items-center justify-center max-w-full">

            <div className="w-full text-left text-[36px] text-white font-black font-montserrat text-center ">
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
          className="relative [text-decoration:underline] leading-[30px] font-bold text-[inherit] mq450:text-[24px] break-all "
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
