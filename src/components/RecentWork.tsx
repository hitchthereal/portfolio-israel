import { useLanguage } from "@/hooks/useLanguage";
import { Briefcase } from "lucide-react"

export const RecentWork = () => {

  const { translations } = useLanguage()

  return (
    <div className="w-full bg-primary-100 rounded-xl border border-quaternary-100 py-8 px-8 lg:px-10 lg:min-h-[31rem]">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-lg bg-tertiary-100 border border-quaternary-100 flex items-center justify-center">
          <Briefcase size={16} className="text-red-500" />
        </div>
        <h3 className="font-semibold text-white">{translations.recentWork.title}</h3>
      </div>

      <div className="flex flex-col gap-1">
        {translations.recentWork.items.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            date={item.date}
            companyName={item.companyName}
            isFirst={index === 0}
            isLast={index === translations.recentWork.items.length - 1}
          />
        ))}
      </div>
    </div>
  )
}


interface IItemProps {
  title: string;
  date: string;
  companyName: string;
  isFirst: boolean;
  isLast: boolean;
}

const Item = ({ title, date, companyName, isFirst, isLast }: IItemProps) => {
  return (
    <div className="flex gap-4">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full border-2 flex-shrink-0 mt-1.5 ${isFirst ? 'bg-red-500 border-red-500' : 'bg-transparent border-zinc-600'}`} />
        {!isLast && <div className="w-px flex-1 bg-quaternary-100 my-1" />}
      </div>

      {/* Content */}
      <div className={`pb-6 ${isLast ? 'pb-0' : ''}`}>
        <h4 className={`font-semibold text-base ${isFirst ? 'text-red-500' : 'text-white'}`}>
          {title}
        </h4>
        <p className="text-quinternary-100 text-sm mt-0.5">{companyName}</p>
        <p className="text-zinc-500 text-xs mt-1">{date}</p>
      </div>
    </div>
  );
};
