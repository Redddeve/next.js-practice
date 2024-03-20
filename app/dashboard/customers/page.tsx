import { Metadata } from 'next';
import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customers',
};

export interface PageProps {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}
