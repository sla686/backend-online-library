export default interface Book {
  isbn: string;
  title: string;
  description: string;
  publisher: string;
  authors: string;
  status: string;
  published_date: string;
  borrower_id?: number;
  borrow_date?: string;
  return_date?: string;
}
