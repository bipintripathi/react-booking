!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a3f8f9b6-5c05-41e8-b2c3-74fff802e421",e._sentryDebugIdIdentifier="sentry-dbid-a3f8f9b6-5c05-41e8-b2c3-74fff802e421")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[546],{3973:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/saloon-for-her/mani-pedi-combo",function(){return s(7545)}])},7545:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return W}});var i=s(5893),o=s(2415),r=s(2563),a=s(5680),n=s(2571),c=s(6512),d=s(9008),l=s.n(d),u=s(1163),m=s(7294),f=s(7536),h=s(2664),p=s(7533),g=s(6310),y=s(9347),v=s(9710),j=s(8772);s(3791);var _=s(4829),b=s(3534),E=s.n(b),S=s(5018),x=s.n(S),w=s(8092),A=s.n(w),M=s(1179),N=s.n(M),P=s(1621),O=s(52),Z=s(6151),C=s(270),D=s(1555),T=s(682),I=s(4051),R=s(6010),k=s(5413),U=s(4538),B=s(3093),L=s(114),J=s(2274),q=s(2746),H=s(8036),F=s(4063),V=s(9262),G=s(381),Y=s.n(G),$=s(8794);let X={"@context":"http://schema.org","@graph":[{"@type":"LocalBusiness",name:"Jameel",description:"Premium Mani-Pedi service at home in the UAE",telephone:"+971800526335",address:{"@type":"PostalAddress",streetAddress:"Office 309, Media City, Dubai , UAE",addressLocality:"Dubai",addressRegion:"UAE"},image:"https://jameel-media-production.s3.eu-west-1.amazonaws.com/3646-94a4b961-4da4-4d11-b7f0-ec1d1af21917.jpg",priceRange:"$$",openingHours:["Mo-Su 09:00-23:00"],geo:{"@type":"GeoCoordinates",latitude:"25.0657",longitude:"55.17128"},sameAs:["https://www.facebook.com/ijameelcom","https://www.instagram.com/ijameelcom"]},{"@type":"Service",serviceType:"Mani-Pedi Home Service",provider:{"@type":"LocalBusiness",name:"Jameel"},areaServed:{"@type":"Place",name:"UAE"},description:"Premium and high-quality Mani-Pedi combos at home in the UAE."}]};function z(){return(0,i.jsxs)(l(),{children:[(0,i.jsx)("title",{children:"Mani-Pedi Combos at Home in UAE - AED 70 Off | Jameel"}),(0,i.jsx)("meta",{name:"description",content:"Experience premium Mani-Pedi services at your doorstep with Jameel. Exclusive offer: AED 70 off on our combos in the UAE. Book now and pamper yourself at home!"}),(0,i.jsx)("meta",{name:"keywords",content:"Jameel, salon at home, Mani Pedi combo, home service beauty, beauty services UAE, discounted Mani-Pedi"}),(0,i.jsx)("meta",{name:"robots",content:"index, follow"}),(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(X)}},"jsonld"),(0,i.jsx)("meta",{property:"og:title",content:"Mani-Pedi Combos at Home in UAE - AED 70 Off | Jameel"}),(0,i.jsx)("meta",{property:"og:description",content:"Experience premium Mani-Pedi services at your doorstep with Jameel. Exclusive offer: AED 70 off on our combos. Book now and enjoy salon-quality care at home!"}),(0,i.jsx)("meta",{property:"og:image",content:"https://jameel-media-production.s3.eu-west-1.amazonaws.com/3646-94a4b961-4da4-4d11-b7f0-ec1d1af21917.jpg"}),(0,i.jsx)("meta",{property:"og:url",content:"https://www.ijameel.com/saloon-for-her/mani-pedi-combo"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:locale",content:"en_UAE"})]})}var W=!0;t.default=function(e){let{service:t}=e,[s,d]=(0,m.useState)(!1),[l,b]=(0,m.useState)(!1),[S,w]=(0,m.useState)(!1),{user:M}=(0,h.useSelector)(e=>e.user),[G,X]=(0,m.useState)(null),{t:W}=(0,j.$G)("dashboard"),{t:K}=(0,j.$G)("home-cleaning"),Q=(0,u.useRouter)(),{locale:ee}=Q,{newBooking:et}=(0,h.useSelector)(e=>e.booking),{bookingServices:es,couponPriceInfo:ei}=et,{selectedCity:eo}=(0,h.useSelector)(e=>e.region),er=(0,h.useDispatch)(),{data:ea,item:en}=(0,h.useSelector)(e=>e.jmodule),{data:ec}=(0,h.useSelector)(e=>e.serviceCategory);(0,m.useEffect)(()=>{if(ec.length){let e=ec.find(e=>e.id===t.serviceCategory.id),s=e.services.find(e=>e.id===t.id),i=(0,L.NS)(s);i.subServices.sort((e,t)=>e.defaultPrice-t.defaultPrice),X(i),e_("select_sub_service",i.subServices[0].id.toString())}},[ec]);let ed=(0,m.useCallback)(()=>b(!1),[]),el=()=>b(!0),eu=g.Ry().shape({select_day:g.Z_().required(W("dayRequired")),select_time:g.Z_().required(W("timeRequired")),select_sub_service:g.Z_().required(W("serviceRequired"))}),{handleSubmit:em,control:ef,formState:{errors:eh,isSubmitted:ep},resetField:eg,reset:ey,register:ev,getValues:ej,setValue:e_,watch:eb}=(0,f.cI)({defaultValues:{select_service:"25",select_sub_service:"",select_day:"",select_time:""},resolver:(0,p.X)(eu)}),eE=eb("select_sub_service"),eS=eb("select_day"),ex=eb("select_time"),ew=(0,m.useMemo)(()=>ex?JSON.parse(ex):null,[ex]),eA=(0,m.useMemo)(()=>{if(!eS)return"";let e=Y()(eS),t=Y()(),s=Y()().add(1,"day"),i="",o=e.format("D MMM YYYY");return i=e.isSame(t,"day")?W("today"):e.isSame(s,"day")?W("tomorrow"):e.format("ddd"),"".concat(i,", ").concat(o)},[eS]);(0,m.useEffect)(()=>{if(!eE||!G)return;let e=G.subServices.find(e=>e.id===+eE);er(y.y9.removeAllAndThenAddBookingServices({serviceId:G.id,numberOfPersons:1,subServiceId:e.id,defaultPrice:e.defaultPrice,service:G}))},[G,eE]);let eM=()=>{d(e=>!e)};(0,m.useEffect)(()=>{er((0,c.US)())},[er]),(0,m.useEffect)(()=>{er((0,a.getJmodules)()),er((0,n.getServiceCategories)({jmoduleId:t.serviceCategory.jmodule.id}))},[eo]),(0,m.useEffect)(()=>{if(ea&&ea.length>0){let e=ea.find(e=>e.id===t.serviceCategory.jmodule.id);er(a.jmoduleActions.selectJmodule(e))}},[ea]),(0,m.useEffect)(()=>{S&&M&&em(eN)()},[M,S]);let eN=e=>{if(!M){(0,L.Wy)(o.T.SALOONFORHER_MANIPEDICOMBO_SUBMITBUTTON),el(),w(!0);return}er(y.y9.completeChooseGenderStage({selectedGender:"",selectedDateTime:ew[0],selectedFrequency:F.j2.oneTime,selectedNationalities:[]})),er(y.y9.changeBookingStage(v.Z.chooseAddress)),er(y.y9.modifyIsCurrentStageValid(!0)),Q.push("/dashboard?stage=".concat(v.Z.chooseAddress,"&from=").concat(V.Z.maniPediComboPageName))},eP=(0,m.useMemo)(()=>{let e=null==ei?void 0:ei.coupon,t=0;return G&&(t=G.subServices[0].defaultPrice),(0,B.s)(t,e)},[G,ei]),eO=(0,m.useMemo)(()=>{if(!G||!eE)return[];let e=G.subServices.find(e=>e.id===+eE);return[{heading:"Service",value:ee===q.Z.ar?e.nameAr:e.nameEn},{heading:"Date",value:eA},{heading:"Time",value:ew?"".concat(Y()(ew[0]).format("hh:mm A")," - ").concat(Y()(ew[1]).format("hh:mm A")):""}]},[G,eE,eA,ew]),eZ=(0,m.useMemo)(()=>{let e=0;return 0===es.length||(e=es[0].defaultPrice,ei&&(e=ei.servicePrice)),e},[es,ei]),eC=(0,m.useMemo)(()=>{let e=0;return ei&&(e=ei.couponDiscountValue),e},[ei]),eD=(0,m.useMemo)(()=>Number((eZ-eC).toFixed(2)),[eZ,eC]);return G?(0,i.jsxs)(r.C1,{children:[(0,i.jsx)(z,{}),(0,i.jsx)("div",{className:(0,R.Z)(A()["heading-container"]),children:(0,i.jsx)(T.Z,{children:(0,i.jsx)(P.Z,{isDrawerOpen:s,showBackButton:!1,toggleDrawer:eM,redirectTo:"/",handleLoginModalShow:el})})}),(0,i.jsx)("form",{onSubmit:em(eN),className:(0,R.Z)(A().main,N().main),children:(0,i.jsx)(T.Z,{children:(0,i.jsx)(I.Z,{children:(0,i.jsx)(D.Z,{children:(0,i.jsxs)("div",{className:A().main__container,children:[(0,i.jsx)(k.Z,{iconUrl:t.iconUrl,totalPrice:eP.discountedAmount,servicePrice:eP.originalAmount,discount:eP.discountValue,title:t.name}),(0,i.jsxs)(I.Z,{className:A()["service__detail-wrapper"],children:[(0,i.jsx)(D.Z,{md:12,lg:6,children:(0,i.jsxs)("div",{className:N()["single-service__detail-wrapper"],children:[G&&(0,i.jsx)(U.Z,{register:ev,subServices:G.subServices,coupon:null==ei?void 0:ei.coupon,gtmEventName:o.T.SALOONFORHER_MANIPEDICOMBO_SELECTSERVICE}),(0,i.jsx)(H.Z,{setValue:e_,register:ev,dayFieldName:"select_day",timeFieldName:"select_time",getValues:ej,errors:eh,gtmEventDateName:o.T.SALOONFORHER_MANIPEDICOMBO_SELECTDATE,gtmEventTimeName:o.T.SALOONFORHER_MANIPEDICOMBO_SELECTTIME})]})}),(0,i.jsx)(D.Z,{md:12,lg:6,children:(0,i.jsx)(J.Z,{servicePrice:eZ,discount:eC,totalPrice:eD,summaryDetails:eO})})]})]})})})})}),(0,i.jsx)("footer",{className:(0,R.Z)(E().footer,x().footer,"d-none d-sm-block"),children:(0,i.jsx)(T.Z,{className:E()["custom-container"],children:(0,i.jsx)(_.Z,{jmodules:ea,darkMode:!0,className:x()["footer-dashboard"]})})}),(0,i.jsx)(C.Z,{isDrawerOpen:s,handleClose:eM}),(0,i.jsx)(O.Z,{}),(0,i.jsx)(Z.Z,{loginModalShow:l,handleLoginModalClose:ed,toRedirect:!1})]}):(0,i.jsxs)(r.C1,{children:[(0,i.jsx)(z,{}),(0,i.jsx)($.Z,{loadingText:W("getSingleServiceLoadingMessage")})]})}}},function(e){e.O(0,[763,536,498,216,82,977,657,621,151,96,394,515,774,888,179],function(){return e(e.s=3973)}),_N_E=e.O()}]);