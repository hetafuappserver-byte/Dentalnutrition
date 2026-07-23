"use client";

import Image from "next/image";
import Link from "next/link";
import { CollectionBreadcrumb } from "../CollectionBreadcrumb";
import { ProductDetail } from "../ProductDetail";
import { MOUTHWASH_COLLECTION, MOUTHWASH_PRODUCTS } from "./mouthwashProducts";
import { getProductHref } from "../productRoutes";

export { ProductDetail };

export default function Mouthwash() {
  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">

      <section className="max-w-[680px] mx-auto pt-6 px-5 pb-6 text-center md:pt-14 md:px-8 md:pb-8" aria-label="Collection">
        <h1 className="font-[Instrument_Sans,sans-serif] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize m-0 mb-4">
          {MOUTHWASH_COLLECTION.title}
        </h1>
        <p className="text-base sm:text-lg max-w-[560px] mx-auto leading-[1.6] m-0">
          CUTE Mouthwash Edible Probiotic Mouthwash. Edible, pH-neutral mouthwash gentle enough for kids, effective for all.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10 md:px-8 md:py-14">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 min-[700px]:grid-cols-2 [&>:last-child:only-child]:min-[700px]:col-span-2 [&>:last-child:only-child]:min-[700px]:justify-self-center [&>:last-child:only-child]:min-[700px]:max-w-[50%]">
            {MOUTHWASH_PRODUCTS.map((product) => (
              <Link key={product.slug} href={getProductHref("mouthwash", product.slug)} className="group relative block min-h-[320px] overflow-hidden">
                <Image src={product.image} alt={product.title} width={1000} height={1000} className="!h-full !min-h-[320px] !w-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.03]" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/[0.3]">
                  <span className="border-2 border-white px-8 py-3 uppercase tracking-[0.12em] text-white font-medium transition-all duration-300 hover:bg-white hover:text-[#401e17] text-center">{product.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
    </main>
  );
}