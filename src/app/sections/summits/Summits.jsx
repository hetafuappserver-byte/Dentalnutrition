import Image from "next/image";
import Link from "next/link";
import { SUMMITS, getSummitHref } from "./summitsProducts";

export { SummitDetail } from "./SummitDetail";

const SUMMIT_VIEW_MORE =
  "inline-flex items-center justify-center border-0 bg-[#401e17] px-10 py-[0.6875rem] [font-family:var(--heading-font)] text-xs font-semibold tracking-[0.12em] uppercase text-white no-underline leading-[1.2] hover:opacity-90";

function SummitCard({ summit }) {
  const href = summit.href ?? getSummitHref(summit.slug);

  return (
    <article className="mx-auto w-full max-w-[900px]">
      <div className="flex w-full flex-col items-center gap-6 text-center max-[700px]:mx-3 min-[701px]:flex-row min-[701px]:items-start min-[701px]:gap-8 min-[701px]:text-left min-[750px]:gap-8">
        <Link href={href} className="block shrink-0 leading-none min-[701px]:basis-[360px]">
          <Image
            src={summit.image}
            alt={summit.title}
            width={360}
            height={360}
            className="block h-[360px] w-[360px] max-w-full rounded-full object-cover min-[360px]:max-w-[360px]"
          />
        </Link>

        <div className="flex w-full min-w-0 flex-1 flex-col items-center gap-2 min-[701px]:items-start min-[701px]:text-left">
          <Link
            href={href}
            className="mb-1 block w-full [font-family:var(--heading-font)] text-[1.375rem] font-semibold leading-[1.2] text-[#401e17] no-underline hover:opacity-75 min-[701px]:text-[1.75rem]"
          >
            {summit.title}
          </Link>

          <p className="m-0 mb-2 [font-family:var(--heading-font)] text-2xl font-bold leading-[1.2] text-[#401e17]">
            {summit.price}
          </p>

          <p className="m-0 w-full max-w-[90%] whitespace-pre-line text-base leading-normal text-[#333] min-[701px]:max-w-none min-[701px]:self-start min-[701px]:pr-[20%] min-[701px]:text-left">
            {summit.description}
          </p>

          <div className="mt-5 flex w-full flex-wrap items-center justify-center gap-4 gap-x-12 min-[701px]:justify-start">
            <Link href={href} className={SUMMIT_VIEW_MORE}>
              View More Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Summits() {
  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      <section
        className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-4 py-6 pb-16 min-[700px]:gap-12 min-[700px]:px-8 min-[700px]:py-10 min-[700px]:pb-20 min-[750px]:px-[15%]"
        aria-label="Summits"
      >
        {SUMMITS.map((summit) => (
          <SummitCard key={summit.slug} summit={summit} />
        ))}
      </section>
    </main>
  );
}
