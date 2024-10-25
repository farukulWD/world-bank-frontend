import React, { FC } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// Define column type
type Column = {
    title: string;
    dataIndex: string;
    key: string;
    render?: (text: string, record: any, index: number) => React.ReactNode;
};

// data type
type DataSource = {
    [key: string]: any;
};

// Component type
type TableType = {
    columns: Column[];
    dataSource: DataSource[];
};

const GlobalAdminTable: FC<TableType> = ({ columns, dataSource }) => {
    return (
        <Table className="global_admin_table">
            <TableHeader>
                <TableRow className="border-none bg-primary hover:bg-primary">
                    {columns?.map((column) => (
                        <TableHead
                            key={column?.key}
                            className="text-nowrap py-3 text-white"
                        >
                            {column?.title}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody className="">
                {dataSource?.map((item, index) => (
                    <TableRow
                        key={index}
                        className="border border-gray-800 bg-white"
                    >
                        {columns?.map((column, i) => (
                            <TableCell
                                key={i}
                                className="border-b border-t font-medium text-slate-700 first:border-l last:border-r"
                            >
                                {column.render
                                    ? column.render(
                                          item[column.dataIndex],
                                          item,
                                          dataSource.indexOf(item),
                                      )
                                    : item[column.dataIndex]}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default GlobalAdminTable;
