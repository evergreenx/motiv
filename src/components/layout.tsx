import { NavBar, Sidebar } from ".";
import Head from "next/head";

type LayoutProps = {
  title: string;
  children?: React.ReactNode;
};
export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <NavBar />

      <Sidebar />

      <main className="bg-[#F5F5F5] absolute w-full lg:pl-64 p-5 my-20 z-20 ">{children}</main>
    </>
  );
}
