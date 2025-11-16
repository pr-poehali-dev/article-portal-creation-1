import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

type Article = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: 'Искусство современной фотографии',
    excerpt: 'Погружение в мир визуального повествования через объектив. Исследуем, как свет и композиция создают эмоциональные истории.',
    image: 'https://cdn.poehali.dev/projects/530cdf9e-e7b0-4946-85d9-8be4cf87ebdf/files/d4d2c26b-b313-495e-98a4-8d49ad36e933.jpg',
    category: 'Фотогалерея',
    date: '15 ноября 2024',
    readTime: '8 мин'
  },
  {
    id: 2,
    title: 'Минимализм в галерейном искусстве',
    excerpt: 'Как пустое пространство становится частью произведения. Разбираем философию современных выставочных пространств.',
    image: 'https://cdn.poehali.dev/projects/530cdf9e-e7b0-4946-85d9-8be4cf87ebdf/files/fd8ebcce-a2a6-4723-b246-ff1c2ab9e6d2.jpg',
    category: 'Жанры',
    date: '12 ноября 2024',
    readTime: '6 мин'
  },
  {
    id: 3,
    title: 'Винил: возрождение аналоговой музыки',
    excerpt: 'Почему виниловые пластинки вновь стали символом качества звука. История ностальгии и технологического прогресса.',
    image: 'https://cdn.poehali.dev/projects/530cdf9e-e7b0-4946-85d9-8be4cf87ebdf/files/bcaf24d2-ea75-40ae-815c-34ac7899d8fb.jpg',
    category: 'Музыка',
    date: '10 ноября 2024',
    readTime: '10 мин'
  },
  {
    id: 4,
    title: 'Новая волна джаза в России',
    excerpt: 'Молодые музыканты переосмысливают классический жанр. От московских клубов до международных фестивалей.',
    image: 'https://cdn.poehali.dev/projects/530cdf9e-e7b0-4946-85d9-8be4cf87ebdf/files/bcaf24d2-ea75-40ae-815c-34ac7899d8fb.jpg',
    category: 'Музыка',
    date: '8 ноября 2024',
    readTime: '7 мин'
  },
  {
    id: 5,
    title: 'Портретная съёмка: техника и душа',
    excerpt: 'Как поймать искренние эмоции в кадре. Секреты работы со светом, композицией и моделями от профессионалов.',
    image: 'https://cdn.poehali.dev/projects/530cdf9e-e7b0-4946-85d9-8be4cf87ebdf/files/d4d2c26b-b313-495e-98a4-8d49ad36e933.jpg',
    category: 'Фотогалерея',
    date: '5 ноября 2024',
    readTime: '9 мин'
  }
];

const categories = ['Все', 'Главная', 'Жанры', 'Фотогалерея', 'Музыка'];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'Все' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-6 py-6">
            <button
              onClick={() => setSelectedArticle(null)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="ArrowLeft" size={20} />
              <span className="text-sm font-medium">Назад к статьям</span>
            </button>
          </div>
        </header>

        <article className="container mx-auto px-6 py-12 max-w-4xl animate-fade-in">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className="text-xs">{selectedArticle.category}</Badge>
              <h1 className="text-5xl md:text-6xl font-bold font-serif leading-tight">
                {selectedArticle.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime} чтения</span>
              </div>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed">
                {selectedArticle.excerpt}
              </p>
              
              <Separator className="my-8" />

              <p className="leading-relaxed">
                Это пространство для полного текста статьи. Здесь может быть размещён развёрнутый материал с подробным анализом, интервью, фотографиями и другими медиаматериалами.
              </p>

              <h2 className="text-3xl font-serif font-semibold mt-12 mb-6">
                Ключевые моменты
              </h2>

              <p className="leading-relaxed">
                В этом разделе раскрываются основные тезисы статьи. Автор делится своим опытом, экспертным мнением и уникальными инсайтами по теме.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-lg my-8">
                "Искусство — это способ видеть мир через призму чувств и эмоций"
              </blockquote>

              <p className="leading-relaxed">
                Заключительная часть статьи подводит итоги и оставляет читателя с размышлениями о прочитанном материале.
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <h1 className="text-3xl font-serif font-bold">Журнал</h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          <main className="space-y-12">
            {filteredArticles.length > 0 && (
              <div className="space-y-6 animate-fade-in">
                <Card
                  className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedArticle(filteredArticles[0])}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={filteredArticles[0].image}
                      alt={filteredArticles[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-8 space-y-4">
                    <Badge>{filteredArticles[0].category}</Badge>
                    <h2 className="text-4xl font-serif font-bold group-hover:text-primary transition-colors">
                      {filteredArticles[0].title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {filteredArticles[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
                      <span>{filteredArticles[0].date}</span>
                      <span>•</span>
                      <span>{filteredArticles[0].readTime} чтения</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              {filteredArticles.slice(1).map((article, index) => (
                <Card
                  key={article.id}
                  className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <Badge className="text-xs">{article.category}</Badge>
                    <h3 className="text-2xl font-serif font-semibold group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground pt-2">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-16 animate-fade-in">
                <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <p className="text-xl text-muted-foreground">
                  Ничего не найдено
                </p>
              </div>
            )}
          </main>

          <aside className="lg:sticky lg:top-24 h-fit space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Поиск</h3>
              <div className="relative">
                <Icon
                  name="Search"
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  type="text"
                  placeholder="Искать статьи..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Категории</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">О журнале</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Пространство для статей, фотографий и музыки. Исследуем искусство во всех его проявлениях.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
