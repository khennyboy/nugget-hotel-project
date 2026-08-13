interface GuestFooterProps {
  rightText?: string;
}

export default function GuestFooter({
  rightText = "Birnin Kebbi · Lagos (opening) · Kaduna (opening)",
}: GuestFooterProps) {
  return (
    <div className="px-3 py-11 bg-ink text-sand text-[12.5px]">
      <div>
        © {new Date().getFullYear()} Nugget Continental Hotel &amp; Tours
      </div>
      <div>{rightText}</div>
    </div>
  );
}
