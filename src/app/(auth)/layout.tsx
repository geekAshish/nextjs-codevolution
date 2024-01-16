"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function AuthLayout({ children }: { children: React.ReactNode }) {
  const authLink = [
    { name: "Login", link: "/login" },
    { name: "Register user", link: "/register-user" },
    { name: "Forgot Password", link: "/forgot-password" },
  ];
  const pathName = usePathname();
  return (
    <>
      <div>
        <h1>auth layout for login and register</h1>
        <div className="flex gap-5">        
        {authLink?.map((product, i) => {
            const isActive = pathName.startsWith(product?.link);
            return (
              <div key={i} className="p-1">
                <Link
                  href={product?.link}
                  className={isActive ? "font-bold text-pink-500" : ""}
                >
                  {product?.name}
                </Link>
              </div>
            );
          })}
          </div>
        {children}
      </div>
    </>
  );
}

export default AuthLayout;
