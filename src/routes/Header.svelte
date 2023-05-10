<script>
	import { page } from '$app/stores';
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

<style lang="scss">
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
</style>