"use strict";!function(){function n(e,c){var n=document.querySelector(".header").clientHeight,u=document.querySelector(e).getBoundingClientRect().top-n,i=window.pageYOffset,l=null;requestAnimationFrame(function e(n){var t,r,n=n-(l=null===l?n:l),o=(t=n,r=i,o=u,(t/=c/2)<1?o/2*t*t+r:-o/2*(--t*(t-2)-1)+r);window.scrollTo(0,o),n<c&&requestAnimationFrame(e)})}document.querySelectorAll(".js-scroll").forEach(function(e){e.addEventListener("click",function(){var e=this.getAttribute("href");n(e,100)})})}(),function(){var e=document.querySelector(".header__burger-container"),n=document.querySelectorAll(".header__nav-link"),t=document.querySelector(".header__nav");function r(){t.classList.remove("menu-opened")}e.onclick=function(){t.classList.toggle("menu-opened")},n.forEach(function(e){return e.addEventListener("click",r)})}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic21vb3RoU2Nyb2xsIiwidGFyZ2V0RWwiLCJkdXJhdGlvbiIsImhlYWRlckVsSGVpZ2h0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xpZW50SGVpZ2h0IiwidG9wIiwidGFyZ2V0IiwidGFyZ2V0UG9zaXRpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRpb24iLCJjdXJyZW50VGltZSIsInQiLCJiIiwic3RhcnRUaW1lIiwidGltZUVsYXBzZWQiLCJjIiwiZWFzZSIsImQiLCJ3aW5kb3ciLCJydW4iLCJzdGFydFBvc2l0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlYWNoIiwic2Nyb2xsVG8iLCJsaW5rcyIsImN1cnJlbnRUYXJnZXQiLCJidXJnZXIiLCJuYXZMaW5rIiwibmF2IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib25jbGljayIsIm4iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VNZW51Il0sIm1hcHBpbmdzIjoiY0FDQSxXQURBLFNBQUFBLEVBQUFDLEVBQUFDLEdBQ0MsSUFBQUMsRUFBWUMsU0FBQUMsY0FBQSxXQUFBQyxhQUVISCxFQURGSCxTQUFlSyxjQUFmTCxHQUNtQkksd0JBQXVCRyxJQUFXRCxFQUNyREUsRUFBU0osT0FBU0MsWUFDbEJJLEVBQUFBLEtBa0JKQyxzQkFkQSxTQUFBQyxFQUFBQyxHQU9BLElBVEFDLEVBQUFDLEVBU01ILEVBQVlDLEdBQ1FHLEVBQU4sT0FBZEEsRUFBZ0NILEVBRFZBLEdBQ3RCRyxHQVZORixFQVVlRyxFQVZmRixFQVUwQkMsRUFWMUJFLEVBVXNDTCxHQVBwQ0MsR0FPd0JYLEVBUGYsR0FERCxFQUFKZ0IsRUFBaUJMLEVBQVZBLEVBQW1CTSxFQUFHTCxHQUVqQ0csRUFBVyxLQURYSixHQUNrQkEsRUFBQSxHQUFBLEdBQVBDLEdBT1hNLE9BQU1KLFNBQVcsRUFBR0osR0FDZFMsRUFBV0wsR0FBYU0sc0JBQWViLEtBakJqREwsU0FBQW1CLGlCQUFBLGNBMEJRQyxRQUFRLFNBQUNDLEdBRlhDLEVBQUFBLGlCQUFBQSxRQUF1QixXQUNyQkMsSUFBS0MsRUFBWUwsS0FBQUEsYUFBaUIsUUFDeENJLEVBQWNDLEVBQVUsU0EzQjVCLEdBc0NBLFdBdENBLElBcUNBQyxFQUFBekIsU0FBQUMsY0FBQSw2QkFHSXlCLEVBQVUxQixTQUFTbUIsaUJBQWlCLHFCQUNwQ1EsRUFBTTNCLFNBQVNDLGNBQWMsZ0JBTy9CLFNBSk0yQixJQU1KRCxFQUFJQyxVQUFVQyxPQUFPLGVBWHZCSixFQUFJQSxRQUFTekIsV0FBYjJCLEVBQ0VELFVBQVUxQixPQUFTbUIsZ0JBR3JCTSxFQUFPSyxRQUFQLFNBQWlCQyxHQUFqQixPQUFpQkEsRUFBQUMsaUJBQVksUUFBQUMsS0FML0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNjcm9sbCB0byBhbmNob3JzXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3Qgc21vb3RoU2Nyb2xsID0gZnVuY3Rpb24gKHRhcmdldEVsLCBkdXJhdGlvbikge1xyXG4gICAgY29uc3QgaGVhZGVyRWxIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKS5jbGllbnRIZWlnaHQ7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRFbCk7XHJcbiAgICBsZXQgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gaGVhZGVyRWxIZWlnaHQ7XHJcbiAgICBsZXQgc3RhcnRQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgIGxldCBzdGFydFRpbWUgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IGVhc2UgPSBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICB0IC89IGQgLyAyO1xyXG4gICAgICBpZiAodCA8IDEpIHJldHVybiAoYyAvIDIpICogdCAqIHQgKyBiO1xyXG4gICAgICB0LS07XHJcbiAgICAgIHJldHVybiAoLWMgLyAyKSAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYW5pbWF0aW9uID0gZnVuY3Rpb24gKGN1cnJlbnRUaW1lKSB7XHJcbiAgICAgIGlmIChzdGFydFRpbWUgPT09IG51bGwpIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xyXG4gICAgICBjb25zdCB0aW1lRWxhcHNlZCA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lO1xyXG4gICAgICBjb25zdCBydW4gPSBlYXNlKHRpbWVFbGFwc2VkLCBzdGFydFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbiwgZHVyYXRpb24pO1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcnVuKTtcclxuICAgICAgaWYgKHRpbWVFbGFwc2VkIDwgZHVyYXRpb24pIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xyXG4gICAgfTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNjcm9sbFRvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLXNjcm9sbFwiKTtcclxuICAgIGxpbmtzLmZvckVhY2goKGVhY2gpID0+IHtcclxuICAgICAgZWFjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSB0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcbiAgICAgICAgc21vb3RoU2Nyb2xsKGN1cnJlbnRUYXJnZXQsIDEwMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBzY3JvbGxUbygpO1xyXG59KSgpO1xyXG5cclxuLy9CdXJnZXJcclxuKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J1cmdlci1jb250YWluZXJcIiksXHJcbiAgICBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXJfX25hdi1saW5rXCIpLFxyXG4gICAgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX25hdlwiKTtcclxuXHJcbiAgYnVyZ2VyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnUtb3BlbmVkXCIpO1xyXG4gIH07XHJcblxyXG4gIG5hdkxpbmsuZm9yRWFjaCgobikgPT4gbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNZW51KSk7XHJcbiAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xyXG4gICAgLy8gaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtb3BlbmVkXCIpO1xyXG4gIH1cclxufSkoKTtcclxuIl19