import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  const serverIP = "CraftTimeMC.minerent.io";
  
  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    toast({
      title: "IP скопирован!",
      description: "Адрес сервера скопирован в буфер обмена",
    });
  };
  
  const donationTiers = [
    {
      name: "STEVE",
      price: "299₽",
      color: "from-blue-600 to-cyan-500",
      icon: "User",
      features: [
        "Цветной ник в чате",
        "Возможность летать",
        "Доступ к /kit steve",
        "5 точек дома",
        "Приватная зона 50x50"
      ]
    },
    {
      name: "FOX",
      price: "599₽",
      color: "from-orange-600 to-red-500",
      icon: "Flame",
      popular: true,
      features: [
        "Все привилегии STEVE",
        "Уникальный префикс",
        "Доступ к /kit fox",
        "10 точек дома",
        "Приватная зона 100x100",
        "Креативный режим в своей зоне"
      ]
    },
    {
      name: "RICHER",
      price: "999₽",
      color: "from-yellow-500 to-amber-500",
      icon: "Coins",
      features: [
        "Все привилегии FOX",
        "Эксклюзивный титул",
        "Доступ к /kit richer",
        "Безлимитные точки дома",
        "Приватная зона 200x200",
        "Собственный варп",
        "Доступ к закрытым мирам"
      ]
    },
    {
      name: "SUFLE",
      price: "1499₽",
      color: "from-purple-600 to-pink-500",
      icon: "Crown",
      features: [
        "Все привилегии RICHER",
        "Эксклюзивный скин персонажа",
        "Доступ к /kit sufle",
        "Личный NPC помощник",
        "Приватная зона 300x300",
        "Приоритетный вход на сервер",
        "Создание собственных событий",
        "VIP поддержка 24/7"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.85), rgba(26, 31, 44, 0.95)), url('https://cdn.poehali.dev/projects/84da285d-b7f4-4b55-acb3-07d924795dd5/files/08fd088f-cf22-43d4-8b3e-86f779ff802e.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <Badge className="mb-4 text-base px-4 py-2 bg-primary/20 border-primary/50 hover:bg-primary/30">
            <Icon name="Server" className="mr-2" size={18} />
            Онлайн сейчас: 247 игроков
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-green-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-2xl">
            CRAFT TIME MC
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-card/80 backdrop-blur-sm px-6 py-3 rounded-xl border-2 border-primary/30">
              <p className="text-xl md:text-2xl font-mono font-bold text-primary">
                {serverIP}
              </p>
            </div>
            <Button 
              onClick={copyIP}
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:bg-primary/20"
            >
              <Icon name="Copy" size={20} />
            </Button>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Поддержи развитие сервера и получи уникальные привилегии
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8 py-6 animate-glow">
              <Icon name="Heart" className="mr-2" size={20} />
              Поддержать сервер
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
              <Icon name="Info" className="mr-2" size={20} />
              Подробнее
            </Button>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-black mb-4">Выбери свой уровень</h2>
          <p className="text-xl text-muted-foreground">
            Каждый донат помогает серверу становиться лучше
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {donationTiers.map((tier, index) => (
            <Card 
              key={tier.name}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in border-2 ${
                tier.popular ? 'border-secondary shadow-secondary/20 shadow-xl' : 'border-border'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-4 py-1 rounded-bl-lg font-bold">
                  ПОПУЛЯРНО
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center shadow-lg`}>
                  <Icon name={tier.icon as any} size={40} className="text-white" />
                </div>
                
                <CardTitle className="text-3xl font-black mb-2">{tier.name}</CardTitle>
                <CardDescription className="text-4xl font-bold text-foreground">
                  {tier.price}
                  <span className="text-base text-muted-foreground ml-2">навсегда</span>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full text-lg py-6 bg-gradient-to-r ${tier.color} hover:opacity-90 transition-opacity font-bold`}
                >
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Купить {tier.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">Последние обновления</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                date: "15 декабря 2024",
                title: "Новый игровой режим: SkyBlock",
                desc: "Запущен уникальный SkyBlock с кастомными квестами и наградами",
                badge: "Новое",
                badgeColor: "bg-primary"
              },
              {
                date: "10 декабря 2024",
                title: "Обновление донат-привилегий",
                desc: "Добавлены новые возможности для RICHER и SUFLE пакетов",
                badge: "Обновление",
                badgeColor: "bg-secondary"
              },
              {
                date: "5 декабря 2024",
                title: "Зимнее событие началось!",
                desc: "Участвуйте в снежных баталиях и получайте эксклюзивные награды",
                badge: "Событие",
                badgeColor: "bg-purple-600"
              }
            ].map((news, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/50 transition-all hover:scale-105">
                <CardHeader>
                  <Badge className={`${news.badgeColor} w-fit mb-2`}>{news.badge}</Badge>
                  <CardTitle className="text-xl mb-2">{news.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-3">{news.date}</p>
                  <CardDescription className="text-base">{news.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">Почему донат?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "Server",
                title: "Поддержка сервера",
                desc: "Оплата хостинга, защита от DDoS атак и развитие инфраструктуры"
              },
              {
                icon: "Wrench",
                title: "Новый контент",
                desc: "Разработка уникальных плагинов, карт и игровых режимов"
              },
              {
                icon: "Users",
                title: "Команда проекта",
                desc: "Оплата труда разработчиков, модераторов и администрации"
              },
              {
                icon: "Sparkles",
                title: "Улучшения",
                desc: "Постоянное обновление и добавление новых возможностей"
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-lg">© 2024 Minecraft Server. Все привилегии выдаются навсегда.</p>
          <p className="text-sm mt-2">Поддержка: support@server.ru</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;