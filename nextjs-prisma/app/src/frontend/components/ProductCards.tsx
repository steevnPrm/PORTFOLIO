interface ProductCardProps {
  title: string;
  description: string;
  price?: string;
}

export default function ProductCard({
  title,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl p-2 bg-vitrine-grey-500/50 inset-shadow-sm inset-shadow-black">
      {/* Contenu principal */}
      <div className="flex flex-col gap-3 sm:max-w-xs">
        <h3 className="sm:text-2xl text-vitrine-grey-100 font-bold text-center">
          {title}
        </h3>
        <p className="text-vitrine-grey-100 font-light text-center">
          {description}
        </p>
      </div>

      {/* Prix */}
      <div className="my-3">
        {price && (
          <p className="text-vitrine-grey-100 text-center font-semibold">{price}</p>
        )}
      </div>
    </div>
  );
}
