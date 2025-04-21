import { services } from "../../utils/content";
import { type Service as IService } from "../../utils/contentTypes";
import Service from "./Service";
const customizedPackage: IService = services.at(0)!;
const culinaryTours: IService = services.at(1)!;
const destinationExpertise: IService = services.at(2)!;

export default function Services() {
  return (
    <section className="bg-primary-100 px-45.5 py-36">
      <ul className="m-auto flex max-w-389 justify-between border-y-1 border-gray-500/40 py-24">
        <Service service={customizedPackage} />
        <li
          className="bg-grey-500/40 block w-0.25 self-stretch"
          aria-label="a grey divider element"
        />
        <Service service={culinaryTours} />
        <li
          className="bg-grey-500/40 block w-0.25 self-stretch"
          aria-label="a grey divider element"
        />
        <Service service={destinationExpertise} />
      </ul>
    </section>
  );
}
