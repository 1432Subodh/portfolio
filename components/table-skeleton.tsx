import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"

export function TableSkeleton() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">
            <Skeleton className="h-4 w-[80px]" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-4 w-[150px]" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-4 w-[100px]" />
          </TableHead>
          <TableHead className="text-right">
            <Skeleton className="h-4 w-[80px] ml-auto" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...Array(5)].map((_, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">
              <Skeleton className="h-4 w-[80px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[150px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[100px]" />
            </TableCell>
            <TableCell className="text-right">
              <Skeleton className="h-4 w-[80px] ml-auto" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

