"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/RaFKwllkZjN
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function ForgotPasswordForm() {
  const router = useRouter();

  const handleSubmitForgotPassword = () => {
    console.log("submitted");
  };

  const handleReturnToLogin = () => {
    router.push("/log-in");
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Forgot Password</CardTitle>
        <CardDescription>
          Enter your email below to get instructions to reset the password to
          your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <Button
            className="w-full"
            type="submit"
            onClick={handleSubmitForgotPassword}
          >
            Forgot Password
          </Button>
          <Button
            className="w-full"
            variant="outline"
            onClick={handleReturnToLogin}
          >
            Return to Login
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?
          <Link className="underline" href="#">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
