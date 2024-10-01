import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="fixed flex w-full items-center justify-between px-4 py-2">
      <div className="font-medium tracking-tight">Scholarship AI.</div>
      <div className="flex items-center gap-6 font-medium">
        <div className="space-x-4">
          <AtciveNavLink link='prompt' label='Home'/>
          <AtciveNavLink link='bookmark' label='Bookmark'/>
        </div>
        <Button variant="violet">Logout</Button>
      </div>
    </header>
  );
};

interface IActiveNavLinkProps {
    link : string,
    label : string
}

const AtciveNavLink = ({link, label} : IActiveNavLinkProps) => {
    return (
        <NavLink to={`/${link}`} className={({ isActive }) => (isActive ? 'text-violet-500 font-semibold' : 'text-gray-900 hover:text-violet-500')}>
            {label}
        </NavLink>
    )
}
