"use client";
import { useState } from "react";
import SelectProductAmount from "../single-product/SelectProductAmount";
import { Mode } from "../single-product/SelectProductAmount";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { removeCartItemAction, updateCartItemAction } from "@/utils/actions";

import toast from "react-hot-toast";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

function ThirdColumn({ quantity, id }: { quantity: number; id: string }) {
  const [amount, setAmount] = useState(quantity);

  const [isLoading, setIsLoading] = useState(false);
  //   const { toast } = useToast();
  const handleAmountChange = async (value: number) => {
    setIsLoading(true);
    console.log("Showing toast: Calculating..."); // Debugging line
    toast("Calculating...");

    try {
      const result = await updateCartItemAction({
        amount: value,
        cartItemId: id,
      });
      console.log("Result:", result); // Debugging line
      toast(result.message || "Updated successfully");
    } catch (error) {
      console.error("Error updating cart item:", error); // Debugging line
      toast.error("An error occurred while updating the cart.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="md:ml-8">
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={isLoading}
      />
      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton size="sm" className="mt-4" text="remove" />
      </FormContainer>
    </div>
  );
}
export default ThirdColumn;
