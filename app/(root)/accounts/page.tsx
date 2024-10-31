"use client";
import Backdrop from "@/components/account/Backdrop";
import UserTable from "@/components/account/AccountsTable";
import BackdropParent from "@/components/shared/BackdropParent";
import Framer from "@/lib/Framer";
import { useState } from "react";
import { Plus, Search } from "lucide-react";
import AccountTitle from "@/components/account/AccountTitle";

export default function AccountsPage() {
  const [data, setData] = useState({});
  const [opened, setOpened] = useState(false);
  return (
    <Framer>
        <AccountTitle />
        <UserTable setOpened={setOpened} setData={setData} />
        <BackdropParent setOpened={setOpened} opened={opened}>
          <Backdrop opened={opened} data={data} />
        </BackdropParent>
    </Framer>
  );
}
