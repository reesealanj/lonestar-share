import { SignUpForm } from "@/components/sign-up-form";
import { Fragment } from "react";

export default function SignUp() {
  return (
    <Fragment>
      <div className="flex flex-col items-center">
        <SignUpForm />
      </div>
    </Fragment>
  );
}
