import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import {
  ALL_CLASSES,
  ALL_CLASSES_COLLECTION,
  getClassCardPrice,
} from "@/app/sections/all-classes/classesProducts";

const BTN =
  "inline-flex min-w-[200px] items-center justify-center self-start border border-current bg-transparent px-6 py-[0.85rem] [font-family:var(--body-font)] text-[0.9375rem] font-bold tracking-[0.18em] uppercase transition-[color,background] duration-200 hover:text-[#401e17]";

function ClassCard({ classItem }) {
  const href = `/pages/all-classes/${classItem.slug}`;
  const cardPrice = getClassCardPrice(classItem);

  return (
    <article className="flex flex-col gap-6 min-[768px]:flex-row min-[768px]:items-start min-[768px]:gap-8">
      <Link href={href} className="block shrink-0 min-[768px]:basis-[360px]">
        <Image src={classItem.image} alt={classItem.title} width={360} height={360} className="block h-[360px] w-[360px] max-w-full rounded-full object-cover" />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col items-start gap-3">
        <Link href={href} className="[font-family:var(--heading-font)] text-[clamp(1.375rem,2.2vw,1.75rem)] font-bold leading-[1.2] text-inherit no-underline hover:opacity-75">{classItem.title}</Link>
        {classItem.locationLine && <p className="m-0 text-base text-[#555]">{classItem.locationLine}</p>}
        {cardPrice && <p className="m-0 [font-family:var(--heading-font)] text-base opacity-85">{cardPrice}</p>}
        <p className="m-0 max-w-[90%] self-center text-center leading-[1.65] min-[768px]:max-w-xl min-[768px]:self-start min-[768px]:text-left">{classItem.description}</p>
        <div className="mt-2 flex w-full flex-wrap items-center justify-center gap-6 gap-x-12 min-[768px]:justify-start">
          {classItem.quickBuySoldOut && <button type="button" disabled className="cursor-not-allowed border-2 border-[#401e17] bg-white px-10 py-[0.65rem] [font-family:var(--heading-font)] text-xs tracking-[0.12em] uppercase text-[#401e17]">Sold Out</button>}
          <Link href={href} className="[font-family:var(--heading-font)] text-xs tracking-[0.12em] uppercase text-[#401e17] underline hover:opacity-75">View More Details</Link>
        </div>
      </div>
    </article>
  );
}


export const metadata = {
  title: `${ALL_CLASSES_COLLECTION.title} | Hetafu`,
  description: ALL_CLASSES_COLLECTION.description,
};

export default function AllClassesPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
        <nav className="border-b border-[rgba(64,30,23,0.12)] bg-white" aria-label="All classes navigation">
          <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-5 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.18em] md:px-8">
            <Link href="/" className="text-inherit no-underline">Home</Link>
            <span>/</span>
            <span>All Classes</span>
          </div>
        </nav>

        <section className="mx-auto max-w-[1200px] px-5 py-10 md:px-8 md:py-14">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2" role="tablist">
              <a href="#all-classes-grid" className="mb-[-1px] border-b-2 border-[#401e17] bg-transparent px-0 py-3 [font-family:var(--heading-font)] text-sm tracking-[0.12em] uppercase text-inherit">All</a>
              <a href="#all-classes-grid" className="mb-[-1px] border-b-2 border-transparent bg-transparent px-0 py-3 [font-family:var(--heading-font)] text-sm tracking-[0.12em] uppercase text-inherit opacity-55">Cutting</a>
              <a href="#all-classes-grid" className="mb-[-1px] border-b-2 border-transparent bg-transparent px-0 py-3 [font-family:var(--heading-font)] text-sm tracking-[0.12em] uppercase text-inherit opacity-55">Color</a>
            </div>
            <a href="#all-classes-grid" className={BTN}>Filters</a>
          </div>

          <div id="all-classes-grid" className="flex flex-col gap-8">
            {ALL_CLASSES.map((classItem) => (
              <ClassCard key={classItem.slug} classItem={classItem} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
