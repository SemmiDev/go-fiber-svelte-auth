<script>
  import { authenticated } from "../stores/auth";
  import { goto } from "@sapper/app.mjs";

  let auth = false;

  authenticated.subscribe((a) => (auth = a));

  const logout = async () => {
    await fetch("http://localhost:8080/api/v1/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    await goto("/login");
  };
</script>

<nav class="navbar navbar-expand-lg navbar-light navbar-laravel">
  <div class="container">
    <a class="navbar-brand" href="/">Home</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        {#if auth}
          <li class="nav-item">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a class="nav-link" href="#" on:click={logout}>Logout</a>
          </li>
        {:else}
          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register">Register</a>
          </li>
        {/if}
      </ul>
    </div>
  </div>
</nav>
