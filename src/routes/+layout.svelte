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
    <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="newkinidev" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
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
