!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="e6579b2e-5c61-4f61-98bb-94c7866fd657",e._sentryDebugIdIdentifier="sentry-dbid-e6579b2e-5c61-4f61-98bb-94c7866fd657")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[657],{5784:function(e,r,o){"use strict";var n,a=o(7294);function t(){return(t=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}r.Z=function(e){return a.createElement("svg",t({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 22"},e),n||(n=a.createElement("path",{fill:"#3F4254",d:"M9.331 13.094A9.93 9.93 0 0 0 8 13c-4.411 0-8 2.859-8 6.375V21a1 1 0 1 0 2 0v-1.625C2 16.963 4.691 15 8 15c.331 0 .681.025 1.069.076a1 1 0 0 0 .262-1.982zM8 0a5.507 5.507 0 0 0-5.5 5.5C2.5 8.533 4.968 11 8 11s5.5-2.467 5.5-5.5S11.032 0 8 0zm0 9C6.07 9 4.5 7.43 4.5 5.5S6.07 2 8 2s3.5 1.57 3.5 3.5S9.93 9 8 9zm12.5 3a3.957 3.957 0 0 0-2.5.854A3.957 3.957 0 0 0 15.5 12c-2.028 0-3.5 1.598-3.5 3.8 0 3.132 3.546 5.329 5.642 6.134a1.004 1.004 0 0 0 .716 0C20.454 21.129 24 18.932 24 15.8c0-2.202-1.472-3.8-3.5-3.8zM18 19.92c-2.001-.864-4-2.531-4-4.12 0-.301.072-1.8 1.5-1.8.816 0 1.241.36 1.796.91a.999.999 0 0 0 1.408 0c.555-.55.98-.91 1.796-.91 1.428 0 1.5 1.499 1.5 1.8 0 1.589-1.999 3.256-4 4.12z",opacity:.7})))}},6537:function(e,r,o){"use strict";var n=o(1163),a=o(2664),t=o(6512),i=o(9347);r.Z=function(){let e=(0,n.useRouter)(),r=(0,a.useDispatch)();return{handleLogout:()=>{e.replace("/"),r(t.hI.logout()),r(i.y9.resetBooking())},handleNavigate:r=>{e.push("/dashboard/profile?tab=".concat(r))}}}},3357:function(e,r,o){"use strict";var n=o(5893);o(7294);var a=o(492),t=o.n(a),i=o(6010);r.Z=function(e){let{height:r,width:o,backgroundColor:a,borderRadius:s,children:_,className:c}=e;return(0,n.jsx)("div",{className:(0,i.W)(t()["icon-container"],c),style:{height:r,width:o,backgroundColor:a,borderRadius:s},children:_})}},270:function(e,r,o){"use strict";var n=o(5893);o(7294);var a=o(4658),t=o.n(a),i=o(5675),s=o.n(i),_=o(2664),c=o(8772);o(5784);var l=o(6010);o(1163),o(6512);var d=o(6537),h=o(712);r.Z=function(e){let{isDrawerOpen:r,handleClose:o}=e,{user:a}=(0,_.useSelector)(e=>e.user),{t:i}=(0,c.$G)("dashboard"),{handleLogout:m,handleNavigate:p}=(0,d.Z)(),g=e=>{p(e),o()};return(0,n.jsxs)("div",{className:(0,l.Z)(t().drawer__container,r?t()["drawer__container--open"]:""),children:[(0,n.jsxs)("div",{className:t()["drawer__header-container"],children:[a&&(0,n.jsx)(s(),{src:null==a?void 0:a.image,width:74,height:74,className:t()["drawer__header-image"],alt:"User Profile Image"}),(0,n.jsx)("p",{className:t()["drawer__header-hello"],children:i("hello")}),(0,n.jsx)("p",{className:t()["drawer__header-name"],children:null==a?void 0:a.name}),(0,n.jsx)("p",{className:t()["drawer__header-phone"],children:null==a?void 0:a.phoneNumber})]}),(0,n.jsxs)("ul",{className:t().drawer__list,children:[(0,n.jsxs)("li",{className:t().drawer__item,onClick:g.bind(null,h.MZ.SETTINGS),children:[(0,n.jsx)(s(),{src:"/images/user-profile-icon.svg",width:24,height:22,alt:"User Profile Icon"}),(0,n.jsx)("p",{className:t().drawer__text,children:i("personalInformation")})]}),(0,n.jsxs)("li",{className:t().drawer__item,onClick:g.bind(null,h.MZ.MY_BOOKING),children:[(0,n.jsx)(s(),{src:"/images/calendor-icon-profile.svg",width:22,height:22,alt:"Calendor Icon"}),(0,n.jsx)("p",{className:t().drawer__text,children:i("bookings")})]}),(0,n.jsxs)("li",{className:t().drawer__item,onClick:g.bind(null,h.MZ.PAYMENTS),children:[(0,n.jsx)(s(),{src:"/images/crdit-card-icon.svg",width:22,height:17,alt:"User Payment Icon"}),(0,n.jsx)("p",{className:t().drawer__text,children:i("payments")})]}),(0,n.jsxs)("li",{className:t().drawer__item,onClick:g.bind(null,h.MZ.SAVED_ADDRESSES),children:[(0,n.jsx)(s(),{src:"/images/location-icon.svg",width:17,height:22,alt:"User Saved Addresses Icon"}),(0,n.jsx)("p",{className:t().drawer__text,children:i("savedAddresses")})]}),(0,n.jsxs)("li",{onClick:()=>{m(),o()},className:t().drawer__item,children:[(0,n.jsx)(s(),{src:"/images/logout-out.svg",width:22,height:22,alt:"User Logout Icon"}),(0,n.jsx)("p",{className:(0,l.Z)(t().drawer__text,t()["drawer__text--logout"]),children:i("logout")})]})]})]})}},4829:function(e,r,o){"use strict";o.d(r,{Z:function(){return N}});var n=o(5893);o(7294);var a=o(1555),t=o(4051),i=o(5675),s=o.n(i),_=o(480),c=o.n(_),l=o(8772),d=o(6010),h=function(e){let{iconPath:r,height:o,width:a,alt:t,className:i,href:_="#"}=e;return(0,n.jsx)("a",{href:_,rel:"noopener noreferrer",target:"_blank",className:(0,d.W)(c()["social-icon-container"],i),children:(0,n.jsx)(s(),{src:r,width:a,height:o,alt:t})})},m=o(1664),p=o.n(m),g=o(3791);let u={facebook:"#"};var f=function(e){let{handleTopServiceClicked:r}=e,{t:o}=(0,l.$G)("landing");return(0,n.jsxs)("div",{className:(0,d.W)(c()["mobile-container__first-section"],"d-sm-none"),children:[(0,n.jsxs)(t.Z,{className:"mb-4",children:[(0,n.jsx)(a.Z,{xs:6,children:(0,n.jsx)(s(),{src:"/images/jameel-white-logio.svg",width:27.5,height:42,alt:"Jameel Logo"})}),(0,n.jsx)(a.Z,{xs:6,children:(0,n.jsxs)("div",{className:c()["social-icon-list"],children:[(0,n.jsx)(h,{iconPath:"/images/facebook-f-white.svg",width:8.6,height:16,alt:"Facebook Icon",className:c()["social-icon-container--white"],href:u.facebook}),(0,n.jsx)(h,{iconPath:"/images/instagram-white.svg",width:16,height:16,alt:"Instagram Icon",className:c()["social-icon-container--white"]}),(0,n.jsx)(h,{iconPath:"/images/youtube-white.svg",width:16,height:11.2,alt:"Youtube Icon",className:c()["social-icon-container--white"]})]})})]}),(0,n.jsx)("hr",{className:(0,d.W)(c().footer__separator,c()["footer__separator--light"],"mb-4")}),(0,n.jsxs)(t.Z,{children:[(0,n.jsxs)(a.Z,{xs:12,className:"mb-4",children:[(0,n.jsx)("p",{className:(0,d.W)(c().footer__heading,c()["footer__heading--white"]),children:o("topServices")}),(0,n.jsxs)("ul",{className:(0,d.W)(c()["footer__list-container"],c()["footer__list-container--white"],"mb-0 mb-sm-3"),children:[(0,n.jsx)("li",{className:"cursor-pointer",onClick:r.bind(null,g.w.homeCleaning),children:o("homeCleaning")}),(0,n.jsx)("li",{className:"cursor-pointer",onClick:r.bind(null,g.w.saloonForHer),children:o("salonForHer")}),(0,n.jsx)("li",{className:"cursor-pointer",onClick:r.bind(null,g.w.saloonForHim),children:o("salonForHim")}),(0,n.jsx)("li",{className:"cursor-pointer",onClick:r.bind(null,g.w.healthCare),children:o("healthcare")}),(0,n.jsx)("li",{className:"cursor-pointer",onClick:r.bind(null,g.w.maintenance),children:o("maintenance")})]})]}),(0,n.jsxs)(a.Z,{xs:12,children:[(0,n.jsx)("p",{className:(0,d.W)(c().footer__heading,c()["footer__heading--white"]),children:o("quicklinks")}),(0,n.jsxs)("ul",{className:(0,d.W)(c()["footer__list-container"],c()["footer__list-container--white"]),children:[(0,n.jsxs)("li",{children:[" ",(0,n.jsx)(p(),{className:c().footer__link,href:"/privacy_policy.html",children:o("privacyPolicy")})]}),(0,n.jsx)("li",{children:(0,n.jsx)(p(),{className:c().footer__link,href:"/terms.html",children:o("termsCondition")})})]})]})]})]})},x=o(8655),w=o(2664),j=o(5680),b=o(2571),v=o(1163),N=function(e){let{darkMode:r=!1,className:o="",jmodules:i=[]}=e,{t:_}=(0,l.$G)("landing"),m=new Date().getFullYear(),N=(0,w.useDispatch)(),k=(0,v.useRouter)(),y=e=>{let r=i.find(r=>r.id===e);r&&(N(j.jmoduleActions.selectJmodule(r)),N((0,b.getServiceCategories)({jmoduleId:r.id})),k.push("/dashboard"))};return(0,n.jsxs)("div",{className:(0,d.W)(c().container,o),children:[(0,n.jsxs)(t.Z,{className:(0,d.W)(c()["footer__primary-container"],"hide-on-phone"),xs:2,md:4,children:[(0,n.jsx)(a.Z,{children:r?(0,n.jsx)(s(),{src:"/images/logo-white.svg",width:27.5,height:42,alt:"Jameel Logo"}):(0,n.jsx)(s(),{src:"/images/jameel-logo@2x.svg",width:27.5,height:42,alt:"Jameel Logo"})}),(0,n.jsxs)(a.Z,{className:"order-sm-2 order-md-0",children:[(0,n.jsx)("p",{className:(0,d.W)(c().footer__heading,r?c()["footer__heading--white"]:""),children:_("topServices")}),(0,n.jsxs)("ul",{className:(0,d.W)(c()["footer__list-container"],r?c()["footer__list-container--white"]:""),children:[(0,n.jsx)("li",{className:"cursor-pointer",onClick:y.bind(null,g.w.homeCleaning),children:_("homeCleaning")}),(0,n.jsx)("li",{className:"cursor-pointer",onClick:y.bind(null,g.w.saloonForHer),children:_("salonForHer")}),(0,n.jsx)("li",{className:"cursor-pointer",onClick:y.bind(null,g.w.saloonForHim),children:_("salonForHim")}),(0,n.jsx)("li",{className:"cursor-pointer",onClick:y.bind(null,g.w.healthCare),children:_("healthcare")}),(0,n.jsx)("li",{className:"cursor-pointer",onClick:y.bind(null,g.w.maintenance),children:_("maintenance")})]})]}),(0,n.jsxs)(a.Z,{className:"order-sm-3 order-md-0",children:[(0,n.jsx)("p",{className:(0,d.W)(c().footer__heading,r?c()["footer__heading--white"]:""),children:_("quicklinks")}),(0,n.jsxs)("ul",{className:(0,d.W)(c()["footer__list-container"],r?c()["footer__list-container--white"]:""),children:[(0,n.jsxs)("li",{children:[" ",(0,n.jsx)(p(),{className:c().footer__link,href:"/privacy_policy.html",children:_("privacyPolicy")})]}),(0,n.jsx)("li",{children:(0,n.jsx)(p(),{className:c().footer__link,href:"/terms.html",children:_("termsCondition")})})]})]}),(0,n.jsxs)(a.Z,{className:"mb-sm-4 mb-md-0",children:[(0,n.jsx)("p",{className:(0,d.W)(c().footer__heading,r?c()["footer__heading--white"]:""),children:_("followUs")}),(0,n.jsx)("div",{className:c()["social-icon-list"],children:r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{iconPath:"/images/facebook-f-white.svg",width:8.6,height:16,alt:"Facebook Icon",href:u.facebook,className:c()["social-icon-container--white"]}),(0,n.jsx)(h,{iconPath:"/images/instagram-white.svg",width:16,height:16,alt:"Instagram Icon",className:c()["social-icon-container--white"]}),(0,n.jsx)(h,{iconPath:"/images/youtube-white.svg",width:16,height:11.2,alt:"Youtube Icon",className:c()["social-icon-container--white"]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{iconPath:"/images/facebook-f.svg",width:8.6,height:16,alt:"Facebook Icon",href:u.facebook}),(0,n.jsx)(h,{iconPath:"/images/instagram.svg",width:16,height:16,alt:"Instagram Icon"}),(0,n.jsx)(h,{iconPath:"/images/youtube.svg",width:16,height:11.2,alt:"Youtube Icon"})]})})]})]}),(0,n.jsx)(f,{handleTopServiceClicked:y}),(0,n.jsx)("hr",{className:(0,d.W)(c().footer__separator,r?c()["footer__separator--light"]:"")}),(0,n.jsxs)(t.Z,{className:c()["footer__secondary-container"],xs:1,md:2,children:[(0,n.jsxs)(a.Z,{className:c()["footer__location-container"],children:[(0,n.jsx)("p",{className:(0,d.W)(c()["footer__capital-text"],r?c()["footer__capital-text--dark-mode"]:""),children:_("servingInUae")}),(0,n.jsx)("p",{className:(0,d.W)(c().footer__location,r?c()["footer__location--dark-mode"]:""),children:_("abuDhabi")}),(0,n.jsx)("p",{className:(0,d.W)(c().footer__location,r?c()["footer__location--dark-mode"]:""),children:_("dubai")})]}),(0,n.jsx)(a.Z,{className:"d-md-none",children:(0,n.jsx)("hr",{className:(0,d.W)(c().footer__separator,r?c()["footer__separator--light"]:"")})}),(0,n.jsx)(a.Z,{className:(0,d.W)(c()["footer__app-icon-container"],"hide-on-phone"),children:r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{rel:"noopener noreferrer",href:x.J,target:"_blank",children:(0,n.jsx)(s(),{src:"/images/appstore-light.svg",width:143,height:48,alt:"Jameel App Store"})}),(0,n.jsx)("a",{rel:"noopener noreferrer",href:x.J,target:"_blank",children:(0,n.jsx)(s(),{src:"/images/playstore-light.svg",width:143,height:48,alt:"Jameel App Store"})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{rel:"noopener noreferrer",href:x.J,target:"_blank",children:(0,n.jsx)(s(),{src:"/images/appstore-dark.svg",width:155.6,height:52,alt:"Jameel App Store"})}),(0,n.jsx)("a",{rel:"noopener noreferrer",href:x.J,target:"_blank",children:(0,n.jsx)(s(),{src:"/images/playstore-dark.svg",width:155.6,height:52,alt:"Jameel App Store"})})]})}),(0,n.jsxs)(a.Z,{className:(0,d.W)(c()["footer__app-icon-container"],"d-sm-none"),children:[(0,n.jsx)("a",{rel:"noopener noreferrer",href:x.J,target:"_blank",children:(0,n.jsx)(s(),{src:"/images/appstore-light.svg",width:143,height:48,alt:"Jameel App Store"})}),(0,n.jsx)("a",{rel:"noopener noreferrer",href:x.J,target:"_blank",children:(0,n.jsx)(s(),{src:"/images/playstore-light.svg",width:143,height:48,alt:"Jameel App Store"})})]})]}),(0,n.jsx)("hr",{className:(0,d.W)(c().footer__separator,r?c()["footer__separator--light"]:"")}),(0,n.jsx)(t.Z,{children:(0,n.jsx)(a.Z,{className:"text-center p-3",children:(0,n.jsxs)("p",{className:(0,d.W)(c()["footer__copy-right"],r?c()["footer__copy-right--dark-mode"]:""),children:["\xa9 ",m," ",_("copyrightText")]})})})]})}},3085:function(e,r,o){"use strict";var n=o(5893);o(7294);var a=o(7580),t=o.n(a),i=o(6010);r.Z=function(e){return(0,n.jsx)("button",{onClick:e.handleClick,className:(0,i.W)(t().btn,e.primary?t()["btn--primary"]:"",e.secondary?t()["btn--secondary"]:"",e.transparent?t()["btn--transparent"]:"",e.className),children:e.children})}},3926:function(e,r,o){"use strict";var n=o(5893);o(7294);var a=o(4166),t=o.n(a),i=o(5675),s=o.n(i);o(3357);var _=o(8772),c=o(2914),l=o(6010),d=o(2664),h=o(1163),m=o(2746),p=o(1643),g=o(3182),u=o(2571),f=o(5680);r.Z=function(e){let{className:r="",handleLoginModalShow:o=()=>{},handleClose:a=()=>{}}=e,{t:i}=(0,_.$G)("landing"),x=(0,h.useRouter)(),{locale:w}=x,j=(0,d.useDispatch)(),{user:b}=(0,d.useSelector)(e=>e.user),{addresses:v,profileAddress:N}=(0,d.useSelector)(e=>e.address),{cities:k,selectedCity:y}=(0,d.useSelector)(e=>e.region),H=()=>{j(u.serviceCategoryActions.resetServiceCategory()),j(f.jmoduleActions.resetAllJmodules()),j(f.jmoduleActions.resetSelectedJmodule()),j((0,f.getJmodules)())};return(0,n.jsxs)("div",{className:(0,l.Z)(t().container,r),children:[(0,n.jsxs)("div",{className:t()["where-need-service__container"],children:[(0,n.jsx)(s(),{src:"/images/location-icon-with-bg-primary.svg",height:25,width:25,alt:"Location Icon"}),(0,n.jsx)("p",{className:t()["where-need-service__text"],children:i("whereNeedService")})]}),b?(0,n.jsxs)(c.Z.Select,{className:t()["select-city"],onChange:e=>{let r=e.target.value,o=v.find(e=>e.id===+r)||null;j(g.vV.setProfileAddress(o)),H(),a()},"aria-label":"Default select example",children:[(0,n.jsx)("option",{value:"",children:i("selectAddress")}),v.map((e,r)=>(0,n.jsx)("option",{selected:N&&N.id===e.id,value:e.id,children:e.name},r))]}):(0,n.jsx)("button",{className:t()["action-btn"],onClick:()=>{a(),o()},children:i("signInToSeeAddress")}),(0,n.jsxs)("div",{className:"d-flex align-items-center gap-2 mb-2",children:[(0,n.jsx)("span",{className:t().underline}),(0,n.jsxs)("span",{children:[" ",i("or")," "]}),(0,n.jsx)("span",{className:t().underline})]}),(0,n.jsx)("div",{children:(0,n.jsxs)(c.Z.Select,{className:t()["select-city"],onChange:e=>{let r=e.target.value,o=k.find(e=>e.id===+r)||null;j(p.regionActions.selectCity(o)),H(),a()},"aria-label":"Default select example",children:[(0,n.jsx)("option",{value:"",children:i("selectCity")}),k.map((e,r)=>(0,n.jsx)("option",{selected:y&&y.id===e.id,value:e.id,children:w===m.Z.ar?e.nameAr:e.nameEn},r))]})})]})}},3791:function(e,r,o){"use strict";o.d(r,{w:function(){return n}});let n={homeCleaning:6,saloonForHer:2,saloonForHim:3,healthCare:8,maintenance:9,spaAndMassage:1}},114:function(e,r,o){"use strict";o.d(r,{NS:function(){return t},Om:function(){return a},WD:function(){return n},Wy:function(){return i}});let n=e=>e.replace(/\s+/g,"_"),a=e=>e.replace(/[^\w\s]/gi,""),t=e=>JSON.parse(JSON.stringify(e)),i=e=>{submitbutton_hook(e)}},492:function(e){e.exports={"icon-container":"IconContainer_icon-container__kRKf_"}},4658:function(e){e.exports={drawer__container:"Drawer_drawer__container__p8xsp","drawer__container--open":"Drawer_drawer__container--open__oS6u_","drawer__header-container":"Drawer_drawer__header-container__KtcWO","drawer__header-image-container":"Drawer_drawer__header-image-container__Jmc5x","drawer__help-icon":"Drawer_drawer__help-icon__jqmnm","drawer__header-image":"Drawer_drawer__header-image__h3cLQ","drawer__header-hello":"Drawer_drawer__header-hello__Tx2wD","drawer__header-login-text":"Drawer_drawer__header-login-text__7MS0b","drawer__header-login-text--semi-bold":"Drawer_drawer__header-login-text--semi-bold__Z_KXS","drawer__header-name":"Drawer_drawer__header-name__brRjZ","drawer__header-phone":"Drawer_drawer__header-phone__x64v_",drawer__list:"Drawer_drawer__list__yYzXb",drawer__item:"Drawer_drawer__item__2uFqo","drawer__item-link":"Drawer_drawer__item-link__oFMtQ",drawer__text:"Drawer_drawer__text__ghFCG","drawer__text--logout":"Drawer_drawer__text--logout__c8JUo","drawer__login-btn":"Drawer_drawer__login-btn__6OSEb"}},4347:function(e){e.exports={header__container:"Header_header__container__4eFtM","header__container--hide-on-mobile":"Header_header__container--hide-on-mobile___wIX0","header__back-button-container":"Header_header__back-button-container__NizM4","header__location-icon-container":"Header_header__location-icon-container__7qaXW","header__close-icon-container":"Header_header__close-icon-container__8QJu7",override:"Header_override__Mdbzj","search-form":"Header_search-form__tWdOI","search-form__icon-container":"Header_search-form__icon-container__daKm5","location-text":"Header_location-text__Er8zR",navbar__brand:"Header_navbar__brand__IOm2J","navbar__brand-logo--with-back-button":"Header_navbar__brand-logo--with-back-button__nlwHg","profile-dropdown__container":"Header_profile-dropdown__container__1NC7U","profile-dropdown__item":"Header_profile-dropdown__item__1_45n","profile-dropdown__icon":"Header_profile-dropdown__icon__4zPLs","profile-dropdown__icon--logout":"Header_profile-dropdown__icon--logout__VtSqO","profile-dropdown__text":"Header_profile-dropdown__text__7i_5Z","profile-dropdown__text--logout":"Header_profile-dropdown__text--logout__cIV_Q","select-location-popup__container":"Header_select-location-popup__container__e7pJ8","user-profile__container":"Header_user-profile__container__RtcXn","user-profile__container--active":"Header_user-profile__container--active__Qp5L_","user-profile__icon--active":"Header_user-profile__icon--active__u9bY5","user-profile__name":"Header_user-profile__name__OPKDc","user-profile__name--active":"Header_user-profile__name--active__MWBfc","nav-container__help-btn":"Header_nav-container__help-btn__VwjnM"}},480:function(e){e.exports={container:"Footer_container__7yKpN","footer__primary-container":"Footer_footer__primary-container___qgIz",footer__heading:"Footer_footer__heading___0rEO","footer__heading--white":"Footer_footer__heading--white__MC7gp",footer__link:"Footer_footer__link__BHO6q","footer__list-container":"Footer_footer__list-container__Q4LDE","footer__list-container--white":"Footer_footer__list-container--white__eXjUz","footer__location-container":"Footer_footer__location-container__7eEBW",footer__location:"Footer_footer__location__g0gnu","footer__location--dark-mode":"Footer_footer__location--dark-mode__N9Rxn","footer__capital-text":"Footer_footer__capital-text__02ySJ","footer__capital-text--dark-mode":"Footer_footer__capital-text--dark-mode__wVu5_","footer__app-icon-container":"Footer_footer__app-icon-container__506Lz","footer__secondary-container":"Footer_footer__secondary-container__oVxCl",footer__separator:"Footer_footer__separator__Y7Yqe","footer__separator--light":"Footer_footer__separator--light__i8SE4","footer__copy-right":"Footer_footer__copy-right__KZqYx","footer__copy-right--dark-mode":"Footer_footer__copy-right--dark-mode__oy__i","social-icon-container":"Footer_social-icon-container__3I_mY","social-icon-container--white":"Footer_social-icon-container--white__YauXd","social-icon-list":"Footer_social-icon-list__aWh4_"}},7580:function(e){e.exports={logo:"Heading_logo__AmgU6","nav-container":"Heading_nav-container__IWqE2","nav-container__help-btn":"Heading_nav-container__help-btn__AuQdQ",btn:"Heading_btn__Rajeo","btn--primary":"Heading_btn--primary__xG18D","btn--secondary":"Heading_btn--secondary___cmCX","btn--transparent":"Heading_btn--transparent__oCOfW","btn-text":"Heading_btn-text__AJjEr","location-btn":"Heading_location-btn__zH_CH","location-btn-text":"Heading_location-btn-text__0L69H","location-btn-icon-container":"Heading_location-btn-icon-container__Guxur","location-btn-icon":"Heading_location-btn-icon__OuJz4","location-btn-icon-dropdown":"Heading_location-btn-icon-dropdown__4UJjn","location-mobile-container":"Heading_location-mobile-container__U9X7T","header__close-icon-container":"Heading_header__close-icon-container__VOjYA"}},4166:function(e){e.exports={container:"SelectLocationPopup_container__ZjUrm","action-btn":"SelectLocationPopup_action-btn__H44v9",underline:"SelectLocationPopup_underline__4Bh6J","where-need-service__container":"SelectLocationPopup_where-need-service__container__SilFQ","where-need-service__text":"SelectLocationPopup_where-need-service__text__PGr_J","select-city":"SelectLocationPopup_select-city__Q5Bpc"}},3534:function(e){e.exports={main:"Landing_main__cktOw","why-jameel-container":"Landing_why-jameel-container____1jK",footer:"Landing_footer__zJz92","header-container":"Landing_header-container__znxxF","hero-container":"Landing_hero-container__hdvkO"}}}]);