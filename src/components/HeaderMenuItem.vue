<script>
import { menu } from "../data/headerMenuData.js"

export default {
    data() {
        return {
            menu
        }
    },
    props: {
        label: {
        type: String,
      },
      url: {
        type: String,
      },
      active: {
        type: Boolean,
      },
    }
}

</script>

<template>

    <li>
        <a :href="url" :class="{ 'active': active }"> {{ label }} </a>
    </li>

</template>

<style scoped>
    
    li {
        margin: 0 15px;
        font-size: 12px;

        a {
          color: grey;
          text-decoration: none;
          transition: color 0.3s ease;
          &:hover {
            color: rgb(0, 110, 255);
          }
        }

        .active {
          color: white;
        }
    }

</style>