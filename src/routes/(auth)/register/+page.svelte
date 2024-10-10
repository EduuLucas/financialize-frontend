<script>
  import Button from "../../../components/button/Button.svelte";
  import Input from "../../../components/input/Input.svelte";
</script>

<div class="div-root">
  <div class="div-form">
    <form action="?/register" method="POST">
      <h1>Cadastro</h1>
      <div>
        <Input name="name" type="name" required placeholder="Nome" />
      </div>
      <div>
        <Input name="cpf" type="text" required placeholder="CPF" />
      </div>
      <div>
        <Input name="email" type="email" required placeholder="Email" />
      </div>
      <div>
        <Input name="password" type="password" required placeholder="Senha" />
      </div>
      <Button type="submit">Cadastrar</Button>
      <div class="div-register">
        Já sem conta? <a href="/login">Entrar</a>
      </div>
    </form>
  </div>
</div>

<style>
  h1 {
    text-align: center;
    margin-top: 0px;
  }
  .div-root {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0b0b0b;
    width: 100%;
    height: 100%;
  }

  .div-form {
    padding: 30px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    background-color: white;
  }

  .div-register {
    margin-top: 10px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: blue;
  }
</style>
