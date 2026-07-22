"use client";

import Image from "next/image";
import Link from "next/link";
import { CollectionBreadcrumb } from "../CollectionBreadcrumb";
import { ProductDetail } from "../ProductDetail";
import { BITS_COLLECTION, BITS_PRODUCTS } from "./bitsProducts";
import { getProductHref } from "../productRoutes";

export { ProductDetail };

export default function Bits() {
  return (
    <main id="main" className="bg-[#fcfcfc] text-[#401e17]">
      <div className="px-5 pt-6 md:px-8 md:pt-6">
        <CollectionBreadcrumb title={BITS_COLLECTION.title} />
      </div>

      <section className="max-w-[1200px] mx-auto pt-6 px-5 pb-6 text-center md:pt-14 md:px-8 md:pb-8" aria-label="Collection">
        <h1 className="font-[Instrument_Sans,sans-serif] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[0.05em] capitalize m-0 mb-4">
          {BITS_COLLECTION.title}
        </h1>
        <p className="text-base sm:text-lg max-w-[560px] mx-auto leading-[1.6] m-0">
          {BITS_COLLECTION.description}
        </p>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 pb-12 md:px-8 md:pb-16" aria-label="Products">
        <div className="flex justify-end py-3 pb-6 border-t border-black/[0.08]">
          <p className="m-0 text-sm tracking-[0.04em] opacity-65 lowercase">
            {BITS_PRODUCTS.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 max-w-[1200px] mx-auto md:grid-cols-4 md:gap-6">
          {BITS_PRODUCTS.map((product) => (
            <Link key={product.slug} href={getProductHref("bits", product.slug)} className="text-center">
              <div className="aspect-square bg-[#f3f3f3] mb-3 overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-contain">
                <Image src={product.image} alt={product.title} width={600} height={600} />
              </div>
              <p className="text-sm sm:text-base capitalize tracking-[0.02em]">{product.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}