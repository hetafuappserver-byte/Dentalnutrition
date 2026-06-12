import Image from "next/image";
import Link from "next/link";
import {
  VIRTUAL_BUSINESS_CLASSES,
  getVirtualBusinessCardDescription,
  getVirtualBusinessHref,
} from "./virtualBusinessProducts";

export { VirtualBusinessDetail } from "./VirtualBusinessDetail";

function VirtualBusinessCard({ item }) {
  const href = item.href ?? getVirtualBusinessHref(item.slug);

  return (
    <article className="mo-summits__card">
      <div className="mo-summits__card-inner">
        <Link href={href} className="mo-summits__media">
          <Image
            src={item.image}
            alt={item.title}
            width={360}
            height={360}
            className="mo-summits__image"
          />
        </Link>

        <div className="mo-summits__info">
          <Link href={href} className="mo-summits__title">
            {item.title}
          </Link>

          <p
            className={`mo-summits__price${
              item.priceIsFree ? " mo-summits__price--free" : ""
            }`}
          >
            {item.price}
          </p>

          <p className="mo-summits__description">
            {getVirtualBusinessCardDescription(item)}
          </p>

          <div className="mo-summits__buttons">
            <Link href={href} className="mo-summits__view-more">
              {item.cta}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function VirtualBussinessClasses() {
  return (
    <main id="main" className="mo-summits">
      <section className="mo-summits__list" aria-label="Virtual Business Classes">
        {VIRTUAL_BUSINESS_CLASSES.map((item) => (
          <VirtualBusinessCard key={item.slug} item={item} />
        ))}
      </section>
    </main>
  );
}
