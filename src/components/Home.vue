<template>
  <div class="GalleryGroup">
    <div class="gallery-container">
      <div class="apple-style-gallery">
        <div class="gallery-frame left-top" style="grid-area: left-top;">
          <img src="../assets/img/beauty.jpg" alt="化妆" draggable="false" @click="$router.push('/makeup')"/>
        </div>
        <div class="gallery-frame" style="grid-area: top-1">
          <img src="../assets/img/bills.jpg" alt="账单" draggable="false" @click="$router.push('/finance')"/>
        </div>
        <div class="gallery-frame" style="grid-area: top-2;border-radius: 35px">
          <img src="../assets/img/weather.jpg" alt="天气" draggable="false" @click="$router.push('/weather')" />
        </div>
        <div class="gallery-frame right-top" style="grid-area: right-top;" @click="$router.push('/cinema')">
          <div><img src="../assets/img/movie.jpeg" alt="电影" draggable="false"/></div>
          <div><img src="../assets/img/movie2.png" alt="电影" draggable="false"/></div>
        </div>
        <div class="gallery-frame text" style="grid-area: text;">
          <div><label>做最懂你的家居系统</label></div>
          <div><label>we know you as we know ourselves </label></div>
        </div>
        <div class="gallery-frame center-topic" style="grid-area: center-topic;">
          <h1>小济智家</h1>
        </div>
        <div class="gallery-frame icon" style="grid-area: icon;background: #ffffff">
          <div><img src="../assets/img/小济智家.png" alt="logo" draggable="false"/></div>
        </div>
        <div class="gallery-frame left-bottom-1" style="grid-area: left-bottom-1;zoom: 118%" @click="$router.push('/control')">
          <div><img src="../assets/img/lights.png" alt="灯光" draggable="false"/></div>
          <div><img src="../assets/img/air.webp" alt="温度" draggable="false"/></div>
        </div>
        <div class="gallery-frame" style="grid-area: left-bottom-2;">
          <img src="../assets/img/setting.jpg" alt="设置" draggable="false" @click="$router.push('/setting')"/>
        </div>
        <div class="gallery-frame left-bottom-3" style="grid-area: left-bottom-3;" @click="$router.push('/monitor')">
          <div><img src="../assets/img/berry.png" alt="树莓派远程监控" draggable="false"/></div>
          <div><p>树莓派远程监控</p></div>
        </div>
        <div class="gallery-frame" style="grid-area: bottom;">
          <img src="../assets/img/music.png" alt="音乐" draggable="false" @click="$router.push('/music')"/>
        </div>
        <div class="gallery-frame" style="grid-area: right-bottom;">
          <img src="../assets/img/news.jpeg" alt="新闻" draggable="false" @click="$router.push('/news')"/>
        </div>
      </div>

      <div class="apple-style-gallery">
        <div class="gallery-frame left-top" style="grid-area: left-top;">
          <img src="../assets/img/beauty.jpg" alt="化妆" draggable="false" @click="$router.push('/makeup')"/>
        </div>
        <div class="gallery-frame" style="grid-area: top-1">
          <img src="../assets/img/bills.jpg" alt="账单" draggable="false" @click="$router.push('/finance')"/>
        </div>
        <div class="gallery-frame" style="grid-area: top-2;border-radius: 35px">
          <img src="../assets/img/weather.jpg" alt="天气" draggable="false" @click="$router.push('/weather')" />
        </div>
        <div class="gallery-frame right-top" style="grid-area: right-top;">
          <div><img src="../assets/img/movie.jpeg" alt="电影" draggable="false" @click="$router.push('/cinema')"/></div>
          <div><img src="../assets/img/movie2.png" alt="电影" draggable="false" @click="$router.push('/cinema')"/></div>
        </div>
        <div class="gallery-frame text" style="grid-area: text;">
          <div><label>做最懂你的家居系统</label></div>
          <div><label>we know you as we know ourselves </label></div>
        </div>
        <div class="gallery-frame center-topic" style="grid-area: center-topic;">
          <h1>小济智家</h1>
        </div>
        <div class="gallery-frame icon" style="grid-area: icon;background: #ffffff">
          <div><img src="../assets/img/小济智家.png" alt="logo" draggable="false"/></div>
        </div>
        <div class="gallery-frame left-bottom-1" style="grid-area: left-bottom-1;zoom: 118%">
          <div><img src="../assets/img/lights.png" alt="灯光" draggable="false"/></div>
          <div><img src="../assets/img/air.webp" alt="温度" draggable="false"/></div>
        </div>
        <div class="gallery-frame" style="grid-area: left-bottom-2;">
          <img src="../assets/img/setting.jpg" alt="" draggable="false"/>
        </div>
        <div class="gallery-frame left-bottom-3" style="grid-area: left-bottom-3;">
          <div><img src="../assets/img/berry.png" alt="树莓派远程监控" draggable="false"/></div>
          <div><p>树莓派远程监控</p></div>
        </div>
        <div class="gallery-frame" style="grid-area: bottom;">
          <img src="../assets/img/music.png" alt="音乐" draggable="false"/>
        </div>
        <div class="gallery-frame" style="grid-area: right-bottom;">
          <img src="../assets/img/news.jpeg" alt="新闻" draggable="false"/>
        </div>
      </div>
    </div>


    <div id="gallery-left-arrow" class="arrow left">&lt;</div>
    <div id="gallery-right-arrow" class="arrow right">&gt;</div>
  </div>
