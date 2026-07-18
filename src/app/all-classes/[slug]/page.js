import { notFound } from "next/navigation";
import Navbar from "@/app/Common/Navbar/Navbar";
import Footer from "@/app/Common/Footer/Footer";
import { ClassDetail } from "@/app/sections/all-classes/Classes";
import { ALL_CLASSES, getClassBySlug } from "@/app/sections/all-classes/classesProducts";

export async function generateStaticParams() {
  return ALL_CLASSES.map((classItem) => ({ slug: classItem.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const classItem = getClassBySlug(slug);

  if (!classItem) {
    return { title: "Class Not Found | Hetafu" };
  }

  return {
    title: `${classItem.title} | Hetafu`,
    description: classItem.description,
  };
}

export default async function ClassPage({ params }) {
  const { slug } = await params;
  const classItem = getClassBySlug(slug);

  if (!classItem) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ClassDetail classItem={classItem} />
      <Footer />
    </>
  );
}
