import { ReactNode } from "react";

export default function PageHead({
  crumb,
  title,
  children,
}: {
  crumb: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="pagehead">
      <div className="wrap">
        <div className="crumb">{crumb}</div>
        <h1>{title}</h1>
        {children && <div className="vh">{children}</div>}
      </div>
    </div>
  );
}
