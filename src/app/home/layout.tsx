import Link from 'next/link'
import React from 'react'

export default function HomeLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <div className='p-4'>
      <nav className='flex flex-row justify-between'>
        <h1>Home Layout</h1>

        <Link href='/settings' className='underline'>
          Account Settings
        </Link>
      </nav>

      <main>{children}</main>

      <aside>{modal}</aside>
    </div>
  )
}
