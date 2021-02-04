new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {
    title: "Vuetify CDN Boilerplate",
    drawer: false,
    group: null,
    nightMode: false,
    inpoImg: null,
    brands: [
      {
        id: 0,
        show: false,
        name: "Lil Big Data",
        link: "https://lilbigdata.com",
        type: "Whitty Nerds",
        tagline: "Creators of the internets best placeholder content.",
        logo:
          "https://s3.amazonaws.com/appforest_uf/f1609901761698x711846183611060100/nice.png"
      },
      {
        id: 1,
        show: false,
        name: "Vue",
        link: "https://vuejs.org/",
        type: "Javascript Framework",
        tagline: "The Progressive JavaScript Framework",
        logo:
          "https://s3.amazonaws.com/appforest_uf/f1611777386079x194259606381638200/newvue.png"
      },
      {
        id: 2,
        show: false,
        name: "Vuetify",
        link: "https://vuetifyjs.com/",
        type: "Material Design Framework",
        tagline: "Everything you need to create amazing apps.",
        logo:
          "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark.svg"
      }
    ],
    navigation: [
      {
        id: 0,
        name: "Vue Docs",
        link: "https://vuejs.org/",
        icon: "mdi-vuejs"
      },
      {
        id: 1,
        name: "Vuetify Docs",
        link: "https://vuetifyjs.com/en/",
        icon: "mdi-vuetify"
      },
      {
        id: 2,
        name: "Icon Library",
        link: "https://materialdesignicons.com/",
        icon: "mdi-home"
      },
      {
        id: 3,
        name: "Examples",
        link: "https://vuejsexamples.com/",
        icon: "mdi-information"
      },
      {
        id: 4,
        name: "Tuts",
        link: "https://www.youtube.com/channel/UCa1zuotKU4Weuw_fLRnPv0A",
        icon: "mdi-video"
      },
      {
        id: 5,
        name: "Repo",
        link: "https://github.com/pbrown13/vuetify-cdn-boilerplate",
        icon: "mdi-git"
      },
      {
        id: 6,
        name: "lilBig(Data)",
        link: "https://lilbigdata.com",
        icon: "mdi-rocket"
      }
    ],
    show: false,
    loading: false,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  computed: {
    inspo() {
      return this.inspoImg;
    }
  },
  methods: {
    link(value) {
      window.open(value, "_blank");
    },
    inspire() {
      this.loading = true;
      axios.get("https://inspirobot.me/api?generate=true").then(res => {
        this.inspoImg = res.data;
        this.loading = false;
      });
    }
  },
  created() {
    this.inspire();
  }
});
