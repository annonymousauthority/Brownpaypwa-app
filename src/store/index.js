import { createStore } from "vuex";





export default createStore({
  state: {
    articles: [{
          "id": 1,
          "img": "https://images.unsplash.com/photo-1620808335012-0db31a306eb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
          "title": "Exciting News for the crypto Lovers",
          "heading": "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ut voluptas neque voluptatibus cumque fuga ipsam, dolorem dolore vitae accusamus necessitatibus ducimus. Est quos velit reprehenderit dolor. Quam, aliquam repellendus? Dignissimos deleniti obcaecati aperiam tenetur quis consequuntur labore libero velit?",
          "date": " 13 Jul 2020"
        },
        {
          "id": 2,
          "img": "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1982&q=80",
          "title": "When is the best time to invest in Crypto",
          "heading": "Brownpay is the best crypto website in the world",
          "date": " 13 Jul 2020"
        },
        {
          "id": 3,
          "img": "https://images.unsplash.com/photo-1612696877544-9796e268bfcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=697&q=80",
          "title": "Trading made simple",
          "heading": "Are you looking to start your crypto journey?",
          "date": " 14 Jul 2020"
        },
        {
          "id": 4,
          "img": "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
          "title": "When is the best time to trade in crypto ",
          "heading": "Ethereum is at the highest peak in History",
          "date": " 15 Jul 2020"
        },
        {
          "id": 5,
          "img": "https://images.unsplash.com/photo-1627454753260-6c2f339c73fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
          "title": "When is the best time to invest in Bitcoin",
          "heading": "Brownpay is the best crypto website in the world"
        },
        {
          "id": 6,
          "img": "https://images.unsplash.com/photo-1622102814886-15de05e11971?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
          "title": "Latest increase in price of Bitcoin, best time to Invest?",
          "heading": "Brownpay is the best crypto website in the world"
        },
        {
          "id": 7,
          "img": "https://images.unsplash.com/photo-1620633759441-b4db8637d1f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"
        },
        {
          "id": 8,
          "img": "https://images.unsplash.com/photo-1625207952857-84cd914164b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"
        },
        {
          "id": 9,
          "img": "https://images.unsplash.com/photo-1625647302186-53ae1b6607ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"
        },
        {
          "id": 10,
          "img": "https://images.unsplash.com/photo-1583752028088-91e3e9880b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"
        },

        {

          "id": 11,
          "img": "https://images.unsplash.com/photo-1583752028088-91e3e9880b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        }, {

          "id": 12,
          "img": "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        }, {

          "id": 13,
          "img": "https://images.unsplash.com/photo-1583752028088-91e3e9880b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        }, {

          "id": 14,
          "img": "https://images.unsplash.com/photo-1627538993300-61f001db23e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        }, {

          "id": 15,
          "img": "https://images.unsplash.com/photo-1612696877544-9796e268bfcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        },
        {

          "id": 16,
          "img": "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2016&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        },
        {

          "id": 17,
          "img": "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2016&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        },
        {

          "id": 18,
          "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        },
        {

          "id": 19,
          "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        },
        {

          "id": 20,
          "img": "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1116&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        },
        {

          "id": 21,
          "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        },
        {

          "id": 22,
          "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        },
        {

          "id": 23,
          "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        },
        {

          "id": 24,
          "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        },
        {

          "id": 25,
          "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        },
        {

          "id": 26,
          "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        },
        {

          "id": 27,
          "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        },
        {

          "id": 28,
          "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        },
        {

          "id": 29,
          "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        },
        {

          "id": 30,
          "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"

        }
    ],

    learn: [
      {
        
          "id": 1,
          "img": "https://images.unsplash.com/photo-1583752028088-91e3e9880b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"    

      },
      {
        
          "id": 2,
          "img": "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"    

      },
      {
        
          "id": 3,
          "img": "https://images.unsplash.com/photo-1583752028088-91e3e9880b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"    

      },
      {
        
          "id": 4,
          "img": "https://images.unsplash.com/photo-1627538993300-61f001db23e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"    

      },
      {
        
          "id": 5,
          "img": "https://images.unsplash.com/photo-1612696877544-9796e268bfcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"    

      },
      {
        
          "id": 6,
          "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
          "title": "Expert opinions on Ethereum Trading",
          "heading": "Brownpay is the best crypto website in the world"    

      }
    ],

    tips: [
       {

         "id": 1,
         "img": "https://images.unsplash.com/photo-1583752028088-91e3e9880b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       }, {

         "id": 2,
         "img": "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       }, {

         "id": 3,
         "img": "https://images.unsplash.com/photo-1583752028088-91e3e9880b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       }, {

         "id": 4,
         "img": "https://images.unsplash.com/photo-1627538993300-61f001db23e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       }, {

         "id": 5,
         "img": "https://images.unsplash.com/photo-1612696877544-9796e268bfcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       }, {

         "id": 6,
         "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       },
        {

         "id": 7,
         "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       },
        {

         "id": 8,
         "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       },
        {

         "id": 9,
         "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       },
        {

         "id": 10,
         "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       },
        {

         "id": 11,
         "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       },
        {

         "id": 12,
         "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       },
        {

         "id": 13,
         "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       },
        {

         "id": 14,
         "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       },
        {

         "id": 15,
         "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       },
        {

         "id": 16,
         "img": "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2016&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       },
        {

         "id": 17,
         "img": "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2016&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       },
        {

         "id": 18,
         "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       },
        {

         "id": 19,
         "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

       },
        {

         "id": 20,
         "img": "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80",
         "title": "Expert opinions on Ethereum Trading",
         "heading": "Brownpay is the best crypto website in the world"

        }
      ]
      
  },
  mutations: {},
  actions: {},
  modules: {},
});
