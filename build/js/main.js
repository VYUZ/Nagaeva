"use strict";window.addEventListener("DOMContentLoaded",function(e){function n(e,c){var n=document.querySelector(".header").clientHeight,u=document.querySelector(e).getBoundingClientRect().top-n,i=window.pageYOffset,l=null;requestAnimationFrame(function e(n){var t,o,n=n-(l=null===l?n:l),r=(t=n,o=i,r=u,(t/=c/2)<1?r/2*t*t+o:-r/2*(--t*(t-2)-1)+o);window.scrollTo(0,r),n<c&&requestAnimationFrame(e)})}function t(){o.classList.remove("menu-opened")}document.querySelectorAll(".js-scroll").forEach(function(e){e.addEventListener("click",function(){var e=this.getAttribute("href");n(e,100)})}),r=document.querySelector(".header__burger-container"),c=document.querySelectorAll(".header__nav-link"),o=document.querySelector(".header__nav"),r.onclick=function(){o.classList.toggle("menu-opened")},c.forEach(function(e){return e.addEventListener("click",t)});var o,r=document.querySelectorAll("p"),c=document.querySelectorAll("h4"),u=document.querySelectorAll("h3"),i=document.querySelectorAll("h2"),l=document.querySelector("h1"),a=document.querySelectorAll(".clients__logos-img"),s=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&e.target.classList.add("show")})},{rootMargin:"-100px 0px"});r.forEach(function(e){s.observe(e)}),c.forEach(function(e){s.observe(e)}),u.forEach(function(e){s.observe(e)}),i.forEach(function(e){s.observe(e)}),s.observe(l),a.forEach(function(e){s.observe(e)})});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic21vb3RoU2Nyb2xsIiwidGFyZ2V0RWwiLCJkdXJhdGlvbiIsImhlYWRlckVsSGVpZ2h0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xpZW50SGVpZ2h0IiwidG9wIiwidGFyZ2V0IiwidGFyZ2V0UG9zaXRpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRpb24iLCJjdXJyZW50VGltZSIsInQiLCJiIiwic3RhcnRUaW1lIiwidGltZUVsYXBzZWQiLCJjIiwiZWFzZSIsImQiLCJydW4iLCJzdGFydFBvc2l0aW9uIiwiY2xhc3NMaXN0IiwibmF2IiwicmVtb3ZlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlYWNoIiwic2Nyb2xsVG8iLCJsaW5rcyIsImN1cnJlbnRUYXJnZXQiLCJidXJnZXIiLCJuYXZMaW5rIiwib25jbGljayIsIm4iLCJjbG9zZU1lbnUiLCJwYXJhZ3JhcGhzIiwiaDQiLCJoMiIsImgxIiwiY2xpZW50c0ltZ3MiLCJlbnRyaWVzIiwib3B0aW9ucyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicm9vdE1hcmdpbiIsIm9ic2VydmUiLCJwIiwiaDMiLCJlbCJdLCJtYXBwaW5ncyI6ImFBQUFBLE9BQU9DLGlCQUFpQixtQkFBb0IsU0FBVUMsR0FDcEQsU0FBQUMsRUFBQUMsRUFBQUMsR0FDQyxJQUFBQyxFQUFZQyxTQUFBQyxjQUFBLFdBQUFDLGFBRUhILEVBREZILFNBQWVLLGNBQWZMLEdBQ21CSSx3QkFBdUJHLElBQVdELEVBQ3JERSxFQUFTSixPQUFTQyxZQUNsQkksRUFBQUEsS0FrQkpDLHNCQWRBLFNBQUFDLEVBQUFDLEdBT0EsSUFUQUMsRUFBQUMsRUFTTUgsRUFBWUMsR0FDUUcsRUFBTixPQUFkQSxFQUFnQ0gsRUFEVkEsR0FDdEJHLEdBVk5GLEVBVWVHLEVBVmZGLEVBVTBCQyxFQVYxQkUsRUFVc0NMLEdBUHBDQyxHQU93QlgsRUFQZixHQURELEVBQUpnQixFQUFpQkwsRUFBVkEsRUFBbUJNLEVBQUdMLEdBRWpDRyxFQUFXLEtBRFhKLEdBQ2tCQSxFQUFBLEdBQUEsR0FBUEMsR0FPWGpCLE9BQU1tQixTQUFXLEVBQUdKLEdBQ2RRLEVBQVdKLEdBQWFLLHNCQUFlWixLQThCakQsU0FKTWEsSUFNSkMsRUFBSUQsVUFBVUUsT0FBTyxlQWpEdkJwQixTQUFBcUIsaUJBQUEsY0EwQlFDLFFBQVEsU0FBQ0MsR0FGWEMsRUFBQUEsaUJBQUFBLFFBQXVCLFdBQ3JCQyxJQUFLQyxFQUFZTCxLQUFBQSxhQUFpQixRQUN4Q0ksRUFBY0MsRUFBVSxTQVU1QkMsRUFBQTNCLFNBQUFDLGNBQUEsNkJBR0kyQixFQUFVNUIsU0FBU3FCLGlCQUFpQixxQkFDcENGLEVBQU1uQixTQUFTQyxjQUFjLGdCQUYvQjBCLEVBQUlBLFFBQVMzQixXQUFibUIsRUFDRVMsVUFBVTVCLE9BQVNxQixnQkFHckJNLEVBQU9FLFFBQVAsU0FBaUJDLEdBQWpCLE9BQWlCQSxFQUFBcEMsaUJBQVksUUFBQXFDLEtBTC9CLElBR0laLEVBT0ZhLEVBQVNELFNBQVlWLGlCQUFBLEtBQ25CWSxFQUFBakMsU0FBQXFCLGlCQUFBLE1BQ0FGLEVBQUlELFNBQVVFLGlCQUFPLE1BQ3RCYyxFQUFBbEMsU0FBQXFCLGlCQUFBLE1BR0hjLEVBQUFuQyxTQUFBQyxjQUFBLE1BTU1tQyxFQUFjcEMsU0FBU3FCLGlCQUFpQix1QkFBeENlLEVBQVcsSUFBR3BDLHFCQUFTcUIsU0FBaUJnQixHQUU5Q0EsRUFBTUMsUUFBVSxTQUFBQyxHQUNkQSxFQUFBQyxnQkFJSUMsRUFBUXJDLE9BQU9zQyxVQUFBQSxJQUFBQSxXQVpMLENBRWhCQyxXQUFXM0MsZUFvQlhnQyxFQUxXVixRQUFRSixTQUFBQSxHQU1qQnVCLEVBTEdHLFFBQUFDLEtBSUxiLEVBQUFBLFFBQVdWLFNBQUFBLEdBQ1RtQixFQUFTRyxRQUFRQyxLQU9uQkMsRUFIRUwsUUFBU0csU0FBQUEsR0FEWEgsRUFBQUcsUUFBQUUsS0FNQ1osRUFGRFosUUFBQSxTQUFBWSxHQUlFTyxFQUFTRyxRQUFBVixLQUlYTyxFQUFTRyxRQUFRVCxHQUVqQkMsRUFDV1EsUUFBUUcsU0FBakJBLEdBREZOLEVBQUFHLFFBQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgLy8gU2Nyb2xsIHRvIGFuY2hvcnNcclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc21vb3RoU2Nyb2xsID0gZnVuY3Rpb24gKHRhcmdldEVsLCBkdXJhdGlvbikge1xyXG4gICAgICBjb25zdCBoZWFkZXJFbEhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpLmNsaWVudEhlaWdodDtcclxuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0RWwpO1xyXG4gICAgICBsZXQgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gaGVhZGVyRWxIZWlnaHQ7XHJcbiAgICAgIGxldCBzdGFydFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcclxuXHJcbiAgICAgIGNvbnN0IGVhc2UgPSBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgIHQgLz0gZCAvIDI7XHJcbiAgICAgICAgaWYgKHQgPCAxKSByZXR1cm4gKGMgLyAyKSAqIHQgKiB0ICsgYjtcclxuICAgICAgICB0LS07XHJcbiAgICAgICAgcmV0dXJuICgtYyAvIDIpICogKHQgKiAodCAtIDIpIC0gMSkgKyBiO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgYW5pbWF0aW9uID0gZnVuY3Rpb24gKGN1cnJlbnRUaW1lKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XHJcbiAgICAgICAgY29uc3QgdGltZUVsYXBzZWQgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcclxuICAgICAgICBjb25zdCBydW4gPSBlYXNlKHRpbWVFbGFwc2VkLCBzdGFydFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbiwgZHVyYXRpb24pO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBydW4pO1xyXG4gICAgICAgIGlmICh0aW1lRWxhcHNlZCA8IGR1cmF0aW9uKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcclxuICAgICAgfTtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNjcm9sbFRvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtc2Nyb2xsXCIpO1xyXG4gICAgICBsaW5rcy5mb3JFYWNoKChlYWNoKSA9PiB7XHJcbiAgICAgICAgZWFjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuICAgICAgICAgIHNtb290aFNjcm9sbChjdXJyZW50VGFyZ2V0LCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBzY3JvbGxUbygpO1xyXG4gIH0pKCk7XHJcblxyXG4gIC8vQnVyZ2VyXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnVyZ2VyLWNvbnRhaW5lclwiKSxcclxuICAgICAgbmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyX19uYXYtbGlua1wiKSxcclxuICAgICAgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX25hdlwiKTtcclxuXHJcbiAgICBidXJnZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LW9wZW5lZFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgbmF2TGluay5mb3JFYWNoKChuKSA9PiBuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1lbnUpKTtcclxuICAgIGZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcclxuICAgICAgLy8gaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS1vcGVuZWRcIik7XHJcbiAgICB9XHJcbiAgfSkoKTtcclxuXHJcbiAgLy8gc2VjdGlvbiBvYnNlcnZlciBqc1xyXG4gIGNvbnN0IHBhcmFncmFwaHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicFwiKTtcclxuICBjb25zdCBoNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoNFwiKTtcclxuICBjb25zdCBoMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoM1wiKTtcclxuICBjb25zdCBoMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMlwiKTtcclxuICBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcclxuICBjb25zdCBjbGllbnRzSW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2xpZW50c19fbG9nb3MtaW1nXCIpO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgLy8gdHJlc2hvbGQ6IDEsXHJcbiAgICByb290TWFyZ2luOiBcIi0xMDBweCAwcHhcIixcclxuICB9O1xyXG5cclxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcykge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgb3B0aW9ucyk7XHJcblxyXG4gIHBhcmFncmFwaHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShwKTtcclxuICB9KTtcclxuXHJcbiAgaDQuZm9yRWFjaCgoaDQpID0+IHtcclxuICAgIG9ic2VydmVyLm9ic2VydmUoaDQpO1xyXG4gIH0pO1xyXG5cclxuICBoMy5mb3JFYWNoKChoMykgPT4ge1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShoMyk7XHJcbiAgfSk7XHJcblxyXG4gIGgyLmZvckVhY2goKGgyKSA9PiB7XHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKGgyKTtcclxuICB9KTtcclxuXHJcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShoMSk7XHJcblxyXG4gIGNsaWVudHNJbWdzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsKTtcclxuICB9KTtcclxufSk7XHJcbiJdfQ==