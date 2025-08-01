import { doLogOut } from '@/app/actions';

const Logout = () => {
  return (
    <form action={doLogOut}>
        <button type="submit" className='bg-blue-600 my-2 text-white px-2 rounded'>
            Log Out
        </button>
    </form>
  )
}

export default Logout
