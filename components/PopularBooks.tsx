import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";

const books = [
  {
    title: "Monet Moem Pofen Motlien",
    author: "Reisdmt. E Outredar",
    rating: 3,
    cover: "/placeholder.png",
  },
  {
    title: "Mope Boobin Bofneng",
    author: "Reisdmt. 3 Outredar",
    rating: 5,
    cover: "/placeholder.png",
  },
  {
    title: "Cooul Booclete Pohnuatlon",
    author: "Reisdmt. E Outredar",
    rating: 4,
    cover: "/placeholder.png",
  },
  {
    title: "Plpoe Poetincin Movumtlon",
    author: "Reislmt. 2 Outredar",
    rating: 5,
    cover: "/placeholder.png",
  },
];

export default function PopularBooks() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3 text-black py-10">
        <h2 className="text-2xl font-bold">Popular Books</h2>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 space-y-4"
          >
            <Image
              src={book.cover || "/placeholder.png"}
              alt={book.title}
              width={200}
              height={300}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="font-medium">{book.title}</h3>
            <p className="text-sm text-gray-950">{book.author}</p>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < book.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-400 text-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
