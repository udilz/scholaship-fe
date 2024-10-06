import { Button } from '@/components/ui/button';
import { Link, NavLink } from 'react-router-dom';
import { User } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="fixed flex w-full items-center justify-between px-4 py-2">
      <div className="font-medium tracking-tight">Scholarship AI.</div>
      <div className="flex items-center gap-6 font-medium">
        <div className="space-x-4">
          <AtciveNavLink link="prompt" label="Home" />
          <AtciveNavLink link="bookmark" label="Bookmark" />
        </div>
      </div>
      <div className="flex gap-2">
        <section className='flex gap-2 items-center'>
        <span>User </span>
        <Link to={'/ptofile'}>
          <Button className="rounded-full" iconOnly>
            <User></User>
          </Button>
        </Link>
       </section>
        <Button>Logout</Button>
      </div>
    </header>
  );
};

interface IActiveNavLinkProps {
  link: string;
  label: string;
}

const AtciveNavLink = ({ link, label }: IActiveNavLinkProps) => {
  return (
    <NavLink to={`/${link}`} className={({ isActive }) => (isActive ? 'font-semibold text-primary-500' : 'text-primary-900 hover:text-primary-500')}>
      {label}
    </NavLink>
  );
};
