import { ReactNode } from "react";

export default function PhotoHero({
  image,
  veilStyle,
  wrapStyle,
  eyebrow,
  title,
  sub,
  children,
}: {
  image: string;
  veilStyle?: React.CSSProperties;
  wrapStyle?: React.CSSProperties;
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  children?: ReactNode;
}) {
  return (
    <div className="phero">
      <div className="bg" style={{ backgroundImage: `url(${image})` }} />
      <div className="veil" style={veilStyle} />
      <div className="wrap" style={wrapStyle}>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {sub && <p className="sub">{sub}</p>}
        {children}
      </div>
    </div>
  );
}
