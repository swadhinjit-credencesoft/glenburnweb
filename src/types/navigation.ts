export interface ProtoTab {
  id: string;
  num: string;
  label: string;
  href: string;
}

export interface NavChild {
  label: string;
  href: string;
  desc?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}
