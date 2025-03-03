import { PageHeader } from "@/components/shared/page-header";
import { CustomerProvider } from "@/context/customer-context";
import { CustomersContent } from "./_components/customers-content";

export default function CustomersPage() {
  return (
    <CustomerProvider>
      <div className="px-8">
        <PageHeader
          title="Clientes cadastrados"
          description="Gerencie todos os clientes cadastrados no sistema."
        />

        <CustomersContent />
      </div>
    </CustomerProvider>
  )
}
