import { revalidatePath } from 'next/cache'
import Image from 'next/image'
import BackButton from 'src/app/home/@modal/(...)settings/BackButton'

export default function AccountSettingModal() {
  const random = Math.random()

  async function someServerMutation() {
    'use server'
    revalidatePath('/settings')
  }

  return (
    <div className='fixed flex flex-col items-center justify-center'>
      <div className='fixed inset-0 bg-black opacity-50' />
      <div className='bg-white rounded-lg shadow-lg px-4 py-6 text-center z-0'>
        <h1>Account Setting Modal</h1>

        <p>
          this is a random number that is generated from server side and will change when the component is revalidated:
          {random}
        </p>

        <form action={someServerMutation}>
          <p>
            Click submit to simulate a server mutation that revalidates <code>/settings</code>
          </p>
          <p>
            However, this error will show up instead
            <a href='/error.png' target='_blank'>
              <Image width={200} height={150} alt='error screenshot' src='/error.png'></Image>
            </a>
          </p>
          <button className='bg-indigo-500 text-white px-4 py-2 rounded'>Submit form</button>
        </form>

        <BackButton></BackButton>
      </div>
    </div>
  )
}
