"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QUICK_SERVICES } from "@/data/home";

export default function QuickQuote() {
  const router = useRouter();
  const [service, setService] = useState(QUICK_SERVICES[0]);
  const [rego, setRego] = useState("KLM428");
  const [vehicle, setVehicle] = useState("Mazda 3 GSX");
  const [date, setDate] = useState("Mon 11 Aug");

  return (
    <div className="qq">
      <div className="qqhead">
        <h3>Quick quote &amp; service finder</h3>
        <span>Instant callback · usually within 30 min</span>
      </div>
      <div className="qqbody">
        <div className="fld">
          <label>Service</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            {QUICK_SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="fld">
          <label>Rego (optional)</label>
          <input
            className="plate"
            value={rego}
            maxLength={6}
            onChange={(e) => setRego(e.target.value)}
          />
        </div>
        <div className="fld">
          <label>Make &amp; model</label>
          <input
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          />
        </div>
        <div className="fld">
          <label>Preferred date</label>
          <input value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="fld">
          <label>&nbsp;</label>
          <button
            className="btn btn-p"
            onClick={() => router.push("/tyres")}
          >
            Get my price →
          </button>
        </div>
      </div>
    </div>
  );
}
