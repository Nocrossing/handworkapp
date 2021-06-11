import BackTop from "components/content/backTop/BackTop.vue"
import { debounce } from "common/ueils";

//图片列表刷新
export const imgRefreshMixin = {
  mounted() {
    //请求数据列表后刷新
    this.itemImgLister = () => {
      this.$refs.scroll.refresh()
    }
    const refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on('itemImageLoad', this.itemImgLister)
  }
}

//返回顶部
export const scrollTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}