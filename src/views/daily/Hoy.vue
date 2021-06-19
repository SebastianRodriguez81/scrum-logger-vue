<template>
  <div class="w-full xl:w-82 md:w-87 lg:w-90">
    <LogBox />
    <LogOut />
  </div>
</template>

<script>
import LogBox from "../../modules/daily/components/LogBox.vue"
import LogOut from "../../components/Logout.vue"


export default {
  components: {
    LogBox,
    LogOut
  },
};
</script>