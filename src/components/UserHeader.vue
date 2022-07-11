<template>
    <header class="bg-[#011627]">
        <nav class="p-4 px-8 flex flex-row justify-between items-center">
            <h1 class="header-text text-white"> link.me </h1>
            <div>
                <p
                    @click="logOut"
                    class="text-white text-lg cursor-pointer"
                >
                    Logout
                </p>
            </div>
        </nav>
    </header>
</template>


<script>


export default {

    methods: {
        logOut() {
            this.$cookies.remove("auth")
            this.$router.push('/')
        }
    },

}
</script>