</template>

<script>
window.onload = function(){
  let counter = 0;
  document.querySelectorAll(".apple-style-gallery").forEach((gallery, index) => {
    gallery.style.left = index*100 + "%";
    ++counter;
  });


  let rate = 0;
  let outterPadding = 80, innerPadding=10;
  document.getElementById("gallery-right-arrow").addEventListener("click", ()=>{
    rate += 1;
    if(rate == counter){
      rate = counter - 1;
      noMoreCallBack("gallery-right-arrow");
    }
    galleryTransformCallBack();
  });

  document.getElementById("gallery-left-arrow").addEventListener("click", ()=>{
    rate -= 1;
    if(rate < 0) {
      rate = 0;
      noMoreCallBack("gallery-left-arrow");
    }
    galleryTransformCallBack();
  });

  // let slideUpdateTimeInterval = 10000;
  // setInterval(()=>{
  //   rate = (rate + 1) % counter;
  //   galleryTransformCallBack();
  // }, slideUpdateTimeInterval);

  function noMoreCallBack(id){
    var arrow = document.getElementById(id);
    arrow.style.animation = "noMoreAnimation 1s";
    arrow.addEventListener("animationend", () => {
      arrow.style.animation = "";
    });
  }

  function galleryTransformCallBack(){
    document.querySelectorAll(".apple-style-gallery").forEach((gallery)=>{
      gallery.style.transform = "translateX(calc("+ rate*-100 +"% - " + (outterPadding*2*rate - innerPadding*2*rate - outterPadding)+ "px))";
    });
  }
};
export default {
  name: "Home",
}
</script>

<style scoped>
.GalleryGroup{
  background-image: url("../assets/img/bg2.jpg");
  background-size: 100% 100%;

}
.gallery-container {
  --gallery-width-block: 8;
  --gallery-height-block: 10;
  --block-width: 144px;
  --block-height: 72px;
  --gallery-border-radius: 20px;

  position: relative;
  color: white;

  width: calc(var(--gallery-width-block)*var(--block-width));
  height: calc(var(--gallery-height-block)*var(--block-height)*0.8);
  margin-left: 5%;
  padding: 80px;
  overflow: hidden;
}

.apple-style-gallery {
  width: inherit;
  height: inherit;
  position: absolute;

  background-color: rgb(0, 0, 0);
  padding: 10px;
  border-radius: calc(1.5*var(--gallery-border-radius));

  top: 80px;
  left: 80px;
  transition: 2s transform ease-in-out;
  transform: translateX(80px);
}

