"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function successLogin(path: string, token: string) {
    // cookies().set("Authorization", `Bearer ${token}`)
    redirect(path)
}

export async function successLogout(){
    cookies().delete("Authorization")
    redirect("/")
}

export async function getCookies() {
    return cookies()
}