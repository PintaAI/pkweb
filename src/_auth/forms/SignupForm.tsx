import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignupValidation } from "@/lib/validation"
import { z } from "zod"
import Loader from "@/components/shared/loader"
import { createUserAccount } from "@/lib/appwrite/api"

const SignupForm = () => {
  const isloading = false
    // 1. Define your form.
    const form = useForm<z.infer<typeof SignupValidation>>({
      resolver: zodResolver(SignupValidation),
      defaultValues: {
        name: '',
        username: '',
        email: '',
        password: '',
      },
    })
   
    // 2. Define a submit handler.// 2. Define a submit handler.
async function onSubmit(values: z.infer<typeof SignupValidation>) {
  try {
    // buat akun baru
    const newUser = await createUserAccount(values);
    console.log(newUser);
  } catch (error) {
    console.error("Failed to create user account:", error);
    // Optionally update the UI to show an error message
  }
}
  return (
    
      <Form {...form}>
        <div className="sm:w-420 flex-center flex-col p-6 rounded-lg shadow-lg border-2 border-gray-500">
          <img src="/assets/images/logo.svg" alt="logo"/>
          <h2 className="h3-bold md:h2-bold pt-5 sm-pt-12">
            Create your account
          </h2>
          <p className="text-light-3 small-medium md:base-regular">
            isi detail di bawah gais
          </p>
        
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input type="text" className="shad-input" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    
                  )}
                />
                                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input type="text" className="shad-input" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    
                  )}
                />
                                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input type="email" className="shad-input" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    
                  )}
                />
                                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" className="shad-input" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    
                  )}
                />
                <Button type="submit" variant={"outline"} className="shad-button_primary">
                  {isloading ? (
                                <div className="flex-center gap-2">
                                  <Loader/>
                                </div>
                              ): "Sign-up"
                  }
                </Button>
                <p className="test-small-regular text-light-2 text-center mt-2">
                  Already have an account?
                  <Link to="/login" className="text-primary-500 text-small-semibold ml-2">Sign in</Link>
                </p>
              </form>
          </div>
          </Form>
      
  )
}

export default SignupForm