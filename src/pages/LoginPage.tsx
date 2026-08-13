export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ink">
      <div className="w-[380px] bg-paper rounded-2xl px-9 py-10">
        <div className="font-display text-xl font-semibold text-center mb-1.5">
          Nugget <span className="text-brass">Continental</span>
        </div>
        <div className="text-center text-[12.5px] text-textMute mb-7">
          Staff sign in · Birnin Kebbi branch
        </div>

        {/* Wire up to POST /auth/login */}
        <div className="mb-4">
          <label className="block text-xs font-semibold mb-1.5">Staff email</label>
          <input
            className="w-full border border-line rounded-lg px-3.5 py-3 text-[13.5px] bg-white focus:outline-none focus:border-brass"
            placeholder="name@nuggetcontinental.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xs font-semibold mb-1.5">Password</label>
          <input
            type="password"
            className="w-full border border-line rounded-lg px-3.5 py-3 text-[13.5px] bg-white focus:outline-none focus:border-brass"
            placeholder="••••••••"
          />
        </div>
        <button className="w-full bg-brass text-[#241704] rounded-md font-semibold text-sm py-3.5 mt-1.5 hover:bg-brassLight transition-colors">
          Sign in
        </button>
        <div className="text-center text-xs text-textMute mt-4">Forgot password?</div>
      </div>
    </div>
  );
}
