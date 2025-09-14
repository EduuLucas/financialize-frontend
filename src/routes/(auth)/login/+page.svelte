<script>
    import { Logo } from "$lib";
    import Button from "../../../components/button/Button.svelte";
    import Input from "../../../components/input/Input.svelte";
    import Login from "./(components)/login.svelte";
</script>

<div class="w-full h-full flex flex-row">
    <div class="bg-black p-10 flex-1 text-white flex flex-col justify-between items-center">
        <div class="w-full h-full flex flex-1 justify-center items-center ">
            <img src={Logo} alt="logo" class="w-fit h-fit"/>
        </div>
        <Login/>
    </div>
    <div class="bg-white p-4 hidden md:flex md:flex-2">
        
    </div>
</div>
