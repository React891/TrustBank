import TransactionDetail from "@/components/transaction/TransactionDetail";
import Framer from "@/lib/Framer";
import { Pencil, Trash } from "lucide-react";

type Params = {
  params: {
    id: string;
  };
};

export default function page({ params }: Params) {
  return (
    <Framer>
      <div className="p-2 sm:p-4 p-6">
        <TransactionDetail />
      </div>
    </Framer>
  );
}
