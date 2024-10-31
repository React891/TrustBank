'use client'
import Input from "@/components/shared/Input";
import { useState } from "react";

export default function Base() {
  const [values, setValues] = useState({
    accountNumber: "",
  });
  const [errors, setErrors] = useState({
    accountNumber: "",
  });

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="text-white">
      <Input
        error={errors.accountNumber}
        value={values.accountNumber}
        label="Account Number"
        onChange={onChange}
        name="accountNumber"
      />
    </div>
  );
}
