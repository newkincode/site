<script>
	import Header from './Header.svelte'
	import './styles.css';
	import { onMount } from 'svelte';

    onMount(() => {
        let mouseOut = document.getElementById('mouse-out');

        document.addEventListener('mousemove', (e) => {
        mouseOut.style.left = mouseOut.style.left = `${e.clientX}px`;
        mouseOut.style.top = mouseOut.style.top = `${e.clientY}px`;
        });
    });
</script>

<svelte:head>
    <script src='https://cdn.jsdelivr.net/npm/@widgetbot/crate@3' async defer>
        new Crate({
            server: '1111933622543470643', // newkini`s project
            channel: '1125051062240419901' // #chat
        })
    </script>
</svelte:head>

<Header />

<div id="mouse-out"></div>


<slot />

<style>
    #mouse-out {
        z-index: 1;
        backdrop-filter: invert(1);
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transition: all 500ms cubic-bezier(0.030, 0.425, 0.080, 0.975);
    }
</style>
