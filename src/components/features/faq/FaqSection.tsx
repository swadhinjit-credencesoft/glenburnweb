"use client";

import { BookTopbar } from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHead from "@/components/ui/PageHead";
import FaqItem from "./FaqItem";
import { FAQ_GROUPS } from "@/data/faqs";
import { MAIN_NAV } from "@/data/navigation";

export default function FaqSection() {
  return (
    <>
      <BookTopbar />
      <SiteHeader nav={MAIN_NAV} active="FAQs" />

      <PageHead
        crumb="Home / FAQs"
        title="Questions West Auckland drivers actually ask"
      >
        Straight answers to the questions we get asked most — tyres, wheel
        alignments, punctures and suspension.
      </PageHead>

      <div className="sec">
        <div className="wrap">
          {FAQ_GROUPS.map((g) => (
            <div className="faqgroup" key={g.title}>
              <h3>{g.title}</h3>
              {g.items.map((item, i) => (
                <FaqItem key={item.q} item={item} defaultOpen={i === 0} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <SiteFooter variant="simple" />
    </>
  );
}