.apple-style-gallery {
  background-color: rgb(0, 0, 0);
  text-align: center;
  display: grid;
  grid-template-areas:
    "  left-top      left-top      left-top        top-1        top-2         top-2       right-top     right-top"
    "  left-top      left-top      left-top        top-1        top-2         top-2       right-top     right-top"
    "  left-top      left-top      left-top        top-1        top-2         top-2       right-top     right-top"
    "  left-top      left-top      left-top        top-1        top-2         top-2       right-top     right-top"
    "    text          text          text      center-topic  center-topic     icon        right-top     right-top"
    "left-bottom-1 left-bottom-3 left-bottom-3 center-topic  center-topic     icon        right-top     right-top"
    "left-bottom-1 left-bottom-3 left-bottom-3    bottom        bottom     right-bottom right-bottom right-bottom"
    "left-bottom-1 left-bottom-3 left-bottom-3    bottom        bottom     right-bottom right-bottom right-bottom"
    "left-bottom-2 left-bottom-3 left-bottom-3    bottom        bottom     right-bottom right-bottom right-bottom"
    "left-bottom-2 left-bottom-3 left-bottom-3    bottom        bottom     right-bottom right-bottom right-bottom";

  grid-template-columns: repeat(8, 2fr);
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 5px;
  justify-content: center;

  box-shadow: 0 20px 40px rgba(0,0,0,0.5);

  transition: 2s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.gallery-frame {
  background-color: rgba(38, 38, 38, 0.9);
  border-radius: var(--gallery-border-radius);
  transition: .8s cubic-bezier(0.2, 0.8, 0.2, 1);
  overflow: hidden;
}
.gallery-frame:hover {
  transform: scale(1.3);
  z-index: 5;
}

.gallery-frame img {
  width: 100%;
  height: 100%;
  object-fit:cover;
  transition: .8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.gallery-frame:hover img {
  transform: scale(1.15);
}

.center-topic {
  background: linear-gradient(125deg, rgb(237,47,106) 0%, rgb(34,162,195) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.center-topic:hover {
  transform: scale(2);
}

.center-topic h1 {
  margin: 0;
  font-size: 2.5em;
  font-weight: 500;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.right-top {
  display: grid;
  overflow: hidden;
  grid-template-rows: repeat(2, auto);
  justify-content: center;
  align-items: center;
}

.right-top div {
  width: 110%;
  height: 95%;
  margin: 0 auto;
  object-fit:cover;
  overflow: hidden;
}

.right-top div img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: var(--gallery-border-radius);
}

.icon {
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}
.icon div {
  border-radius: 50%;
  object-fit:cover;
  overflow: hidden;
  font-size: .5em;

  display: flex;
  align-items: center;
  justify-content: center;
}
.icon div img {
  width: 80px;
  height: 80px;
  object-fit:cover;
  overflow: hidden;
  border-radius: 50%;
}

.text {
  font-size: .5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: .8s cubic-bezier(.2,.8,.2,1);
}
.text div p {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.text label {
  font-size: medium;
  background: linear-gradient(125deg, rgb(237,47,106) 0%, rgb(34,162,195) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.left-bottom-1 {
  display: grid;
  overflow: hidden;
  grid-template-rows: repeat(2, auto);
  align-items: center;
  justify-content: center;
}
.left-bottom-1 div {
  width: 100%;
  height: 100%;
  object-fit:cover;
  overflow: hidden;
  font-size: .5em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left-bottom-1 div img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.left-bottom-1:hover div img {
  transform: scale(1);
}

.left-bottom-3 {
  display: grid;
  overflow: hidden;
  grid-template-rows: 9fr 1fr;
  align-items: center;
  justify-content: center;
}
.left-bottom-3 div {
  width: 100%;
  height: 100%;
  object-fit:cover;
  overflow: hidden;
  font-size: .5em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left-bottom-3 div img {
  width: 90%;
  height: 90%;
  border-radius: 15px;
}
.left-bottom-3 div p {
  margin: 0;
  margin-bottom: 10px;
}


.arrow {
  --arrow-radius: 75px;
  align-self: center;
  justify-self: center;
  background: rgba(0, 0, 0, 0.2);
  min-height: var(--arrow-radius);
  min-width: var(--arrow-radius);
  margin: 10px;
  font-size: 30px;
  line-height: var(--arrow-radius);
  text-align: center;
  color: rgba(255,255,255,0.6);
  border-radius: 50%;
  transition: .8s cubic-bezier(0.2, 0.8, 0.2, 1);
  user-select: none;

  z-index: 99;
  position: absolute;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.4);
  color: rgba(255,255,255,0.8);
  cursor: pointer;
  animation: rubberBandAnimation 1s;
}

.arrow.left {
  top: 50%;
  left: 2%;
}

.arrow.right {
  top: 50%;
  right: 1%;
}

@keyframes rubberBandAnimation {
  0% {
    transform: scale3d(1, 1, 1);
  }
  35% {
    transform: scale3d(1.25, .75, 1);
  }
  45% {
    transform: scale3d(.75, 1, 1);
  }
  60% {
    transform: scale3d(1.2, .8, 1);
  }
  75% {
    transform: scale3d(1.05, .95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes noMoreAnimation {
  0% {
    background: rgba(0, 0, 0, 0.2);
  }
  50% {
    background: #4a54bc;
  }
  100% {
    background: rgba(0, 0, 0, 0.2);
  }
}
</style>
