<script>
  import { onMount } from "svelte";
  import { authenticated } from "../stores/auth";

  let message = "";

  onMount(async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json();

      message = `hey ${content.name}`;
      authenticated.set(true);
    } catch (e) {
      message = "you are not logged in";
      authenticated.set(false);
    }
  });
</script>

{message}
