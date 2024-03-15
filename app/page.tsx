import Link from "next/link";
import type { NextPage } from "next";

const App: NextPage = () => (
  <>
    <Link href="/zh">中文</Link> / <Link href="/en">English</Link>
  </>
);

export default App;
