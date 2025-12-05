import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const products = [
    {
        id: "564fghfgh5",
        name: "Snake Plant",
        category: "Indoor",
        price: 200,
        stock: 10,
    },

];

export default function TableDemo() {
    return (
        <div className="w-full">
            <div className="flex item-center gap-2 py-4">
                <div className="relative max-w--sm w-full">
                    
                </div>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Product ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Stock</TableHead>

                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {product.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell className="font-bol">{product.stock}</TableCell>


                            <TableCell className="text-right">
                                <div className="flex-justify-end space-x-4">
                                    <h1>Edit Button</h1>
                                    <h1>Delete Button</h1>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
