import RequireLogin from "@/components/requireLogin";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RequireLogin>{children}</RequireLogin>;
}
