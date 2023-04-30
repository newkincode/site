
<script>
	import { page } from '$app/stores';

    const circles = document.querySelectorAll(".cus");

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    circles.forEach((circle) => {
        circle.style.left = mouseX + 'px';
        circle.style.top = mouseY + 'px';
    });
</script>

<div>
    <nav>
        <ul>
            <li>
                <h3>newkini</h3>
            </li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <a href="/">Home</a>
            </li>
            <li aria-current={$page.url.pathname === '/makegame' ? 'page' : undefined}>
                <a href="/makegame">MakeGame</a>
            </li>
        </ul>
    </nav>
</div>
<div id="cus">
</div>

<style>
    ul{
        display: flex;
        height: 10px;
        width: 100%;
    }
    li{
        list-style-type: none;
        float: left;
        margin-left: 10px;
    }
    li h3{
        margin-top: 0px;
    }
    #cus{
        position: absolute;
        top: 0;
        left: 0;
        width: 150px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        filter: invert(100%);
        background-blend-mode: color-dodge;
    }
</style>