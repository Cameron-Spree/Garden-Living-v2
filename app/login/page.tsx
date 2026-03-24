"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Login failed");
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-surface-container p-10 rounded-3xl shadow-lg border border-outline-variant/10">
        <div>
          <h2 className="mt-2 text-center text-display-lg font-headline font-bold text-primary">Login</h2>
          <p className="mt-2 text-center text-sm text-on-surface-variant font-body mb-8">
            Access your botanical communities
          </p>
        </div>
        <form className="mt-8 space-y-6 flex flex-col gap-4" onSubmit={handleLogin}>
          {error && <div className="text-error bg-error-container p-3 rounded-lg text-sm text-center">{error}</div>}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input name="email" type="email" required className="appearance-none rounded-t-xl relative block w-full px-4 py-3 border border-outline-variant bg-surface text-on-surface focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <input name="password" type="password" required className="appearance-none rounded-b-xl relative block w-full px-4 py-3 border border-outline-variant bg-surface text-on-surface focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-full text-on-primary bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
              Sign in
            </button>
          </div>
          <div className="text-center mt-4 flex flex-col gap-2">
            <div>
              <span className="text-sm text-on-surface-variant">Don't have an account? </span>
              <Link href="/register" className="font-bold text-secondary hover:text-secondary/80">Register here</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
