"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {useSearchParams, usePathname} from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2).max(50)
});



const Contact = () => {

  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        username: "",
        },
    });
    
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
      <>
      {modal &&
        <div className="bg-[#133853] w-[620px] h-[461px] rounded-[10px] fixed z-50 inset-56">
            <h1>Передзвонимо через 30 секунд</h1>
            <p>Залиште свій номер телефону і чекайте дзвінка</p>

            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>

        <Link href={pathname}>
          <button type="button" className="bg-red-500 text-white p-2">Close Modal</button>
        </Link>
      </form>
      </Form>

        </div>
          }
          </>
     );
};
 
export default Contact;