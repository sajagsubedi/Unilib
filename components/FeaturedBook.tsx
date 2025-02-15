import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturedBook() {
  return (
    <div className="bg-indigo-100 backdrop-blur-sm rounded-3xl p-6 space-y-6 w-1/3 text-black">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-black">
          Introduction to Machine Learning
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Unlock the Power of AI</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-600">Dr. Jane Smith</div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[1, 2, 3].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600">Category</p>
            <p>Technology & AI</p>
          </div>
        </div>

        <p className="text-gray-600">
          This comprehensive guide to machine learning introduces key concepts,
          algorithms, and practical applications for beginners and
          professionals.
        </p>

        <div className="flex items-center justify-between">
          <Button className="bg-black text-white hover:bg-black/90">
            Borrow Book
          </Button>
        </div>
      </div>
    </div>
  );
}
