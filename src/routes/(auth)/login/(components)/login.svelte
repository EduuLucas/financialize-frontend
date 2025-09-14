<script>
    import Button from "../../../../components/button/Button.svelte";
    import Input from "../../../../components/input/Input.svelte";
</script>

<form action="?/login" method="POST" class="flex flex-2 flex-col w-full max-w-xs h-full gap-5">
    <h1 class="text-white text-4xl">Login</h1>
    <div class="flex flex-col gap-1">
        <Input name="cpf" type="text" required placeholder="CPF" />
        <Input name="password" type="password" required placeholder="Senha" />
    </div>
    <Button type="submit">Entrar</Button>
    <div>
        ainda sem conta? <a
            href="/register"
            class="text-blue-400 cursor-pointer hover:text-blue-500">registre-se</a
        >
    </div>
</form>
