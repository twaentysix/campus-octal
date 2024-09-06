<!-- 
The MIT License (MIT)

Copyright (c) 2024 TWÆNTYSIX

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
-->

<script setup>
definePageMeta({
  pageTransition: {
    name: 'layout'
  }
})
</script>

<template>
    <NuxtLayout>
        <div class="wrapper flex justify-center items-center h-svh">
            <div class="max-w-96">
                <div class="flex flex-col gap-2 p-8">
                    <div class="flex w-full justify-center gap-1 items-center py-5">
                        <h1 class="text-2xl tracking-tight text-center font-light uppercase">Campus Oktal</h1>
                    </div>
                    <p class="text-translucent-white-050 text-center">Eine alternative Nutzeroberfläche für alle Studierenden, die Campus Dual nutzen</p>
                    <form class="flex flex-col gap-2">
                        <div class="form-group">
                            <label for="matrikelnummer" class="text-translucent-white-050 text-xs">Matrikelnummer</label>
                            <input type="text" id="matrikelnummer" class="w-full border border-translucent-white-020 bg-translucent-white-005 rounded-xl px-4 py-2 shadow-glow-invisible focus-visible:outline-none focus-visible:border-accent-light focus-visible:shadow-glow transition-all" placeholder="z.B.: 08908909" />
                        </div>
                        <div class="form-group">
                            <label for="matrikelnummer" class="text-translucent-white-050 text-xs">Nutzer-Hash</label>
                            <input type="text" id="matrikelnummer" class="w-full border border-translucent-white-020 bg-translucent-white-005 shadow-glow-invisible rounded-xl px-4 py-2 focus-visible:outline-none focus-visible:border-accent-light focus-visible:shadow-glow transition-all" placeholder="z.B.: 3fa8asdf776asff7asd6as7767s" />
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Anmelden" class="w-full bg-gradient-linear-accent text-dark font-bold border border-accent-light rounded-xl py-2 hover:cursor-pointer hover:bg-white transition-all active:brightness-50 mt-2 hover:shadow-glow">
                            <NuxtLink to="/dashboard" class="w-full bg-gradient-linear-accent text-dark font-bold border border-accent-light rounded-xl py-2 hover:cursor-pointer hover:bg-white transition-all active:brightness-50 mt-2 hover:shadow-glow">Direct to</NuxtLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>