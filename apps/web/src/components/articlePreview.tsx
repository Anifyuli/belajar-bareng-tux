import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function ArticlePreview() {
  return (
    <div className="m-2">
      <Card className="max-w-sm w-full border border-gray-200 shadow-md rounded-2xl transition-all hover:shadow-lg hover:scale-[1.02]">
        {/* Header */}
        <img src="/img/gnome-wallpaper.png" alt="" className='rounded-t-2xl'/>
        <Link to={'#'}>
          <CardHeader className="border-b border-gray-300 pb-2">
            <h2 className="text-xl font-semibold text-gray-800">Ini Artikel</h2>
          </CardHeader>
        </Link>

        {/* Content */}
        <CardContent className="py-4 space-y-4">
          <p className="text-gray-600 text-sm line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
            dui sed mauris ultricies volutpat. Cras sit amet rhoncus turpis.
            Quisque condimentum lectus odio, malesuada semper quam aliquam ac...
          </p>
        </CardContent>
        <hr className="mx-8" />
        <div className="my-4 px-8 flex flex-row">
          <img
            src="../src/assets/belajar-bareng-tux.svg"
            alt=""
            className="w-16 h-16"
          />
          <div className="my-2">
            <h5 className="font-bold">Belajar Bareng Tux</h5>
            <p>February 16, 2025 - 5 min read</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
