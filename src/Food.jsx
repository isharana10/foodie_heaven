import React from 'react';

import Burger from './Resources/Burger.jpg'
import Pizza from './Resources/Pizza.jpg';
import Fries from './Resources/Fries.jpg';
import Pasta from './Resources/Pasta.jpg';  
import Manchurian from './Resources/Manchurian.jpg'
import Springroll from './Resources/Springroll.jpg';
import Sandwitch from './Resources/Sandwitch.jpg';
import Margreta from './Resources/Margreta.jpg';
import Redpasta from './Resources/Redpasta.jpg';
import Steammomos from './Resources/Steammomos.jpg';
import Noodles from './Resources/Noodles.jpg';
import Friedmomos from './Resources/Friedmomos.jpg';
import Cappuchino3 from './Resources/Cappuchino3.jpg';
import Cucumber from './Resources/Cucumber.jpg';
import Milkoats from './Resources/Milkoats.jpg';
import Ice2 from './Resources/Ice2.jpg';  
import Espresso2 from './Resources/Espresso2.jpg';
import Sprout from './Resources/Sprout.jpg';
import Veg2 from './Resources/Veg2.jpg';
import Shakes2 from './Resources/Shakes2.jpg';     
import Productcard from './Productcard';
import './App.css';

export default function Food() {

 
  return (
    <>
<div className='cards1'>
        <Productcard 
          img_src={Burger}
          title="BURGER COMBO" 
          price={99}  
          description="A great burger has a balance of crunch, creaminess, freshness, saltiness, and tang to contrast with the crusty-edged meat and soft bun."
        /><br/>
        
        <Productcard
          img_src={Pizza}
          title="PIZZA" 
          price={169}  
          description="This special pizza is made from soft healthy bread dough topped with tomatoes, cheese, and many flavorful spices."
        /><br/>

        <Productcard 
          img_src={Fries}
          title="FRIES AND COKE" 
          price={60}  
          description="A delicious combo of crispy fries with a refreshing coke.Fries are a popular side dish or snack consisting of deep-fried potatoes."
        /><br/>

        <Productcard 
          img_src={Pasta}
          title="WHITE SAUCE PASTA" 
          price={150}  
          description=" Creamy and cheesy pasta is the ultimate comfort food! Delicious creamy white sauce pasta with a mix of Italian spices."
        /><br/>
      </div>

      <div className='cards2'>
        <Productcard 
          img_src={Manchurian}
          title="MANCHURIAN" 
          price={159}  
          description="A delightful Indo-Chinese dish with fried balls in a spicy sauce. It is made up of healthy vegetables and paneer. "
        /><br/>

        <Productcard 
          img_src={Springroll}
          title="SPRING ROLLS" 
          price={100}  
          description="Crispy spring rolls filled with a delicious mix of veggies.It is the explosion of flavours,vegetables."
        /><br/>

        <Productcard 
          img_src={Sandwitch}
          title="GRILLED SANDWITCH" 
          price={140}  
          description="Made with bread, butter,vegetables,chuntey,cheese and ground spices."
        /><br/>

        <Productcard 
          img_src={Margreta}
          title="MARGRETA PIZZA" 
          price={149} 
          description="Pizza is the emotion of people and it must be tatsy and healthy. A classic Margherita pizza with fresh mozzarella and basil."
        /><br/>    
      </div>

      <div className='cards3'>
        <Productcard 
          img_src={Redpasta}
          title="RED SAUCE PASTA" 
          price={169}
          description="Creamy and saucy pasta full of vegetables is the ultimate comfort food! Italian pasta in a rich and spicy red sauce."
        /><br/> 

        <Productcard
          img_src={Steammomos}
          title="STEAM VEG MOMOS" 
          price={110}  
          description="Soft steamed momos filled with flavorful spices,veggie stuffing ,paneer stuffing  and some special ingrdients."
        /><br/> 

        <Productcard 
          img_src={Noodles}
          title="VEG NOODLES" 
          price={140}  
          description="Stir-fried noodles with a mix of fresh vegetables.Made with a hint of black pepper and sauces"
        /><br/> 

        <Productcard 
          img_src={Friedmomos}
          title="FRIED VEG MOMOS" 
          price={110}  
          description="Crispy fried momos stuffed with veggies,ground spices,paneer and fried with the best quality if butter."
        /><br/> 
      </div>
         
      <div className='cards4'>
      <Productcard 
          img_src={Veg2}
          title="VEG THALI" 
          price={199}  
          description="Veg thali is the best food option when you are hungry and  want home made food.it include two veggies,rice,raita and two tandoori rottis."
        /><br/> 

        <Productcard
          img_src={Cucumber}
          title="CUCUMBER SALAD" 
          price={140}  
          description="Its my take on the cucumber salad,complete with crispy,cooling cucumbers,red onions ,yogurt and some spices."
        /><br/> 

        <Productcard 
          img_src={Espresso2}
          title="ESPRESSO" 
          price={120}  
          description="It is a concentrated coffee beverages made by forcing hot water under high pressure through finely grinded coffee beans ."
        /><br/> 

        <Productcard 
          img_src={Sprout}
          title="SPROUTS SALAD" 
          price={210} 
          description="Sprouts salad made with mung beans sprouts,fresh veggies, herbs and lemon.It is very healthy for us."
        /><br/> 
      </div>
      <div className='cards5'>
      <Productcard 
          img_src={Shakes2}
          title="SHAKES" 
          price={149}  
          description="A mixture of sweet,cold,blended beverage typically made with milk,ice cream and flavouring like choclate syrup or fruits."
          /><br/> 

        <Productcard
          img_src={Ice2}
          title="ICE-CREAMS" 
          price={79}  
          description="This ice cream is made up of popular,healthy diary products like milk, cream,often combined with sweeteners,flavourings and fruits."
        /><br/> 

        <Productcard 
          img_src={Milkoats}
          title=" MILK OATS" 
          price={230}  
          description="This is the perfect and healthy brekfast for person.It includes milk and oats with fruits."
        /><br/> 

        <Productcard 
          img_src={Cappuchino3}
          title="CAPPUCCINO" 
          price={99} 
          description="A cappuccino is made up of equal parts of espresso,steamed milk, and milkfoams,resulting in a balnced creamy and chocholaty."
        /><br/> 
      </div>
    </>
  );
};
