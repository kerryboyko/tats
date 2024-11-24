import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export default async function checkAuth(redirectOnFailedLogin = "/login") {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect(redirectOnFailedLogin);
  }
  return data;
}
