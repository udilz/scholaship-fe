import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";

interface ICardProps {
    title : string,
    description : string,
    link : string,
    openDate: string,
    closeDate: string
}

export const Card = ({title, description, link, openDate, closeDate} : ICardProps) => {
    return (
      <section className="rounded-md border-2 px-3 py-2">
        <header className="flex items-center justify-between">
          <h2 className="text-lg">{title}</h2>
          <Button className="rounded-full" iconOnly variant='violet'>
            <Bookmark size={18} />
          </Button>
        </header>
        <section className="space-y-2">
          <p className="text-pretty text-[15px]">{description}</p>
          <a href={link} className="text-blue-600">
            {link}
          </a>
          <p className="space-x-2 text-sm font-normal italic text-slate-500">
            <span>{openDate}</span>
            {'-'}
            <span>{closeDate}</span>
          </p>
        </section>
      </section>
    );
  };
  