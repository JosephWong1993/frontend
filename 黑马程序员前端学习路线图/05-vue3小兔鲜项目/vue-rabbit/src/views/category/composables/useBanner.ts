import { onMounted, ref } from "vue";
import { getBannerApi } from "@/apis/home";

// 封装banner轮播图相关的业务代码
export function useBanner() {
    const bannerList = ref([] as any[]);
    const getBanner = async () => {
        const res = await getBannerApi({
            distributionSite: '2'
        }) as any;
        bannerList.value = res.result;
    };

    onMounted(() => getBanner());
    return {
        bannerList
    }
}