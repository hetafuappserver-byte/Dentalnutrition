import Image from "next/image";
import Link from "next/link";
import { SUMMITS, getSummitHref } from "./summitsProducts";

export { SummitDetail } from "./SummitDetail";

function SummitCard({ summit }) {
  const href = summit.href ?? getSummitHref(summit.slug);

  return (
    <article className="mo-summits__card">
      <div className="mo-summits__card-inner">
        <Link href={href} className="mo-summits__media">
          <Image
            src={summit.image}
            alt={summit.title}
            width={360}
            height={360}
            className="mo-summits__image"
          />
        </Link>

        <div className="mo-summits__info">
          <Link href={href} className="mo-summits__title">
            {summit.title}
          </Link>

          <p className="mo-summits__price">{summit.price}</p>

          <p className="mo-summits__description">{summit.description}</p>

          <div className="mo-summits__buttons">
            <Link href={href} className="mo-summits__view-more">
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
    <main id="main" className="mo-summits">
      <section className="mo-summits__list" aria-label="Summits">
        {SUMMITS.map((summit) => (
          <SummitCard key={summit.slug} summit={summit} />
        ))}
      </section>
    </main>
  );
}
