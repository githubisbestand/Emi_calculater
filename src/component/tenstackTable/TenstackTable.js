import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Table,
    Paper,
} from "@mui/material";

function MyTableComponent() {
    const [values, setValues] = useState([]);

    console.log("values === ", values);

    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor("id", {
            header: "Customer Id",
        }),
        columnHelper.accessor("name", {
            header: "Name",
        }),
        columnHelper.accessor("email", {
            header: "Email",
        }),
        columnHelper.accessor("phone", {
            header: "Mobile No",
        }),
        columnHelper.accessor("Refrence", {
            header: "Reference",
        }),
        columnHelper.accessor("current_address", {
            header: "Current Address",
        }),
        columnHelper.accessor("permanent_address", {
            header: "Permanent Address",
        }),
        columnHelper.accessor("create_at", {
            header: "Created At",
        }),
        columnHelper.accessor("update_at", {
            header: "Updated At",
        }),
    ];

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/v1/admin/getCustomer");
                console.log("response data", res.data);
                setValues(res.data);
            } catch (error) {
                console.log("error generated", error);
            }
        };
        getData();
    }, []);

    const table = useReactTable({
        data: values,
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableCell key={header.id}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody>
                        {table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default MyTableComponent;
