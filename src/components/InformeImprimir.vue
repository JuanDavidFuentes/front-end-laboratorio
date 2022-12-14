<template>
    <v-container fluid>
  
    </v-container>
</template>

<script>
export default {
    name: "PaginaImprimir",
    data: () => ({

    }),
    methods: {

    },
}
</script>

<style>
#coti2 {
    display: inline-block;
    width: 180px;
    height: 180px;
}

@supports (-webkit-mask: url("")) or (mask: url("")) {
    #coti2 {
        -webkit-mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask-size: cover;
    }
}

#text-dark {
    color: black !important;
}
</style>