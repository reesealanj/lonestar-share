import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Drive Home</h1>
        <Link href="/log-in">
          <h2 className="pointer-cursor">Log In</h2>
        </Link>
      </div>
    </Fragment>
  );
}
