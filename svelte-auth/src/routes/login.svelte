<script>
  import { goto } from "@sapper/app.mjs";

  let email = "",
    password = "";

  const submit = async () => {
    await fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    await goto("/");
  };
</script>

<form on:submit|preventDefault={submit}>
  <h1 class="h3 mb-3 fw-normal">Please Sign in</h1>

  <input
    bind:value={email}
    type="email"
    class="form-control"
    placeholder="Email"
    required
  />

  <input
    bind:value={password}
    type="password"
    class="form-control"
    placeholder="Password"
    required
  />

  <button class="w-100 btn btn-lg btn-success" type="submit">Sign in</button>
</form>
