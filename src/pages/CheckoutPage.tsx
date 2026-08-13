import { Link } from "react-router-dom";
import { checkoutSummary } from "../mock/data";

export default function CheckoutPage() {
  return (
    <div className="bg-paper min-h-screen">
      <div className="flex items-center justify-between px-14 py-5 bg-ink text-sand">
        <Link to="/" className="font-display text-xl font-semibold">
          Nugget <span className="text-brassLight">Continental</span>
        </Link>
        <div className="text-[12.5px] text-[#C9CBDA]">Secure checkout</div>
      </div>

      <div className="max-w-[1080px] mx-auto px-8 py-[70px] grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-11">
        <div>
          <div className="flex items-center gap-2.5 mb-9">
            <div className="w-[26px] h-[26px] rounded-full bg-brass text-[#241704] font-mono text-xs font-semibold flex items-center justify-center">1</div>
            <div className="flex-1 h-px bg-line" />
            <div className="w-[26px] h-[26px] rounded-full bg-sand2 text-textMute font-mono text-xs font-semibold flex items-center justify-center">2</div>
            <div className="flex-1 h-px bg-line" />
            <div className="w-[26px] h-[26px] rounded-full bg-sand2 text-textMute font-mono text-xs font-semibold flex items-center justify-center">3</div>
          </div>

          <div className="mb-8">
            <h3 className="font-display text-[19px] mb-4">Your details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <input className="border border-line rounded-lg px-3.5 py-3 text-[13.5px] bg-white focus:outline-none focus:border-brass" placeholder="Full name" />
              <input className="border border-line rounded-lg px-3.5 py-3 text-[13.5px] bg-white focus:outline-none focus:border-brass" placeholder="Phone number" />
              <input className="border border-line rounded-lg px-3.5 py-3 text-[13.5px] bg-white md:col-span-2 focus:outline-none focus:border-brass" placeholder="Email address" />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-display text-[19px] mb-4">Stay dates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <input className="border border-line rounded-lg px-3.5 py-3 text-[13.5px] bg-white" defaultValue="Check in — 14 Aug 2026" />
              <input className="border border-line rounded-lg px-3.5 py-3 text-[13.5px] bg-white" defaultValue="Check out — 17 Aug 2026" />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-display text-[19px] mb-4">Payment method</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <button className="border-2 border-brass rounded-lg px-3.5 py-3 text-[13.5px] font-semibold text-center bg-white">
                Card / Paystack
              </button>
              <button className="border border-line rounded-lg px-3.5 py-3 text-[13.5px] text-textMute text-center bg-white">
                Bank transfer
              </button>
            </div>
          </div>

          <button className="w-full bg-brass text-[#241704] rounded-md font-semibold text-sm py-4 hover:bg-brassLight transition-colors">
            Pay {checkoutSummary.total} and confirm booking
          </button>
        </div>

        <div className="bg-white border border-line rounded-card p-6 h-fit">
          <h4 className="font-display text-lg mb-4.5">{checkoutSummary.roomName}</h4>
          {checkoutSummary.lineItems.map((item) => (
            <div key={item.label} className="flex justify-between text-[13px] py-2.5 border-b border-dashed border-line">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
          <div className="flex justify-between pt-4 font-mono text-[17px] font-semibold">
            <span>Total due</span>
            <span>{checkoutSummary.total}</span>
          </div>
          <div className="flex gap-2 mt-4">
            {["Paystack", "Flutterwave", "USSD"].map((p) => (
              <div key={p} className="border border-line rounded-md px-2.5 py-1.5 text-[10.5px] font-mono text-textMute">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
