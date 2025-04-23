import { testimonials } from "../../utils/content";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  return (
    <section className="px-45.5 py-36">
      <div className="m-auto max-w-389">
        <h2 className="mb-22 text-center text-[3.875rem] font-semibold">
          What Our Vacationers Says
        </h2>
        <ul className="flex gap-x-20">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </ul>
      </div>
    </section>
  );
}
