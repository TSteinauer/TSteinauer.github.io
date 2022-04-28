!function(w, d) {
    if (!w.HTMLInclude) {
        w.HTMLInclude = function() {
            function isInViewport(element, offset) {
                return element.getBoundingClientRect().top <= (+offset + w.innerHeight);
            }
            function ajax(url, elements) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        elements.forEach(function(element) {
                            var dataReplace = element.getAttribute("data-replace");
                            var z = xhr.responseText;
                            if (dataReplace) {
                                dataReplace.split(",").forEach(function(el) {
                                    var o = el.trim().split(":");
                                    z = z.replace(new RegExp(o[0], "g"), o[1]);
                                });
                            }
                            element.outerHTML = z;
                            var scripts = new DOMParser().parseFromString(z, 'text/html').querySelectorAll("SCRIPT");
                            var i = 0;
                            var j = scripts.length;
                            while (i < j) {
                                var newScript = d.createElement("SCRIPT");
                                scripts[i].src ? newScript.src = scripts[i].src : newScript.innerHTML = scripts[i].innerHTML;
                                d.head.appendChild(newScript);
                                i++;
                            }
                        });
                    }
                };
                xhr.open("GET", url, true);
                xhr.send();
            }
            function lazyLoad(element, offset) {
                w.addEventListener("scroll", function scrollFunc() {
                    if (isInViewport(element, offset)) {
                        w.removeEventListener("scroll", scrollFunc);
                        ajax(element.getAttribute("data-include"), [element]);
                    }
                })
            }
            var store = {};
            var dis = d.querySelectorAll('[data-include]:not([data-in])');
            var i = dis.length;
            while (i--) {
                var di = dis[i].getAttribute('data-include');
                var laziness = dis[i].getAttribute('data-lazy');
                dis[i].setAttribute("data-in", "");
                if (!laziness || (laziness && isInViewport(dis[i], laziness))) {
                    store[di] = store[di] || [];
                    store[di].push(dis[i]);
                } else {
                    lazyLoad(dis[i], laziness);
                }
            }
            for (var key in store) {
                ajax(key, store[key]);
            }
        }
    }
    w.HTMLInclude();
  }(window, document)




find = document.getElementById("find");
find.addEventListener("click",findPolygon);

function validate(x)
{
 if(x >= 1 && x <= 10 ){
     return true; 
 }
 else 
 {
     return false;
 }

}
function getShape(y)
{
    if(y == 1)
    {
        alert("Henagon!");
    }
    if(y == 2)
    {
        alert("Digon!");

    }
    if(y == 3)
    {
        alert("Trigon!");

    }
    if(y == 4)
    {
        alert("Tetragon!");

    }
    if(y == 5)
    {
        alert("Pentagon!");

    }
    if(y == 6)
    {
        alert("Hexagon!");

    }
    if(y == 7)
    {
        alert("Heptagon!");

    }
    if(y == 8)
    {
        alert("Octagon!");

    }
    if(y == 9)
    {
        alert("Enneagon!");

    }
    if(y == 10)
    {
        alert("Decagon!");

    }
  
}
function findPolygon(){
var user = window.prompt("The Sardine would like you to please enter a number from 1-10", "i.e 5");
var userInput = parseFloat(user);
var i =0;
while(i == 0)
{
    if(validate(userInput) == true)
    {
        getShape(userInput);
        i = 1;
    }
    if(validate(userInput) == false)
    {
        userInput = parseFloat(prompt("oops!!!! Please enter a valid number from 1-10", "i.e 5"));
    }

}




}