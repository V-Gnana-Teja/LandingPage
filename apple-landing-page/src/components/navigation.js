import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

export const Navigation = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path></svg>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown" mx-22>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://www.apple.com/us/shop/goto/store">store</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://www.apple.com/mac/">Mac</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://www.apple.com/ipad/">iPad</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://www.apple.com/iphone/">iPhone</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://www.apple.com/watch/">Watch</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://www.apple.com/apple-vision-pro/">Vision</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://www.apple.com/airpods/">Airpods</a>
                </li>
                <li class="nav-item" >
                    <a class="nav-link active" aria-current="page" href="https://www.apple.com/tv-home/">Tv & Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://www.apple.com/services/">Entertainment</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://www.apple.com/shop/accessories/all">Accessories</a>
                </li>
                <li class="nav-item" >
                    <a class="nav-link active" aria-current="page" href="https://www.apple.com/support/">Support</a>
                </li>
                
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
               
            </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>  
            
          

        </div>
    </div>
</nav>

  );
};

