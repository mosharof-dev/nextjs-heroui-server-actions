import { Card, Link } from "@heroui/react";

const  BookCard = ({ task}) => {

  const { 
    title, 
    author, 
    category, 
    price, 
    rating, 
    publishedYear, 
    inStock, 
    description 
  } = task;
  
  return (
    <Card className="max-w-md p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      
      {/* Header: Title, Category & Rating */}
      <Card.Header className="flex flex-col items-start gap-2">
        
        {/* Top row with Category and Rating */}
        <div className="flex justify-between w-full items-center">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            {category}
          </span>
          <span className="text-sm font-medium flex items-center gap-1">
            ⭐ {rating}
          </span>
        </div>

        {/* Title and Author Info */}
        <div className="flex flex-col gap-1">
            <Card.Title className="text-xl font-semibold text-gray-900">
            {title}
            </Card.Title>
            <p className="text-sm text-gray-500 font-medium">
            by {author} • {publishedYear}
            </p>
        </div>
      </Card.Header>

      {/* Body: Description & Price */}
      <div className="px-3 py-2 mt-2">
        <Card.Description className="text-sm text-gray-600 leading-relaxed">
          {description}
        </Card.Description>
        
        <div className="mt-4 font-bold text-2xl text-gray-900">
          ৳{price}
        </div>
      </div>

      {/* Footer: Conditional Action Button */}
      <Card.Footer className="mt-4">
        <Link
          href={inStock ? "/checkout" : "#"}
          className={`w-full text-center py-2.5 rounded-xl font-medium transition 
          }`}
        >
          Stock
        </Link>
      </Card.Footer>

    </Card>
  );
}
export default BookCard;