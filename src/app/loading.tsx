export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-16 sm:px-6 lg:px-8">
      <div className="ui-skeleton h-6 w-40 rounded-full" />
      <div className="ui-skeleton h-12 w-full max-w-2xl rounded-xl" />
      <div className="ui-skeleton h-24 w-full max-w-xl rounded-xl" />
      <div className="flex flex-wrap gap-3">
        <div className="ui-skeleton h-12 w-44 rounded-full" />
        <div className="ui-skeleton h-12 w-40 rounded-full" />
      </div>
      <div className="grid gap-4 pt-8 md:grid-cols-2">
        <div className="ui-skeleton h-64 w-full rounded-3xl" />
        <div className="ui-skeleton h-64 w-full rounded-3xl" />
      </div>
    </div>
  );
}

