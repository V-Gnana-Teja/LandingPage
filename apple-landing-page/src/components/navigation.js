import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

export const Navigation = (props) => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark " >
    <div class="container justify-content-center">
        <a class="navbar-brand mr-auto" href="#" >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" ><path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path></svg>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown" mx-22>
            
            <ul class="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                    <a class="nav-link "  href="https://www.apple.com/us/shop/goto/store" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                store</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                 <ul>               
                    <li><a className="dropdown-item" href="#">Shop </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/us/shop/goto/store">Shop the latest</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/us/shop/goto/buy_mac">Mac</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/us/shop/goto/buy_ipad">iPad</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/us/shop/goto/buy_iphone">iPhone</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/us/shop/goto/buy_watch">Apple Watch</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/us/shop/goto/buy_vision">Apple Vision Pro</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/us/shop/goto/buy_accessories">Accessories</a></li>             
                </ul>

                <ul>
                    <li  ><a className="dropdown-item" href="#">Quick Links</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/retail/">Find a Store</a></li>
                    <li><a className="dropdown-item" href="https://secure.store.apple.com/shop/order/list">Order Status</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/trade-in">Apple Trade In</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/browse/finance/instant_credit"> Financing</a></li>
                
                </ul>

                <ul>
               
                    <li><a className="dropdown-item" href="#">Shop Special Stores</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/refurbished">Certified Refurbished</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/education-pricing">Education </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/retail/business/">Business</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/browse/home/veterans_military">Veterans and Military</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/r/store/government/"> Government</a></li>             
               </ul>
              
            </div>
         </li>


         <li className="nav-item dropdown">
                    <a class="nav-link "  href="https://www.apple.com/mac" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Mac</a>
                
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                    <li><a className="dropdown-item" href="">Explore Mac </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/mac/">Explore All Mac</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/macbook-air/">MacBook Air</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/macbook-pro/">MacBook Pro</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/imac/">iMac</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/mac-mini/">Mac Mini</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/mac-studio/">Mac Studio</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/mac-pro/">Mac Pro</a></li>             
                    <li><a className="dropdown-item" href="https://www.apple.com/displays/">Displays</a></li>             
                    <li><a className="dropdown-item" href="https://www.apple.com/mac/compare/">Compare Mac</a></li>             
                    <li><a className="dropdown-item" href="https://www.apple.com/mac/mac-does-that/">Mac Does That</a></li>             
                </ul>
             
	            <ul>

                    <li><a className="dropdown-item" href="#">Shop Mac</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/us/shop/goto/buy_mac">Shop Mac</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/us/shop/goto/mac/accessories">Mac Accessories</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/us/shop/goto/trade_in">Apple Trade In</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/us/shop/goto/payment_plan"> Financing</a></li>
          	    </ul>


                <ul>
                    <li><a className="dropdown-item" href="#">More From Mac</a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/mac?cid=gn-ols-mac-psp-prodfly">Mac Support</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/support/products/mac/">AppleCare+ for Mac</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/macos/sonoma/">macOS Sonoma</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apps/">Apps by Apple</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/macos/continuity/">Continuity</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/icloud/"> iCloud+</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/business/mac/"> Mac For Business</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/education/"> Education</a></li>
     
                </ul>

	</div>
	</li>
              
    <li className="nav-item dropdown">
         <a class="nav-link "  href="https://www.apple.com/ipad" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> iPad</a>
                
       <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                    <li><a className="dropdown-item" href="#">Explore iPad </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/ipad/">Explore All iPad</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/ipad-air/">iPad Air</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/ipad-pro/">iPad Pro</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/ipad-select/">iPad</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/ipad-mini/">iPad Mini</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-pencil/">Apple Pencil</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/ipad-keyboards/">Keyboard</a></li>                     
                    <li><a className="dropdown-item" href="https://www.apple.com/ipad/compare/">Compare iPad</a></li>             
                    <li><a className="dropdown-item" href="https://www.apple.com/ipad/why-ipad/">Why Ipad</a></li>             
                </ul>
             
	            <ul>

                    <li><a className="dropdown-item" href="">Shop iPad</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/us/shop/goto/buy_ipad">Shop iPad</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/us/shop/goto/ipad/accessories">iPad Accessories</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/us/shop/goto/trade_in">Apple Trade In</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/us/shop/goto/payment_plan"> Financing</a></li>
          	    </ul>


                <ul>
                    <li><a className="dropdown-item" href="">More From iPad</a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/ipad?cid=gn-ols-ipad-psp-prodfly">iPad Support</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/support/products/ipad/">AppleCare+ for iPad</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/ipados/ipados-17/">iPadOS 17</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apps/">Apps by Apple</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/icloud/"> iCloud+</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/education/"> Education</a></li>
     
                </ul>

	   </div>
	</li>
              
    <li className="nav-item dropdown">
         <a class="nav-link "  href="https://www.apple.com/iPhone" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> iPhone</a>
                
       <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                    <li><a className="dropdown-item" href="#">Explore iPhone </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/iphone/">Explore All iPhone</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/iphone-15-pro/">iPhone 15Pro</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/iphone-15/">iPhone 15</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/buy-iphone/iphone-14">iPhone 14</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/buy-iphone/iphone-13">iPhone 13</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/iphone-se/">iPhone SE</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/iphone/compare/">Compare iPhone</a></li>             
                    <li><a className="dropdown-item" href="https://www.apple.com/iphone/switch/">Switch From Android</a></li>             
                </ul>
             
	            <ul>

                    <li><a className="dropdown-item" href="">Shop iPhone</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/buy-iphone">Shop iPhone</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/iphone/accessories">iPhone Accessories</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/trade-in">Apple Trade In</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/buy-iphone/carrier-offers">Carrier Deals At Apple</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/browse/financing"> Financing</a></li>
          	    </ul>


                <ul>
                    <li><a className="dropdown-item" href="">More From iPhone</a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/iphone?cid=gn-ols-iphone-psp-prodfly">iPhone Support</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/support/products/iphone/">AppleCare+ for iPhone</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/ios/ios-17/">iOS 17</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apps/">Apps by Apple</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/privacy/">iPhone Privacy</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/icloud/"> iCloud+</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/wallet/"> Wallet, Pay, Card</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/siri/"> Siri</a></li>
     
                </ul>

	   </div>
	</li>
              
    <li className="nav-item dropdown">
                    <a class="nav-link "  href="https://www.apple.com/watch" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Watch</a>
                
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                    <li><a className="dropdown-item" href="#">Explore Watch </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/watch/">Explore All Apple Watch</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-watch-series-9/">Apple Watch series 9</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-watch-ultra-2/">Apple Watch Ultra 2</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-watch-se/">Apple Watch SE</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-watch-nike/">Apple Watch Nike</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-watch-hermes/">Apple Watch Hermes</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/watch/compare/">Compare Watch</a></li>             
                    <li><a className="dropdown-item" href="https://www.apple.com/watch/why-apple-watch/">Why Apple Watch</a></li>                       
                </ul>
             
	            <ul>

                    <li><a className="dropdown-item" href="">Shop Watch</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/buy-watch">Shop Apple Watch</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/studio/apple-watch">Shop Watch Studio</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/watch/bands">Apple Watch Bands</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/watch/accessories">Apple Watch Accessories</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/trade-in">Apple Trade In</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/browse/financing"> Financing</a></li>
          	    </ul>


                <ul>
                    <li><a className="dropdown-item" href="">More From Watch</a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/watch?cid=gn-ols-watch-psp-prodfly">Apple Watch Support</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/support/products/watch/">AppleCare+ </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/watchos/watchos-10/">WatchOS 10</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apps/">Apps by Apple</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-fitness-plus/"> Apple Fitness+</a></li>
     
                </ul>

	</div>
	</li>  

    <li className="nav-item dropdown">
                    <a class="nav-link "  href="https://www.apple.com/apple-vision-pro/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Vision</a>
                
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                    <li><a className="dropdown-item" href="#">Explore Vision </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-vision-pro/"> Apple Vision Pro</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-vision-pro/guided-tour/">Guided tour</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-vision-pro/specs/">Tech Specs</a></li>                   
                </ul>
             
	            <ul>

                    <li><a className="dropdown-item" href="">Shop Vision</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/buy-vision">Shop Apple Vision Pro</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/vision/accessories">Apple Vision Pro Accessories</a></li>
                    <li><a className="dropdown-item" href="https://idmsa.apple.com/IDMSWebAuth/signin?appIdKey=e48e92b8e87335f23bb1750ece469d3bbbe1ab73117d9ec66246b5f5a02dcf2c&language=US-EN&rv=1&path=%2Fretail%2Finstore-shopping-session%2Fsession-selection%2F%3Ftopic%3Dvisionpro%26resToken%3Db9190ca4-e8c2-58b3-1cde-44660b626d32">Book a Demo</a></li>
          	    </ul>


                <ul>
                    <li><a className="dropdown-item" href="">More From Vision</a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/apple-vision-pro?cid=gn-nav-vision-psp-prodfly">Apple Vision Pro Support</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/support/products/apple-vision-pro/">AppleCare+ </a></li>
                </ul>

	</div>
	</li>  


    <li className="nav-item dropdown">
                    <a class="nav-link "  href="https://www.apple.com/airpods/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               AirPods</a>
                
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                    <li><a className="dropdown-item" href="#">Explore AirPods </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/airpods-pro/"> AirPods Pro 2nd generation</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/airpods-2nd-generation//">AirPods 2nd generation</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/airpods-3rd-generation/">AirPods 3rd generation</a></li>               
                    <li><a className="dropdown-item" href="https://www.apple.com/airpods-max/">AirPods Max</a></li>               
                    <li><a className="dropdown-item" href="https://www.apple.com/airpods/compare/">Compare AirPods</a></li>               
                </ul>
             
	            <ul>

                    <li><a className="dropdown-item" href="">Shop AirPods</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/accessories/all/headphones-speakers?f=apple-overear-sport&fh=47d1%2B3214%2B45aa%2B45ab&page=1">Shop AirPods </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/accessories/all/headphones-speakers?f=headphoneacc&fh=47d1%2Be62115&page=1">Apple AirPods Accessories</a></li>
          	    </ul>


                <ul>
                    <li><a className="dropdown-item" href="">More From AirPods</a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/airpods?cid=gn-ols-airpods-psp-prodfly"> AirPods Support</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/support/products/headphones/">AppleCare+ for HeadPhones </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-music/">Apple Music</a></li>
                </ul>

	</div>
	</li>  

    <li className="nav-item dropdown">
                    <a class="nav-link "  href="https://www.apple.com/tv-home/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               TV & Home</a>
                
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                    <li><a className="dropdown-item" href="#">Explore TV & Home </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/tv-home/"> Explore TV & Home </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-tv-4k/">Apple TV 4K</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/homepod-2nd-generation/">HomePod</a></li>               
                    <li><a className="dropdown-item" href="https://www.apple.com/homepod-mini/">HomePod mini</a></li>               
                </ul>
             
	            <ul>

                    <li><a className="dropdown-item" href="">Shop TV & Home</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/buy-tv/apple-tv-4k">Shop Apple TV 4K </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/buy-homepod/homepod">Shop HomePod</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/buy-homepod/homepod-mini">Shop HomePod mini</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/product/MNC73AM/A/siri-remote">Shop Siri Remote</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/smart-home/accessories"> TV & Home Accessories</a></li>
          	    </ul>


                <ul>
                    <li><a className="dropdown-item" href="">More From TV & Home</a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/apple-tv?cid=gn-ols-appletv-psp-prodfly"> Apple TV Support</a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/homepod?cid=gn-ols-homepod-psp-prodfly">HomePod Support </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/support/products/">Apple Care</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-tv-app/">Apple TV app</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-tv-plus/">Apple TV+</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/home-app/">Home app</a></li>
                    <li><a className="dropdown-item" href="https://apple.com/apple-music/">Apple Music</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/siri/">Siri</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/airplay/">AirPlay</a></li>
                </ul>

	</div>
	</li>  

    <li className="nav-item dropdown">
                    <a class="nav-link "  href="https://www.apple.com/services/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Entertainment</a>
                
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                    <li><a className="dropdown-item" href="#">Explore Entertainment</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/services/"> Explore Entertainment</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-one/">Apple one</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-tv-plus/">Apple TV+</a></li>               
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-music/">Apple Music</a></li>               
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-arcade/">Apple Arcade</a></li>               
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-fitness-plus/">Apple Fitness+</a></li>               
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-news/">Apple News+</a></li>               
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-podcasts/">Apple Podcasts</a></li>               
                    <li><a className="dropdown-item" href="https://www.apple.com/apple-books/">Apple Books</a></li>               
                    <li><a className="dropdown-item" href="https://www.apple.com/app-store/">App Store</a></li>               
                </ul>
             
	            <ul>

                    <li><a className="dropdown-item" href="">Support</a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/tv?cid=gn-ols-tvplus-psp-prodfly">Apple TV+ Support </a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/music?cid=gn-ols-music-psp-prodfly">Apple Music Support</a></li>
          	    </ul>

	</div>
	</li>  

    <li className="nav-item dropdown">
                    <a class="nav-link "  href="https://www.apple.com/shop/accessories/all" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Accessories</a>
                
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                    <li><a className="dropdown-item" href="#">Shop Accessories</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/accessories/all"> Shop All Accessories</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/mac/accessories">Mac</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/ipad/accessories">iPad</a></li>               
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/iphone/accessories"> iPhone</a></li>               
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/watch/accessories">Apple Watch</a></li>               
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/vision/accessories">Apple Vision Pro</a></li>               
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/accessories/all/headphones-speakers?f=apple-overear-sport&fh=47d1%2B3214%2B45aa%2B45ab&page=1"> AirPods</a></li>               
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/smart-home/accessories">TV & Home</a></li>                         
                </ul>
             
	            <ul>

                    <li><a className="dropdown-item" href="">Explore Accessories</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/accessories/all/made-by-apple">Made by Apple </a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/shop/accessories/all/beats-featured">Beats by Dr. Dre</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/airtag/">AirTag</a></li>
          	    </ul>

	</div>
	</li>  

    
    <li className="nav-item dropdown">
                    <a class="nav-link "  href="https://www.apple.com/support/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Support</a>
                
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                    <li><a className="dropdown-item" href="#">Explore Support </a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/iphone?cid=gn-ols-iphone-psp-explore"> iPhone </a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/mac?cid=gn-ols-mac-psp-explore">Mac</a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/ipad?cid=gn-ols-ipad-psp-explore">iPad</a></li>               
                    <li><a className="dropdown-item" href="https://support.apple.com/watch?cid=gn-ols-watch-psp-explore">Watch </a></li>               
                    <li><a className="dropdown-item" href="https://support.apple.com/apple-vision-pro?cid=gn-nav-vision-psp-explore">Apple Vision Pro </a></li>               
                    <li><a className="dropdown-item" href="https://support.apple.com/airpods?cid=gn-ols-airpods-psp-explore">AirPods </a></li>               
                    <li><a className="dropdown-item" href="https://support.apple.com/music?cid=gn-ols-music-psp-explore">Music </a></li>               
                    <li><a className="dropdown-item" href="https://support.apple.com/tv?cid=gn-ols-tv-psp-explore">TV </a></li>               
                    <li><a className="dropdown-item" href="https://support.apple.com/?cid=gn-ols-home-hp-explore">Explore Support </a></li>               
                </ul>
             
	            <ul>

                    <li><a className="dropdown-item" href="">Get Help</a></li>
                    <li><a className="dropdown-item" href="https://discussions.apple.com/welcome?cid=gn-com-community-lp-get_help">Community </a></li>
                    <li><a className="dropdown-item" href="https://checkcoverage.apple.com/?locale=en_US&cid=gn-ols-checkcoverage-lp-get_help">Check Coverage</a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/repair?cid=gn-ols-repair-lp-get_help">Repair</a></li>
                    <li><a className="dropdown-item" href="https://getsupport.apple.com/?caller=support.header&cid=gn-ols-contact-mgs_lp-get_help">Contact Us</a></li>
          	    </ul>


                <ul>
                    <li><a className="dropdown-item" href="">Helpful Topics</a></li>
                    <li><a className="dropdown-item" href="https://www.apple.com/support/products/?cid=gn-ols-home-acpp-helpful_topics"> Get AppleCare+</a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/apple-id?cid=gn-ols-appleid-psp-helpful_topics">Apple ID & Password</a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/billing?cid=gn-ols-billing-collection-helpful_topics">Billing & Subscriptions</a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/find-my?cid=gn-ols-findmy-collection-helpful_topics">Apple TV appFind My</a></li>
                    <li><a className="dropdown-item" href="https://support.apple.com/accessibility?cid=gn-ols-accessibility-psp-helpful_topics">Accessibility</a></li>
                </ul>

	</div>
	</li>  
              
              
                <li class="nav-item dropdown">
                    
                    <a class="nav-link active" aria-current="page" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" style={{ fill: "rgba(255, 248, 248, 1)" }}>
                            <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/>
                        </svg>
                    </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
         <ul>

            <li>
              <form className="form-inline my-2 my-lg-0">
                
             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>

              <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> Search </button>

           </form>
            </li>
            <li>  <a className="dropdown-item" href="#">  Quick Links</a></li>

             <li> <a className="dropdown-item" href="#"> &rarr; If you forgot your Apple ID password </a></li>

             <li>  <a className="dropdown-item" href="#"> &rarr; If you forgot the passcode for your iPhone, iPad, or iPod touch </a></li>

             <li> <a className="dropdown-item" href="#">&rarr; How to cancel a subscription from Apple</a></li>

             <li>  <a className="dropdown-item" href="#">&rarr; Update IOS on your device</a></li>

             <li> <a className="dropdown-item" href="#">&rarr; Contact Apple Support</a></li>

        </ul>

        </div>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" style={{fill: "rgba(255, 248, 248, 1)"}}><path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"></path></svg>
                    </a>
                </li>
                   </ul>            
           
            
           

        </div>
    </div>
</nav>  


    <nav class="navbar navbar-expand-lg navbar-dark custom-bg-color ">
    <div class="container-fluid">
        <div class="row w-100">
            
        <div class="col-5 d-flex align-items-center">
              <ul class="navbar-nav flex-row">
                    <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                        <a class="navbar-brand " style={{color: 'black'}}>Apple One</a>
                    </li>
              </ul>
            </div>

            <div class="col-7 d-flex justify-content-end align-items-center">

                <button type="button" class="btn btn-dark rounded-button">Try it free*</button>
            </div>

        </div>
    </div>
</nav>  
</>

  );
};






 