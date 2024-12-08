// 组件
import Home from './pages/Home/HomePage.vue';
import Illustrate from './pages/Illustrate/index.vue';
import Color from './pages/Color/ColorPage.vue';
import Text from './pages/Text/TextPage.vue';
import Card from './pages/Card/CardPage.vue';
import Product from './pages/Product/ProductPage.vue';
import Video from './pages/Video/VideoPage.vue';
import Window from './pages/Window/WindowPage.vue';
import Clip from './pages/Clip/ClipPage.vue';
import Hover from './pages/Hover/HoverPage.vue';
import TextBox from './pages/TextBox/TextBoxPage.vue';
import Loading from './pages/Loading/LoadingPage.vue';
import Editor from './pages/Editor/EditorPage.vue';

// 组合案例
import Swiper from './pages/Swiper/SwiperPage.vue';
import Button from './pages/Button/ButtonPage.vue';
import Snow from './pages/Snow/SnowPage.vue';
import Perspective from './pages/Perspective/PerspectivePage.vue';
import AppleText from './pages/AppleText/AppleTextPage.vue';
import SteamWave from './pages/SteamWave/SteamWavePage.vue';
import RegionalVideo from './pages/RegionalVideo/RegionalVideoPage.vue';
import Surface from './pages/Surface/SurfacePage.vue';
import Smoke from './pages/Smoke/SmokePage.vue';
import Shock from './pages/Shock/ShockPage.vue';
import Magnifier from './pages/Magnifier/MagnifierPage.vue';
import Aurora from './pages/Aurora/AuroraPage.vue';
import Fluid from './pages/Fluid/FluidPage.vue';
import Gsap from './pages/Gsap/GsapPage.vue';
import Parallax  from './pages/Parallax/ParallaxPage.vue';
import Sequence  from './pages/Sequence/index.vue';
import ScrollTrigger  from './pages/ScrollTrigger/ScrollTrigger.vue';
import Three  from './pages/Three/ThreePage.vue';
import Scroll  from './pages/Scroll/index.vue';
import Roulette from './pages/Roulette/RoulettePage.vue';
import Roll from './pages/Roll/RollPage.vue';
import Rolex from './pages/Rolex/index.vue';




import Svga from './pages/Svga/SvgaPage.vue';

// 整页案例
import Demo from './pages/Demo/DemoPage.vue';
import ProductDemoTwo from './pages/ProductDemoTwo/index.vue';
import Vivo from './pages/Vivo/VivoPage.vue';
import Gabrielecig from './pages/Gabrielecig/index.vue';
import Yummy from './pages/Yummy/index.vue';


const router = [{
        path: "/",
        component: Home
    },
    {
        path: "/illustrate",
        component: Illustrate
    },
    {
        path: "/color",
        component: Color
    },
    {
        path: "/text",
        component: Text
    },
    {
        path: "/card",
        component: Card
    },
    {
        path: "/product",
        component: Product 
    },
    {
        path: "/video",
        component: Video 
    },
    {
        path: "/window",
        component:Window
    },
    {
        path: "/button",
        component:Button
    },
    {
        path: "/clip",
        component:Clip
    },
    {
        path: "/hover",
        component:Hover
    },
    {
        path: "/textBox",
        component:TextBox
    },
    {
        path: "/loading",
        component:Loading
    },
    {
        path: "/editor",
        component:Editor
    },
    {
        path:"/swiper",
        component:Swiper
    },
    {
        path:"/snow",
        component:Snow
    },
    {
        path:"/perspective",
        component:Perspective,
    },
    {
        path:"/appleText",
        component:AppleText,
    },
    {
        path:"/steamWave",
        component:SteamWave
    },
    {
        path:"/steamWave",
        component:SteamWave
    },
    {
        path:"/regionalVideo",
        component:RegionalVideo
    },
    {
        path:"/surface",
        component:Surface
    },
    {
        path:"/smoke",
        component:Smoke
    },
    {
        path:"/shock",
        component:Shock
    },
    {
        path:"/svga",
        component:Svga
    },
    {
        path:"/magnifier",
        component:Magnifier
    },
    {
        path:"/aurora",
        component:Aurora
    },
    {
        path:"/fluid",
        component:Fluid
    },
    {
        path:'/gsap',
        component:Gsap
    },
    {
        path:"/parallax",
        component:Parallax
    },
    {
        path:'/sequence',
        component:Sequence
    },
    {
        path:'/scrollTrigger',
        component:ScrollTrigger
    },
    {
        path:'/scroll',
        component:Scroll
    },
    {
        path:'/three',
        component:Three
    },
    {
        path: "/demo",
        component:Demo
    },
    {
        path: "/productDemoTwo",
        component:ProductDemoTwo
    },
    {
        path: "/vivo",
        component:Vivo
    },
    {
        path: "/gabrielecig",
        component:Gabrielecig
    },
    {
        path: "/roll",
        component:Roll
    },
    {
        path: "/roulette",
        component:Roulette
    },
    {
        path:"/rolex",
        component:Rolex
    },
    {
        path: "/yummy",
        component:Yummy
    }
]


export default router;