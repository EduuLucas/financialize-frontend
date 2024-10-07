<div class="div-root">
  <nav class="nav-root">
    <a href="/">home</a>
    <a href="/cards">cards</a>
    <a href="/transactions">transactions</a>
  </nav>
  <slot></slot>
</div>

<style>
  .div-root {
    background-color: blue;
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 100%;
    padding: 10px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
  }
  .nav-root {
    background-color: red;
    display: flex;
    flex-direction: column;
    width: 15%;
  }
</style>
