import type { NextPage } from "next";

const Body: NextPage = () => {
  return (
  <div className=" bg-black">

  <div className="absolute z-30 text-45xl text-white items-center justify-center mt-[300px]">
    Welcome to my site!
  </div>
  <video
    autoPlay
    loop
    muted
    className="relative z-10 w-auto min-w-full min-h-30% max-w-none"
  >
    <source
      src="https://cdn.pixabay.com/video/2021/07/08/80711-573496150_large.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>

      
      <main className="w-full  flex flex-col items-center justify-center pt-[0px] box-border relative gap-[227px] max-w-full text-left text-27xl text-white font-montserrat ">
      <section className="w-full leading-[60px] uppercase font-black font-montserrat text-white text-left flex items-center mq450:text-[18px] mq750:text-[36px] mq450:leading-[18px] mq750:leading-[36px]">
          Hej! Jag heter Anders, jag är en hobby produktdesigner och
          webbutvecklare plaserad i Stockholm. Alla sidor här är skapade från
          grunden utan färdiga teman. Jag använde Figma, Locofy och Nextjs för 
          att göra den här sidan.
        </section>
        <div className="flex flex-col items-end justify-center gap-[187px] max-w-full text-45xl ">
          <div className="flex flex-col items-center justify-center">
            <h2 className="m-0 h-[267px] relative text-inherit leading-[64px] font-black font-[inherit] flex items-center shrink-0 ">
              <span>
                <p className="m-0">Web Developer</p>
                <p className="m-0">(Mimo)</p>
                <p className="m-0">Certifiering i JS</p>
                <p className="m-0">HTML CSS</p>
              </span>
            </h2>
            <div className="self-stretch relative text-17xl leading-[36px] lowercase font-black ">
              (Jan2022)
            </div>
          </div>
          <div className="w-[441px] flex flex-row items-start justify-end py-0 px-[26px] box-border max-w-full text-center">
            <div className="flex-1 flex flex-col items-start justify-start relative gap-0 max-w-full">
              <h2 className="m-0 w-[305px] relative text-inherit leading-[64px] lowercase font-black font-[inherit] flex items-center justify-center ">
                Sitecraft
              </h2>
              <div className="w-[327px] flex flex-row items-start justify-center max-w-full [row-gap:20px] text-27xl ">
                <div className="flex-1 relative leading-[46px] font-black inline-block min-w-[136px] m">
                  bydyoid
                </div>
                <div className="relative text-5xl leading-[46px] lowercase font-black inline-block min-w-[120px] ">
                  Webflow
                </div>
              </div>
              <div className="w-[85px] absolute !m-[0] top-[18px] right-[-2px] text-5xl leading-[36px] lowercase font-black flex items-center justify-center min-w-[85px] ">
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
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center py-0 px-[0px] box-border max-w-full text-center pb-[200px]">
          <div className="flex-1 flex flex-col items-center justify-center gap-3.5 max-w-full">

            <div className="w-full text-17xl leading-[36px] font-black ">
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
