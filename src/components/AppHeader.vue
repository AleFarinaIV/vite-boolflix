<script>
import {store} from "../store.js"
export default {
methods: {
    searchMoviesAndSeries(input) {
        this.$emit('searchMoviesAndSeries', input)
    },
    searchbarOnClick() {
        this.isSearchbarVisible = true;
        this.$nextTick(() => {
            this.$refs.searchInput.focus();
        });
    },
    hideSearchbar() {
        this.isSearchbarVisible = false
        store.user_input = ''  // resetto il testo nella input
    }
},
data() {
    return {
        store,
        isSearchbarVisible: false,
    }
}
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <img class="size" src="../assets/logo-netflix.jpg" alt="">
                    <ul class="list-unstyled d-flex ms-3 text-white m-0">
                        <li>Home</li>
                        <li>Serie TV</li>
                        <li>Film</li>
                        <li>Originali</li>
                        <li>Aggiunti di recente</li>
                        <li>La mia lista</li>
                    </ul>

                </div>
                <div>
                    <!-- devo creare una input con button per cercare i film -->
                    <i class="bi bi-search text-white me-2" @click="searchbarOnClick" v-if="!isSearchbarVisible"></i>
                    <div v-if="isSearchbarVisible" @blur="hideSearchbar" class="d-inline-flex">

                        <input @keyup.enter="searchMoviesAndSeries(store.user_input)" type="text" 
                        v-model="store.user_input" @blur="hideSearchbar" 
                        placeholder="Cerca un film..." ref="searchInput" >
                        <button @click="searchMoviesAndSeries(store.user_input)">Cerca</button>

                    </div>
                </div>
            </div>

            
        </div>
    </div>

</template>

<style scoped>

    img {
        width: 100px;
    }

    ul {
        li {
            margin-right: 10px;
            font-size: 14px;
            cursor: pointer;
        }
    }

    i {
        cursor: pointer;
    }

</style>
