const quotes = [{
quote:"당신이 하기를 원하고 하려는 의지가 있고 오랜 시간 동안 충분히 노력한다면 그일은 날마다 조금씩 함으로써 반드시 성취해 낼 수 있다."
,author:"-윌리엄 홀-",},
{
 quote:"천재? 37년간 하루도 빠짐없이 14시간씩 연습했는데 그들은 나를 천재라고 부른다."
    ,author:"-사라사테-",},
    {
        quote:"끝나기 전까지는 모든게 불가능해보이기 마련이다."
        ,author:"-넬슨 만델라-",},
        {
            quote:"삼판갈걸..."
            ,author:"-이정석-",},
            {
                quote:"마포대교는 무너졌냐?"
                ,author:"-곽철용-",},
                {
                    quote:"섣불렀나..."
                    ,author:"-최재혁-",},
                    {
                        quote:"재혁이형은 한 살 더 많잖아."
                        ,author:"-이대명-",},
                        {
                            quote:"굴복해라 평생 으롸!"
                            ,author:"-프레스코- ",}];

 const quote = document.querySelector("#quote span:first-child");
 const author = document.querySelector("#quote span:last-child");
 const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
 quote.innerText = todaysQuote.quote;
 author.innerText = todaysQuote.author;
