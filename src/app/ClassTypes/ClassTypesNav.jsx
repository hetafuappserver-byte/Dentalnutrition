import Link from "next/link";

export const CLASS_TYPES_NAV = [
  { label: "Class Types", href: "/pages/class-types" },
  { label: "Academy on the Road", href: "/pages/academy-on-the-road" },
  { label: "Academy Certification Program", href: "/pages/academy-certification" },
  { label: "All", href: "/pages/all-classes" },
];

const NAV_LINK =
  "px-4 py-3 text-sm tracking-[0.08em] uppercase no-underline text-inherit hover:bg-[rgba(64,30,23,0.8)] hover:text-white max-md:w-full max-md:text-left";

export default function ClassTypesNav({ activeLabel }) {
  return (
    <nav
      className="mx-[1%] my-[2%] border-b-2 border-[#401e17] p-2.5 max-md:border-b-0"
      aria-label="Education categories"
    >
      <div className="flex flex-wrap gap-2 max-md:w-full max-md:flex-col">
        {CLASS_TYPES_NAV.map((item) => {
          const isActive = item.label === activeLabel;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`${NAV_LINK}${isActive ? " bg-[#401e17] text-white" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
