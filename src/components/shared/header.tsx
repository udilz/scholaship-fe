import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export const Header = () => {
  return (
    <header className='flex items-center justify-between py-2 px-4 fixed w-full '>
        <div className="font-medium tracking-tight">Scholarship AI.</div>
        <div className="flex items-center gap-6 font-medium">
        <div className='hover:text-violet-700'>
            <Link to="/bookmark">Bookmark</Link>
        </div>
            <Button variant='violet'>logout</Button>
      </div>
    </header>
  )
}   
