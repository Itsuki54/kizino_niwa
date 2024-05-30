import Google from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import Github from "next-auth/providers/github";
function signInPage() {
  return (
    <div>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
    </div>
  );
}

export default signInPage;
