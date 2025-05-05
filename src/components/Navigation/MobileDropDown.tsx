import { motion } from "motion/react";
import { NavigationLink } from "../../utils/contentTypes";

interface MobileDropDownProps {
  links: NavigationLink[] | undefined;
}

export default function MobileDropDown({ links }: MobileDropDownProps) {
  return (
    <motion.ul
    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: 'easeInOut' }} className="z-10 flex flex-col gap-y-6 overflow-hidden pl-3">
      {links?.map((link) => (
        <li key={link.id} className="text-grey-600">
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </motion.ul>
  );
}
