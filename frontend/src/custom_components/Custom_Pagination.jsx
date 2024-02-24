import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
export function Custom_Pagination({ total_pages, current_page, setPage }) {
    

  const paginationItems = [];

  for (let i = 1; i <= total_pages; i++) {
    paginationItems.push(
      <PaginationItem key={i}>
        <PaginationLink
          href="#"
          isActive={current_page === i}
          onClick={() => setPage(i)}
        >
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }

    return (
      <Pagination>
        <PaginationContent>
          <PaginationPrevious
            href="#"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </PaginationPrevious>
          {paginationItems}
          <PaginationNext
            href="#"
            onClick={() => setPage((prev) => Math.min(prev + 1, total_pages))}
          >
            Next
          </PaginationNext>
        </PaginationContent>
      </Pagination>
    )
  }
  