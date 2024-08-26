<script>
export default {
    props: {
        tv_series_card: Object
    },
    computed: {
        flagCode() {
            const langToFlag = {
                en: 'gb',
                hi: 'in',
                ja: 'jp',
                ko: 'kr',
                zh: 'cn',
            }

            return langToFlag[this.tv_series_card.original_language] || this.tv_series_card.original_language ;
        }
    }
}

</script>

<template>

    <div id="my_col" class="col">
        <div class="content">
            <h1 class="text-danger">Serie TV</h1>
            <h6>Titolo: {{ tv_series_card.name }}</h6>
            <h6>Titolo Originale: {{ tv_series_card.original_name }}</h6>
            <span class="fw-bold me-1">Lingua: {{ tv_series_card.original_language }}</span>
            <span :class="`fi fi-${flagCode}`"></span>
            <h6>Voto: {{ tv_series_card.vote_average }} </h6>
        </div>
    </div>
        
</template>

<style scoped>

    #my_col {

        min-height: 300px;
        max-height: 300px;

        .content {
            min-height: 300px;
        max-height: 300px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 10px;
            background-color: #f9f9f9;
        }
    }

</style>