import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const { toast } = useToast();
  const [selectedTier, setSelectedTier] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"sbp" | "card" | null>(null);
  const [step, setStep] = useState<"form" | "payment">("form");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  
  const serverIP = "CraftTimeMC.minerent.io";
  
  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    toast({
      title: "IP скопирован!",
      description: "Адрес сервера скопирован в буфер обмена",
    });
  };
  
  const handlePurchase = (tier: any) => {
    setSelectedTier(tier);
    setIsDialogOpen(true);
    setStep("form");
  };
  
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentMethod) {
      toast({
        title: "Выберите способ оплаты",
        description: "Пожалуйста, выберите СБП или банковскую карту",
        variant: "destructive",
      });
      return;
    }
    setStep("payment");
  };
  
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Оплата обрабатывается...",
      description: "Пожалуйста, подождите",
    });
    
    setTimeout(() => {
      toast({
        title: "Оплата успешна!",
        description: `Привилегии ${selectedTier?.name} будут выданы в течение 5 минут`,
      });
      setIsDialogOpen(false);
      setStep("form");
      setNickname("");
      setEmail("");
      setPaymentMethod(null);
      setCardNumber("");
      setCardExpiry("");
      setCardCVV("");
    }, 2000);
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
                  onClick={() => handlePurchase(tier)}
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
                title: "Зимняя шахта открыта!",
                desc: "Уникальная зимняя шахта с ледяными рудами и морозными сокровищами теперь доступна",
                badge: "Открыто",
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
                title: "Зимнее суровое выживание началось!",
                desc: "Испытайте себя в экстремальных зимних условиях и получите уникальные награды",
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
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Button
              asChild
              size="lg"
              className="bg-[#0088cc] hover:bg-[#0077b3] text-white"
            >
              <a href="https://t.me/CraftTimeMC" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Telegram
              </a>
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">© 2024 CRAFT TIME MC. Все привилегии выдаются навсегда.</p>
          <p className="text-sm text-muted-foreground mt-2">Поддержка: support@server.ru</p>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={(open) => {
        setIsDialogOpen(open);
        if (!open) {
          setStep("form");
          setPaymentMethod(null);
        }
      }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black">
              {step === "form" ? `Покупка ${selectedTier?.name}` : `Оплата ${selectedTier?.price}`}
            </DialogTitle>
            <DialogDescription className="text-lg">
              {step === "form" ? `Стоимость: ${selectedTier?.price}` : paymentMethod === 'sbp' ? 'Отсканируйте QR-код' : 'Введите данные карты'}
            </DialogDescription>
          </DialogHeader>
          
          {step === "form" ? (
          <form onSubmit={handleSubmitForm} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="nickname">Ваш ник в Minecraft</Label>
              <Input
                id="nickname"
                placeholder="Steve123"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email для чека</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="bg-muted p-4 rounded-lg space-y-2">
              <p className="text-sm font-semibold">Привилегии {selectedTier?.name}:</p>
              <ul className="text-sm space-y-1">
                {selectedTier?.features.slice(0, 3).map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    {feature}
                  </li>
                ))}
                {selectedTier?.features.length > 3 && (
                  <li className="text-muted-foreground">и ещё {selectedTier.features.length - 3}...</li>
                )}
              </ul>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label>Способ оплаты</Label>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant={paymentMethod === 'sbp' ? 'default' : 'outline'}
                  className="h-20 flex-col gap-2"
                  onClick={() => setPaymentMethod('sbp')}
                >
                  <Icon name="Smartphone" size={24} />
                  <span className="text-sm font-semibold">СБП</span>
                </Button>
                <Button
                  type="button"
                  variant={paymentMethod === 'card' ? 'default' : 'outline'}
                  className="h-20 flex-col gap-2"
                  onClick={() => setPaymentMethod('card')}
                >
                  <Icon name="CreditCard" size={24} />
                  <span className="text-sm font-semibold">Карта РФ</span>
                </Button>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className={`w-full text-lg py-6 bg-gradient-to-r ${selectedTier?.color} hover:opacity-90 font-bold`}
              disabled={!paymentMethod}
            >
              <Icon name="ArrowRight" className="mr-2" size={20} />
              Продолжить
            </Button>
          </form>
          ) : (
          <div className="space-y-4 mt-4">
            {paymentMethod === 'sbp' ? (
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-white p-6 rounded-xl">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="QrCode" size={120} className="mx-auto mb-4 text-foreground" />
                      <p className="text-sm text-muted-foreground">QR-код для СБП</p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Отсканируйте QR-код в приложении вашего банка
                </p>
                <Button
                  onClick={() => setStep("form")}
                  variant="outline"
                  className="w-full"
                >
                  <Icon name="ArrowLeft" className="mr-2" size={16} />
                  Назад
                </Button>
              </div>
            ) : (
              <form onSubmit={handlePayment} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Номер карты</Label>
                  <Input
                    id="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    maxLength={19}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardExpiry">Срок действия</Label>
                    <Input
                      id="cardExpiry"
                      placeholder="MM/ГГ"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      maxLength={5}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardCVV">CVV</Label>
                    <Input
                      id="cardCVV"
                      placeholder="123"
                      type="password"
                      value={cardCVV}
                      onChange={(e) => setCardCVV(e.target.value)}
                      maxLength={3}
                      required
                    />
                  </div>
                </div>

                <div className="bg-muted/50 p-3 rounded-lg flex items-start gap-2">
                  <Icon name="Shield" size={20} className="text-primary mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    Ваши данные защищены по стандарту PCI DSS
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className={`w-full text-lg py-6 bg-gradient-to-r ${selectedTier?.color} hover:opacity-90 font-bold`}
                >
                  <Icon name="Lock" className="mr-2" size={20} />
                  Оплатить {selectedTier?.price}
                </Button>
                
                <Button
                  type="button"
                  onClick={() => setStep("form")}
                  variant="outline"
                  className="w-full"
                >
                  <Icon name="ArrowLeft" className="mr-2" size={16} />
                  Назад
                </Button>
              </form>
            )}
          </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;