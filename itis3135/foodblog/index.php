<?php
    date_default_timezone_set('America/New_York');

?>



<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8" />
    <meta name= "viewport" content= "width= device -width, initial-scale = 1.0">
    <meta http-equiv="X-UA-Compatible" content= "ie=edge">
    <title>Food Blog</title>

    <!-- font awesome icons-->
    <link rel="stylesheet" href="css/all.css"/>

    <!-- font awesome icons-->

    <!-------- Owl carousel---------->
    <link rel="stylesheet" href="css/owl.carousel.min.css"/>
    <link rel="stylesheet" href="css/owl.theme.default.min.css"/>

    <!-- insert css-->
    <link rel ="stylesheet" href="css/style.css"/>
    <!-- insert css-->

</head>

<body>

    <!------------- navigation ---------------->
    <div class = "nav">
        <div class = "menu flex-row">
            <div class = "nav-brand">
                <a href = "#" class = "text-gray">SteinFood Blog</a>
            </div>
            <div class="toggle-collapse">
                <div class="toggle-icons">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>

            <div>
                <ul class="nav-items">
                    <li class="nav-link">
                        <a href = "#">Home</a>
                    </li>
                    <li class="nav-link">
                        <a href = "#">About</a>
                    </li>
                    <li class="nav-link">
                        <a href = "#blogs">Blogs</a>
                    </li>
                    <li class="nav-link">
                        <a href = "#gallery">Gallery</a>
                    </li>
                    <li class="nav-link">
                        <a href = "#">Resturaunt Rankings</a>
                    </li>
                </ul>
            </div>

            <div class="social text-gray">
                <a href="https://www.facebook.com/liz.steinauer"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/queen.lizabeth.xii/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/e_steinauer"><i class="fa-brands fa-twitter"></i></a>
            </div>
        </div>
    </div>
    <!------------- navigation ---------------->

    <!------------------ MAIN ---------------->
    <main>

        <!----------Site Tite----------------->
        <section class ="site-title">
            <div class="site-background">
                <h3>Family & Food</h3>
                <h1>Steinauer Family's Food Blog</h1>
                <button class="bttn">Tour</button>
            </div>
        </section>

        <!----------closing Site Tite---------->


        <!----------Blog carousel-------------->
        <section>
            <div class="blog" id="gallery">
                <div class="container">
                    <div class="owl-carousel owl-theme blogpost">
                        <div class="blogcon">
                            <img src="./Tpics/pizzawithhwar.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>Pizza at Blaze Pizza</h3>
                                <br>
                                <button class="bttn-blog">Blaze Pizza</button>
                                <span>2 minutes</span>
                            </div>
                        </div>
                        <div class="blogcon">
                            <img src="./Tpics/panamericabreakfast.jpg" alt="post-2">
                            <div class="blog-title">
                                <h3>"The Grande American Breakfast" @ Pan America</h3>
                                <button class="bttn-blog">Pan America</button>
                                <span>2 minutes</span>
                            </div>
                        </div>
                        <div class="blogcon">
                            <img src="./Tpics/optimist.jpg" alt="post-3">
                            <div class="blog-title">
                                <h3>Dumpling Lady spicy porkbelly noodles @ Optimist Hall</h3>
                                <button class="bttn-blog">Optimist Hall</button>
                                <span>2 minutes</span>
                            </div>
                        </div>
                        <div class="blogcon">
                            <img src="./Tpics/crepes.jpg" alt="post-4">
                            <div class="blog-title">
                                <h3>Crepes</h3>
                                <br>
                                <button class="bttn-blog">Crepes</button>
                                <span>2 minutes</span>
                            </div>
                        </div>
                        <div class="blogcon">
                            <video  controls = "controls"> <source src="./Tpics/cookiecake.mp4"> </video>
                            <div class="blog-title">
                                <h3>cookiecake at Drive Shack</h3>
                                <button class="bttn-blog">Drive Shack Raleigh</button>
                                <span>2 minutes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <!----------Blog carousel-------------->

        <!----------------------Site content-------------------->

        <section class ="container" id="blogs">
            <div class="site-content">
                <div class="posts">
                    <div class="post-content">
                     <div class="post-image">
                        <div>
                            <img src="./Tpics/panamericabreakfast.jpg" class="img" alt="blog2">
                        </div>
                     
                        <div class="post-info flex-row">
                            <span><i class="fas fa-user text-gray"></i>&nbsp;&nbsp;Grace Steinauer&nbsp;</span>
                            <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;March 6th, 2022&nbsp;&nbsp;</span>
                            <span><i class="fa-solid fa-comment text-gray"></i>&nbsp;7 Comments</span>
                            <span><i class="fa-solid fa-comment text-gray"></i>&nbsp;7 Comments</span>
                        </div>
                        </div>
                        <div class="post-title">
                            <a href="https://panamericanpancake.com/">Sunny Vibes at Myrtle Beach's Pan America Pancakes</a>
                            <p> I found myself catching sunny rays at Myrtle Beach over spring break. I was vactioning on a budget which
                                is how I found this great little diner which offers an afforable breakfast experience while not
                                sacrificing the quality and taste of the food.<span id="dots">...</span><span id="more"> I ordered the "Grande AM Pancake" meal which came with 2 Pancakes
                                choice between bacon or sausage (I chose sausage) and 2 eggs cooked the way you want(in my case sunny side up).
                                The eggs were runny just the way I like them and the sasuage link were perfectly snappy. The pancakes were your standard 
                                flour based pancakes and have a medium fluffy texture. The overall experience was fairly soild for about 10$(which excludes the coffee and OJ that I also got).
                                I would rate this diner a 8/10 and would recommend to any of you spring breakers.</span>  
                            </p>
                            <button onclick="reveal()" class="bttn post-bttn" id="reveal">Read More &nbsp;</button>
                         </div>
                         <!------post comments----->
                        <div class="post-comments" id="comments">

                        <?php
                            echo "<form>
                                <h2>Comments</h2>
                                <input type = 'hidden' name = 'uid' value = 'Anonymous'>
                                <input type='hidden' name ='date'  value='".date('Y-m-d H:i:s')."'>
                                <textarea name ='comment' placeholder='Type here'></textarea>
                                <button name='submit'  class='bttn' type='submit'>Submit Comment</button>
                            </form>";
                            
                            ?>
                        </div>
                        <!--X--post comments--X-->
                        </div>
                        
                        <hr>
                    <div class="post-content">
                     <div class="post-image">
                        <div>
                            <img src="./Tpics/optimist.jpg" class="img" alt="blog1">
                        </div>
                     
                        <div class="post-info flex-row">
                            <span><i class="fas fa-user text-gray"></i>&nbsp;&nbsp;Elizabeth Steinauer&nbsp;</span>
                            <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;April 18th, 2022&nbsp;&nbsp;</span>
                            <span><i class="fa-solid fa-comment text-gray"></i>&nbsp;3 Comments</span>
                        </div>
                        </div>
                        <div class="post-title">
                            <a href="https://optimisthall.com/">Fun Times At Optimist Hall</a>
                            <p>Went on a birthday date with my hubby at Optimist Hall in Charlotte. We both got the spicy pork belly noodles from "Dumpling Lady". 
                                The food was quite frankly MID. The dish was way to oily and the pork belly was scarce and terribly thin.<span id="dots2">...</span><span id="more2"> Overall 4/10 would not recommend.</span>
                            </p>
                            <button class="bttn post-bttn" id="reveal2" onclick="reveal2()">Read More &nbsp;</button>
                         </div>
                        </div>
                        <hr>
                        </div>
                        <aside class="sidebar">
                            <h1>Sidebar</h1>
                        </aside>
                        </div>
        </section>


        <!----------------------Site content-------------------->

    </main>
    
    <!------------------ closing MAIN ------------->




    <!-- script-->
    <script src="./Js/Jquery3.6.0.min.js"></script>

     <!-------- Owl carousel---------->
     <script src="./Js/owl.carousel.min.js"></script>

    <script src ="./Js/scripts.js"></script>
    <!-- closing script-->
</body>

</html>