var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    immagini: [
      'https://c4.wallpaperflare.com/wallpaper/691/758/515/sky-coast-body-of-water-sea-wallpaper-preview.jpg',
      'https://c4.wallpaperflare.com/wallpaper/151/242/384/sardinia-alghero-italy-city-clouds-hd-wallpaper-preview.jpg',
      'https://c4.wallpaperflare.com/wallpaper/336/733/268/landscape-coast-city-harbor-wallpaper-preview.jpg',
      'https://c4.wallpaperflare.com/wallpaper/161/296/845/nature-sea-water-turquoise-wallpaper-preview.jpg',
    ],
    intervallo : ''
  },

  // Scorrimento automatico ogni 2 secondi
  created(){
    this.intervallo = setInterval(this.nextImg, 2000);
  },
  
  methods: {
    nextImg(){
      if (this.counter == this.immagini.length - 1) {
        this.counter = 0;
      } else {
        this.counter++;
      }
      console.log(this.counter);
    },

    prevImg(){
      if (this.counter == 0) {
        this.counter = this.immagini.length - 1;
      } else {
        this.counter--;
      }
      console.log(this.counter);
    }
  },
});
