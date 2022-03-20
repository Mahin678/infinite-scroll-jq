

 $(document).ready(function(){
  

var scrollLoad = true;

let arr = [
    {value:'1 Sed tellus magna, pellentesque ut venenatis eu, molestie eget odio. Maecenas id finibus nisl. Aliquam et odio ante. Sed suscipit tortor mauris, a porttitor tortor accumsan eu. Etiam mauris magna, sodales sit amet cursus vel, hendrerit non arcu. Nunc non vestibulum arcu, eu fringilla orci. Integer egestas risus ultrices ipsum finibus pellentesque. Morbi lacinia felis dui. In eget lectus at elit commodo bibendum non sed ligula. Pellentesque dignissim, ante eget condimentum tincidunt, lacus urna consequat dui, a egestas lorem ligula ac odio. Duis arcu risus, bibendum sed condimentum et, efficitur vitae nulla. Nullam convallis quis sem id iaculis'},
    {value:'2 Sed tellus magna, pellentesque ut venenatis eu, molestie eget odio. Maecenas id finibus nisl. Aliquam et odio ante. Sed suscipit tortor mauris, a porttitor tortor accumsan eu. Etiam mauris magna, sodales sit amet cursus vel, hendrerit non arcu. Nunc non vestibulum arcu, eu fringilla orci. Integer egestas risus ultrices ipsum finibus pellentesque. Morbi lacinia felis dui. In eget lectus at elit commodo bibendum non sed ligula. Pellentesque dignissim, ante eget condimentum tincidunt, lacus urna consequat dui, a egestas lorem ligula ac odio. Duis arcu risus, bibendum sed condimentum et, efficitur vitae nulla. Nullam convallis quis sem id iaculis'},
    {value:'3 Sed tellus magna, pellentesque ut venenatis eu, molestie eget odio. Maecenas id finibus nisl. Aliquam et odio ante. Sed suscipit tortor mauris, a porttitor tortor accumsan eu. Etiam mauris magna, sodales sit amet cursus vel, hendrerit non arcu. Nunc non vestibulum arcu, eu fringilla orci. Integer egestas risus ultrices ipsum finibus pellentesque. Morbi lacinia felis dui. In eget lectus at elit commodo bibendum non sed ligula. Pellentesque dignissim, ante eget condimentum tincidunt, lacus urna consequat dui, a egestas lorem ligula ac odio. Duis arcu risus, bibendum sed condimentum et, efficitur vitae nulla. Nullam convallis quis sem id iaculis'},
    {value:'4 Sed tellus magna, pellentesque ut venenatis eu, molestie eget odio. Maecenas id finibus nisl. Aliquam et odio ante. Sed suscipit tortor mauris, a porttitor tortor accumsan eu. Etiam mauris magna, sodales sit amet cursus vel, hendrerit non arcu. Nunc non vestibulum arcu, eu fringilla orci. Integer egestas risus ultrices ipsum finibus pellentesque. Morbi lacinia felis dui. In eget lectus at elit commodo bibendum non sed ligula. Pellentesque dignissim, ante eget condimentum tincidunt, lacus urna consequat dui, a egestas lorem ligula ac odio. Duis arcu risus, bibendum sed condimentum et, efficitur vitae nulla. Nullam convallis quis sem id iaculis'},
    {value:'5 Sed tellus magna, pellentesque ut venenatis eu, molestie eget odio. Maecenas id finibus nisl. Aliquam et odio ante. Sed suscipit tortor mauris, a porttitor tortor accumsan eu. Etiam mauris magna, sodales sit amet cursus vel, hendrerit non arcu. Nunc non vestibulum arcu, eu fringilla orci. Integer egestas risus ultrices ipsum finibus pellentesque. Morbi lacinia felis dui. In eget lectus at elit commodo bibendum non sed ligula. Pellentesque dignissim, ante eget condimentum tincidunt, lacus urna consequat dui, a egestas lorem ligula ac odio. Duis arcu risus, bibendum sed condimentum et, efficitur vitae nulla. Nullam convallis quis sem id iaculis'},
    {value:'6 Sed tellus magna, pellentesque ut venenatis eu, molestie eget odio. Maecenas id finibus nisl. Aliquam et odio ante. Sed suscipit tortor mauris, a porttitor tortor accumsan eu. Etiam mauris magna, sodales sit amet cursus vel, hendrerit non arcu. Nunc non vestibulum arcu, eu fringilla orci. Integer egestas risus ultrices ipsum finibus pellentesque. Morbi lacinia felis dui. In eget lectus at elit commodo bibendum non sed ligula. Pellentesque dignissim, ante eget condimentum tincidunt, lacus urna consequat dui, a egestas lorem ligula ac odio. Duis arcu risus, bibendum sed condimentum et, efficitur vitae nulla. Nullam convallis quis sem id iaculis'},
    {value:'7 Sed tellus magna, pellentesque ut venenatis eu, molestie eget odio. Maecenas id finibus nisl. Aliquam et odio ante. Sed suscipit tortor mauris, a porttitor tortor accumsan eu. Etiam mauris magna, sodales sit amet cursus vel, hendrerit non arcu. Nunc non vestibulum arcu, eu fringilla orci. Integer egestas risus ultrices ipsum finibus pellentesque. Morbi lacinia felis dui. In eget lectus at elit commodo bibendum non sed ligula. Pellentesque dignissim, ante eget condimentum tincidunt, lacus urna consequat dui, a egestas lorem ligula ac odio. Duis arcu risus, bibendum sed condimentum et, efficitur vitae nulla. Nullam convallis quis sem id iaculis'}
]
var lastIndex = 0;

$(window).scroll(function() {
    
// console.log($('body').scrollTop());
// console.log($(window).scrollTop( $("#data").offset().top ))
var scrollPos = $("#data").scrollTop();
console.log(scrollPos);
    // console.log($(document).height() ,'doc height')
    // console.log($(window).height(), 'window height')
    // console.log($(window).scrollTop(), 'top height')
   
    if (true) {
        // console.log(1++);x
        // $('#scroll-data').append(`<p style="background-color: red;">  Sed tellus magna, pellentesque ut venenatis eu, molestie eget odio. Maecenas id finibus nisl. Aliquam et odio ante. Sed suscipit tortor mauris, a porttitor tortor accumsan eu. Etiam mauris magna, sodales sit amet cursus vel, hendrerit non arcu. Nunc non vestibulum arcu, eu fringilla orci. Integer egestas risus ultrices ipsum finibus pellentesque. Morbi lacinia felis dui. In eget lectus at elit commodo bibendum non sed ligula. Pellentesque dignissim, ante eget condimentum tincidunt, lacus urna consequat dui, a egestas lorem ligula ac odio. Duis arcu risus, bibendum sed condimentum et, efficitur vitae nulla. Nullam convallis quis sem id iaculis</p>`);
    
        var nextSet = arr.slice(lastIndex, lastIndex + 2);
        lastIndex += 2;
        if(nextSet.length > 0){
            nextSet.map((dt , i)=>{
                $('#scroll-data').append(`<p style="background-color: red;"> ${i} ${dt.value}</p>`);
            })
        } else {
            // console.log(nextSet.length)
        }
   
    }
  });
  
    
  });
