import Image from "next/image";
import FocusChart from "./components/FocusChart";

export default function Home() {
  return (
    <main>
      {/* Shell */}
      <div className="bg-[#f5f6fa] h-full grid grid-cols-3">
        <div className="col-span-2 m-10">
          {/* Header */}
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">A</div>
              <div>
                <p className="text-zinc-900 font-medium">Welcome, Kristin</p>
                <p className="text-zinc-500 text-sm">Your personal dashboard overview</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 flex-1 items-center gap-2 rounded-full border border-zinc-200 bg-[#e3e4e8] px-4 md:w-[260px]">
                <svg className="h-4 w-12 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/></svg>
                <input placeholder="Search" className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Image src="/image.png" alt="Search" width={30} height={30} className="rounded-full" />
              </div>
            </div>
          </div>

          {/* Main grid */}
          <div className="mt-6 grid grid-cols-1 gap-6 ">
            {/* Left content */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-7">
              {/* Top cards */}
              <div className="col-span-3">
                <div className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <p className="text-zinc-900 font-medium">Profile</p>
                    <button aria-label="Refresh" className="inline-flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:text-zinc-600">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/></svg>
                    </button>
                  </div>
                  
                  {/* Avatar + progress ring */}
                  <div className="mt-6 flex flex-col items-center">
                    <div className="relative h-28 w-28">
                      {/* progress ring */}
                      <div className="absolute inset-0 rounded-full bg-[conic-gradient(#ef4444_70%,_#e5e7eb_70%)]"></div>
                      <div className="absolute inset-[6px] rounded-full bg-white ring-1 ring-zinc-200" />
                      <div className="absolute inset-[14px] overflow-hidden rounded-full ring-1 ring-zinc-200 bg-rose-200">
                        <Image alt="Avatar" src="/vercel.svg" fill className="object-contain p-6" />
                      </div>
                      {/* badge */}
                      <div className="absolute -bottom-1 -right-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black text-white ring-4 ring-white">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      </div>
                    </div>
                    <h2 className="mt-5 text-center text-3xl font-semibold text-zinc-900">Kristin Watson</h2>
                    <p className="text-center text-zinc-500">Design Manager</p>
                  </div>

                  {/* Stats Pills */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="flex rounded-2xl bg-white justify-center gap-2 mx-3 my-3 px-1 pt-1 shadow-[0_10px_24px_rgba(0,0,0,0.16)] ring-1 ring-zinc-100">
                      <div className=" mb-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                      </div>
                      <p className="text-lg font-semibold text-zinc-900">11</p>
                    </div>
                    <div className="flex rounded-2xl bg-white justify-center gap-2 mx-3 my-3 px-1 pt-1 shadow-[0_10px_24px_rgba(0,0,0,0.16)] ring-1 ring-zinc-100">
                      <div className=" mb-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm-1-6 7-7-1.41-1.41L11 13.17 7.41 9.59 6 11l5 5z"/></svg>
                      </div>
                      <p className="text-lg font-semibold text-zinc-900">56</p>
                    </div>
                    <div className="flex rounded-2xl bg-white justify-center gap-2 mx-3 my-3 px-1 pt-1 shadow-[0_10px_24px_rgba(0,0,0,0.16)] ring-1 ring-zinc-100">
                      <div className=" mb-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17 3H7l-2 7v11h14V10l-2-7zm-2 14h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z"/></svg>
                      </div>
                      <p className="text-lg font-semibold text-zinc-900">12</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-4 grid grid-rows-4 gap-6">
                <div className="row-span-3 grid grid-cols-2 gap-6">
                  <div className="relative overflow-hidden rounded-3xl p-8 shadow-sm ring-1 ring-zinc-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-200 via-pink-200 to-amber-200" />
                    <div className="relative flex flex-col h-full justify-between">
                      <div className="flex items-start justify-between">
                        <p className="text-zinc-900 font-medium">Prioritized tasks</p>
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/70 text-zinc-700 ring-1 ring-zinc-200">⏱</span>
                      </div>
                      <div className="flex-end">
                        <p className="mt-6 text-5xl font-semibold text-zinc-900">83%</p>
                        <p className="text-zinc-700">Avg. Completed</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-3xl p-8 shadow-sm ring-1 ring-zinc-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 via-sky-200 to-indigo-200" />
                    <div className="relative flex flex-col h-full justify-between">
                      <div className="flex items-start justify-between">
                        <p className="text-zinc-900 font-medium">Additional tasks</p>
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/70 text-zinc-700 ring-1 ring-zinc-200">✓</span>
                      </div>
                      <div className="flex-end">
                        <p className="mt-6 text-5xl font-semibold text-zinc-900">56%</p>
                        <p className="text-zinc-700">Avg. Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-span-1 rounded-3xl border border-zinc-100 bg-[#e3e4e8] p-4">
                  <div className="flex items-center justify-between mx-5">
                    <div>
                      <p className="text-zinc-900 font-medium">Trackers connected</p>
                      <p className="text-zinc-500 text-sm">3 active connections</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-zinc-200">
                          <span className="h-6 w-6 rounded-full bg-rose-500" />
                        </span>
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-zinc-200">
                          <span className="h-6 w-6 rounded-md bg-sky-500" />
                        </span>
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-zinc-200">
                          <span className="h-6 w-6 rounded-sm bg-emerald-500" />
                        </span>
                      </div>
                      <button aria-label="More options" className="inline-flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.75"/><circle cx="12" cy="12" r="1.75"/><circle cx="19" cy="12" r="1.75"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
              <div className="h-full rounded-3xl bg-transparent p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-zinc-900 font-medium">Focusing</p>
                    <p className="text-zinc-500 text-sm">Productivity analytics</p>
                  </div>
                  <div className="text-sm text-zinc-600">Range: <span className="font-medium">Last month</span></div>
                </div>
                <FocusChart className="mt-6 h-52 rounded-2xl bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.04),_transparent_60%)] p-4" />
                <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2"><span className="h-2 w-4 rounded-full bg-rose-500"></span> Maximum of focus</div>
                    <div className="flex items-center gap-2"><span className="h-2 w-4 rounded-full bg-indigo-500"></span> Min or lack of focus</div>
                  </div>
                  <div className="text-right"><span className="text-zinc-900 font-semibold">41%</span> Avg. Conc.</div>
                </div>
              </div>
            
          </div>
          </div>
            {/* Right sidebar */}
            <div className="col-span-1 border-l border-gray-200 p-10">
            <aside className="space-y-20">
              {/* My meetings card */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-zinc-900 text-xl font-semibold">My meetings</p>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 ring-1 ring-zinc-200">🗓️</span>
                </div>
                <ul className="text-sm">
                  {[
                    { day: "Tue, 11 Jul", time: "08:15 am", title: "Quick Daily Meeting", via: "Zoom" },
                    { day: "Tue, 11 Jul", time: "09:30 pm", title: "John Onboarding", via: "Google Meet" },
                    { day: "Tue, 12 Jul", time: "02:30 pm", title: "Call With a New Team", via: "Google Meet" },
                    { day: "Tue, 15 Jul", time: "04:00 pm", title: "Lead Designers Event", via: "Zoom" },
                  ].map((m, idx) => (
                    <li key={m.title} className={`flex items-start justify-between gap-3 py-4 ${idx !== 0 ? 'border-t border-gray-200' : ''}`}>
                      <div className="min-w-[84px]">
                        <p className="text-zinc-500">{m.day}</p>
                        <p className="text-zinc-900 font-semibold">{m.time}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-zinc-900 font-medium">{m.title}</p>
                        <p className="text-zinc-500 flex items-center gap-2">
                          <span className="inline-block h-3 w-3 rounded-sm bg-sky-500" />
                          {m.via}
                        </p>
                      </div>
                      <a href="#" className="text-zinc-400 hover:text-zinc-600">↗</a>
                    </li>
                  ))}
                </ul>
                <button className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-zinc-900">
                  See all meetings
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>

              {/* Developed areas card */}
                <p className="mb-1 text-zinc-900 text-xl font-semibold">Developed areas</p>
                <p className="mb-4 text-sm text-zinc-500">Most common areas of interests</p>
                <div className="space-y-5">
                  {[
                    { label: "Sport Skills", value: 71, trend: 'down' as const },
                    { label: "Blogging", value: 92, trend: 'up' as const },
                    { label: "Leadership", value: 33, trend: 'down' as const },
                    { label: "Meditation", value: 56, trend: 'up' as const },
                    { label: "Philosophy", value: 79, trend: 'up' as const },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-zinc-700 w-2/5">{s.label}</p>
                        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-200">
                          <div className="h-full rounded-full bg-indigo-600" style={{ width: `${s.value}%` }} />
                        </div>
                        <div className="flex items-center justify-between text-base">
                          <div className="flex items-center gap-3">
                            <p className="text-zinc-500 border-r border-gray-200 pr-4">{s.value}%</p>
                            <span
                              className={`${s.trend === 'up' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-500'} inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-zinc-200`}
                              aria-label={s.trend === 'up' ? 'Up' : 'Down'}
                            >
                              {s.trend === 'up' ? '⬆' : '⬇'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </aside>
          </div>
      </div>
    </main>
  );
}
