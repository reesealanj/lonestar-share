import { Fragment } from "react";
import { ForgotPasswordForm } from "@/components/forgot-password-form";

export default function ForgotPassword() {
  return (
    <Fragment>
      <div className="flex flex-col items-center">
        <ForgotPasswordForm />
      </div>
    </Fragment>
  );
}
