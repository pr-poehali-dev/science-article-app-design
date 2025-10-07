import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const articles = [
    {
      id: 1,
      title: "Quantum Computing and Machine Learning: A New Paradigm",
      abstract: "This paper explores the intersection of quantum computing and machine learning algorithms...",
      authors: ["Dr. Anna Petrova", "Prof. Igor Volkov"],
      category: "Computer Science",
      citations: 156,
      published: "2024",
      readTime: "15 min"
    },
    {
      id: 2,
      title: "Climate Change Impact on Arctic Biodiversity",
      abstract: "A comprehensive study of biodiversity changes in Arctic ecosystems over the past decade...",
      authors: ["Dr. Maria Sokolova", "Dr. Pavel Dmitriev"],
      category: "Environmental Science",
      citations: 243,
      published: "2024",
      readTime: "20 min"
    },
    {
      id: 3,
      title: "Neural Networks in Medical Diagnostics",
      abstract: "Application of deep learning models for early disease detection and diagnosis...",
      authors: ["Prof. Elena Novikova"],
      category: "Medicine",
      citations: 189,
      published: "2023",
      readTime: "18 min"
    },
    {
      id: 4,
      title: "Sustainable Energy Storage Solutions",
      abstract: "Novel approaches to energy storage using graphene-based battery technologies...",
      authors: ["Dr. Sergei Ivanov", "Dr. Olga Kuznetsova"],
      category: "Engineering",
      citations: 127,
      published: "2024",
      readTime: "12 min"
    }
  ];

  const userStats = {
    name: "Алексей Петров",
    email: "alexey.petrov@university.edu",
    savedArticles: 24,
    citations: 312,
    publications: 8
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const HomePage = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Научная База Знаний</h1>
        <p className="text-lg opacity-90 mb-6">Исследуйте передовые научные публикации со всего мира</p>
        <div className="relative max-w-2xl">
          <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            placeholder="Поиск статей по ключевым словам..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 bg-white text-foreground"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Icon name="FileText" className="text-primary" size={24} />
            </div>
            <div>
              <CardTitle className="text-2xl">{articles.length}</CardTitle>
              <CardDescription>Всего статей</CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="bg-accent/5 border-accent/20">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-3 bg-accent/10 rounded-xl">
              <Icon name="Award" className="text-accent" size={24} />
            </div>
            <div>
              <CardTitle className="text-2xl">715</CardTitle>
              <CardDescription>Всего цитирований</CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Icon name="Users" className="text-primary" size={24} />
            </div>
            <div>
              <CardTitle className="text-2xl">8</CardTitle>
              <CardDescription>Авторов</CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Последние Публикации</h2>
        <div className="grid gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-all hover-scale">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {article.category}
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <Icon name="Bookmark" size={18} />
                  </Button>
                </div>
                <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                <CardDescription className="text-base">{article.abstract}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="User" size={16} />
                    <span>{article.authors.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Quote" size={16} />
                    <span>{article.citations} цитирований</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={16} />
                    <span>{article.published}</span>
                  </div>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90">
                  <Icon name="BookOpen" size={18} className="mr-2" />
                  Читать статью
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const ProfilePage = () => (
    <div className="space-y-8 animate-fade-in">
      <Card className="bg-gradient-to-r from-primary to-accent text-white">
        <CardHeader>
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24 border-4 border-white">
              <AvatarFallback className="bg-white text-primary text-2xl font-bold">
                {userStats.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl mb-2">{userStats.name}</CardTitle>
              <CardDescription className="text-white/80 text-base">{userStats.email}</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover-scale">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-xl">
                <Icon name="BookMarked" className="text-primary" size={28} />
              </div>
              <div>
                <CardTitle className="text-3xl">{userStats.savedArticles}</CardTitle>
                <CardDescription className="text-base">Сохранённые статьи</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="hover-scale">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-accent/10 rounded-xl">
                <Icon name="Quote" className="text-accent" size={28} />
              </div>
              <div>
                <CardTitle className="text-3xl">{userStats.citations}</CardTitle>
                <CardDescription className="text-base">Цитирования</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="hover-scale">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-xl">
                <Icon name="FileText" className="text-primary" size={28} />
              </div>
              <div>
                <CardTitle className="text-3xl">{userStats.publications}</CardTitle>
                <CardDescription className="text-base">Публикации</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Недавно Сохранённые</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {articles.slice(0, 3).map((article) => (
              <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">{article.authors.join(", ")}</p>
                </div>
                <Badge variant="outline" className="ml-4">{article.category}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Настройки Профиля</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Имя</label>
            <Input defaultValue={userStats.name} />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Email</label>
            <Input defaultValue={userStats.email} type="email" />
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90">
            <Icon name="Save" size={18} className="mr-2" />
            Сохранить изменения
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
                <Icon name="Microscope" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ScienceHub
              </span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Button
                variant={activeTab === "home" ? "default" : "ghost"}
                onClick={() => setActiveTab("home")}
                className={activeTab === "home" ? "bg-primary" : ""}
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button
                variant={activeTab === "profile" ? "default" : "ghost"}
                onClick={() => setActiveTab("profile")}
                className={activeTab === "profile" ? "bg-primary" : ""}
              >
                <Icon name="User" size={18} className="mr-2" />
                Профиль
              </Button>
            </div>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  <Button
                    variant={activeTab === "home" ? "default" : "ghost"}
                    onClick={() => setActiveTab("home")}
                    className={`justify-start ${activeTab === "home" ? "bg-primary" : ""}`}
                  >
                    <Icon name="Home" size={18} className="mr-2" />
                    Главная
                  </Button>
                  <Button
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    onClick={() => setActiveTab("profile")}
                    className={`justify-start ${activeTab === "profile" ? "bg-primary" : ""}`}
                  >
                    <Icon name="User" size={18} className="mr-2" />
                    Профиль
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeTab === "home" ? <HomePage /> : <ProfilePage />}
      </main>
    </div>
  );
};

export default Index;
