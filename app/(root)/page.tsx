import FeaturedBook from "@/components/FeaturedBook";
import PopularBooks from "@/components/PopularBooks";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { User, FileText, Book, Bookmark } from "lucide-react";
import Image from "next/image";

function Navigation() {
  return (
    <div className="flex gap-4">
      {[
        { icon: <User className="w-6 h-6" />, bg: "bg-orange-300" },
        { icon: <FileText className="w-6 h-6" />, bg: "bg-blue-300" },
        { icon: <Book className="w-6 h-6" />, bg: "bg-green-300" },
        { icon: <Bookmark className="w-6 h-6" />, bg: "bg-purple-300" },
      ].map((item, index) => (
        <div
          key={index}
          className={`${item.bg} p-4 rounded-full hover:scale-105 transition-transform cursor-pointer`}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}

const Home = () => {
  return (
    <section>
      <div className="flex gap-10">
        <div className="space-y-8 rounded-md px-5 py-10 w-1/3 linearGradientBg2 shadow-md">
          <h2 className="text-4xl font-bold leading-tight text-black">
            Mode University Library In
          </h2>
          <div className="relative">
            <Input
              placeholder="Search for books, authors, or genres."
              className="pl-10 py-6 rounded-full bg-white text-black"
            />
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Navigation />
        </div>
        <div className="rounded-md w-1/3 bg-red-100 overflow-hidden">
          <Image
            src="/draftBook.jpg"
            alt="draft book"
            width={300}
            height={300}
            className="w-full h-full"
          />
        </div>
        <FeaturedBook />
      </div>
      <PopularBooks />
    </section>
  );
};

export default Home;
