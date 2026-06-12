import Link from "next/link";

export const CLASS_TYPES_NAV = [
  { label: "Class Types", href: "/pages/class-types" },
  { label: "Academy on the Road", href: "/pages/academy-on-the-road" },
  { label: "Academy Certification Program", href: "/pages/academy-certification" },
  { label: "All", href: "/pages/all-classes" },
];

export default function ClassTypesNav({ activeLabel }) {
  return (
    <nav className="mo-class-types-nav" aria-label="Education categories">
      <div className="mo-class-types-nav__list">
        {CLASS_TYPES_NAV.map((item) => {
          const isActive = item.label === activeLabel;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`mo-class-types-nav__link${isActive ? " is-active" : ""}`}
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
