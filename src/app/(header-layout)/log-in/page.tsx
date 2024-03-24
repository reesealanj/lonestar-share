import { LoginForm } from "@/components/login-form";
import { Fragment } from "react";

export default function LogIn() {
  return (
    <Fragment>
      <div className="flex flex-col items-center">
        <LoginForm />
      </div>
    </Fragment>
  );
}
