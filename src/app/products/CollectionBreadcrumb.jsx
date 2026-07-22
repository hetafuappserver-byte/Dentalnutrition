import Link from "next/link";

export function CollectionBreadcrumb({ title }) {
  return (
    <nav className="font-bold" aria-label="Breadcrumb">
      <ol className="flex flex-wrap justify-start gap-x-2 gap-y-[0.35rem] list-none m-0 p-0 text-xs tracking-[0.12em] uppercase opacity-65 [&>li:not(:last-child)]:after:content-['/'] [&>li:not(:last-child)]:after:ml-2 [&>li:not(:last-child)]:after:opacity-50">
        <li>
          <Link href="/" className="no-underline text-inherit hover:opacity-80">
            Home
          </Link>
        </li>
        <li aria-current="page">{title}</li>
      </ol>
    </nav>
  );
}
