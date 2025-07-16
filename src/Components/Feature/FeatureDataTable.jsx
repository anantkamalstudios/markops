import React from "react";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

const FeatureDataTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "#",
        header: "#",
        cell: (info) => <span>{info.row.index + 1}</span>,
      },
      {
        accessorKey: "page",
        header: "Page",
        cell: ({ row }) => (
          <div className="d-flex align-items-center gap-2">
            <img
              src={row.original.page.logo}
              alt="logo"
              width={32}
              height={32}
              className="rounded-circle"
            />
            <div>
              <div className="fw-semibold">{row.original.page.title}</div>
              <small className="text-muted">{row.original.page.time}</small>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "likes",
        header: "Likes",
      },
      {
        accessorKey: "popularity",
        header: "Popularity",
      },
      {
        accessorKey: "ads",
        header: "Ads",
      },
      {
        accessorKey: "top_country",
        header: "Top Country",
        cell: ({ getValue }) => {
          const flags = getValue(); // array of URLs
          return (
            <div className="d-flex gap-1">
              {flags.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Flag ${i}`}
                  width={18}
                  height={12}
                  style={{ borderRadius: "2px", objectFit: "cover" }}
                />
              ))}
            </div>
          );
        },
      },
      {
        accessorKey: "latest_ads",
        header: "Latest Ads",
        cell: ({ getValue }) => (
          <span className="text-muted">{getValue()}</span>
        ),
      },
      {
        accessorKey: "day_treads",
        header: "Trend",
        cell: ({ getValue }) => (
          <canvas
            width="206"
            height="66"
            style={{ backgroundColor: "#f0f0f0", borderRadius: "4px" }}
          ></canvas>
        ),
      },
      {
        accessorKey: "promoted_product",
        header: "Promoted Product",
        cell: ({ row }) => (
          <div className="d-flex align-items-center gap-2">
            <img
              src={row.original.promoted_product.logo}
              alt="prod"
              width={24}
              height={24}
              className="rounded"
            />
            <span>{row.original.promoted_product.title}</span>
          </div>
        ),
      },
      {
        accessorKey: "subscribe",
        header: "Subscribe",
        cell: () => <i className="bi bi-star-fill text-warning"></i>,
      },
    ],
    []
  );

  const [sorting, setSorting] = React.useState([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="my-2">
      <div className="table-responsive rounded shadow-lg">
        <table className="table table-bordered m-0 p-0">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    style={{ cursor: "pointer" }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() === "asc" ? " 🔼" : ""}
                    {header.column.getIsSorted() === "desc" ? " 🔽" : ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureDataTable;
