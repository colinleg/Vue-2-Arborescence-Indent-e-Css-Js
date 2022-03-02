<template>
    <div class="sticky">
        <ul id="ul" class="pl-12">
            <li id="n1"
                @click="toggle"

                class="
                fit relative cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
            </li>
            <li id="n2"
                class="p-2 border border-black text-white bg-myBlue-500 rounded
                fit absolute top-0 cursor-pointer opacity-0">
                La banque au vietnam
            </li>
            <li id="n3"
                class="p-2 border border-black text-white bg-myYellow-500 rounded
                fit absolute top-0 cursor-pointer opacity-0">
                Quelle banque est fiable au vietnam ?
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'test1',
        data(){
            return {
                show: false
            }
        },
        methods: {
            toggle(){

                this.show == false ? this.display() : this.hide()
                this.show = !this.show
            },
            display(){
                let n2 = document.querySelector('#n2')
                n2.classList.remove('absolute', 'top-0', 'opacity-0')
                n2.style.transform = 'translateY(1rem) translateX(4rem)'

                let n3 = document.querySelector('#n3')
                n3.classList.remove('absolute', 'top-0', 'opacity-0')
                n3.style.transform = 'translateY(2rem) translateX(8rem)'
            },
            hide(){
                let n2 = document.querySelector('#n2')
                let n3 = document.querySelector('#n3')
                n3.style.transform = 'translateY(0) translateX(0)'
                n2.style.transform = 'translateY(0) translateX(0)'
                n2.classList.add('absolute', 'top-0', 'opacity-0')
                n3.classList.add('absolute', 'top-0', 'opacity-0')

            }
        },
        mounted(){

        }
    }
</script>

<style lang="css" scoped>
.fit{
    width: fit-content;
}
#n1{
    position: relative;
    z-index: 1;
}
#n2 {
    transition: all .8s ease-in;
    z-index: 0;
}
#n3 {
    transition: all .8s ease-in;
    z-index: 0;
}
</style>