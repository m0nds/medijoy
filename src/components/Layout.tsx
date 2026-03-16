import { type ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur shrink-0">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="text-xl font-semibold tracking-tight">
            Medijoy
          </a>
          <div className="flex gap-4">
            <a href="#features" className="text-slate-600 hover:text-slate-900">
              Features
            </a>
            <a href="#cta" className="text-slate-600 hover:text-slate-900">
              Get started
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        {children}
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 shrink-0">
        Boilerplate · React + TypeScript + Vite + Tailwind
      </footer>
    </div>
  )
}
