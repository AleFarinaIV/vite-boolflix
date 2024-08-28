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
        margin: 0 5px;
        font-size: 12px;

        a {
          color: grey;
          text-decoration: none;
          transition: color 0.3s ease;
          &:hover {
            color: white;
          }
        }

        .active {
          color: white;
        }
    }

</style>