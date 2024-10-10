<script>
  import Button from "./Button.svelte";
  import FaCreditCard from "svelte-icons/fa/FaCreditCard.svelte";
  import MdDashboard from "svelte-icons/md/MdDashboard.svelte";
  import FaUser from "svelte-icons/fa/FaUser.svelte";
  import image from "$lib/favicon.png";
</script>

<div>
  <nav class="navbar-root">
    <img class="profile-picture" src={image} alt="profile_picture" />
    <Button linkTo="/"><MdDashboard /></Button>
    <Button linkTo="/login"><FaCreditCard /></Button>
    <Button linkTo="/register"><FaUser /></Button>
  </nav>
</div>

<style>
  .profile-picture {
    width: 5vh;
    height: 5vh;
    margin-bottom: 50px;
  }
  .navbar-root {
    background-color: #0b0b0b;
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 10vh;
    min-width: 10vh;
    height: 100%;
    align-items: center;
  }
</style>
