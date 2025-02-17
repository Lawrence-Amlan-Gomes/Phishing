"use client";

import EachWorkName from "./EachWorkName";

export default function WorkList({works, setHoveredId}) {
  return (
    <div className="w-full max-h-full overflow-y-auto overflow-x-hidden scrollbar-none scrollbar-track-gray-300">
      {works.map((work) => (
        <EachWorkName key={work.id} work={work} setHoveredId={setHoveredId} />
      ))}
    </div>
  );
}
