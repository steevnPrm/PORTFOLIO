interface InfoCardProps {
  title: string;
  content_1: string;
  content_2: string;
}

export default function InformationCard({
  title,
  content_1,
  content_2,
}: InfoCardProps) {
  return (
    <>
      <div className="flex flex-col items-center border bg-vitrine-grey-100/10 p-2 border-vitrine-grey-100/50 shadow shadow-vitrine-grey-100 rounded-2xl py-6 gap-6">
        <div>
          <h3 className="text-center text-vitrine-grey-100 font-bold"> {title} </h3>
        </div>
        <div>
          <p className="text-left text-vitrine-grey-100 font-light"> {content_1} </p>
        </div>
        <div>
          <p className="text-left text-vitrine-grey-100 font-light"> {content_2} </p>
        </div>
      </div>
    </>
  );
}
