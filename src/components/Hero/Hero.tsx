import { heroBenefits } from "../../utils/content";
import HeroBenefit from "./HeroBenefit";

export default function Hero() {
  return (
    <section className="relative m-auto max-w-[100rem]">
      <div className="relative flex items-center justify-center rounded-[2.25rem] bg-[url('/hero.webp')] bg-cover bg-bottom pb-[56.25%]">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center text-center">
          <div>
            <h1 className="mb-4 pt-54 text-[6.5rem]/34 font-semibold text-white">
              Start Your Memorable <br /> Journey Here
            </h1>
            <p className="text-[1.75rem]/10.5 font-medium text-white drop-shadow-[0px_4px_20px_#0000001F]">
              Where unforgettable adventures await you.
            </p>
          </div>
        </div>
        {/* Benefits Part */}
        <ul className="absolute -bottom-23 px-16 py-18 flex items-center gap-x-24.25 bg-white rounded-[1.5rem] mx-21.5 drop-shadow-[0px_2px_40px_#0000000F]">
          {heroBenefits.map((benefit) => (
            <HeroBenefit benefit={benefit} />
          ))}
        </ul>
      </div>
    </section>
  );
}
