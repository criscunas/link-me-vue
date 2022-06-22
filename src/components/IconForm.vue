<template>
    <div class="py-8 tablet:py-10">

        <h1 class="main-text text-black" >Select a platform.</h1>
        <div class="image-div mt-4">
            <div>
                <img @click="addSrc('twitter')" class="form-img" src="../../public/images/twitter2.svg" />
            </div>
            <div>
                <img @click="addSrc('github')" class="form-img" src="../../public/images/github2.svg" />
            </div>
            <div>
                <img @click="addSrc('twitch')" class="form-img" src="../../public/images/twitch.svg" />
            </div>
            <div>
                <img @click="addSrc('instagram')" class="form-img" src="../../public/images/instagram.svg" />
            </div>
        </div>

        <div class="image-div">
            <div>
                <img @click="addSrc('snapchat')" class="form-img" src="../../public/images/snapchat.svg" />
            </div>
            <div>
                <img @click="addSrc('youtube')" class="form-img" src="../../public/images/youtube.svg" />
            </div>
            <div>
                <img @click="addSrc('spotify')" class="form-img" src="../../public/images/spotify.svg" />
            </div>
            <div>
                <img @click="addSrc('soundcloud')" class="form-img" src="../../public/images/soundcloud.svg" />
            </div>
        </div>

        <div class="image-div">
            <div>
                <img @click="addSrc('discord')" class="form-img" src="../../public/images/discord.svg" />
            </div>
            <div>
                <img @click="addSrc('tumblr')" class="form-img" src="../../public/images/tumblr.svg" />
            </div>
            <div>
                <img @click="addSrc('shopify')" class="form-img" src="../../public/images/shopify.svg" />
            </div>
            <div>
                <img @click="addSrc('linkedIn')" class="form-img" src="../../public/images/linkedin.svg" />
            </div>
        </div>

        <div>
            <p class="dashboard-body">Enter link for <span class="font-semibold capitalize"> {{ values.site }} </span> </p>
            <FormKit type="text" v-model="values.url" placeholder="www.yourlinkhere.com" :classes="{
                inner: 'form-inner',
                input: 'form-input'
            }" />
            <p class="dashboard-body mt-4">Enter Caption</p>
            <FormKit type="text" v-model="values.caption" placeholder="Link Caption" :classes="{
                inner: 'form-inner',
                input: 'form-input'
            }" />

            <div class="text-right">
                <button class="form-btn mt-2" @click="submitForm" :disabled="links.length === 6">
                    Submit
                </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    props: {
        links: Object,
    },

    data() {
        return {
            values: {
                url: '',
                site: 'twitter',
                caption: '',
            }
        }
    },

    emits: ['submit'],

    methods: {

        addSrc(site) {
            this.values.site = site
        },

        submitForm() {

            let data;

            data = {
                url: this.values.url,
                site: this.values.site,
                caption: this.values.caption
            }

            this.values.url = ""
            this.values.site = ""
            this.values.caption = ""

            this.$emit('submit', data)
        }
    }
}
</script>


<style>
.form-img {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
}

.image-div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
}

@media only screen and (min-width:768px) {
    .image-div {
        gap: 1.5rem;
    }
}
</style>
