import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const LoadTable = () => {
    return (
        <Table className="custom_table">
            <TableHeader>
                <TableRow className="border-none bg-white hover:bg-white">
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow className="border bg-white hover:bg-white">
                    <TableCell className="py-4 font-medium">INV001</TableCell>
                    <TableCell className="py-4">Paid</TableCell>
                    <TableCell className="py-4">Credit Card</TableCell>
                    <TableCell className="py-4 text-right">$250.00</TableCell>
                </TableRow>
                <TableRow className="border bg-white hover:bg-white">
                    <TableCell className="py-4 font-medium">INV001</TableCell>
                    <TableCell className="py-4">Paid</TableCell>
                    <TableCell className="py-4">Credit Card</TableCell>
                    <TableCell className="py-4 text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default LoadTable;
