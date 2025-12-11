import { useLanguage } from "@/hooks/useLanguage";
import { Dot } from "lucide-react"

export const RecentWork = () => {

  const { translations } = useLanguage()

  return (
      <div className="w-full bg-primary-100 rounded-xl border-2 border-quaternary-100 py-10 px-10 lg:min-h-[31rem]">
    <div className="flex items-center">
      <Dot size={40} className="font-bold -ml-3" />
      <h3 className="font-semibold">{translations.recentWork.title}</h3>
    </div>

    <div className="flex flex-col gap-5 mt-10">
      {translations.recentWork.items.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          date={item.date}
          companyName={item.companyName}
          isCurrent={item.companyName === "CPQD"}
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
  isCurrent: boolean;
}

const Item = ({ title, date, companyName, isCurrent }: IItemProps) => {
  return (
    <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1.6fr)] gap-x-4">
      {/* Coluna esquerda: cargo + data */}
      <div>
        <h4
          className={`font-semibold text-lg ${
            isCurrent && "text-secondary-100"
          }`}
        >
          {title}
        </h4>
        <p className="text-quinternary-100 text-base">{date}</p>
      </div>

      {/* Coluna direita: empresa (pode quebrar em 2 linhas) */}
      <p className="text-quinternary-100 text-right leading-tight">
        {companyName}
      </p>
    </div>
  );
};
