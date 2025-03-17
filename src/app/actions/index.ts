"use server";

import { signIn, signOut } from "@/auth";

type SocialLoginAction = "github";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action");
  await signIn(action as SocialLoginAction, { redirectTo: "/home" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
