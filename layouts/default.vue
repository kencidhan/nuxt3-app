<template>
    <div class="box preview border-base-300 bg-base-200">
        <div><Navbar /></div>
        <div><button @click="useRouter().back()">뒤로</button></div>
        <div class="flex justify-center mt-8 mb-8 h-full">
            <slot />
            <div class="w-96 h-96 ml-8 bg-base-100">
                <div class=""><NuxtLink to="/">HOME</NuxtLink></div>
            </div>
        </div>
    </div>
</template>