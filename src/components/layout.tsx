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
      <main>{children}</main>
    </>
  );
}
