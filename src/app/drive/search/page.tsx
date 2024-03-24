import { Fragment } from "react";

export default function DriveSearch({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams.q as string;
  const decodedQuery = query ? decodeURIComponent(query) : undefined;

  return (
    <Fragment>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Drive Search</h1>
      </div>
      {decodedQuery ? <p>Search Query: {query}</p> : <p>No Results...</p>}
    </Fragment>
  );
}
